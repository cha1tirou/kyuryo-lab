import type { Metadata } from "next";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import EigyobiCalculator from "../../components/calculators/eigyobi-calculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "営業日計算 | 期間の営業日数を即計算 | 給料ラボ",
  description:
    "指定期間の営業日数を無料で即計算。土日・祝日を除いた稼働日数を自動算出。プロジェクト管理や給与計算に便利です。",
  keywords: "営業日計算,稼働日数,営業日数,土日祝除く,ビジネスデイ",
  openGraph: {
    title: "営業日計算 | 期間の営業日数を即計算 | 給料ラボ",
    description:
      "指定期間の営業日数を無料で即計算。土日・祝日を除いた稼働日数を算出。",
    type: "website",
  },
};

export default function EigyobiPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        {/* Hero */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            営業日計算
          </h1>
          <p className="text-slate-500">
            開始日と終了日を入力するだけで、営業日数（土日・祝日除く）を計算します。
          </p>
        </section>

        {/* Calculator Tool */}
        <section className="mb-12">
          <EigyobiCalculator />
        </section>

        {/* Explanation Section */}
        <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            営業日数の計算方法
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              営業日数は、指定期間の総日数から土曜・日曜と祝日を除いた日数です。一般的な企業では、この営業日数が実際の稼働日数となります。
            </p>
            <h3 className="font-semibold text-slate-700">
              営業日計算の用途
            </h3>
            <p>
              プロジェクトのスケジュール管理、工数見積もり、日割り給与の計算、有給休暇の消化計画など、ビジネスのさまざまな場面で営業日数の把握が必要です。
            </p>
            <h3 className="font-semibold text-slate-700">
              祝日の扱い
            </h3>
            <p>
              本ツールでは2024年から2026年までの日本の国民の祝日に対応しています。振替休日も含まれます。ただし、会社独自の休業日（創立記念日、年末年始の追加休暇など）は含まれていません。
            </p>
            <h3 className="font-semibold text-slate-700">
              労働時間の目安
            </h3>
            <p>
              営業日数に1日8時間を掛けると、その期間の標準的な総労働時間が算出できます。工数見積もりやプロジェクト計画の基礎データとして活用できます。
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
              href="/koji"
              className="block bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:bg-slate-50 transition-colors duration-150"
            >
              <h3 className="font-semibold text-slate-800 mb-1">
                工数・人日計算
              </h3>
              <p className="text-sm text-slate-500">
                プロジェクトの工数を人日・人月に換算
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
      </main>
      <Footer />
    </>
  );
}
