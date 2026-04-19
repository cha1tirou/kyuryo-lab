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
  title: "103万円の壁とは？超えたらどうなる？影響と対策を解説 | 給料ラボ",
  description:
    "103万円の壁を超えると所得税が発生し、扶養控除も外れます。本人・扶養者への影響、103万・110万・130万の手取り比較、2024年の制度変更情報をわかりやすく解説。",
  keywords: "103万の壁,扶養,所得税,パート,アルバイト,扶養控除",
  alternates: { canonical: "/guide/103man-kabe" },
  openGraph: {
    title: "103万円の壁とは？超えたらどうなる？影響と対策を解説",
    description:
      "103万円の壁の仕組みと超えた場合の影響を具体的な金額で解説。",
    type: "article",
  },
};

export default function Man103KabePage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="103万円の壁とは？超えたらどうなる？影響と対策を解説"
        description="103万円の壁を超えると所得税が発生し、扶養控除も外れます。本人・扶養者への影響と対策を解説。"
        url="https://kyuryo-lab.com/guide/103man-kabe"
        datePublished="2025-04-05"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "103万円の壁とは？",
            url: "https://kyuryo-lab.com/guide/103man-kabe",
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
                { name: "103万円の壁とは？", href: "/guide/103man-kabe" },
              ]}
            />
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">
                給与ガイド
              </Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              103万円の壁とは？超えたらどうなる？影響と対策を解説
            </h1>
            <p className="text-slate-500">
              パートやアルバイトで「103万円を超えないように」と言われたことはありませんか？103万円の壁の正体と、超えた場合の影響を具体的な金額とともに解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#toha" className="hover:underline">
                    103万円の壁とは
                  </a>
                </li>
                <li>
                  <a href="#honnnin" className="hover:underline">
                    103万円を超えると何が変わるか（本人への影響）
                  </a>
                </li>
                <li>
                  <a href="#fuyousha" className="hover:underline">
                    扶養者への影響（扶養控除がなくなる）
                  </a>
                </li>
                <li>
                  <a href="#simulation" className="hover:underline">
                    具体的なシミュレーション
                  </a>
                </li>
                <li>
                  <a href="#saishin" className="hover:underline">
                    2024年の制度変更情報
                  </a>
                </li>
                <li>
                  <a href="#kininasezu" className="hover:underline">
                    壁を気にせず働くべきケース
                  </a>
                </li>
              </ol>
            </nav>


            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="toha"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. 103万円の壁とは
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  103万円の壁とは、パートやアルバイトの<strong>年間の給与収入</strong>が103万円を超えると、<strong>所得税がかかり始める</strong>ラインのことです。
                </p>
                <p>
                  給与収入には「給与所得控除」という経費のような控除が自動的に適用されます。年収103万円以下の場合、以下の計算により課税所得がゼロになります。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  103万円 &minus; 給与所得控除55万円 &minus; 基礎控除48万円 = 0円
                </div>
                <p>
                  つまり、年収103万円以下であれば所得税は0円です。また、この金額以下であれば、親や配偶者の<strong>扶養控除（配偶者控除）の対象</strong>にもなれるため、「103万円の壁」と呼ばれています。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="honnnin"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 103万円を超えると何が変わるか（本人への影響）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  年収が103万円を超えると、超えた部分に対して<strong>所得税</strong>がかかります。最低税率は5%です。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>例：年収110万円の場合</strong>
                  </p>
                  <p className="pl-4">
                    課税所得 = 110万 &minus; 55万（給与所得控除）&minus;
                    48万（基礎控除）= 7万円
                  </p>
                  <p className="pl-4">
                    所得税 = 7万円 &times; 5% = <strong>3,500円</strong>
                  </p>
                  <p className="pl-4">
                    復興特別所得税込み = 3,500 &times; 1.021 ={" "}
                    <strong>約3,573円</strong>
                  </p>
                </div>
                <p>
                  本人の所得税負担は、103万円をわずかに超えた程度であれば<strong>年間数千円</strong>にとどまります。103万円を超えた途端に税金が何万円もかかるわけではありません。
                </p>
                <p>
                  ただし、年収100万円を超えると<strong>住民税</strong>（均等割＋所得割）もかかり始める点に注意が必要です。住民税は自治体によって異なりますが、年間数千円〜1万円程度です。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="fuyousha"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 扶養者への影響（扶養控除がなくなる）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  103万円の壁で<strong>より大きな影響を受けるのは扶養者（親や配偶者）</strong>です。扶養親族の年収が103万円を超えると、扶養者側が受けていた控除がなくなります。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          扶養者との関係
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          なくなる控除額
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          扶養者の増税額（税率20%の場合）
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          配偶者（配偶者控除）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          38万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-red-600">
                          約7.6万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          子（16歳以上、扶養控除）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          38万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-red-600">
                          約7.6万円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          子（19〜22歳、特定扶養）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          63万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-red-600">
                          約12.6万円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  特に大学生の子がアルバイトで103万円を超えた場合、特定扶養控除63万円がなくなるため、親の税負担が<strong>所得税＋住民税で合計約15万円以上増える</strong>ケースもあります。
                </p>
                <p>
                  なお、配偶者の場合は103万円を超えても150万円以下であれば「配偶者特別控除」として38万円の控除が受けられるため、影響は限定的です。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="simulation"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 具体的なシミュレーション
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  年収103万円・110万円・130万円で、本人と扶養者（親、税率20%）の世帯全体の手取りがどう変わるか比較します。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          項目
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          年収103万円
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          年収110万円
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          年収130万円
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          本人の所得税
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          0円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約3,500円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約13,500円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          本人の住民税
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約5,000円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約12,000円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約32,000円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          親の増税額（扶養控除喪失）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          0円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-red-600">
                          約11.4万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-red-600">
                          約11.4万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          世帯の手取り増減（103万基準）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          基準
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-red-600">
                          &minus;約5.6万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-emerald-600">
                          +約11.5万円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※
                  扶養控除38万円（一般扶養親族）の場合。特定扶養親族（19〜22歳）は増税額がさらに大きくなります。社会保険の扶養（130万円の壁）は考慮していません。
                </p>
                <p>
                  このように、103万円を少しだけ超える110万円程度では、<strong>世帯全体で見ると手取りが減る</strong>場合があります。一方、130万円まで稼げば世帯としてはプラスになります。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="saishin"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 2024年の制度変更情報
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  2024年（令和6年）時点で、103万円の壁に関する主な動向は以下の通りです。
                </p>
                <h3 className="font-semibold text-slate-700">
                  基礎控除・給与所得控除の引き上げ議論
                </h3>
                <p>
                  2024年の税制改正議論では、基礎控除や給与所得控除の引き上げが検討されました。国民民主党が「103万円の壁を178万円に引き上げ」を提案し、大きな注目を集めました。
                </p>
                <p>
                  2025年度税制改正では、<strong>基礎控除の10万円引き上げ</strong>（48万円→58万円）が決定し、壁は実質的に<strong>113万円</strong>程度に引き上げられる見込みです。ただし、178万円への引き上げは見送られました。
                </p>
                <h3 className="font-semibold text-slate-700">
                  年収の壁・支援強化パッケージ
                </h3>
                <p>
                  2023年10月から「年収の壁・支援強化パッケージ」が実施されています。これは<strong>106万円・130万円の壁</strong>への対策で、企業が手当等で労働者の手取り減少を補填する場合に助成金を支給する制度です。
                </p>
                <p>
                  103万円の壁そのものを解消する制度ではありませんが、社会保険の壁（106万・130万）に対しては一定の緩和措置が講じられています。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kininasezu"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 壁を気にせず働くべきケース
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  103万円の壁を意識しすぎて働く時間を抑えることが、必ずしも最適とは限りません。以下のケースでは、壁を超えて働く方が有利です。
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>配偶者の場合</strong>
                    ：103万円を超えても150万円以下なら配偶者特別控除38万円が受けられるため、世帯の手取りは増えます
                  </li>
                  <li>
                    <strong>年収160万円以上を目指せる場合</strong>
                    ：社会保険の壁（130万円）を超えても、160万円以上稼げば手取りの逆転現象を解消できます
                  </li>
                  <li>
                    <strong>キャリアアップを重視する場合</strong>
                    ：勤務時間を増やすことでスキルや経験を積み、将来の収入アップにつながります
                  </li>
                  <li>
                    <strong>社会保険に加入したい場合</strong>
                    ：厚生年金に加入すれば将来の年金額が増え、傷病手当金や出産手当金も受けられます
                  </li>
                  <li>
                    <strong>扶養者の税率が低い場合</strong>
                    ：扶養者の所得税率が5〜10%の場合、控除喪失の影響は比較的小さくなります
                  </li>
                </ul>
                <p>
                  大切なのは、「壁を超えない」ことだけにとらわれず、<strong>世帯全体の手取りと将来のメリット</strong>を総合的に考えることです。
                </p>
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
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    国税庁「扶養控除」
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    国税庁「配偶者控除」
                  </a>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                手取り額を計算してみる
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                扶養人数や年収を入力して、手取り額の変化をシミュレーションできます。
              </p>
              <Link
                href="/kyuryo/tetsuke"
                className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
              >
                手取り計算ツールを使う
              </Link>
            </section>


            {/* 関連記事 */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                関連記事
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/guide/fuyou-kojo-guide"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    扶養控除と103万円の壁
                  </p>
                </Link>
                <Link
                  href="/guide/tedori-shikumi"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    手取り額の仕組み
                  </p>
                </Link>
                <Link
                  href="/guide/shotokuzei-keisan"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    所得税の計算方法
                  </p>
                </Link>
                <Link
                  href="/guide/nenshu-tedori-hayamihyou"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    年収別の手取り早見表
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
