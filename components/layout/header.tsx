import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-slate-800">
          給料ラボ
        </Link>
        <nav className="flex flex-wrap gap-3 text-sm font-medium">
          <Link
            href="/"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            残業代計算
          </Link>
          <Link
            href="/kyuryo/tetsuke"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            手取り計算
          </Link>
          <Link
            href="/kyuryo/jikyu"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            時給換算
          </Link>
          <Link
            href="/eigyobi"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            営業日計算
          </Link>
          <Link
            href="/koji"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            工数計算
          </Link>
          <Link
            href="/guide"
            className="text-slate-600 hover:text-blue-600 transition-colors"
          >
            ガイド
          </Link>
        </nav>
      </div>
    </header>
  );
}
