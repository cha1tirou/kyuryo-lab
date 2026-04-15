#!/bin/bash
set -e
cd "$(dirname "$0")"

# --- 1. 新規ファイル作成 ---

mkdir -p components/affiliates

cat > components/affiliates/affiliate-card.tsx << 'EOF'
interface AffiliateCardProps {
  icon: string;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  note?: string;
}

export default function AffiliateCard({
  icon, label, title, description, ctaText, href, note,
}: AffiliateCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:bg-slate-50"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
          {label}
        </span>
      </div>
      <div>
        <p className="font-semibold text-slate-800 leading-snug">{title}</p>
        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto">
        <span className="inline-block rounded-xl bg-slate-800 px-4 py-2 text-sm font-medium text-white">
          {ctaText} →
        </span>
        {note && <p className="mt-2 text-xs text-slate-400">{note}</p>}
      </div>
    </a>
  );
}
EOF

cat > components/affiliates/affiliate-section.tsx << 'EOF'
import AffiliateCard from "./affiliate-card";

interface AffiliateItem {
  icon: string;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  note?: string;
}

interface AffiliateSectionProps {
  heading?: string;
  items: AffiliateItem[];
}

export default function AffiliateSection({
  heading = "あわせてチェック",
  items,
}: AffiliateSectionProps) {
  if (items.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <AffiliateCard key={item.href} {...item} />
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-400">
        ※ 上記リンクはアフィリエイト広告を含む場合があります
      </p>
    </section>
  );
}
EOF

cat > lib/affiliates.ts << 'EOF'
/**
 * アフィリエイトリンク設定
 * A8.net審査通過後、href を A8トラッキングURLに差し替えるだけで全ページ反映。
 */

export const AFFILIATE_LINKS = {
  bennaviBengoshi: {
    href: "https://bexy.jp/",  // TODO: A8トラッキングURLに差し替え
    icon: "⚖️",
    label: "PR・無料相談あり",
    title: "残業代が払われていないかも？弁護士に無料相談",
    description: "未払いの残業代は3年間さかのぼって請求できます。専門の弁護士への相談は無料です。",
    ctaText: "無料で相談してみる",
    note: "相談料0円・全国対応",
  },
  doda: {
    href: "https://doda.jp/",  // TODO: A8トラッキングURLに差し替え
    icon: "💼",
    label: "PR・転職エージェント",
    title: "残業が多い・給料が低いなら転職も選択肢に",
    description: "dodaは求人数・サポートともに国内最大級。無料登録で非公開求人もチェックできます。",
    ctaText: "無料で転職相談",
    note: "登録無料・エージェントサポートあり",
  },
  dodaJikyu: {
    href: "https://doda.jp/",  // TODO: A8トラッキングURLに差し替え
    icon: "📈",
    label: "PR・転職エージェント",
    title: "時給換算したら思ったより低かった？",
    description: "時給1,500円以下なら市場価値を確かめるチャンスです。dodaで同職種の給与相場を無料確認。",
    ctaText: "給与相場を調べてみる",
    note: "登録無料",
  },
  mynavi: {
    href: "https://tenshoku.mynavi.jp/",  // TODO: A8トラッキングURLに差し替え
    icon: "🔍",
    label: "PR・転職サイト",
    title: "手取りを増やすなら年収アップ転職",
    description: "マイナビ転職は20〜30代に人気。スカウト機能で企業からオファーが届くことも。",
    ctaText: "マイナビ転職を見てみる",
    note: "登録・利用無料",
  },
  freeeKyuyo: {
    href: "https://www.freee.co.jp/payroll/",  // TODO: A8トラッキングURLに差し替え
    icon: "🧮",
    label: "PR・給与計算ソフト",
    title: "給与計算を自動化したい方へ｜freee給与",
    description: "社保計算・年末調整・賞与計算まで自動化。営業日カレンダーも連携して締め作業を大幅削減。",
    ctaText: "30日間無料で試す",
    note: "中小企業・個人事業主向け",
  },
  mfKyuyo: {
    href: "https://biz.moneyforward.com/payroll/",  // TODO: A8トラッキングURLに差し替え
    icon: "📊",
    label: "PR・給与計算ソフト",
    title: "マネーフォワード クラウド給与",
    description: "社労士も推薦するクラウド給与システム。営業日・勤怠・給与計算を一括管理できます。",
    ctaText: "無料トライアルを始める",
    note: "法人向け・1ヶ月無料",
  },
} as const;

