#!/bin/bash
set -e
# 夜間作業デプロイスクリプト
# kyuryo-labディレクトリで実行: bash deploy_overnight.sh

cd "$(dirname "$0")"

echo "=== 夜間作業内容 ==="
echo "1. lib/affiliates.ts に退職代行アフィリ追加（EXIT/Jobs/アビエス）"
echo "2. 残業代トップ(/)に退職代行CTAセクション追加"
echo "3. 新規guideページ×2:"
echo "   - /guide/zangyodai-miharai-soudan（残業代未払い相談）"
echo "   - /guide/taishoku-daiko-towa（退職代行サービスとは）"
echo "4. sitemap.ts に新規ページ追加"
echo ""

python3 << 'PYEOF'
import re

# ── 1. lib/affiliates.ts 更新 ──────────────────────────────────────
affiliates_content = open('lib/affiliates.ts', 'r').read()

# すでに退職代行エントリがある場合はスキップ
if 'exitTaishoku' in affiliates_content:
    print("SKIP lib/affiliates.ts (already updated)")
else:
    old = '''  mfKyuyo: {
    href: "https://biz.moneyforward.com/payroll/",  // TODO: A8トラッキングURLに差し替え
    icon: "📊",
    label: "PR・給与計算ソフト",
    title: "マネーフォワード クラウド給与",
    description: "社労士も推薦するクラウド給与システム。営業日・勤怠・給与計算を一括管理できます。",
    ctaText: "無料トライアルを始める",
    note: "法人向け・1ヶ月無料",
  },
} as const;'''
    new = '''  mfKyuyo: {
    href: "https://biz.moneyforward.com/payroll/",  // TODO: A8トラッキングURLに差し替え
    icon: "📊",
    label: "PR・給与計算ソフト",
    title: "マネーフォワード クラウド給与",
    description: "社労士も推薦するクラウド給与システム。営業日・勤怠・給与計算を一括管理できます。",
    ctaText: "無料トライアルを始める",
    note: "法人向け・1ヶ月無料",
  },
  exitTaishoku: {
    href: "https://www.exit.co.jp/",  // TODO: バリューコマーストラッキングURL（17,600円）
    icon: "🚪",
    label: "PR・退職代行",
    title: "もう辞めたい…退職代行EXITで即日退職",
    description: "会社に行かずに今日中に退職できます。弁護士監修・業界最安水準。ブラック企業・パワハラ・未払いにも対応。",
    ctaText: "退職代行EXITを見てみる",
    note: "全額返金保証あり・24時間対応",
  },
  jobsTaishoku: {
    href: "https://jobs1.jp/",  // TODO: バリューコマーストラッキングURL（13,241円）
    icon: "💨",
    label: "PR・退職代行",
    title: "退職代行Jobsで安心・確実に退職",
    description: "弁護士監修で未払い残業代の請求もサポート。会社と直接話さずに退職可能。24時間365日受付。",
    ctaText: "退職代行Jobsを見てみる",
    note: "弁護士監修・費用27,000円",
  },
  abiaceKyuyo: {
    href: "https://www.abias-law.com/",  // TODO: A8トラッキングURL（申請済み審査中・18,000円）
    icon: "⚖️",
    label: "PR・弁護士法人",
    title: "未払い残業代を弁護士に無料相談｜アビエス法律事務所",
    description: "未払いの残業代は3年分さかのぼって請求できます。弁護士直接対応・全国対応・相談無料。",
    ctaText: "無料相談してみる",
    note: "相談料0円・完全成功報酬",
  },
} as const;'''
    affiliates_content = affiliates_content.replace(old, new)

    old2 = '''export const ZANGYODAI_AFFILIATES = [
  AFFILIATE_LINKS.bennaviBengoshi,
  AFFILIATE_LINKS.doda,
];'''
    new2 = '''export const ZANGYODAI_AFFILIATES = [
  AFFILIATE_LINKS.abiaceKyuyo,
  AFFILIATE_LINKS.doda,
];

export const TAISHOKU_AFFILIATES = [
  AFFILIATE_LINKS.exitTaishoku,
  AFFILIATE_LINKS.jobsTaishoku,
];'''
    affiliates_content = affiliates_content.replace(old2, new2)
    open('lib/affiliates.ts', 'w').write(affiliates_content)
    print("DONE lib/affiliates.ts")

