import type { Metadata } from "next";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "給与ガイド | 残業代・手取りの基礎知識 | 給料ラボ",
  description:
    "残業代の計算方法、手取り額の仕組み、社会保険料の基礎知識など、給与に関する情報をわかりやすく解説します。",
  keywords: "給与ガイド,残業代,手取り,社会保険,給与計算",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "給与ガイド | 残業代・手取りの基礎知識 | 給料ラボ",
    description: "残業代や手取りの仕組みをわかりやすく解説。",
    type: "website",
  },
};

const guides = [
  {
    slug: "zangyoudai-keisan-houhou",
    title: "残業代の計算方法を徹底解説 | 割増率・計算例つき",
    description:
      "時間外・深夜・休日の割増率の違いや、基礎時給の求め方を具体的な計算例とともに解説します。",
  },
  {
    slug: "tedori-shikumi",
    title: "手取り額の仕組み | 額面と手取りの差はなぜ生まれる？",
    description:
      "月給から天引きされる社会保険料・所得税・住民税の内訳と、手取り額の目安を年収帯別に解説します。",
  },
  {
    slug: "shakaihokenryou-guide",
    title: "社会保険料の計算方法 | 健康保険・厚生年金・雇用保険",
    description:
      "会社員が負担する社会保険料の種類と計算方法を、令和6年度の料率に基づいて解説します。",
  },
  {
    slug: "zangyou-60jikan-rule",
    title: "月60時間超の残業代は50%増 | 2023年改正のポイント",
    description:
      "2023年4月から中小企業にも適用された月60時間超の割増率引き上げについて、計算例を交えて解説します。",
  },
  {
    slug: "nenshu-tedori-hayamihyou",
    title: "年収別の手取り早見表 | 300万〜1000万円の手取り目安",
    description:
      "年収300万円から1000万円までの手取り額目安を一覧表で紹介。扶養人数や年齢による違いも解説します。",
  },
  {
    slug: "shotokuzei-keisan",
    title: "所得税の計算方法 | 税率・控除をわかりやすく解説",
    description:
      "給与所得者の所得税の計算方法を、給与所得控除・基礎控除・累進課税の仕組みから年末調整まで解説します。",
  },
  {
    slug: "juuminzei-keisan",
    title: "住民税の計算方法 | 税率10%の仕組みと計算例",
    description:
      "住民税の計算方法を、均等割・所得割の仕組みから具体的な計算例まで解説。2年目の壁やふるさと納税も紹介。",
  },
  {
    slug: "kyuyo-meisai-mikata",
    title: "給与明細の見方 | 項目・控除を完全ガイド",
    description:
      "給与明細の各項目を徹底解説。基本給・残業代・社会保険料・所得税など、控除の意味と金額の目安を紹介。",
  },
  {
    slug: "saitei-chingin",
    title: "最低賃金一覧（2024年度）| 都道府県別・時給換算チェック",
    description:
      "2024年度の最低賃金を都道府県別に一覧。月給を時給換算して最低賃金以下でないかチェックする方法も解説。",
  },
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            給与ガイド
          </h1>
          <p className="text-slate-500">
            残業代や手取りの仕組みをわかりやすく解説する記事一覧です。
          </p>
        </section>

        <section className="space-y-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="block bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50 transition-colors duration-150"
            >
              <h2 className="font-semibold text-slate-800 mb-2">
                {guide.title}
              </h2>
              <p className="text-sm text-slate-500">{guide.description}</p>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
