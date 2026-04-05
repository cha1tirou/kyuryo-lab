import type { Metadata } from "next";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import Link from "next/link";
import Breadcrumb from "../../components/ui/breadcrumb";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "../../components/seo/json-ld";

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
  {
    slug: "nenmatsu-chousei",
    title: "年末調整の仕組みと書き方 | 控除・還付をわかりやすく解説",
    description:
      "年末調整の仕組みと必要書類、受けられる控除、還付金の目安を初心者向けに解説します。",
  },
  {
    slug: "bonus-zeikin",
    title: "ボーナスの手取りと税金 | 賞与から引かれる金額を解説",
    description:
      "ボーナスから引かれる社会保険料・所得税の仕組みと計算方法。額面別の手取り目安も紹介。",
  },
  {
    slug: "taishokukin-zeikin",
    title: "退職金の税金と手取り | 退職所得控除の計算方法",
    description:
      "退職金にかかる税金の計算方法を、退職所得控除・分離課税の仕組みから具体例まで解説。",
  },
  {
    slug: "fuyou-kojo-guide",
    title: "扶養控除と103万円の壁 | 年収の壁を完全解説",
    description:
      "103万円・106万円・130万円・150万円の壁を一覧で解説。壁を超えた場合の影響を具体的な金額で紹介。",
  },
  {
    slug: "103man-kabe",
    title: "103万円の壁とは？超えたらどうなる？影響と対策を解説",
    description:
      "103万円の壁を超えた場合の本人・扶養者への影響を具体的なシミュレーションつきで解説。2024年の制度変更情報も。",
  },
  {
    slug: "shakai-hoken-kanyu-jouken",
    title: "社会保険の加入条件 | パート・アルバイトの適用拡大を解説",
    description:
      "2024年の適用拡大でパート・ア��バイトの社会保険加入条件がどう変わったか。106万円・130万円の壁との関係も解説。",
  },
  {
    slug: "yukyu-kyuka-keisan",
    title: "有給休暇の日数と計算方法 | 付与ルール・買取・繰越を解説",
    description:
      "有給休暇の付与日数・賃金計算方法・繰越ルール・年5日取得義務を、フルタイム・パート別にわかりやすく解説。",
  },
  {
    slug: "nenshuu-heikin",
    title: "【2025年版】年齢別・業種別の平均年収まとめ",
    description:
      "日本の平均年収を年齢別・業種別・男女別に一覧表で紹介。年収を上げる方法や手取りとの関係もわかりやすく解説。",
  },
  {
    slug: "zangyou-jikan-joigen",
    title: "残業時間の上限は月45時間 | 36協定と罰則を解説",
    description:
      "36協定による残業時間の上限規制を解説。原則月45時間・年360時間、特別条項、違反時の罰則、2024年の適用拡大まで。",
  },
  {
    slug: "fuyou-nai-hatarakikata",
    title: "扶養内で働くには？年収の壁と申請手続きを解説",
    description:
      "扶養内で働くための条件と年収の壁（103万・106万・130万・150万）を一覧で解説。申請手続きや手取りシミュレーションも。",
  },
  {
    slug: "fukugyou-zeikin",
    title: "副業の税金と確定申告 | 20万円ルール・計算方法を解説",
    description:
      "副業の所得にかかる税金と確定申告の条件・手順を解説。20万円ルール、経費、会社バレ防止の方法、年収別シミュレーションも。",
  },
  {
    slug: "tenshoku-kyuyo-koushou",
    title: "転職の給与交渉を成功させるコツと例文",
    description:
      "転職時の給与交渉のタイミング、希望年収の決め方、具体的な伝え方・例文、業界別の年収相場を解説。",
  },
  {
    slug: "shakaihokenryou-setuyaku",
    title: "社会保険料を安くする方法 | 合法的な節約術を解説",
    description:
      "社会保険料を合法的に安くする方法を解説。4-6月の残業調整、iDeCo活用、月給別のシミュレーションも。",
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
      <CollectionPageJsonLd
        name="給与ガイド"
        description="残業代の計算方法、手取り額の仕組み、社会保険料の基礎知識など、給与に関する情報をわかりやすく解説します。"
        url="https://kyuryo-lab.com/guide"
        items={guides.map((g) => ({
          name: g.title,
          url: `https://kyuryo-lab.com/guide/${g.slug}`,
        }))}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
        ]} />
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
