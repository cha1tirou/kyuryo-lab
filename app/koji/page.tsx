import type { Metadata } from "next";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import KojiCalculator from "../../components/calculators/koji-calculator";
import Link from "next/link";
import Breadcrumb from "../../components/ui/breadcrumb";
import {
  WebApplicationJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
} from "../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "工数・人日計算 | 人月・人日・費用を即計算 | 給料ラボ",
  description:
    "プロジェクトの総工数から人日・人月・概算費用を無料で即計算。IT開発やプロジェクト管理に役立つ工数換算ツールです。",
  keywords: "工数計算,人日計算,人月計算,プロジェクト工数,見積もり",
  alternates: { canonical: "/koji" },
  openGraph: {
    title: "工数・人日計算 | 人月・人日・費用を即計算 | 給料ラボ",
    description:
      "プロジェクトの工数を人日・人月・概算費用に変換。見積もりに便利。",
    type: "website",
  },
};

const faqItems = [
  {
    question: "1人月は何時間ですか？",
    answer:
      "一般的に1人月 = 20営業日 × 8時間 = 160時間です。ただし、企業やプロジェクトによって定義が異なる場合があります。",
  },
  {
    question: "人数を増やせば工期は短縮できますか？",
    answer:
      "単純作業は人数に比例して短縮できますが、コミュニケーションコストが増加するため、実際には人数を2倍にしても工期は半分にはなりません（ブルックスの法則）。",
  },
  {
    question: "バッファはどのくらい見込むべきですか？",
    answer:
      "一般的には見積もり工数の20〜50%をバッファとして追加します。要件の不確実性が高いプロジェクトほど、多めのバッファが必要です。",
  },
];

export default function KojiPage() {
  return (
    <>
      <Header />
      <WebApplicationJsonLd
        name="工数・人日計算 | 給料ラボ"
        url="https://kyuryo-lab.com/koji"
        description="プロジェクトの総工数から人日・人月・概算費用を即計算。"
      />
      <FAQPageJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "工数・人日計算", url: "https://kyuryo-lab.com/koji" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", href: "/" },
            { name: "工数計算", href: "/koji" },
          ]}
        />
        {/* Hero */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            工数・人日計算
          </h1>
          <p className="text-slate-500">
            総工数と人数を入力するだけで、人日・人月・概算費用を計算します。
          </p>
        </section>

        {/* Calculator Tool */}
        <section className="mb-12">
          <KojiCalculator />
        </section>

        {/* Explanation Section */}
        <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            工数計算の基本
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              工数とは、作業に必要な労働量を表す単位です。一般的に「人日」（1人が1日で行う作業量）や「人月」（1人が1か月で行う作業量）で表されます。
            </p>
            <h3 className="font-semibold text-slate-700">
              人日と人月の換算
            </h3>
            <p>
              1人月は通常20営業日として計算します。たとえば総工数160時間の場合、1日8時間稼働で20人日 = 1人月となります。人数が増えると所要日数は短くなりますが、総工数は変わりません。
            </p>
            <h3 className="font-semibold text-slate-700">
              単価の目安
            </h3>
            <p>
              IT業界では1人月あたりの単価は、ジュニアエンジニアで50〜70万円、ミドルクラスで70〜100万円、シニアクラスで100〜150万円が目安です。PM・コンサルタントはさらに高くなる傾向があります。
            </p>
            <h3 className="font-semibold text-slate-700">
              見積もりのポイント
            </h3>
            <p>
              実際のプロジェクトでは、会議・レビュー・テスト・バグ修正などの間接工数が発生します。一般的に、直接的な開発工数に対して1.3〜1.5倍の係数を掛けた見積もりが推奨されます。
            </p>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            関連ツール
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/eigyobi"
              className="block bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50 transition-colors duration-150"
            >
              <h3 className="font-semibold text-slate-800 mb-1">
                営業日計算
              </h3>
              <p className="text-sm text-slate-500">
                期間の営業日数を土日・祝日除きで計算
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
            <Link href="/guide/kyuyo-meisai-mikata" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
              <p className="font-medium text-slate-700 text-sm">給与明細の見方</p>
              <p className="text-xs text-slate-400 mt-1">残業代の項目を正しくチェック</p>
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
