#!/usr/bin/env node
/**
 * kyuryo-lab 自動改善パイプライン
 * 
 * やること:
 * 1. Search Console APIからデータ取得
 * 2. Claude APIで分析→改善提案生成
 * 3. 改善を自動実装（CTA最適化、内部リンク追加など）
 * 4. git push → Vercel自動デプロイ
 * 
 * 使い方:
 *   node scripts/analyze-and-improve.mjs              # フル実行
 *   node scripts/analyze-and-improve.mjs --report-only # レポートのみ（改修なし）
 * 
 * 必要環境変数:
 *   ANTHROPIC_API_KEY
 *   GSC_CLIENT_EMAIL      (Google Cloud Service Account)
 *   GSC_PRIVATE_KEY       (Service Account秘密鍵)
 *   GSC_SITE_URL          (https://kyuryo-lab.com/)
 * 
 * GSC APIの設定方法:
 *   1. Google Cloud Console → サービスアカウント作成
 *   2. Search Console → 設定 → ユーザーと権限 → サービスアカウントメールを追加
 *   3. 秘密鍵JSONをダウンロードして .env.local に設定
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPORT_DIR = path.join(ROOT, "scripts", "reports");

// ============================================================
// Google Search Console API（JWT認証）
// ============================================================
async function getJWT(clientEmail, privateKey) {
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
  const headerB64 = encode(header);
  const payloadB64 = encode(payload);
  const unsigned = `${headerB64}.${payloadB64}`;

  // Node.js crypto で署名
  const { createSign } = await import("crypto");
  const sign = createSign("RSA-SHA256");
  sign.update(unsigned);
  const signature = sign.sign(privateKey, "base64url");

  return `${unsigned}.${signature}`;
}

async function getAccessToken(clientEmail, privateKey) {
  const jwt = await getJWT(clientEmail, privateKey);
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });
  const data = await res.json();
  if (!data.access_token) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function fetchGSCData(token, siteUrl) {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 28);

  const fmt = (d) => d.toISOString().split("T")[0];

  // ページ別データ
  const pagesRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: fmt(startDate),
        endDate: fmt(endDate),
        dimensions: ["page"],
        rowLimit: 50,
        orderBy: [{ fieldName: "impressions", sortOrder: "DESCENDING" }],
      }),
    }
  );
  const pagesData = await pagesRes.json();

  // クエリ別データ
  const queriesRes = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate: fmt(startDate),
        endDate: fmt(endDate),
        dimensions: ["query"],
        rowLimit: 50,
        orderBy: [{ fieldName: "impressions", sortOrder: "DESCENDING" }],
      }),
    }
  );
  const queriesData = await queriesRes.json();

  return {
    pages: pagesData.rows || [],
    queries: queriesData.rows || [],
    period: { start: fmt(startDate), end: fmt(endDate) },
  };
}

// ============================================================
// Claudeでデータ分析 → 改善提案生成
// ============================================================
async function analyzeWithClaude(gscData, existingPages) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY が未設定");

  const prompt = `あなたはkyuryo-lab（給料ラボ）というNext.jsサイトのSEOアナリストです。

## サイト概要
- URL: https://kyuryo-lab.com/
- 目的: 給与・残業代計算ツール ＋ 弁護士相談/退職代行のアフィリエイト収益化
- 主要アフィリエイト:
  - 弁護士法人アビエス: 18,000円/無料相談
  - 弁護士法人みやびの退職代行: 16,500円/成約

## Search Consoleデータ（直近28日）

### ページ別データ（上位20件）
${JSON.stringify(gscData.pages.slice(0, 20), null, 2)}

### クエリ別データ（上位30件）  
${JSON.stringify(gscData.queries.slice(0, 30), null, 2)}

## 既存ページ一覧
${existingPages.join("\n")}

## 分析タスク
以下の観点で分析して、具体的な改善提案をJSONで返してください。

1. **高インプレッション・低CTRページ** → タイトル/ディスクリプション改善
2. **アフィリエイトCTAを最適化すべきページ** → どのページにどのCTAを追加すべきか
3. **内部リンク追加すべき組み合わせ** → どのページからどのページへ
4. **新規作成すべき記事** → 検索データから見えるニーズ
5. **UI/デザイン改善** → CTR向上のための具体的な変更

必ずJSONのみを返してください（説明文なし）:
{
  "summary": "全体の状況サマリー（2〜3文）",
  "metrics": {
    "totalClicks": number,
    "totalImpressions": number,
    "avgCTR": number,
    "avgPosition": number
  },
  "urgentIssues": [
    {
      "type": "low_ctr" | "missing_cta" | "poor_position",
      "page": "ページURL",
      "issue": "問題の説明",
      "impact": "high" | "medium" | "low"
    }
  ],
  "improvements": [
    {
      "type": "meta_update" | "add_cta" | "add_internal_link" | "new_article" | "ui_change",
      "target": "対象ファイルパスまたはURL",
      "description": "改善内容の説明",
      "action": "具体的な実装内容（コードまたは指示）",
      "priority": 1-5 (1が最高),
      "expectedImpact": "期待される効果"
    }
  ],
  "newArticles": [
    {
      "keyword": "狙うキーワード",
      "slug": "url-slug",
      "title": "記事タイトル",
      "reason": "なぜこのキーワードが有望か",
      "affiliate": "bengoshi" | "taishoku" | "both"
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
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  const text = data.content[0].text;

  // JSONを抽出
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("JSONが見つかりません: " + text.slice(0, 200));
  return JSON.parse(jsonMatch[0]);
}

// ============================================================
// 改善を自動実装
// ============================================================
async function implementImprovement(improvement) {
  console.log(`\n🔧 実装中: [${improvement.type}] ${improvement.description}`);

  switch (improvement.type) {
    case "meta_update":
      return await implementMetaUpdate(improvement);
    case "add_cta":
      return await implementAddCTA(improvement);
    case "add_internal_link":
      return await implementAddInternalLink(improvement);
    default:
      console.log(`  ⏭ タイプ "${improvement.type}" は手動対応が必要`);
      return false;
  }
}

async function implementMetaUpdate(imp) {
  // ターゲットページのファイルを探す
  const slug = imp.target.replace("https://kyuryo-lab.com", "").replace(/\/$/, "");
  const filePath = path.join(ROOT, "app", slug, "page.tsx");

  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠ ファイルが見つかりません: ${filePath}`);
    return false;
  }

  // Claudeにmetadataのみ更新させる
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const content = fs.readFileSync(filePath, "utf8");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      messages: [{
        role: "user",
        content: `以下のNext.jsページのmetadataオブジェクト（title・description）のみを改善してください。
改善指示: ${imp.action}

現在のコード:
${content.slice(0, 3000)}

metadataオブジェクトのみを書き換えた新しいコードを返してください。
変更箇所以外は一切変えないでください。
コードのみ返してください（説明文不要）。`,
      }],
    }),
  });

  const data = await res.json();
  const newContent = data.content[0].text.replace(/```typescript\n?|```\n?/g, "");
  fs.writeFileSync(filePath, newContent);
  console.log(`  ✅ metadata更新: ${filePath}`);
  return true;
}

async function implementAddCTA(imp) {
  const slug = imp.target.replace("https://kyuryo-lab.com", "").replace(/\/$/, "");
  const filePath = path.join(ROOT, "app", slug === "" ? "/" : slug, "page.tsx");
  const actualPath = slug === "" || slug === "/" 
    ? path.join(ROOT, "app", "page.tsx")
    : path.join(ROOT, "app", slug, "page.tsx");

  if (!fs.existsSync(actualPath)) {
    console.log(`  ⚠ ファイルが見つかりません: ${actualPath}`);
    return false;
  }

  console.log(`  📝 CTA追加: ${actualPath}`);
  console.log(`  → ${imp.action}`);
  // CTAの追加は複雑なため、ログに記録して次回の手動実装に回す
  return false;
}

async function implementAddInternalLink(imp) {
  console.log(`  📎 内部リンク追加: ${imp.target}`);
  console.log(`  → ${imp.action}`);
  return false;
}

// ============================================================
// 新規キーワードをkeywords.jsonに追加
// ============================================================
function addNewKeywords(newArticles) {
  const keywordsFile = path.join(ROOT, "scripts", "keywords.json");
  const existing = JSON.parse(fs.readFileSync(keywordsFile, "utf8"));
  const existingSlugs = new Set(existing.map(k => k.slug));

  let added = 0;
  for (const article of newArticles) {
    if (!existingSlugs.has(article.slug)) {
      existing.push({
        slug: article.slug,
        keyword: article.keyword,
        title: article.title || article.keyword,
        description: article.reason || "",
        affiliate: article.affiliate || "bengoshi",
        done: false,
        source: "auto_analysis",
      });
      added++;
    }
  }

  fs.writeFileSync(keywordsFile, JSON.stringify(existing, null, 2));
  console.log(`\n📝 keywords.jsonに${added}件追加しました`);
}

// ============================================================
// レポート保存
// ============================================================
function saveReport(analysis, gscData) {
  fs.mkdirSync(REPORT_DIR, { recursive: true });
  const date = new Date().toISOString().split("T")[0];
  const reportPath = path.join(REPORT_DIR, `report-${date}.json`);

  const report = {
    date,
    period: gscData.period,
    analysis,
    raw: gscData,
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📊 レポート保存: ${reportPath}`);
  return reportPath;
}

// ============================================================
// コンソールにサマリー出力
// ============================================================
function printSummary(analysis) {
  console.log("\n" + "=".repeat(60));
  console.log("📊 kyuryo-lab 改善レポート");
  console.log("=".repeat(60));
  console.log("\n📈 サマリー:", analysis.summary);

  if (analysis.metrics) {
    const m = analysis.metrics;
    console.log(`\n指標:
  クリック: ${m.totalClicks}
  表示回数: ${m.totalImpressions}
  平均CTR: ${(m.avgCTR * 100).toFixed(2)}%
  平均順位: ${m.avgPosition?.toFixed(1)}`);
  }

  if (analysis.urgentIssues?.length > 0) {
    console.log("\n🚨 緊急対応:");
    analysis.urgentIssues.forEach(issue => {
      console.log(`  [${issue.impact.toUpperCase()}] ${issue.page}`);
      console.log(`  → ${issue.issue}`);
    });
  }

  if (analysis.improvements?.length > 0) {
    console.log("\n🔧 改善提案:");
    analysis.improvements.slice(0, 5).forEach((imp, i) => {
      console.log(`  ${i + 1}. [P${imp.priority}] ${imp.description}`);
      console.log(`     期待効果: ${imp.expectedImpact}`);
    });
  }

  if (analysis.newArticles?.length > 0) {
    console.log("\n✍️ 新規記事候補:");
    analysis.newArticles.forEach(a => {
      console.log(`  • ${a.keyword} → ${a.slug}`);
    });
  }

  console.log("\n" + "=".repeat(60));
}

// ============================================================
// メイン処理
// ============================================================
async function main() {
  const args = process.argv.slice(2);
  const reportOnly = args.includes("--report-only");

  // 環境変数チェック
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const siteUrl = process.env.GSC_SITE_URL || "https://kyuryo-lab.com/";
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error("❌ ANTHROPIC_API_KEY が設定されていません");
    process.exit(1);
  }

  let gscData;

  if (!clientEmail || !privateKey) {
    console.warn("⚠ GSC APIの認証情報がありません。モックデータで実行します。");
    console.warn("  GSC_CLIENT_EMAIL と GSC_PRIVATE_KEY を .env.local に設定してください。");
    console.warn("  設定方法: scripts/setup-gsc.md を参照");

    // モックデータ（実際のGSCデータなしで動作確認できるように）
    gscData = {
      period: { start: "2026-03-18", end: "2026-04-15" },
      pages: [
        { keys: ["https://kyuryo-lab.com/"], clicks: 0, impressions: 15, ctr: 0, position: 31 },
        { keys: ["https://kyuryo-lab.com/guide/zangyoudai-keisan-houhou"], clicks: 0, impressions: 8, ctr: 0, position: 45 },
        { keys: ["https://kyuryo-lab.com/guide/zangyodai-miharai-soudan"], clicks: 0, impressions: 2, ctr: 0, position: 52 },
      ],
      queries: [
        { keys: ["残業代 計算ツール"], clicks: 0, impressions: 5, ctr: 0, position: 69 },
        { keys: ["残業代 計算"], clicks: 0, impressions: 3, ctr: 0, position: 84 },
        { keys: ["60時間超 計算方法"], clicks: 0, impressions: 1, ctr: 0, position: 88 },
      ],
    };
  } else {
    console.log("🔑 GSC APIに接続中...");
    const token = await getAccessToken(clientEmail, privateKey);
    gscData = await fetchGSCData(token, siteUrl);
    console.log(`✅ データ取得完了: ${gscData.pages.length}ページ, ${gscData.queries.length}クエリ`);
  }

  // 既存ページ一覧を取得
  const guideDir = path.join(ROOT, "app", "guide");
  const existingPages = fs.existsSync(guideDir)
    ? fs.readdirSync(guideDir).filter(d => 
        fs.statSync(path.join(guideDir, d)).isDirectory()
      ).map(d => `/guide/${d}`)
    : [];

  // Claude分析
  console.log("\n🤖 Claudeで分析中...");
  const analysis = await analyzeWithClaude(gscData, existingPages);

  // レポート出力
  printSummary(analysis);
  saveReport(analysis, gscData);

  if (reportOnly) {
    console.log("\n📋 --report-only モード: 実装はスキップします");
    return;
  }

  // 新規キーワードを追加
  if (analysis.newArticles?.length > 0) {
    addNewKeywords(analysis.newArticles);
  }

  // 優先度1〜2の改善を自動実装
  const autoImprovements = (analysis.improvements || [])
    .filter(imp => imp.priority <= 2)
    .slice(0, 3); // 一度に最大3件

  if (autoImprovements.length > 0) {
    console.log(`\n🔧 優先度1〜2の改善を${autoImprovements.length}件自動実装します...`);
    let implemented = 0;
    for (const imp of autoImprovements) {
      const ok = await implementImprovement(imp);
      if (ok) implemented++;
    }

    if (implemented > 0) {
      console.log(`\n✅ ${implemented}件実装完了。git pushします...`);
      execSync(`cd ${ROOT} && git add -A`, { stdio: "inherit" });
      execSync(`cd ${ROOT} && git commit -m "improve: auto-implement ${implemented} SEO improvements"`, { stdio: "inherit" });
      execSync(`cd ${ROOT} && git push origin main`, { stdio: "inherit" });
      console.log("🚀 デプロイ開始!");
    }
  }

  // 新規記事生成（優先度最高のもの1件）
  if (analysis.newArticles?.length > 0) {
    console.log("\n📝 分析で見つかった新規記事を1件生成します...");
    execSync(`node ${path.join(ROOT, "scripts", "generate-article.mjs")}`, {
      stdio: "inherit",
      env: { ...process.env },
    });
  }

  console.log("\n🎉 分析・改善パイプライン完了!");
}

main().catch(console.error);
