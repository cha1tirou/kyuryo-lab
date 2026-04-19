import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title:
    "有給休暇の日数と計算方法 | 付与ルール・買取・繰越を解説 | 給料ラボ",
  description:
    "有給休暇の付与日数を勤続年数別に一覧で解説。パートの比例付与、有給取得時の賃金計算方法（3方式）、繰越・時効・買取のルール、年5日取得義務まで網羅。",
  keywords: "有給休暇,日数,計算,付与,買取,繰越,パート",
  alternates: { canonical: "/guide/yukyu-kyuka-keisan" },
  openGraph: {
    title: "有給休暇の日数と計算方法 | 付与ルール・買取・繰越を解説",
    description:
      "有給休暇の付与日数、賃金計算方法、繰越・買取ルールを解説。",
    type: "article",
  },
};

export default function YukyuKyukaKeisanPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="有給休暇の日数と計算方法 | 付与ルール・買取・繰越を解説"
        description="有給休暇の付与日数を勤続年数別に解説。賃金計算方法、繰越・買取ルール、年5日取得義務まで網羅。"
        url="https://kyuryo-lab.com/guide/yukyu-kyuka-keisan"
        datePublished="2025-04-05"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "有給休暇の日数と計算方法",
            url: "https://kyuryo-lab.com/guide/yukyu-kyuka-keisan",
          },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <article>
          <header className="mb-8">
            <Breadcrumb
              items={[
                { name: "ホーム", href: "/" },
                { name: "給与ガイド", href: "/guide" },
                {
                  name: "有給休暇の日数と計算方法",
                  href: "/guide/yukyu-kyuka-keisan",
                },
              ]}
            />
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">
                給与ガイド
              </Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              有給休暇の日数と計算方法 | 付与ルール・買取・繰越を解説
            </h1>
            <p className="text-slate-500">
              有給休暇は何日もらえる？取得時の給料はどう計算される？付与日数の一覧表、パートの比例付与、繰越・買取のルールまで、有給休暇の基本を網羅的に解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#kihon" className="hover:underline">
                    有給休暇の基本ルール（労基法39条）
                  </a>
                </li>
                <li>
                  <a href="#fuyo-nissu" className="hover:underline">
                    勤続年数別の付与日数テーブル
                  </a>
                </li>
                <li>
                  <a href="#chingin" className="hover:underline">
                    有給取得時の賃金計算方法
                  </a>
                </li>
                <li>
                  <a href="#kurikoshi" className="hover:underline">
                    有給の繰越と時効
                  </a>
                </li>
                <li>
                  <a href="#kaitori" className="hover:underline">
                    有給の買取は原則禁止
                  </a>
                </li>
                <li>
                  <a href="#5nichi" className="hover:underline">
                    年5日取得義務（2019年改正）
                  </a>
                </li>
              </ol>
            </nav>


            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kihon"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. 有給休暇の基本ルール（労基法39条）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  年次有給休暇（有給休暇・有休）は、<strong>労働基準法第39条</strong>で定められた労働者の権利です。給料をもらいながら休める制度で、正社員だけでなくパート・アルバイトにも適用されます。
                </p>
                <h3 className="font-semibold text-slate-700">
                  発生条件（2つ）
                </h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>
                    <strong>6か月以上継続して勤務</strong>していること
                  </li>
                  <li>
                    全労働日の<strong>8割以上出勤</strong>していること
                  </li>
                </ul>
                <p>
                  この2つの条件を満たせば、雇用形態に関係なく有給休暇が付与されます。試用期間中でも6か月経過すれば発生します。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>注意</strong>
                    ：有給休暇は会社が「与えるもの」ではなく、法律上<strong>自動的に発生する権利</strong>です。「うちの会社には有給がない」という説明は違法です。
                  </p>
                </div>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="fuyo-nissu"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 勤続年数別の付与日数テーブル
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <h3 className="font-semibold text-slate-700">
                  フルタイム労働者の付与日数
                </h3>
                <p>
                  週5日以上または週30時間以上勤務する労働者の付与日数は以下の通りです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          勤続年数
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          付与日数
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { kinzoku: "6か月", nissu: "10日" },
                        { kinzoku: "1年6か月", nissu: "11日" },
                        { kinzoku: "2年6か月", nissu: "12日" },
                        { kinzoku: "3年6か月", nissu: "14日" },
                        { kinzoku: "4年6か月", nissu: "16日" },
                        { kinzoku: "5年6か月", nissu: "18日" },
                        { kinzoku: "6年6か月以上", nissu: "20日（上限）" },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 1 ? "bg-slate-50" : ""}
                        >
                          <td className="border border-slate-200 px-4 py-2">
                            {row.kinzoku}
                          </td>
                          <td className="border border-slate-200 px-4 py-2 text-right font-semibold">
                            {row.nissu}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-700 mt-4">
                  パート・アルバイトの比例付与
                </h3>
                <p>
                  週の所定労働日数が4日以下かつ週30時間未満の場合、労働日数に応じた<strong>比例付与</strong>となります。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          週の労働日数
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          6か月
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          1.5年
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          2.5年
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          3.5年
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          4.5年
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          5.5年
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          6.5年〜
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          days: "4日",
                          d: ["7", "8", "9", "10", "12", "13", "15"],
                        },
                        {
                          days: "3日",
                          d: ["5", "6", "6", "8", "9", "10", "11"],
                        },
                        {
                          days: "2日",
                          d: ["3", "4", "4", "5", "6", "6", "7"],
                        },
                        {
                          days: "1日",
                          d: ["1", "2", "2", "2", "3", "3", "3"],
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 1 ? "bg-slate-50" : ""}
                        >
                          <td className="border border-slate-200 px-4 py-2 font-semibold">
                            {row.days}
                          </td>
                          {row.d.map((v, j) => (
                            <td
                              key={j}
                              className="border border-slate-200 px-4 py-2 text-right"
                            >
                              {v}日
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※
                  年間の所定労働日数で判定する場合もあります（週1日=年48〜72日、週2日=年73〜120日、週3日=年121〜168日、週4日=年169〜216日）。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="chingin"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 有給取得時の賃金計算方法
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  有給休暇を取得した日の賃金は、以下の<strong>3つの方式</strong>のいずれかで計算されます。どの方式を採用するかは就業規則で定められています。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          方式
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          計算方法
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          特徴
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          通常賃金
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          通常勤務した場合と同じ賃金
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          最も一般的。月給制なら欠勤控除なし
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          平均賃金
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          過去3か月の賃金総額 &divide; 暦日数
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          通常賃金より低くなることが多い
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          標準報酬日額
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          標準報酬月額 &divide; 30
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          労使協定が必要。健保の標準報酬を使用
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>計算例（平均賃金方式）</strong>
                  </p>
                  <p className="mt-1">
                    過去3か月の賃金：4月30万円 + 5月28万円 + 6月32万円 = 90万円
                  </p>
                  <p>暦日数：30日 + 31日 + 30日 = 91日</p>
                  <p>
                    平均賃金 = 900,000 &divide; 91 ={" "}
                    <strong>9,890円/日</strong>
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    ※ 最低保障額（賃金総額 &divide; 実労働日数 &times;
                    60%）を下回る場合は最低保障額が適用されます。
                  </p>
                </div>

                <p>
                  <strong>月給制の正社員</strong>
                  の場合は「通常賃金」方式が一般的で、有給を取っても給料が変わりません。<strong>時給制のパート</strong>の場合は「通常賃金」なら時給
                  &times;
                  所定労働時間分が支払われます。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kurikoshi"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 有給の繰越と時効
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  有給休暇には<strong>2年の時効</strong>があります（労基法第115条）。付与された年度に使い切れなかった分は翌年度に繰り越せますが、2年経過すると消滅します。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>繰越の例</strong>
                  </p>
                  <p className="mt-1">
                    入社6か月後：10日付与 → 8日使用 → 残り2日を繰越
                  </p>
                  <p>
                    入社1年6か月後：11日付与 + 繰越2日 ={" "}
                    <strong>13日</strong>が使える
                  </p>
                  <p>
                    入社2年6か月後：繰越分2日は時効で消滅、新規12日 +
                    前年残の繰越分
                  </p>
                </div>
                <p>
                  最大で<strong>40日</strong>（前年繰越20日 +
                  当年付与20日）が保有上限となります。勤続6年6か月以上で毎年使い切れない場合に最大値に達します。
                </p>
                <p>
                  なお、会社が独自に2年以上の繰越を認めることは可能です。法律は最低基準を定めているため、<strong>労働者に有利な制度</strong>は許容されます。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kaitori"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 有給の買取は原則禁止
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  有給休暇を金銭で買い取ることは<strong>原則として禁止</strong>されています。有給は「休む権利」であるため、お金で代替すると制度の趣旨が損なわれるからです。
                </p>
                <p>
                  ただし、以下の<strong>例外的なケース</strong>では買取が認められています。
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>退職時に消化しきれない有給</strong>
                    ：退職日までに使い切れない残日数を買い取る
                  </li>
                  <li>
                    <strong>時効で消滅する有給</strong>
                    ：2年の時効を迎えて消滅する分を買い取る
                  </li>
                  <li>
                    <strong>法定を上回る付与分</strong>
                    ：会社独自に法定より多く付与した分を買い取る
                  </li>
                </ul>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>買取金額の目安</strong>
                  </p>
                  <p className="mt-1">
                    法律で買取金額の基準は定められていません。一般的には以下が目安です。
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li>
                      月給制：月給 &divide; 所定労働日数 = 1日あたりの金額
                    </li>
                    <li>時給制：時給 &times; 1日の所定労働時間</li>
                  </ul>
                  <p className="mt-1 text-xs text-slate-400">
                    ※
                    買取は会社の義務ではなく、あくまで任意です。就業規則や個別の交渉で決まります。
                  </p>
                </div>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="5nichi"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 年5日取得義務（2019年改正）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  2019年4月の労働基準法改正により、<strong>年10日以上の有給休暇が付与される労働者</strong>に対して、使用者は年5日以上の有給を確実に取得させることが義務付けられました。
                </p>
                <h3 className="font-semibold text-slate-700">対象者</h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>フルタイム労働者（入社6か月後から対象）</li>
                  <li>
                    パート・アルバイトでも年10日以上付与される場合（週4日・勤続3.5年以上等）
                  </li>
                  <li>管理監督者も対象</li>
                </ul>

                <h3 className="font-semibold text-slate-700">
                  取得させる方法
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          方法
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          内容
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          労働者の自主的な取得
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          労働者が自ら5日以上取得すればOK
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          使用者による時季指定
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          労働者の意見を聴取し、使用者が取得日を指定
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          計画年休
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          労使協定で一斉付与日や個人別付与日を事前に設定
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-700">
                  違反した場合の罰則
                </h3>
                <p>
                  年5日の取得義務に違反した使用者には、労働者1人あたり<strong>30万円以下の罰金</strong>が科されます。10人の違反があれば最大300万円の罰金となるため、企業にとって大きなリスクです。
                </p>

                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>年次有給休暇管理簿の作成義務</strong>
                  </p>
                  <p className="mt-1">
                    使用者は有給の取得状況を記録する「年次有給休暇管理簿」を作成し、3年間保存する義務があります。基準日・付与日数・取得日を労働者ごとに管理する必要があります。
                  </p>
                </div>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                参考資料
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/roudouzikan/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    厚生労働省「年次有給休暇」
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000148322_00001.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    厚生労働省「年次有給休暇の時季指定」
                  </a>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                営業日を計算してみる
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                有給取得を考慮した営業日・稼働日数を計算できます。
              </p>
              <Link
                href="/eigyobi"
                className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
              >
                営業日計算ツールを使う
              </Link>
            </section>


            {/* 関連記事 */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                関連記事
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/guide/zangyoudai-keisan-houhou"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    残業代の計算方法を徹底解説
                  </p>
                </Link>
                <Link
                  href="/guide/kyuyo-meisai-mikata"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    給与明細の見方
                  </p>
                </Link>
                <Link
                  href="/guide/saitei-chingin"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    最低賃金の仕組み
                  </p>
                </Link>
                <Link
                  href="/guide/zangyou-60jikan-rule"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    月60時間超の残業代50%増
                  </p>
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
