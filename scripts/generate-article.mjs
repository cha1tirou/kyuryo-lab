#!/usr/bin/env node
/**
 * kyuryo-lab 記事自動生成パイプライン
 * 
 * 使い方:
 *   node scripts/generate-article.mjs              # 未処理キーワードを1件処理
 *   node scripts/generate-article.mjs --all        # 未処理キーワードを全件処理
 *   node scripts/generate-article.mjs --keyword "残業代 時効"  # 指定キーワードを処理
 *   node scripts/generate-article.mjs --dry-run    # ファイル生成のみ（git pushしない）
 * 
 * 必要環境変数:
 *   ANTHROPIC_API_KEY
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
// .env.local を自動読み込み
const __envPath = new URL("../.env.local", import.meta.url).pathname;
if (fs.existsSync(__envPath)) {
  const envContent = fs.readFileSync(__envPath, "utf8");
  for (const line of envContent.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq < 0) continue;
    const k = t.slice(0, eq).trim();
    const v = t.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[k]) process.env[k] = v;
  }
}


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const KEYWORDS_FILE = path.join(ROOT, "scripts", "keywords.json");

// ============================================================
// キーワードリスト（SEO調査済み・低競合・高転換）
// ============================================================
const DEFAULT_KEYWORDS = [
  {
    slug: "zangyodai-miharai-jikkou",
    keyword: "残業代 未払い 時効",
    title: "残業代未払いの時効は3年｜今すぐ請求すべき理由と手順",
    description: "未払い残業代の時効は3年。毎月少しずつ消滅していくため今すぐ動くことが重要。弁護士に無料相談できる窓口も解説。",
    affiliate: "bengoshi",
    done: false,
  },
  {
    slug: "namakerikan-zangyodai",
    keyword: "名ばかり管理職 残業代",
    title: "名ばかり管理職でも残業代はもらえる｜条件と請求方法",
    description: "管理職でも「管理監督者」でなければ残業代を請求できます。名ばかり管理職の判断基準と実際の請求手順を解説。",
    affiliate: "bengoshi",
    done: false,
  },
  {
    slug: "service-zangyo-shoko",
    keyword: "サービス残業 証拠 集め方",
    title: "サービス残業の証拠の集め方｜タイムカードがなくても請求できる",
    description: "タイムカードがなくてもメール・ICカード・スマホのGPSが証拠になります。サービス残業の証拠収集方法を弁護士監修で解説。",
    affiliate: "bengoshi",
    done: false,
  },
  {
    slug: "taishoku-daiko-bengoshi-chigai",
    keyword: "退職代行 弁護士 違い",
    title: "退職代行サービスと弁護士の違い｜残業代も同時に請求するなら",
    description: "退職代行の民間・弁護士法人の違いを比較。未払い残業代も請求したい場合は弁護士法人一択の理由を解説。",
    affiliate: "taishoku",
    done: false,
  },
  {
    slug: "zangyou-80jikan-ihan",
    keyword: "月80時間 残業 違法 どうする",
    title: "月80時間残業は違法？過労死ラインを超えた場合の対処法",
    description: "月80時間の残業は過労死ラインを超え、健康・法律上の問題があります。会社に残業代を請求する方法と退職の選択肢を解説。",
    affiliate: "both",
    done: false,
  },
  {
    slug: "kaisha-yametai-zangyo-ooi",
    keyword: "残業多い 会社 辞めたい",
    title: "残業が多い会社を辞めたい｜退職前に残業代を回収する方法",
    description: "残業が多い会社を辞める前に未払い残業代を請求しましょう。退職後3年以内に請求可能。退職代行と弁護士の活用法を解説。",
    affiliate: "both",
    done: false,
  },
  {
    slug: "minashi-zangyo-koeta-baai",
    keyword: "みなし残業 超えた 請求",
    title: "みなし残業（固定残業代）を超えた分の残業代は請求できる",
    description: "固定残業代の時間を超えて働いた場合、超過分は別途請求できます。みなし残業の仕組みと超過分の請求方法を解説。",
    affiliate: "bengoshi",
    done: false,
  },
  {
    slug: "zangyodai-keisan-tsukuri",
    keyword: "残業代 計算 自分で",
    title: "残業代を自分で計算して会社に請求する方法",
    description: "残業代の計算方法から会社への請求手順まで解説。計算ツールで未払い額を確認し、弁護士なしで請求する方法も。",
    affiliate: "bengoshi",
    done: false,
  },
];

// ============================================================
// アフィリエイトリンク設定
// ============================================================
const AFFILIATE_CONFIG = {
  bengoshi: {
    href: "https://www.abias-law.com/",  // A8審査通過後に差し替え
    label: "PR・弁護士法人",
    title: "未払い残業代を弁護士に無料相談｜アビエス法律事務所",
    description: "未払いの残業代は3年分さかのぼって請求できます。弁護士直接対応・全国対応・相談無料。完全成功報酬。",
    cta: "無料相談してみる",
    note: "相談料0円・着手金不要",
    icon: "⚖️",
  },
  taishoku: {
    href: "https://ck.valuecommerce.ne.jp/servlet/referral?sid=2999025&pid=881512136",
    label: "PR・弁護士による退職代行",
    title: "弁護士法人みやびの退職代行で確実に退職",
    description: "弁護士が直接対応。未払い残業代・慰謝料の請求も一緒に依頼できます。会社と直接話さずに退職可能。",
    cta: "弁護士法人みやびを見てみる",
    note: "弁護士法人運営・全国対応",
    icon: "🚪",
  },
};

// ============================================================
// 記事生成プロンプト
// ============================================================
function buildPrompt(kw) {
  const affiliateSections = [];

  if (kw.affiliate === "bengoshi" || kw.affiliate === "both") {
    affiliateSections.push(`
<!-- AFFILIATE_BENGOSHI -->
弁護士相談CTAをここに入れる`);
  }
  if (kw.affiliate === "taishoku" || kw.affiliate === "both") {
    affiliateSections.push(`
<!-- AFFILIATE_TAISHOKU -->
退職代行CTAをここに入れる`);
  }

  return `あなたはkyuryo-lab（給料ラボ）というNext.jsサイトのSEO記事ライターです。

## タスク
以下のキーワードでguideページ（Next.js page.tsx）を生成してください。

キーワード: ${kw.keyword}
スラッグ: ${kw.slug}
タイトル: ${kw.title}
ディスクリプション: ${kw.description}
アフィリエイト: ${kw.affiliate}

## 要件
1. Next.js 14 App Router形式のpage.tsxを生成する
2. 既存ページ（/app/guide/zangyoudai-keisan-houhou/page.tsx）と同じ構造に従う
3. 文字数は4000〜6000字（本文のみ）
4. H2見出し5〜7個、H3も適宜使用
5. FAQセクションを最後に3〜5問設ける
6. 計算ツール（kyuryo-lab.com/）への内部リンクを1〜2箇所入れる
7. 関連ガイドページへのリンクセクションを最後に入れる
8. metadata（title・description・keywords・canonical）を正確に設定する
9. ArticleJsonLd・BreadcrumbJsonLd・FAQPageJsonLdを含める
10. AffiliateSection コンポーネントを適切な位置（記事の中間と最後）に配置する

## import文
必ず以下のimportを使う:
\`\`\`
import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import AffiliateSection from "../../../components/affiliates/affiliate-section";
import { ZANGYODAI_AFFILIATES, TAISHOKU_AFFILIATES } from "../../../lib/affiliates";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "../../../components/seo/json-ld";
\`\`\`

アフィリエイト配置ルール:
- affiliate=bengoshi → ZANGYODAI_AFFILIATES を使う
- affiliate=taishoku → TAISHOKU_AFFILIATES を使う
- affiliate=both → 両方を別のAffiliateSectionで使う

## 注意
- TypeScriptエラーが出ないよう正確に書く
- 文字列内のシングルクォートはエスケープ（\\'）する
- JSX内ではHTMLエンティティ（&amp; &lt; &gt;）を使う
- コードブロック（\`\`\`）は使わない、純粋なTypeScriptコードのみを返す

page.tsxのコードのみを返してください。説明文は不要です。`;
}

// ============================================================
// Claude API呼び出し
// ============================================================
async function generateArticle(keyword) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY が設定されていません");

  console.log(`\n🤖 生成中: "${keyword.keyword}"...`);

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 8000,
      messages: [{ role: "user", content: buildPrompt(keyword) }],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API Error ${response.status}: ${err}`);
  }

  const data = await response.json();
  return data.content[0].text;
}

// ============================================================
// ファイル書き込み
// ============================================================
function writeArticle(slug, content) {
  const dir = path.join(ROOT, "app", "guide", slug);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, "page.tsx");
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ 生成: ${filePath}`);
  return filePath;
}

// ============================================================
// sitemap.tsに追加
// ============================================================
function updateSitemap(slug) {
  const sitemapPath = path.join(ROOT, "app", "sitemap.ts");
  let content = fs.readFileSync(sitemapPath, "utf8");

  if (content.includes(slug)) {
    console.log(`⏭ sitemap: ${slug} は既に存在します`);
    return;
  }

  const today = new Date().toISOString().split("T")[0];
  const newEntry = `    { url: \`\${base}/guide/${slug}\`, lastModified: '${today}', changeFrequency: 'monthly', priority: 0.8 },`;

  content = content.replace(
    "  ]\n}",
    `${newEntry}\n  ]\n}`
  );

  fs.writeFileSync(sitemapPath, content, "utf8");
  console.log(`📍 sitemap更新: /guide/${slug}`);
}

// ============================================================
// TypeScriptチェック
// ============================================================
function typeCheck(filePath) {
  try {
    execSync(`cd ${ROOT} && npx tsc --noEmit 2>&1`, { stdio: "pipe" });
    console.log("✅ TypeScriptチェック: OK");
    return true;
  } catch (e) {
    const output = e.stdout?.toString() || e.message;
    console.error("❌ TypeScriptエラー:", output.slice(0, 500));
    return false;
  }
}

// ============================================================
// git push
// ============================================================
function gitPush(slug) {
  try {
    execSync(`cd ${ROOT} && git add -A`, { stdio: "inherit" });
    execSync(`cd ${ROOT} && git commit -m "content: auto-generate guide/${slug}"`, { stdio: "inherit" });
    execSync(`cd ${ROOT} && git push origin main`, { stdio: "inherit" });
    console.log("🚀 git push完了!");
  } catch (e) {
    console.error("git push失敗:", e.message);
  }
}

// ============================================================
// キーワードリスト管理
// ============================================================
function loadKeywords() {
  if (!fs.existsSync(KEYWORDS_FILE)) {
    fs.writeFileSync(KEYWORDS_FILE, JSON.stringify(DEFAULT_KEYWORDS, null, 2));
  }
  return JSON.parse(fs.readFileSync(KEYWORDS_FILE, "utf8"));
}

function markDone(keywords, slug) {
  const updated = keywords.map(k => k.slug === slug ? { ...k, done: true } : k);
  fs.writeFileSync(KEYWORDS_FILE, JSON.stringify(updated, null, 2));
}

// ============================================================
// メイン処理
// ============================================================
async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const processAll = args.includes("--all");
  const keywordArg = args.includes("--keyword") ? args[args.indexOf("--keyword") + 1] : null;

  const keywords = loadKeywords();

  // 処理対象を決定
  let targets = [];
  if (keywordArg) {
    const found = keywords.find(k => k.keyword === keywordArg || k.slug === keywordArg);
    if (!found) {
      console.error(`❌ キーワードが見つかりません: ${keywordArg}`);
      process.exit(1);
    }
    targets = [found];
  } else if (processAll) {
    targets = keywords.filter(k => !k.done);
  } else {
    const next = keywords.find(k => !k.done);
    if (!next) {
      console.log("✅ 未処理のキーワードはありません");
      process.exit(0);
    }
    targets = [next];
  }

  console.log(`📋 処理対象: ${targets.length}件`);

  for (const kw of targets) {
    try {
      // 既存ページチェック
      const existingPath = path.join(ROOT, "app", "guide", kw.slug, "page.tsx");
      if (fs.existsSync(existingPath) && !args.includes("--force")) {
        console.log(`⏭ スキップ: /guide/${kw.slug} は既に存在します`);
        markDone(keywords, kw.slug);
        continue;
      }

      // 記事生成
      const content = await generateArticle(kw);

      // ファイル書き込み
      const filePath = writeArticle(kw.slug, content);

      // TypeScriptチェック
      const ok = typeCheck(filePath);
      if (!ok) {
        console.error(`❌ TypeScriptエラーのためスキップ: ${kw.slug}`);
        fs.rmSync(path.join(ROOT, "app", "guide", kw.slug), { recursive: true });
        continue;
      }

      // sitemap更新
      updateSitemap(kw.slug);

      // git push
      if (!dryRun) {
        gitPush(kw.slug);
      } else {
        console.log("🔍 dry-runモード: git pushをスキップ");
      }

      // 完了マーク
      markDone(keywords, kw.slug);

      // API制限対策: 次の記事まで5秒待機
      if (targets.length > 1) {
        console.log("⏳ 5秒待機...");
        await new Promise(r => setTimeout(r, 5000));
      }

    } catch (err) {
      console.error(`❌ エラー (${kw.slug}):`, err.message);
    }
  }

  console.log("\n🎉 パイプライン完了!");
}

main().catch(console.error);
