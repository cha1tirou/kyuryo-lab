import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "../../../components/seo/json-ld";
import AdSenseUnit from "../../../components/ads/adsense-unit";

export const metadata: Metadata = {
  title: "年収別の手取り早見表 | 300万〜1000万円の手取り目安 | 給料ラボ",
  description:
    "年収300万円から1000万円までの手取り額を早見表で一覧。独身・扶養あり・40歳以上のケース別に、社会保険料・税金の目安と手取り率を紹介。",
  keywords: "年収,手取り,早見表,年収別,手取り率,社会保険料",
  alternates: { canonical: "/guide/nenshu-tedori-hayamihyou" },
  openGraph: {
    title: "年収別の手取り早見表 | 300万〜1000万円の手取り目安",
    description: "年収300万〜1000万円の手取り額を早見表で紹介。",
    type: "article",
  },
};

export default function NenshuHayamiPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="年収別の手取り早見表 | 300万〜1000万円の手取り目安"
        description="年収300万円から1000万円までの手取り額を早見表で一覧。ケース別に社会保険料・税金の目安を紹介。"
        url="https://kyuryo-lab.com/guide/nenshu-tedori-hayamihyou"
        datePublished="2025-01-15"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "年収別の手取り早見表", url: "https://kyuryo-lab.com/guide/nenshu-tedori-hayamihyou" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "年収別の手取り早見表", href: "/guide/nenshu-tedori-hayamihyou" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              年収別の手取り早見表 | 300万〜1000万円の手取り目安
            </h1>
            <p className="text-slate-500">
              年収に対して実際にいくら手元に残るのか。年収300万円から1000万円までの手取り額目安を、条件別にまとめました。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#dokushin" className="hover:underline">独身・扶養なしの手取り早見表</a></li>
                <li><a href="#fuyou" className="hover:underline">扶養ありの手取り早見表</a></li>
                <li><a href="#40sai" className="hover:underline">40歳以上の手取り早見表</a></li>
                <li><a href="#tedori-ritsu" className="hover:underline">手取り率の推移</a></li>
                <li><a href="#point" className="hover:underline">手取りを増やすポイント</a></li>
              </ol>
            </nav>

            <AdSenseUnit slot="guide-ad-1" />

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="dokushin">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 独身・扶養なしの手取り早見表</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>条件：独身、扶養なし、40歳未満、協会けんぽ（東京）、賞与なし（月給=年収÷12）</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">年収</th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">社保料/年</th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">所得税/年</th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">住民税/年</th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">手取り/年</th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">手取り/月</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { nen: "300万", sha: "44.4万", sho: "5.4万", juu: "11.2万", te: "239万", tsuki: "19.9万" },
                        { nen: "350万", sha: "51.8万", sho: "7.3万", juu: "14.5万", te: "276万", tsuki: "23.0万" },
                        { nen: "400万", sha: "59.3万", sho: "9.5万", juu: "17.8万", te: "313万", tsuki: "26.1万" },
                        { nen: "450万", sha: "66.7万", sho: "12.2万", juu: "21.2万", te: "350万", tsuki: "29.2万" },
                        { nen: "500万", sha: "74.1万", sho: "15.3万", juu: "24.5万", te: "386万", tsuki: "32.2万" },
                        { nen: "600万", sha: "88.9万", sho: "22.8万", juu: "31.2万", te: "457万", tsuki: "38.1万" },
                        { nen: "700万", sha: "103.8万", sho: "33.3万", juu: "40.5万", te: "522万", tsuki: "43.5万" },
                        { nen: "800万", sha: "118.6万", sho: "47.8万", juu: "50.5万", te: "583万", tsuki: "48.6万" },
                        { nen: "900万", sha: "130.4万", sho: "60.6万", juu: "59.2万", te: "650万", tsuki: "54.1万" },
                        { nen: "1000万", sha: "142.1万", sho: "76.7万", juu: "68.5万", te: "713万", tsuki: "59.4万" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                          <td className="border border-slate-200 px-3 py-2 font-semibold">{row.nen}</td>
                          <td className="border border-slate-200 px-3 py-2 text-right">{row.sha}</td>
                          <td className="border border-slate-200 px-3 py-2 text-right">{row.sho}</td>
                          <td className="border border-slate-200 px-3 py-2 text-right">{row.juu}</td>
                          <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-600">{row.te}</td>
                          <td className="border border-slate-200 px-3 py-2 text-right">{row.tsuki}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">※ 概算値です。実際の金額は標準報酬月額の等級や居住地域により異なります。</p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="fuyou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 扶養ありの手取り早見表</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>条件：配偶者+子1人（扶養2人）、40歳未満。扶養控除により税金が減り、手取りが増えます。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">年収</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">独身手取り</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">扶養2人手取り</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">差額/年</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { nen: "400万", doku: "313万", fu: "327万", sa: "+14万" },
                        { nen: "500万", doku: "386万", fu: "403万", sa: "+17万" },
                        { nen: "600万", doku: "457万", fu: "477万", sa: "+20万" },
                        { nen: "700万", doku: "522万", fu: "547万", sa: "+25万" },
                        { nen: "800万", doku: "583万", fu: "612万", sa: "+29万" },
                        { nen: "1000万", doku: "713万", fu: "748万", sa: "+35万" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                          <td className="border border-slate-200 px-4 py-2 font-semibold">{row.nen}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right">{row.doku}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-emerald-600">{row.fu}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right text-blue-600">{row.sa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  扶養控除は1人あたり年間38万円（特定扶養親族は63万円）の所得控除があるため、年収が高いほど税率が高く、控除の効果も大きくなります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="40sai">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 40歳以上の手取り早見表</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>40歳以上は介護保険料（本人負担約0.91%）が加算され、手取りが減少します。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">年収</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">40歳未満</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">40歳以上</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">差額/年</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { nen: "400万", miman: "313万", ijou: "310万", sa: "-3万" },
                        { nen: "500万", miman: "386万", ijou: "382万", sa: "-4万" },
                        { nen: "600万", miman: "457万", ijou: "452万", sa: "-5万" },
                        { nen: "700万", miman: "522万", ijou: "517万", sa: "-5万" },
                        { nen: "800万", miman: "583万", ijou: "577万", sa: "-6万" },
                        { nen: "1000万", miman: "713万", ijou: "706万", sa: "-7万" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                          <td className="border border-slate-200 px-4 py-2 font-semibold">{row.nen}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right">{row.miman}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right">{row.ijou}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right text-red-500">{row.sa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  年収600万円の場合、40歳を境に年間約5万円（月約4,000円）手取りが減ります。大きな金額ではありませんが、ライフプランの参考にしてください。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="tedori-ritsu">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 手取り率の推移</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  年収が上がるにつれて手取り率（手取り÷額面）は低下します。これは所得税の累進課税により、高所得者ほど税率が高くなるためです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">年収</th>
                        <th className="border border-slate-200 px-4 py-2 text-center font-semibold">300万</th>
                        <th className="border border-slate-200 px-4 py-2 text-center font-semibold">500万</th>
                        <th className="border border-slate-200 px-4 py-2 text-center font-semibold">700万</th>
                        <th className="border border-slate-200 px-4 py-2 text-center font-semibold">1000万</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">手取り率</td>
                        <td className="border border-slate-200 px-4 py-2 text-center text-emerald-600 font-semibold">約80%</td>
                        <td className="border border-slate-200 px-4 py-2 text-center text-emerald-600 font-semibold">約77%</td>
                        <td className="border border-slate-200 px-4 py-2 text-center font-semibold">約75%</td>
                        <td className="border border-slate-200 px-4 py-2 text-center font-semibold">約71%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  年収1000万円を超えると手取り率は70%を切り始めます。さらに年収1195万円を超えると配偶者控除が受けられなくなるなど、高所得者への控除制限も影響します。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="point">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 手取りを増やすポイント</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 pl-2">
                  <li>
                    <strong>iDeCo（個人型確定拠出年金）</strong>：掛け金が全額所得控除の対象。会社員は月額23,000円まで拠出可能で、年間最大約5.5万円の節税効果（税率20%の場合）。
                  </li>
                  <li>
                    <strong>ふるさと納税</strong>：実質2,000円の自己負担で返礼品がもらえる。税金の前払いではあるが、返礼品分だけ実質的な手取りが増える。
                  </li>
                  <li>
                    <strong>医療費控除</strong>：年間の医療費が10万円を超える場合、超過分が所得控除される。家族分も合算可能。
                  </li>
                  <li>
                    <strong>生命保険料控除</strong>：生命保険・医療保険の保険料が一定額まで控除対象。最大12万円の所得控除。
                  </li>
                  <li>
                    <strong>住宅ローン控除</strong>：住宅ローン残高の0.7%が最大13年間、税額から直接控除される強力な制度。
                  </li>
                </ul>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    所得税の税率
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
              <h2 className="font-semibold text-slate-800 mb-2">あなたの手取りを計算する</h2>
              <p className="text-sm text-slate-600 mb-4">
                月収・年齢・扶養人数を入力して正確な手取り額を計算できます。
              </p>
              <Link
                href="/kyuryo/tetsuke"
                className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
              >
                手取り計算ツールを使う
              </Link>
            </section>

            <AdSenseUnit slot="guide-ad-2" />

            {/* 関連記事 */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連記事</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/guide/tedori-shikumi" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">手取り額の仕組み</p>
                </Link>
                <Link href="/guide/shakaihokenryou-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">社会保険料の計算方法</p>
                </Link>
                <Link href="/guide/fuyou-kojo-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">扶養控除と103万円の壁</p>
                </Link>
                <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
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
