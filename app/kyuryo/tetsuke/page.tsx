import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import TakehomeCalculator from "../../../components/calculators/takehome-calculator";
import Link from "next/link";

export const metadata: Metadata = {
  title: "給与手取り計算 | 月収から手取り額を即計算 | 給料ラボ",
  description:
    "月収から社会保険料・所得税・住民税を差し引いた手取り額を無料で即計算。協会けんぽ（令和6年度）の料率で、健康保険・厚生年金・雇用保険の内訳も表示します。",
  keywords: "手取り計算,給与手取り,月収,社会保険料,所得税",
  openGraph: {
    title: "給与手取り計算 | 月収から手取り額を即計算 | 給料ラボ",
    description:
      "月収から手取り額を無料で即計算。社会保険料・税金の内訳も表示。",
    type: "website",
  },
};

export default function TetsukePage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
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

        {/* AdSense slot */}
      </main>
      <Footer />
    </>
  );
}
