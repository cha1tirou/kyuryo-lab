#!/usr/bin/env node
/**
 * kyuryo-lab Daily Agent
 *
 * 毎日実行して「今日やるべき3〜5タスク」を自律的に提案・実行する。
 *
 * 使い方:
 *   node scripts/daily-agent.mjs              # フル実行
 *   node scripts/daily-agent.mjs --dry-run    # タスク提案のみ（実行しない）
 *   node scripts/daily-agent.mjs --task N     # タスクN番だけ実行
 *
 * 必要環境変数:
 *   ANTHROPIC_API_KEY
 *   GSC_CLIENT_EMAIL  (任意: あればリアルデータを使う)
 *   GSC_PRIVATE_KEY   (任意)
 *   GSC_SITE_URL      (任意: デフォルト https://kyuryo-lab.com/)
 *   LINE_TOKEN        (任意: あれば実行結果をLINEに送る)
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

// .env.local を自動読み込み（node直接実行時にも動く）
const __envPath = new URL("../.env.local", import.meta.url).pathname;
if (fs.existsSync(__envPath)) {
  const envContent = fs.readFileSync(__envPath, "utf8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx < 0) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = val;
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const LOGS_DIR = path.join(ROOT, "scripts", "logs");
const KEYWORDS_FILE = path.join(ROOT, "scripts", "keywords.json");

// ============================================================
// 状態収集：サイトの現状を把握する
// ============================================================
async function collectState() {
  const state = {
    date: new Date().toISOString().split("T")[0],
    pages: [],
    queries: [],
    keywordsPending: 0,
    keywordsDone: 0,
    recentReports: [],
    guidePageCount: 0,
    affiliateLinks: {},
  };

  // keywords.json の状況
  if (fs.existsSync(KEYWORDS_FILE)) {
    const kws = JSON.parse(fs.readFileSync(KEYWORDS_FILE, "utf8"));
    state.keywordsPending = kws.filter(k => !k.done).length;
    state.keywordsDone = kws.filter(k => k.done).length;
  }

  // guideページ数
  const guideDir = path.join(ROOT, "app", "guide");
  if (fs.existsSync(guideDir)) {
    state.guidePageCount = fs.readdirSync(guideDir).filter(d =>
      fs.statSync(path.join(guideDir, d)).isDirectory()
    ).length;
  }

  // 直近のレポート
  const logsDir = path.join(ROOT, "scripts", "reports");
  if (fs.existsSync(logsDir)) {
    const reports = fs.readdirSync(logsDir)
      .filter(f => f.endsWith(".json"))
      .sort().reverse().slice(0, 3);
    for (const r of reports) {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(logsDir, r), "utf8"));
        state.recentReports.push({
          date: data.date,
          clicks: data.analysis?.metrics?.totalClicks ?? 0,
          impressions: data.analysis?.metrics?.totalImpressions ?? 0,
          avgPosition: data.analysis?.metrics?.avgPosition ?? 0,
        });
      } catch {}
    }
  }

  // アフィリエイトリンク状況（lib/affiliates.tsから読み取り）
  const affPath = path.join(ROOT, "lib", "affiliates.ts");
  if (fs.existsSync(affPath)) {
    const affContent = fs.readFileSync(affPath, "utf8");
    state.affiliateLinks = {
      abiaceApproved: !affContent.includes("abias-law.com"),
      miyabiApproved: affContent.includes("ck.valuecommerce.ne.jp"),
      exitApproved: !affContent.includes("exit.co.jp"),
      todoCount: (affContent.match(/\/\/ TODO/g) || []).length,
    };
  }

  // GSCデータ（利用可能なら）
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKeyRaw = process.env.GSC_PRIVATE_KEY;
  if (clientEmail && privateKeyRaw) {
    try {
      const privateKey = privateKeyRaw.replace(/\\n/g, "\n");
      const token = await getAccessToken(clientEmail, privateKey);
      const siteUrl = process.env.GSC_SITE_URL || "https://kyuryo-lab.com/";
      const data = await fetchGSCData(token, siteUrl);
      state.pages = data.pages.slice(0, 20);
      state.queries = data.queries.slice(0, 30);
      state.hasGSC = true;
    } catch (e) {
      state.hasGSC = false;
      state.gscError = e.message;
    }
  } else {
    state.hasGSC = false;
  }

  return state;
}

// ============================================================
// GSC API（analyze-and-improve.mjsと同じ実装）
// ============================================================
async function getAccessToken(clientEmail, privateKey) {
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
  const unsigned = `${encode(header)}.${encode(payload)}`;
  const { createSign } = await import("crypto");
  const sign = createSign("RSA-SHA256");
  sign.update(unsigned);
  const sig = sign.sign(privateKey, "base64url");
  const jwt = `${unsigned}.${sig}`;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(JSON.stringify(data));
  return data.access_token;
}

async function fetchGSCData(token, siteUrl) {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 28);
  const fmt = d => d.toISOString().split("T")[0];
  const call = async (dimensions) => {
    const r = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ startDate: fmt(start), endDate: fmt(end), dimensions, rowLimit: 50,
          orderBy: [{ fieldName: "impressions", sortOrder: "DESCENDING" }] }),
      }
    );
    return (await r.json()).rows || [];
  };
  return { pages: await call(["page"]), queries: await call(["query"]) };
}

// ============================================================
// Claudeにタスクを提案させる
// ============================================================
async function proposeTasksWithClaude(state) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY が設定されていません。.env.local に追加してください。");
  }

  const prompt = `あなたはkyuryo-lab（給料ラボ）のグロースエンジニアです。
今日やるべき改善タスクを3〜5件提案・実行してください。

## サイト現状（${state.date}）

- guideページ数: ${state.guidePageCount}ページ
- 未処理キーワード: ${state.keywordsPending}件 / 完了済み: ${state.keywordsDone}件
- アフィリエイトリンク TODO数: ${state.affiliateLinks.todoCount ?? "不明"}件
- みやび退職代行リンク: ${state.affiliateLinks.miyabiApproved ? "✅ 本番反映済み" : "❌ 未設定"}
- アビエス弁護士リンク: ${state.affiliateLinks.abiaceApproved ? "✅ 設定済み" : "⏳ 審査中（TODO）"}

${state.hasGSC ? `## GSCデータ（直近28日）
ページ別（上位10件）:
${JSON.stringify(state.pages.slice(0, 10), null, 2)}

クエリ別（上位15件）:
${JSON.stringify(state.queries.slice(0, 15), null, 2)}` : "## GSCデータ: なし（APIキー未設定）"}

${state.recentReports.length > 0 ? `## 直近レポート
${state.recentReports.map(r => `${r.date}: clicks=${r.clicks}, impressions=${r.impressions}, avgPos=${r.avgPosition?.toFixed(1)}`).join("\n")}` : ""}

## サイト構成（Next.js 14 App Router）

ファイルパスのルール（必ずこの形式を使うこと）:
- トップ（残業代計算）: app/page.tsx
- 手取り計算: app/kyuryo/tetsuke/page.tsx
- 時給計算: app/kyuryo/jikyu/page.tsx
- 営業日計算: app/eigyobi/page.tsx
- 工数計算: app/koji/page.tsx
- guideページ: app/guide/[slug]/page.tsx
- アフィリエイト設定: lib/affiliates.ts

**重要: Astro/src/pages 形式は一切使わない。必ず app/ ディレクトリを使うこと。**

## タスク種別と実装方法

実行可能なタスク種別:
1. **generate_article**: keywords.jsonの未処理キーワードから記事1本生成・push
2. **add_keyword**: 新しいキーワードをkeywords.jsonに追加
3. **update_meta**: 特定ページのtitle/descriptionを更新（filePath は必ず app/ から始まる）
4. **add_internal_link**: ページ間の内部リンクを追加
5. **update_cta_copy**: CTAのテキスト・デザインを改善
6. **create_guide_page**: 新規guideページを一から作成（記事生成と別）
7. **report_only**: 分析・提案のみ（コード変更なし）

## 判断基準
- アビエスのリンクがTODOならそれを修正（承認確認）するタスクを入れる
- 未処理キーワードが多いなら記事生成を優先
- GSCデータがあれば低CTR・高インプレッションのページ改善を優先
- 記事生成は「必要なとき」だけ提案する。具体的には:
  * 未処理キーワードが5件以上 → 1〜2本生成
  * 未処理キーワードが1〜4件 → 状況次第（他のタスクが優先なら不要）
  * 未処理キーワードが0件 → 新規キーワードを先に追加してから次回生成
  * GSCで上位表示が始まっているページがあれば、記事より内部リンク強化を優先する

必ずJSONのみを返してください:
{
  "summary": "今日の状況サマリー（2文）",
  "tasks": [
    {
      "id": 1,
      "type": "generate_article" | "add_keyword" | "update_meta" | "add_internal_link" | "update_cta_copy" | "create_guide_page" | "report_only",
      "title": "タスクのタイトル",
      "description": "何をするか（1〜2文）",
      "reason": "なぜ今日やるべきか",
      "priority": 1-5,
      "auto": true | false,
      "params": {
        // タスク種別ごとのパラメータ
        // generate_article: { slug?, keyword? } → 省略時はkeywords.jsonの先頭
        // add_keyword: { slug, keyword, title, affiliate, description }
        // update_meta: { filePath, newTitle, newDescription }
        // update_cta_copy: { description_of_change }
        // report_only: {}
      }
    }
  ]
}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 3000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Claude API Error ${res.status}: ${errText.slice(0, 200)}`);
  }
  const data = await res.json();
  if (!data.content?.[0]?.text) {
    throw new Error("APIレスポンス不正: " + JSON.stringify(data).slice(0, 300));
  }
  const text = data.content[0].text;
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("JSONが見つかりません: " + text.slice(0, 300));
  return JSON.parse(jsonMatch[0]);
}

// ============================================================
// タスクを実行する
// ============================================================
async function executeTask(task) {
  console.log(`\n  ▶ [T${task.id}] ${task.title}`);
  console.log(`    ${task.description}`);

  switch (task.type) {
    case "generate_article":
      return executeGenerateArticle(task);
    case "add_keyword":
      return executeAddKeyword(task);
    case "update_meta":
      return executeUpdateMeta(task);
    case "update_cta_copy":
      return executeUpdateCTA(task);
    case "add_internal_link":
      return executeAddInternalLink(task);
    case "report_only":
      console.log("    ℹ️ レポートタスク（コード変更なし）");
      return { success: true, message: "レポートのみ" };
    default:
      console.log(`    ⏭ 未対応タイプ: ${task.type}（手動対応）`);
      return { success: false, message: "手動対応が必要" };
  }
}

async function executeGenerateArticle(task) {
  try {
    const args = task.params?.keyword
      ? `--keyword "${task.params.keyword}"`
      : "";
    execSync(`node ${path.join(ROOT, "scripts", "generate-article.mjs")} ${args}`, {
      stdio: "inherit",
      env: process.env,
      cwd: ROOT,
    });
    return { success: true, message: "記事生成・push完了" };
  } catch (e) {
    return { success: false, message: e.message.slice(0, 200) };
  }
}

async function executeAddKeyword(task) {
  const p = task.params;
  if (!p?.slug || !p?.keyword) return { success: false, message: "slug/keywordが必要" };

  const kws = fs.existsSync(KEYWORDS_FILE)
    ? JSON.parse(fs.readFileSync(KEYWORDS_FILE, "utf8"))
    : [];

  if (kws.find(k => k.slug === p.slug)) {
    return { success: false, message: `${p.slug} は既に存在` };
  }

  kws.push({
    slug: p.slug,
    keyword: p.keyword,
    title: p.title || p.keyword,
    description: p.description || "",
    affiliate: p.affiliate || "bengoshi",
    done: false,
    source: "daily_agent",
  });

  fs.writeFileSync(KEYWORDS_FILE, JSON.stringify(kws, null, 2));
  console.log(`    ✅ keywords.json に追加: ${p.keyword}`);
  return { success: true, message: `${p.keyword} を追加` };
}

async function executeUpdateMeta(task) {
  const { filePath, newTitle, newDescription } = task.params || {};
  if (!filePath) return { success: false, message: "filePathが必要" };

  const fullPath = path.join(ROOT, filePath);
  if (!fs.existsSync(fullPath)) return { success: false, message: `${filePath} が見つかりません` };

  let content = fs.readFileSync(fullPath, "utf8");
  let changed = false;

  if (newTitle) {
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (titleMatch) {
      content = content.replace(titleMatch[0], `title: "${newTitle}"`);
      changed = true;
    }
  }
  if (newDescription) {
    const descMatch = content.match(/description:\s*["']([^"']+)["']/);
    if (descMatch) {
      content = content.replace(descMatch[0], `description: "${newDescription}"`);
      changed = true;
    }
  }

  if (!changed) return { success: false, message: "変更箇所が見つかりません" };

  fs.writeFileSync(fullPath, content);
  console.log(`    ✅ metadata更新: ${filePath}`);
  return { success: true, message: `metadata更新: ${filePath}` };
}

async function executeUpdateCTA(task) {
  // CTAコピーはClaude APIでaffiliates.tsを改善
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const affPath = path.join(ROOT, "lib", "affiliates.ts");
  const content = fs.readFileSync(affPath, "utf8");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 3000,
      messages: [{
        role: "user",
        content: `以下のlib/affiliates.tsのCTAコピーを改善してください。

改善指示: ${task.params?.description_of_change || "転換率が上がるよう全体的にコピーを見直す"}

現在のコード:
${content}

改善したコード全体を返してください。コードのみ（説明文不要）。`,
      }],
    }),
  });

  const data = await res.json();
  const newContent = data.content[0].text.replace(/```typescript\n?|```\n?/g, "").trim();
  fs.writeFileSync(affPath, newContent);
  console.log("    ✅ affiliates.tsのCTAコピー更新完了");
  return { success: true, message: "CTA改善完了" };
}

async function executeAddInternalLink(task) {
  console.log(`    📎 内部リンク追加: ${task.description}`);
  console.log("    ⏭ 内部リンク追加は次回の実装対象");
  return { success: false, message: "手動対応（次回実装予定）" };
}

// ============================================================
// git pushとVercelデプロイ
// ============================================================
function commitAndPush(message) {
  try {
    const status = execSync(`cd ${ROOT} && git status --short`, { encoding: "utf8" });
    if (!status.trim()) {
      console.log("\n  ⏭ 変更なし、git pushはスキップ");
      return false;
    }
    execSync(`cd ${ROOT} && git add -A`, { stdio: "pipe" });
    execSync(`cd ${ROOT} && git commit -m "${message}"`, { stdio: "pipe" });
    execSync(`cd ${ROOT} && git push origin main`, { stdio: "inherit" });
    console.log("  🚀 デプロイ完了!");
    return true;
  } catch (e) {
    console.error("  ❌ git push失敗:", e.message.slice(0, 200));
    return false;
  }
}

// ============================================================
// LINEに通知（LINE_TOKENがあれば）
// ============================================================
async function notifyLINE(message) {
  const token = process.env.LINE_TOKEN;
  if (!token) return;

  try {
    await fetch("https://notify-api.line.me/api/notify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `message=${encodeURIComponent(message)}`,
    });
    console.log("  📱 LINE通知送信済み");
  } catch (e) {
    console.error("  LINE通知失敗:", e.message);
  }
}

// ============================================================
// ログ保存
// ============================================================
function saveLog(result) {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
  const date = new Date().toISOString().split("T")[0];
  const logPath = path.join(LOGS_DIR, `daily-${date}.json`);
  fs.writeFileSync(logPath, JSON.stringify(result, null, 2));
  console.log(`\n  📄 ログ保存: scripts/logs/daily-${date}.json`);
}

// ============================================================
// 進捗ドキュメント更新 (PROGRESS.md)
// ============================================================
function updateProgressDoc(result) {
  const docPath = path.join(ROOT, "PROGRESS.md");
  const date = result.date;
  const tasks = result.executed || [];
  const plan = result.plan || {};

  // GSC指標（stateから直接取る）
  const gsc = result.gscState || {};
  const gscPages = gsc.pages || [];
  const gscQueries = gsc.queries || [];
  const hasGSC = gsc.hasGSC || false;
  let metricsLine;
  if (hasGSC && gscPages.length > 0) {
    const totalClicks = gscPages.reduce((s, p) => s + (p.clicks || 0), 0);
    const totalImpressions = gscPages.reduce((s, p) => s + (p.impressions || 0), 0);
    const avgCTR = totalImpressions > 0 ? totalClicks / totalImpressions : 0;
    const positions = gscPages.filter(p => p.position > 0).map(p => p.position);
    const avgPos = positions.length > 0 ? positions.reduce((a, b) => a + b, 0) / positions.length : 0;
    metricsLine = `| クリック | ${totalClicks} |\n| 表示回数 | ${totalImpressions} |\n| 平均CTR | ${(avgCTR * 100).toFixed(2)}% |\n| 平均順位 | ${avgPos.toFixed(1)} |\n| 検出ページ | ${gscPages.length}件 |\n| 検出クエリ | ${gscQueries.length}件 |`;
  } else {
    metricsLine = `| GSCデータ | APIキー未設定 |`;
  }

  // タスク一覧
  const taskRows = (plan.tasks || []).map(t => {
    const executed = tasks.find(e => e.task?.id === t.id || e.task?.title === t.title);
    const status = result.dryRun
      ? "⏭ dry-run"
      : executed
        ? executed.result?.success ? "✅ 完了" : "❌ 失敗"
        : t.auto === false ? "👤 手動対応" : "⏭ スキップ";
    const autoLabel = t.auto !== false ? "自動" : "手動";
    return `| ${t.id} | ${autoLabel} | P${t.priority} | ${t.title} | ${status} |`;
  }).join("\n");

  // 完了数サマリ
  const done = tasks.filter(e => e.result?.success).length;
  const total = (plan.tasks || []).length;

  // 新エントリ
  const entry = `
## ${date}

**サマリ:** ${plan.summary || "—"}
**完了:** ${result.dryRun ? "dry-runのため実行なし" : `${done} / ${total} タスク | ${result.elapsed || 0}秒`}

### GSC指標（直近28日）
| 指標 | 値 |
|---|---|
${metricsLine}

### タスク一覧
| # | 種別 | 優先度 | タスク | 結果 |
|---|---|---|---|---|
${taskRows || "| — | — | — | タスクなし | — |"}

---`;

  // 既存ファイルの先頭（ヘッダーの後）に追記
  let existing = "";
  if (fs.existsSync(docPath)) {
    existing = fs.readFileSync(docPath, "utf8");
  } else {
    existing = `# kyuryo-lab 実行ログ

自動エージェントの実行記録。毎朝7時に自動更新。

---`;
  }

  // 同じ日付のエントリがあれば置き換え、なければ先頭に追加
  const datePattern = new RegExp(`## ${date}[\s\S]*?\n---`, "g");
  if (existing.includes(`## ${date}`)) {
    existing = existing.replace(datePattern, entry.trim() + "\n---");
  } else {
    // ヘッダー直後に挿入
    existing = existing.replace("\n---", "\n---" + entry);
  }

  fs.writeFileSync(docPath, existing);
  console.log(`  📋 PROGRESS.md 更新: ${date}`);
}

// ============================================================
// メイン
// ============================================================
async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const taskFilter = args.includes("--task")
    ? parseInt(args[args.indexOf("--task") + 1])
    : null;

  const startTime = Date.now();
  const executed = [];

  console.log(`\n${"=".repeat(56)}`);
  console.log(`🤖 kyuryo-lab Daily Agent | ${new Date().toISOString().split("T")[0]}`);
  console.log(`${"=".repeat(56)}`);

  // ─── Step 1: GSCデータ取得 ──────────────────────────────────
  console.log("\n📡 Step 1: GSCデータ取得...");
  const state = await collectState();
  console.log(`  • guideページ数: ${state.guidePageCount}`);
  console.log(`  • 未処理キーワード: ${state.keywordsPending}件`);
  console.log(`  • GSCデータ: ${state.hasGSC ? "✅ あり" : "❌ なし（モック）"}`);
  if (state.hasGSC) {
    console.log(`  • ページ数: ${state.pages.length}件 / クエリ数: ${state.queries.length}件`);
  }

  // ─── Step 2: Claude分析 → タスク立案 ──────────────────────────
  console.log("\n🧠 Step 2: Claude分析 → タスク立案...");
  const plan = await proposeTasksWithClaude(state);

  console.log(`\n📋 今日のタスク（${plan.tasks.length}件）`);
  console.log(`   ${plan.summary}`);
  plan.tasks.forEach(t => {
    const autoLabel = t.auto !== false ? "⚡ 自動" : "👤 手動";
    console.log(`\n  [T${t.id}] ${autoLabel} P${t.priority} | ${t.title}`);
    console.log(`        ${t.reason}`);
  });

  if (dryRun) {
    console.log("\n🔍 --dry-run: 提案のみ（実行スキップ）");
    saveLog({ date: state.date, plan, executed: [], dryRun: true });
    updateProgressDoc({ date: state.date, plan, executed: [], dryRun: true, gscState: { hasGSC: state.hasGSC, pages: state.pages, queries: state.queries } });
    return;
  }

  // ─── Step 3: タスク実行 ────────────────────────────────────────
  console.log(`\n${"─".repeat(56)}`);
  console.log("⚙️  Step 3: タスク実行:");

  const targets = plan.tasks.filter(t => {
    if (taskFilter !== null) return t.id === taskFilter;
    return t.auto !== false;
  });

  for (const task of targets) {
    const result = await executeTask(task);
    executed.push({ task, result });
    if (!result.success) console.log(`    ⚠ ${result.message}`);
  }

  // ─── Step 4: ログ & PROGRESS.md更新 → git push ───────────────
  const completedCount = executed.filter(e => e.result.success).length;
  const elapsed = Math.round((Date.now() - startTime) / 1000);

  saveLog({ date: state.date, plan, executed, completedCount, elapsed });
  updateProgressDoc({ date: state.date, plan, executed, completedCount, elapsed, gscState: { hasGSC: state.hasGSC, pages: state.pages, queries: state.queries } });  // pushより前

  if (completedCount > 0 || true) {  // PROGRESS.mdは常にコミット
    const titles = executed.filter(e => e.result.success).map(e => e.task.title).join(", ") || "ログ更新";
    commitAndPush(`daily-agent: ${state.date} - ${titles}`);
  }

  // ─── Step 5: サマリー ─────────────────────────────────────────
  console.log(`\n${"=".repeat(56)}`);
  console.log(`✅ 完了: ${completedCount}件 | ${elapsed}秒`);
  console.log(`${"=".repeat(56)}`);

  // ─── Step 6: LINE通知 ──────────────────────────────────────────
  await notifyLINE([
    `\n【給料ラボ ${state.date}】`,
    plan.summary,
    `\n完了: ${completedCount}件 / ${elapsed}秒`,
    ...executed.filter(e => e.result.success).map(e => `✅ ${e.task.title}`),
    ...executed.filter(e => !e.result.success).map(e => `⏭ ${e.task.title}`),
  ].join("\n"));
}

main().catch(e => {
  console.error("❌ 致命的エラー:", e);
  process.exit(1);
});