export const ZANGYODAI_AFFILIATES = [
  AFFILIATE_LINKS.bennaviBengoshi,
  AFFILIATE_LINKS.doda,
];

export const TETSUKE_AFFILIATES = [
  AFFILIATE_LINKS.mynavi,
  AFFILIATE_LINKS.freeeKyuyo,
];

export const JIKYU_AFFILIATES = [
  AFFILIATE_LINKS.dodaJikyu,
  AFFILIATE_LINKS.mynavi,
];

export const EIGYOBI_AFFILIATES = [
  AFFILIATE_LINKS.freeeKyuyo,
  AFFILIATE_LINKS.mfKyuyo,
];
EOF

echo "✅ 新規ファイル3件 作成完了"

# --- 2. 既存ページにimport & AffiliateSection を追加 ---

python3 << 'PYEOF'
import re

patches = [
    # (ファイルパス, 旧文字列, 新文字列)
    (
        "app/page.tsx",
        'import AdUnit from "../components/ads/ad-unit";\nimport Link from "next/link";',
        'import AdUnit from "../components/ads/ad-unit";\nimport AffiliateSection from "../components/affiliates/affiliate-section";\nimport { ZANGYODAI_AFFILIATES } from "../lib/affiliates";\nimport Link from "next/link";'
    ),
    (
        "app/page.tsx",
        '{/* 広告: 計算ツール下 */}\n        <AdUnit slot="1234567890" format="horizontal" />',
        '{/* 広告: 計算ツール下 */}\n        <AdUnit slot="1234567890" format="horizontal" />\n\n        {/* アフィリエイト */}\n        <AffiliateSection heading="残業に悩んでいる方へ" items={ZANGYODAI_AFFILIATES} />'
    ),
    (
        "app/kyuryo/tetsuke/page.tsx",
        'import AdUnit from "../../../components/ads/ad-unit";\nimport Link from "next/link";',
        'import AdUnit from "../../../components/ads/ad-unit";\nimport AffiliateSection from "../../../components/affiliates/affiliate-section";\nimport { TETSUKE_AFFILIATES } from "../../../lib/affiliates";\nimport Link from "next/link";'
    ),
    (
        "app/kyuryo/tetsuke/page.tsx",
        '<AdUnit slot="2345678901" format="horizontal" />',
        '<AdUnit slot="2345678901" format="horizontal" />\n\n        <AffiliateSection heading="手取りを増やしたい方へ" items={TETSUKE_AFFILIATES} />'
    ),
    (
        "app/kyuryo/jikyu/page.tsx",
        'import AdUnit from "../../../components/ads/ad-unit";\nimport Link from "next/link";',
        'import AdUnit from "../../../components/ads/ad-unit";\nimport AffiliateSection from "../../../components/affiliates/affiliate-section";\nimport { JIKYU_AFFILIATES } from "../../../lib/affiliates";\nimport Link from "next/link";'
    ),
    (
        "app/kyuryo/jikyu/page.tsx",
        '<AdUnit slot="3456789012" format="horizontal" />',
        '<AdUnit slot="3456789012" format="horizontal" />\n\n        <AffiliateSection heading="時給・時間単価が気になった方へ" items={JIKYU_AFFILIATES} />'
    ),
    (
        "app/eigyobi/page.tsx",
        'import AdUnit from "../../components/ads/ad-unit";\nimport Link from "next/link";',
        'import AdUnit from "../../components/ads/ad-unit";\nimport AffiliateSection from "../../components/affiliates/affiliate-section";\nimport { EIGYOBI_AFFILIATES } from "../../lib/affiliates";\nimport Link from "next/link";'
    ),
    (
        "app/eigyobi/page.tsx",
        '<AdUnit slot="4567890123" format="horizontal" />',
        '<AdUnit slot="4567890123" format="horizontal" />\n\n        <AffiliateSection heading="給与計算・労務管理を効率化したい方へ" items={EIGYOBI_AFFILIATES} />'
    ),
]

