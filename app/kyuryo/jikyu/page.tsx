import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import JikyuCalculator from "../../../components/calculators/jikyu-calculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "時給換算計算 | 月給・年収から時給を計算 | 給料ラボ",
  description:
    "月給・年収から時給を無料で即計算。自分の時間単価を知ることで、残業の価値や転職時の比較に役立ちます。",
  keywords: "時給換算,時給計算,月給から時給,年収から時給,時間単価",
  openGraph: {
    title: "時給換算計算 | 月給・年収から時給を計算 | 給料ラボ",
    description:
      "月給・年収から時給を無料で即計算。時間単価を把握して給与を比較。",
    type: "website",
  },
};

export default function JikyuPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        {/* Hero */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            時給換算計算
          </h1>
          <p className="text-slate-500">
            月給・年収を入力するだけで、時給・日給を即座に計算します。
          </p>
        </section>

        {/* Calculator Tool */}
        <section className="mb-12">
          <JikyuCalculator />
        </section>

        {/* Explanation Section */}
        <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            時給換算の計算方法
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              時給換算は「月給 ÷ 月所定労働時間」で算出します。月所定労働時間は一般的に160時間（1日8時間×月20日）ですが、会社によって異なります。
            </p>
            <h3 className="font-semibold text-slate-700">
              時給換算を知るメリット
            </h3>
            <p>
              自分の時給を把握することで、残業1時間あたりの価値を正確に理解できます。また、転職時にパート・アルバイトと正社員の報酬比較や、フリーランスの単価設定にも役立ちます。
            </p>
            <h3 className="font-semibold text-slate-700">
              年収ベースの計算
            </h3>
            <p>
              年収から計算する場合は「年収 ÷ 12 ÷ 月所定労働時間」で時給を算出します。ただし賞与（ボーナス）が含まれる場合は、月給ベースの計算と結果が異なる点に注意してください。
            </p>
            <h3 className="font-semibold text-slate-700">
              最低賃金との比較
            </h3>
            <p>
              2024年10月以降、東京都の最低賃金は1,163円です。月給を時給換算した結果が最低賃金を下回る場合は、労働基準法違反の可能性があります。
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
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            よくある質問
          </h2>
          <div className="space-y-6">
            <FaqItem
              question="月給に交通費は含めるべきですか？"
              answer="一般的に、時給換算では基本給のみで計算します。交通費（通勤手当）は労働の対価ではなく実費補填のため、含めないのが正確です。"
            />
            <FaqItem
              question="ボーナスを含めた場合の時給はどう計算しますか？"
              answer="年収（ボーナス込み）を12で割って月額にし、それを月所定労働時間で割ります。本ツールの「年収」モードで計算できます。"
            />
            <FaqItem
              question="月所定労働時間がわからない場合は？"
              answer="一般的な正社員は月160時間（1日8時間×20日）です。就業規則や雇用契約書に記載されている所定労働時間を確認してください。"
            />
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