# ── 2. app/page.tsx: 退職代行CTA追加 ─────────────────────────────
page_content = open('app/page.tsx', 'r').read()
if 'TAISHOKU_AFFILIATES' in page_content:
    print("SKIP app/page.tsx (already updated)")
else:
    page_content = page_content.replace(
        'import { ZANGYODAI_AFFILIATES } from "../lib/affiliates";',
        'import { ZANGYODAI_AFFILIATES, TAISHOKU_AFFILIATES } from "../lib/affiliates";'
    )
    page_content = page_content.replace(
        '{/* 広告: 計算ツール下 */}\n        <AdUnit slot="1234567890" format="horizontal" />',
        '''{/* 広告: 計算ツール下 */}
        <AdUnit slot="1234567890" format="horizontal" />

        {/* アフィリエイト: 未払い残業代 → 弁護士相談 */}
        <AffiliateSection
          heading="残業代が払われていないと感じたら"
          items={ZANGYODAI_AFFILIATES}
        />

        {/* アフィリエイト: 残業過多 → 退職代行 */}
        <AffiliateSection
          heading="もう限界…会社を辞めたいと思ったら"
          items={TAISHOKU_AFFILIATES}
        />'''
    )
    open('app/page.tsx', 'w').write(page_content)
    print("DONE app/page.tsx")

# ── 3. sitemap.ts: 新規ページ追加 ────────────────────────────────
sitemap_content = open('app/sitemap.ts', 'r').read()
if 'zangyodai-miharai-soudan' in sitemap_content:
    print("SKIP app/sitemap.ts (already updated)")
else:
    sitemap_content = sitemap_content.replace(
        "    { url: `${base}/guide/shakaihokenryou-setuyaku`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.7 },\n  ]",
        """    { url: \`${base}/guide/shakaihokenryou-setuyaku\`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: \`${base}/guide/zangyodai-miharai-soudan\`, lastModified: '2026-04-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: \`${base}/guide/taishoku-daiko-towa\`, lastModified: '2026-04-15', changeFrequency: 'monthly', priority: 0.8 },
  ]"""
    )
    open('app/sitemap.ts', 'w').write(sitemap_content)
    print("DONE app/sitemap.ts")

print("✅ ファイル更新完了")
PYEOF

# ── 新規guideページのファイルがなければ作成 ──────────────────────
if [ ! -f "app/guide/zangyodai-miharai-soudan/page.tsx" ]; then
  echo "新規ページファイルが見つかりません。手動でコピーしてください。"
fi

# ── git commit & push ─────────────────────────────────────────────
git add -A
git status --short
git commit -m "feat: add taishoku-daiko affiliate CTAs and 2 new high-value guide pages

- lib/affiliates.ts: EXIT/Jobs退職代行 + アビエス弁護士 追加
- app/page.tsx: 残業代トップに退職代行CTAセクション追加
- guide/zangyodai-miharai-soudan: 残業代未払い相談ガイド（弁護士アフィリ）
- guide/taishoku-daiko-towa: 退職代行サービス解説（退職代行アフィリ）
- sitemap.ts: 新規2ページ追加

Affiliate targets:
- EXIT退職代行: 17,600円/件（バリューコマース）→ href要差し替え
- 退職代行Jobs: 13,241円/件（バリューコマース）→ href要差し替え
- アビエス弁護士: 18,000円/相談（A8申請済・審査中）→ href要差し替え"

git push origin main
echo "🚀 Push完了！"
echo ""
echo "=== 次のToDoメモ ==="
echo "1. バリューコマース登録: https://www.valuecommerce.ne.jp/affiliate/registration"
echo "2. EXIT申請 → トラッキングURL → lib/affiliates.ts exitTaishoku.href を差し替え"
echo "3. 退職代行Jobs申請 → jobsTaishoku.href を差し替え"
echo "4. A8 アビエス審査通過 → abiaceKyuyo.href を差し替え"
echo "5. A8 freee給与申請（営業日ページ用）"
