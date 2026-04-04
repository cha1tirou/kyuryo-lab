import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Link from "next/link";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "最低賃金一覧（2024年度）| 都道府県別・時給換算チェック | 給料ラボ",
  description:
    "2024年度の最低賃金を���道府県別に一覧表で紹介。月給を時給換算して最低賃金を下回っていないか���ェックする方法も解説します。",
  keywords: "最低賃金,2024,��道府県,一覧,時給,最低賃金以下",
  alternates: { canonical: "/guide/saitei-chingin" },
  openGraph: {
    title: "最低賃金一覧（2024年度）| 都道府県別・時給換算チェック",
    description: "2024年度の最低賃金を都道府県別に一覧。月給からのチェック方法も解説。",
    type: "article",
  },
};

const wageData = [
  { region: "北海道", wage: 1010 },
  { region: "青森", wage: 953 },
  { region: "岩手", wage: 952 },
  { region: "宮城", wage: 973 },
  { region: "秋田", wage: 951 },
  { region: "山形", wage: 955 },
  { region: "福島", wage: 955 },
  { region: "茨城", wage: 1005 },
  { region: "栃木", wage: 1004 },
  { region: "群馬", wage: 985 },
  { region: "埼玉", wage: 1078 },
  { region: "千葉", wage: 1076 },
  { region: "東京", wage: 1163 },
  { region: "神奈川", wage: 1162 },
  { region: "新潟", wage: 985 },
  { region: "富山", wage: 998 },
  { region: "石川", wage: 984 },
  { region: "福井", wage: 984 },
  { region: "山梨", wage: 988 },
  { region: "長野", wage: 998 },
  { region: "岐阜", wage: 1001 },
  { region: "静岡", wage: 1034 },
  { region: "愛知", wage: 1077 },
  { region: "三重", wage: 1023 },
  { region: "滋賀", wage: 1017 },
  { region: "京都", wage: 1058 },
  { region: "大阪", wage: 1114 },
  { region: "兵庫", wage: 1052 },
  { region: "奈良", wage: 986 },
  { region: "和歌山", wage: 980 },
  { region: "鳥取", wage: 957 },
  { region: "島根", wage: 962 },
  { region: "岡山", wage: 982 },
  { region: "広島", wage: 1020 },
  { region: "山口", wage: 979 },
  { region: "徳島", wage: 980 },
  { region: "香川", wage: 970 },
  { region: "愛媛", wage: 956 },
  { region: "高知", wage: 952 },
  { region: "福岡", wage: 992 },
  { region: "佐賀", wage: 956 },
  { region: "長崎", wage: 953 },
  { region: "熊本", wage: 952 },
  { region: "大分", wage: 954 },
  { region: "宮崎", wage: 952 },
  { region: "鹿児島", wage: 953 },
  { region: "沖縄", wage: 952 },
];

export default function SaiteiChinginPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="最低賃金一覧（2024年度）| 都道府県別・時給換算チェック"
        description="2024年度の最低賃金を都道府県別に一覧。月給を時給換算して最低賃金以下かチェックする方法も解説。"
        url="https://kyuryo-lab.com/guide/saitei-chingin"
        datePublished="2025-04-04"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "最低賃金一覧", url: "https://kyuryo-lab.com/guide/saitei-chingin" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              最低賃金一覧（2024年度）| 都道府県別・時給換算チェック
            </h1>
            <p className="text-slate-500">
              2024年10月改定の最低賃金を都道���県別に掲載。自分の月給が最低賃金を上回っているか、時給換算で確認する方法も解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#ichiran" className="hover:underline">都道府県別 最低賃金一覧</a></li>
                <li><a href="#check" className="hover:underline">月給から最低賃金をチェックする方法</a></li>
                <li><a href="#keisan-rei" className="hover:underline">具体的な計算例</a></li>
                <li><a href="#taisho" className="hover:underline">最低賃金の対象となる賃金</a></li>
                <li><a href="#ihan" className="hover:underline">最低賃金を下回った場合</a></li>
              </ol>
            </nav>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="ichiran">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 都道府県別 最低賃金一覧（2024年10月〜）</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  2024年度の全国加重平均は<strong>1,055円</strong>（前年度比51円増）。過去最大の引き上げ幅です。
                </p>
                <div className="overflow-x-auto max-h-96 overflow-y-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead className="sticky top-0">
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">都道府県</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">最低賃金（円/時間）</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wageData.map((item, i) => (
                        <tr key={item.region} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                          <td className="border border-slate-200 px-4 py-2">{item.region}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right font-semibold">
                            {item.wage.toLocaleString()}円
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  出典：厚生労働省「地域別最低賃金の全国一覧」（令和6年度）
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="check">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 月給から最低賃金をチェックする方法</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>月給制の場合、以下の計算式で時給換算して最低賃金と比較します。</p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  時給 = 月給（対象賃金）&divide; 月平均所定労働時間
                </div>
                <p>
                  月平均所定労働時間は「年間所定労働日数 &times; 1日の所定労働時間 &divide; 12」で求めます。年間245日・1日8時間の場合：
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  245日 &times; 8時間 &divide; 12 = <strong>約163.3時間</strong>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="keisan-rei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 具体的な計算例</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>東京都で月給18万円（対象賃金）、月平均所定労働時間163.3時間の場合：</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <p>時給換算 = 180,000 &divide; 163.3 = <strong>1,102円</strong></p>
                  <p>東京���の最低賃金 = <strong>1,163円</strong></p>
                  <p className="text-red-600 font-bold">→ 最低賃金を下回っている（61円不足）</p>
                </div>
                <p>
                  この場合、月給を最低でも 1,163 &times; 163.3 = <strong>約189,920円</strong>に引き上げる必要があります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="taisho">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 最低賃金の対象となる賃金</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>最低賃金の比較対象に��<strong>含まれない</strong>賃金があります。</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>臨時に支払われる賃金（結婚祝金など）</li>
                  <li>1か月を超える期間ごとに支払われる賃金（賞与など）</li>
                  <li>所定時間外・休日・深夜の割増賃金</li>
                  <li>精皆勤手当・通勤手当・家族手当</li>
                </ul>
                <p>
                  つまり、<strong>基本給 + 職務手当</strong>など毎月固定で支払われる賃金が比較対象��す。残業代や通勤手当を含めて「最低賃金以上」と判断するのは誤りです。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="ihan">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 最低賃金を下回った場合</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  最低賃金法に違反した場合、使用者には<strong>50万円以下の罰金</strong>が科される可能性があります。地域別最低賃金は、正社員・パート・アルバイトを問わず、すべての労働者に適用されます。
                </p>
                <p>
                  最低賃金を下回っていると思われる場合は、まず自分の月給を時���換算して確認し、会社に是正を求めるか、最寄りの労働基準監督署に相談しましょう。
                </p>
              </div>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">月給から時給を換算する</h2>
              <p className="text-sm text-slate-600 mb-4">
                月給や年収を入力して、あなたの時給を確認できます。
              </p>
              <Link
                href="/kyuryo/jikyu"
                className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
              >
                時給換算ツールを使う
              </Link>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連記事</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/guide/zangyoudai-keisan-houhou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">残業代の計算方法を徹底解説</p>
                </Link>
                <Link href="/guide/kyuyo-meisai-mikata" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">給与明細の見方</p>
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