# guideページ
zangyou_guide_pages = [
    "app/guide/zangyoudai-keisan-houhou/page.tsx",
    "app/guide/zangyou-60jikan-rule/page.tsx",
    "app/guide/minashi-zangyou/page.tsx",
]
tenshoku_guide_pages = [
    "app/guide/tenshoku-kyuyo-koushou/page.tsx",
    "app/guide/nenshu-tedori-hayamihyou/page.tsx",
    "app/guide/tedori-shikumi/page.tsx",
]

def apply_patches(patches):
    for path, old, new in patches:
        try:
            with open(path, 'r') as f:
                content = f.read()
            if old not in content:
                print(f"  SKIP (not found): {path}")
                continue
            if 'AffiliateSection' in content and 'AffiliateSection' in new:
                print(f"  SKIP (already done): {path}")
                continue
            content = content.replace(old, new, 1)
            with open(path, 'w') as f:
                f.write(content)
            print(f"  DONE: {path}")
        except Exception as e:
            print(f"  ERROR {path}: {e}")

def add_guide_affiliate(pages, import_str, section_str):
    for path in pages:
        try:
            with open(path, 'r') as f:
                content = f.read()
            if 'AffiliateSection' in content:
                print(f"  SKIP (already done): {path}")
                continue
            content = content.replace('import Link from "next/link";', import_str + 'import Link from "next/link";', 1)
            content = content.replace('      </main>', section_str + '      </main>', 1)
            with open(path, 'w') as f:
                f.write(content)
            print(f"  DONE: {path}")
        except Exception as e:
            print(f"  ERROR {path}: {e}")

apply_patches(patches)

zangyou_import = 'import AffiliateSection from "../../../components/affiliates/affiliate-section";\nimport { ZANGYODAI_AFFILIATES } from "../../../lib/affiliates";\n'
zangyou_section = '\n        <AffiliateSection heading="残業に悩んでいる方へ" items={ZANGYODAI_AFFILIATES} />\n'
add_guide_affiliate(zangyou_guide_pages, zangyou_import, zangyou_section)

tenshoku_import = 'import AffiliateSection from "../../../components/affiliates/affiliate-section";\nimport { TETSUKE_AFFILIATES } from "../../../lib/affiliates";\n'
tenshoku_section = '\n        <AffiliateSection heading="給与・手取りをもっと増やしたい方へ" items={TETSUKE_AFFILIATES} />\n'
add_guide_affiliate(tenshoku_guide_pages, tenshoku_import, tenshoku_section)

print("✅ ページ更新完了")
PYEOF

# --- 3. コミット & プッシュ ---
git add -A
git status --short
git commit -m "feat: add affiliate CTA cards to all calculator and guide pages

- AffiliateCard / AffiliateSection コンポーネント追加
- lib/affiliates.ts でリンク一元管理（TODO: A8トラッキングURLに差し替え）
- 残業代/手取り/時給/営業日ページ + guide 6ページに設置

Monetization:
- 残業代系 → 弁護士相談 + 転職エージェント
- 手取り・時給系 → 転職エージェント + freee給与
- 営業日系 → freee給与 + マネーフォワード (B2B)"

git push origin main
echo "🚀 Push完了！"
