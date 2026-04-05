import Link from "next/link";
import AdSenseUnit from "../ads/adsense-unit";

const toolLinks = [
  { href: "/", label: "残業代計算" },
  { href: "/kyuryo/tetsuke", label: "手取り計算" },
  { href: "/kyuryo/jikyu", label: "時給換算" },
  { href: "/eigyobi", label: "営業日計算" },
  { href: "/koji", label: "工数計算" },
];

const guideLinks = [
  { href: "/guide", label: "給与ガイド" },
  { href: "/guide/zangyoudai-keisan-houhou", label: "残業代の計算方法" },
  { href: "/guide/tedori-shikumi", label: "手取り額の仕組み" },
  { href: "/guide/shakaihokenryou-guide", label: "社会保険料ガイド" },
  { href: "/guide/zangyou-60jikan-rule", label: "60時間超の残業代" },
  { href: "/guide/nenshu-tedori-hayamihyou", label: "年収別手取り早見表" },
  { href: "/guide/shotokuzei-keisan", label: "所得税の計算方法" },
  { href: "/guide/juuminzei-keisan", label: "住民税の計算方法" },
  { href: "/guide/kyuyo-meisai-mikata", label: "給与明細の見方" },
  { href: "/guide/saitei-chingin", label: "最低賃金一覧" },
  { href: "/guide/nenmatsu-chousei", label: "年末調整の仕組み" },
  { href: "/guide/bonus-zeikin", label: "ボーナスの手取り" },
  { href: "/guide/taishokukin-zeikin", label: "退職金の税金" },
  { href: "/guide/fuyou-kojo-guide", label: "扶養控除と103万の壁" },
  { href: "/guide/103man-kabe", label: "103万円の壁とは" },
  { href: "/guide/shakai-hoken-kanyu-jouken", label: "社会保険の加入条件" },
  { href: "/guide/yukyu-kyuka-keisan", label: "有給休暇の計算方法" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 mt-auto">
      <div className="mx-auto max-w-4xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 mb-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-2">
              計算ツール
            </h3>
            <ul className="space-y-1">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-2">
              ガイド記事
            </h3>
            <ul className="space-y-1">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-4 text-center text-sm text-slate-500">
          <p className="mb-1">
            計算結果はあくまで概算です。正確な金額は勤務先・税務署等にご確認ください。
          </p>
          <p>&copy; {new Date().getFullYear()} 給料ラボ</p>
        </div>
        <AdSenseUnit slot="footer-ad" format="horizontal" />
      </div>
    </footer>
  );
}
