import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import AffiliateSection from "../../../components/affiliates/affiliate-section";
import { TETSUKE_AFFILIATES } from "../../../lib/affiliates";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "手取り額の仕組み | 額面と手取りの差はなぜ生まれる？ | 給料ラボ",
  description:
    "額面と手取りの違い、月給から天引きされる社会保険料・所得税・住民税の仕組みを図解つきでわかりやすく解説。年収帯別の手取り目安も紹介。",
  keywords: "手取り,額面,社会保険料,所得税,住民税,天引き",
  alternates: { canonical: "/guide/tedori-shikumi" },
  openGraph: {
    title: "手取り額の仕組み | 額面と手取りの差はなぜ生まれる？",
    description: "額面と手取りの違い、天引きの仕組みをわかりやすく解説。",
    type: "article",
  },
};

export default function TedoriShikumiPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="手取り額の仕組み | 額面と手取りの差はなぜ生まれる？"
        description="額面と手取りの違い、月給から天引きされる社会保険料・所得税・住民税の仕組みを解説。"
        url="https://kyuryo-lab.com/guide/tedori-shikumi"
        datePublished="2025-01-15"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "手取り額の仕組み", url: "https://kyuryo-lab.com/guide/tedori-shikumi" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "手取り額の仕組み", href: "/guide/tedori-shikumi" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              手取り額の仕組み | 額面と手取りの差はなぜ生まれる？
            </h1>
            <p className="text-slate-500">
              「額面30万円なのに手取りは24万円？」その差額の正体を、天引きされる社会保険料・税金の仕組みとともに解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#gakumen-tedori" className="hover:underline">額面と手取りの違い</a></li>
                <li><a href="#tennbiki" className="hover:underline">天引きされる項目一覧</a></li>
                <li><a href="#shakaihoken" className="hover:underline">社会保険料の内訳</a></li>
                <li><a href="#zeikin" className="hover:underline">税金の内訳</a></li>
                <li><a href="#meyasu" className="hover:underline">年収帯別の手取り目安</a></li>
              </ol>
            </nav>


            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="gakumen-tedori">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 額面と手取りの違い</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>額面</strong>（額面給与）とは、基本給に各種手当を加えた、会社が支払う総額のことです。一方、<strong>手取り</strong>とは、額面から社会保険料や税金を差し引いた、実際に銀行口座に振り込まれる金額を指します。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  手取り = 額面 &minus; 社会保険料 &minus; 所得税 &minus; 住民税
                </div>
                <p>
                  一般的に、手取りは額面の<strong>75%〜85%</strong>程度になります。額面が高くなるほど税率が上がるため、手取り割合は低くなる傾向があります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="tennbiki">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 天引きされる項目一覧</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>毎月の給与から天引き（控除）される項目は、大きく「社会保険料」と「税金」の2種類に分かれます。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">区分</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">項目</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">本人負担率</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2" rowSpan={4}>社会保険料</td>
                        <td className="border border-slate-200 px-4 py-2">健康保険</td>
                        <td className="border border-slate-200 px-4 py-2">約4.99%</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">介護保険（40歳以上）</td>
                        <td className="border border-slate-200 px-4 py-2">約0.91%</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">厚生年金</td>
                        <td className="border border-slate-200 px-4 py-2">9.15%</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">雇用保険</td>
                        <td className="border border-slate-200 px-4 py-2">0.6%</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2" rowSpan={2}>税金</td>
                        <td className="border border-slate-200 px-4 py-2">所得税</td>
                        <td className="border border-slate-200 px-4 py-2">5%〜45%（累進課税）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">住民税</td>
                        <td className="border border-slate-200 px-4 py-2">一律10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shakaihoken">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 社会保険料の内訳</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  会社員の社会保険料は<strong>労使折半</strong>（会社と本人で半分ずつ負担）が基本です。給与明細に記載される金額は本人負担分のみです。
                </p>
                <h3 className="font-semibold text-slate-700">健康保険料</h3>
                <p>
                  協会けんぽ（東京）の場合、令和6年度の保険料率は9.98%です。労使折半なので本人負担は4.99%。月給30万円の場合、約14,970円が天引きされます。
                </p>
                <h3 className="font-semibold text-slate-700">厚生年金</h3>
                <p>
                  保険料率は18.3%で固定。本人負担は9.15%です。月給30万円の場合、約27,450円が天引きされます。社会保険料の中で最も大きな金額です。
                </p>
                <h3 className="font-semibold text-slate-700">雇用保険</h3>
                <p>
                  一般の事業の場合、労働者負担は0.6%です。月給30万円なら1,800円と比較的少額ですが、失業給付や育児休業給付の財源になる重要な保険です。
                </p>
                <h3 className="font-semibold text-slate-700">介護保険</h3>
                <p>
                  40歳以上65歳未満の方が対象です。保険料率は1.82%（本人負担0.91%）。月給30万円で約2,730円の負担です。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="zeikin">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 税金の内訳</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <h3 className="font-semibold text-slate-700">所得税</h3>
                <p>
                  所得税は<strong>累進課税</strong>で、課税所得が高いほど税率が上がります。月給からの源泉徴収は概算で行われ、年末調整で精算されます。
                </p>
                <p>
                  課税所得の計算では、給与所得控除（年収に応じて自動計算）、基礎控除（48万円）、社会保険料控除、扶養控除などを差し引きます。
                </p>
                <h3 className="font-semibold text-slate-700">住民税</h3>
                <p>
                  住民税は<strong>前年の所得</strong>に基づいて計算され、翌年6月から天引きが始まります。税率は市区町村民税6% + 都道府県民税4% = 一律10%です。
                </p>
                <p>
                  そのため、新社会人の1年目は住民税がかからず手取りが多く、2年目から住民税の天引きが始まり手取りが減る「2年目の壁」が生じます。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="meyasu">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 年収帯別の手取り目安</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>独身・扶養なし・40歳未満・会社員の場合の目安です。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">年収（額面）</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">手取り（年額）</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">手取り（月額）</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">手取り率</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { nen: "300万円", tedori: "約240万円", tsuki: "約20万円", ritsu: "約80%" },
                        { nen: "400万円", tedori: "約315万円", tsuki: "約26万円", ritsu: "約79%" },
                        { nen: "500万円", tedori: "約390万円", tsuki: "約32万円", ritsu: "約78%" },
                        { nen: "600万円", tedori: "約460万円", tsuki: "約38万円", ritsu: "約77%" },
                        { nen: "700万円", tedori: "約530万円", tsuki: "約44万円", ritsu: "約76%" },
                        { nen: "800万円", tedori: "約595万円", tsuki: "約50万円", ritsu: "約74%" },
                        { nen: "1000万円", tedori: "約720万円", tsuki: "約60万円", ritsu: "約72%" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                          <td className="border border-slate-200 px-4 py-2">{row.nen}</td>
                          <td className="border border-slate-200 px-4 py-2">{row.tedori}</td>
                          <td className="border border-slate-200 px-4 py-2">{row.tsuki}</td>
                          <td className="border border-slate-200 px-4 py-2">{row.ritsu}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 上記は概算です。扶養人数・年齢・居住地域により異なります。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    給与所得控除
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
                <li>
                  <a href="https://www.kyoukaikenpo.or.jp/g7/cat330/sb3150/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    保険料率
                  </a>
                  <span className="text-slate-400 ml-1">（全国健康保険協会）</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">手取り額を計算してみる</h2>
              <p className="text-sm text-slate-600 mb-4">
                あなたの条件で手取り額を即座に計算できます。
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
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連記事</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/guide/shakaihokenryou-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">社会保険料の計算方法</p>
                </Link>
                <Link href="/guide/nenshu-tedori-hayamihyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年収���の手取り早見表</p>
                </Link>
                <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
                </Link>
                <Link href="/guide/juuminzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">住民税の計算方法</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        <AffiliateSection heading="給与・手取りをもっと増やしたい方へ" items={TETSUKE_AFFILIATES} />
      </main>
      <Footer />
    </>
  );
}
