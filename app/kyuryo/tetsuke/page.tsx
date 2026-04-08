import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import TakehomeCalculator from "../../../components/calculators/takehome-calculator";
import AdUnit from "../../../components/ads/ad-unit";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import {
  WebApplicationJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "給与手取り計算 | 月収から手取り額を即計算 | 給料ラボ",
  description:
    "月収から社会保険料・所得税・住民税を差し引いた手取り額を無料で即計算。協会けんぽ（令和6年度）の料率で、健康保険・厚生年金・雇用保険の内訳も表示します。",
  keywords: "手取り計算,給与手取り,月収,社会保険料,所得税",
  alternates: { canonical: "/kyuryo/tetsuke" },
  openGraph: {
    title: "給与手取り計算 | 月収から手取り額を即計算 | 給料ラボ",
    description:
      "月収から手取り額を無料で即計算。社会保険料・税金の内訳も表示。",
    type: "website",
  },
};

const faqItems = [
  {
    question: "額面30万円の手取りはいくら？",
    answer:
      "額面30万円（独身・30歳）の場合、手取りは約23〜24万円が目安です。社会保険料が約4.5万円、所得税・住民税が約2万円ほど差し引かれます。",
  },
  {
    question: "手取りが増える方法はありますか？",
    answer:
      "iDeCo（個人型確定拠出年金）やふるさと納税を活用すると、所得控除が増えて税金が減り、実質的な手取りが増えます。また、扶養控除や配偶者控除も有効です。",
  },
  {
    question: "住民税が引かれるのは2年目からですか？",
    answer:
      "住民税は前年の所得に基づいて課税されるため、新卒1年目は住民税がかからず、2年目の6月から天引きが始まります。そのため2年目に手取りが減ったと感じる方が多いです。",
  },
  {
    question: "40歳以上で手取りが減るのはなぜ？",
    answer:
      "40歳になると介護保険料（給与の約0.91%）の負担が始まるため、その分だけ手取りが減ります。月収30万円の場合、月額約2,700円程度の負担増です。",
  },
];

export default function TetsukePage() {
  return (
    <>
      <Header />
      <FAQPageJsonLd items={faqItems} />
      <WebApplicationJsonLd
        name="給与手取り計算 | 給料ラボ"
        url="https://kyuryo-lab.com/kyuryo/tetsuke"
        description="月収から社会保険料・所得税・住民税を差し引いた手取り額を即計算。"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与手取り計算", url: "https://kyuryo-lab.com/kyuryo/tetsuke" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", href: "/" },
            { name: "手取り計算", href: "/kyuryo/tetsuke" },
          ]}
        />
        {/* Hero */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            給与手取り計算
          </h1>
          <p className="text-slate-500">
            月収を入力するだけで、社会保険料・税金を差し引いた手取り額を計算します。
          </p>
        </section>

        {/* 計算ツール */}
        <section className="mb-12">
          <TakehomeCalculator />
        </section>

        <AdUnit slot="2345678901" format="horizontal" />

        {/* 計算方法の解説 */}
        <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            手取り額の計算方法
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              手取り額は、額面の月収から社会保険料と税金を差し引いた金額です。一般的に額面の75〜85%程度が手取りとなります。
            </p>
            <h3 className="font-semibold text-slate-700">社会保険料</h3>
            <p>
              会社員の場合、健康保険料（協会けんぽ東京：9.98%の半額）、厚生年金（18.3%の半額）、雇用保険（0.6%）が天引きされます。40歳以上の方は介護保険料（1.82%の半額）も加算されます。
            </p>
            <h3 className="font-semibold text-slate-700">所得税</h3>
            <p>
              給与所得控除・基礎控除・扶養控除・社会保険料控除を差し引いた課税所得に対して、累進税率（5%〜23%）が適用されます。さらに復興特別所得税（税額の2.1%）が加算されます。
            </p>
            <h3 className="font-semibold text-slate-700">住民税</h3>
            <p>
              前年の所得に基づいて課税され、税率は一律10%（市区町村民税6%＋都道府県民税4%）です。本ツールでは当年の所得で概算しています。
            </p>
          </div>
        </section>

        {/* 関連ツール */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            関連ツール
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/"
              className="block bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50 transition-colors duration-150"
            >
              <h3 className="font-semibold text-slate-800 mb-1">
                残業代計算
              </h3>
              <p className="text-sm text-slate-500">
                月給と残業時間から残業代・割増賃金を計算
              </p>
            </Link>
            <Link
              href="/kyuryo/jikyu"
              className="block bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50 transition-colors duration-150"
            >
              <h3 className="font-semibold text-slate-800 mb-1">
                時給換算計算
              </h3>
              <p className="text-sm text-slate-500">
                月給・年収から時給を換算
              </p>
            </Link>
          </div>
        </section>

        {/* 関連ガイド記事 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">関連ガイド記事</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/guide/tedori-shikumi" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">手取り額の仕組み</p>
              <p className="text-xs text-slate-400 mt-1">額面と手取りの差はなぜ？</p>
            </Link>
            <Link href="/guide/shakaihokenryou-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">社会保険料の計算方法</p>
              <p className="text-xs text-slate-400 mt-1">健康保険・厚生年金・雇用保険</p>
            </Link>
            <Link href="/guide/nenshu-tedori-hayamihyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">年収別の手取り早見表</p>
              <p className="text-xs text-slate-400 mt-1">300万〜1000万円の手取り目安</p>
            </Link>
            <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
              <p className="text-xs text-slate-400 mt-1">税率・控除をわかりやすく</p>
            </Link>
          </div>
        </section>

        <AdUnit slot="2345678902" />

        {/* FAQ */}
        <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            よくある質問
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div>
      <h3 className="font-semibold text-slate-700 mb-1">Q. {question}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">A. {answer}</p>
    </div>
  );
}
