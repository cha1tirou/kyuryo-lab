import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          ページが見つかりません
        </h2>
        <p className="text-slate-500 mb-8">
          お探しのページは移動または削除された可能性があります。
        </p>

        <div className="mb-12">
          <Link
            href="/"
            className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
          >
            トップページへ戻る
          </Link>
        </div>

        <div className="text-left">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            計算ツール
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 mb-8">
            {[
              { href: "/", label: "残業代計算", desc: "残業代・割増賃金を即計算" },
              { href: "/kyuryo/tetsuke", label: "給与手取り計算", desc: "月収から手取り額を計算" },
              { href: "/kyuryo/jikyu", label: "時給換算計算", desc: "月給・年収から時給を換算" },
              { href: "/eigyobi", label: "営業日計算", desc: "期間の営業日数を計算" },
              { href: "/koji", label: "工数・人日計算", desc: "プロジェクト工数を換算" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
              >
                <p className="font-medium text-slate-700">{item.label}</p>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </Link>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            給与ガイド
          </h3>
          <Link
            href="/guide"
            className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
          >
            <p className="font-medium text-slate-700">給与ガイド一覧</p>
            <p className="text-sm text-slate-500">残業代・手取り・税金の基礎知識をわかりやすく解説</p>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
