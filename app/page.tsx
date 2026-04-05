import type { Metadata } from "next";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import OvertimeCalculator from "../components/calculators/overtime-calculator";
import Link from "next/link";
import Breadcrumb from "../components/ui/breadcrumb";
import {
  WebApplicationJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
} from "../components/seo/json-ld";

export const metadata: Metadata = {
  title: "残業代計算 | 無料で即計算・スマホ対応 | 給料ラボ",
  description:
    "残業時間・深夜・休日出勤の残業代を無料で即計算。スマホで使いやすいシンプルなUIで、時間外・深夜・法定休日の割増賃金を正確に算出します。",
  keywords: "残業代計算,残業代,計算,割増賃金,時間外労働",
  alternates: { canonical: "/" },
  openGraph: {
    title: "残業代計算 | 無料で即計算・スマホ対応 | 給料ラボ",
    description:
      "残業時間・深夜・休日出勤の残業代を無料で即計算。スマホで使いやすいシンプルなUIで割増賃金を算出。",
    type: "website",
  },
};

const faqItems = [
  {
    question: "深夜残業と通常残業が重なった場合は？",
    answer:
      "深夜時間帯（22時〜5時）に残業した場合、時間外労働の割増25%に加えて深夜割増25%が適用され、合計50%増となります。本ツールでは、残業時間に深夜分も含めて入力し、深夜残業時間を別途入力することで正しく計算されます。",
  },
  {
    question: "月60時間超の残業代はどう変わりますか？",
    answer:
      "2023年4月から、中小企業を含む全ての企業で月60時間を超える残業には50%増の割増率が適用されます。本ツールではこの規定に対応しており、60時間までは25%増、60時間を超えた分は50%増で自動計算されます。",
  },
  {
    question: "法定休日と所定休日の違いは？",
    answer:
      "法定休日は労働基準法で定められた週1日（または4週4日）の休日で、35%増の割増賃金が適用されます。会社が独自に定める所定休日（例：土曜日）の出勤は、週40時間を超える場合に時間外労働として25%増が適用されます。",
  },
  {
    question: "基礎時給の計算に含まれない手当はありますか？",
    answer:
      "家族手当、通勤手当、別居手当、子女教育手当、住宅手当、臨時に支払われた賃金、1か月を超える期間ごとに支払われる賃金は、基礎時給の計算から除外されます。本ツールでは基本月給のみで計算しています。",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <WebApplicationJsonLd
        name="残業代計算 | 給料ラボ"
        url="https://kyuryo-lab.com/"
        description="残業時間・深夜・休日出勤の残業代を無料で即計算。"
      />
      <FAQPageJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "残業代計算", url: "https://kyuryo-lab.com/" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", href: "/" },
            { name: "残業代計算", href: "/" },
          ]}
        />
        {/* Hero */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            残業代計算
          </h1>
          <p className="text-slate-500">
            月給と残業時間を入力するだけで、残業代を即座に計算します。
          </p>
        </section>

        {/* 計算ツール */}
        <section className="mb-12">
          <OvertimeCalculator />
        </section>

        {/* 計算方法の解説 */}
        <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            残業代の計算方法
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              残業代は、基礎時給に割増率を掛けて算出します。基礎時給は「基本月給
              ÷
              月所定労働時間」で求められます。月所定労働時間は一般的に160時間（1日8時間×20日）です。
            </p>
            <h3 className="font-semibold text-slate-700">
              時間外労働（通常の残業）
            </h3>
            <p>
              法定労働時間（1日8時間・週40時間）を超えた労働には、基礎時給の25%増（1.25倍）の割増賃金が支払われます。月60時間を超える残業については、2023年4月から中小企業も含めて50%増（1.50倍）が適用されます。
            </p>
            <h3 className="font-semibold text-slate-700">深夜労働の割増</h3>
            <p>
              22時から翌5時までの深夜時間帯に労働した場合、さらに25%の割増が加算されます。深夜に残業した場合は、時間外の25%と深夜の25%を合わせて50%増となります。
            </p>
            <h3 className="font-semibold text-slate-700">
              法定休日出勤の割増
            </h3>
            <p>
              法定休日（週1日の休日）に出勤した場合は、基礎時給の35%増（1.35倍）の割増賃金が適用されます。法定休日の労働は、時間外労働とは別に計算されます。
            </p>
          </div>
        </section>

        {/* 関連ガイド記事 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">関連ガイド記事</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/guide/zangyoudai-keisan-houhou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">残業代の計算方法を徹底解説</p>
              <p className="text-xs text-slate-400 mt-1">割増率・基礎時給・計算例つき</p>
            </Link>
            <Link href="/guide/zangyou-60jikan-rule" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">月60時間超の残業代50%増</p>
              <p className="text-xs text-slate-400 mt-1">2023年改正のポイント</p>
            </Link>
            <Link href="/guide/kyuyo-meisai-mikata" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">給与明細の見方</p>
              <p className="text-xs text-slate-400 mt-1">残業代の項目を正しくチェック</p>
            </Link>
            <Link href="/guide/saitei-chingin" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">最低賃金一覧（2024年度）</p>
              <p className="text-xs text-slate-400 mt-1">時給換算で最低賃金チェック</p>
            </Link>
          </div>
        </section>

        {/* 関連ツール */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            関連ツール
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/kyuryo/tetsuke"
              className="block bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50 transition-colors duration-150"
            >
              <h3 className="font-semibold text-slate-800 mb-1">
                給与手取り計算
              </h3>
              <p className="text-sm text-slate-500">
                月収から社会保険料・税金を差し引いた手取り額を計算
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

        {/* 人気ガイド記事 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">人気ガイド記事</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/guide/nenshu-tedori-hayamihyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">年収別の手取り早見表</p>
              <p className="text-xs text-slate-400 mt-1">300万〜1000万円の手取り目安</p>
            </Link>
            <Link href="/guide/tedori-shikumi" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">手取り額の仕組み</p>
              <p className="text-xs text-slate-400 mt-1">額面と手取りの差はなぜ？</p>
            </Link>
            <Link href="/guide/fuyou-kojo-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">扶養控除と103万円の壁</p>
              <p className="text-xs text-slate-400 mt-1">年収の壁を完全解説</p>
            </Link>
            <Link href="/guide/shakaihokenryou-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">社会保険料の計算方法</p>
              <p className="text-xs text-slate-400 mt-1">健康保険・厚生年金・雇用保険</p>
            </Link>
            <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
              <p className="text-xs text-slate-400 mt-1">税率・控除をわかりやすく</p>
            </Link>
            <Link href="/guide/nenmatsu-chousei" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">年末調整の仕組み</p>
              <p className="text-xs text-slate-400 mt-1">控除・還付をわかりやすく</p>
            </Link>
          </div>
        </section>

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

        {/* AdSense slot */}
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
