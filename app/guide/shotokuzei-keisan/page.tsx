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
  title: "所得税の計算方法 | 税率・控除をわかりやすく解説 | 給料ラボ",
  description:
    "給与所得者の所得税の計算方法を、給与所得控除・基礎控除・累進課税の仕組みから年末調整まで、具体的な計算例つきでわかりやすく解説します。",
  keywords: "所得税,計算,税率,給与所得控除,累進課税,年末調整",
  alternates: { canonical: "/guide/shotokuzei-keisan" },
  openGraph: {
    title: "所得税の計算方法 | 税率・控除をわかりやすく解説",
    description: "給与所得者の所得税の計算方法を具体的な計算例つきで解説。",
    type: "article",
  },
};

export default function ShotokuzeiPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="所得税の計算方法 | 税率・控除をわかりやすく解説"
        description="給与所得者の所得税の計算方法を、給与所得控除・基礎控除・累進課税の仕組みから具体的に解説。"
        url="https://kyuryo-lab.com/guide/shotokuzei-keisan"
        datePublished="2025-04-04"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "所得税の計算方法", url: "https://kyuryo-lab.com/guide/shotokuzei-keisan" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "所得税の計算方法", href: "/guide/shotokuzei-keisan" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              所得税の計算方法 | 税率・控除をわかりやすく解説
            </h1>
            <p className="text-slate-500">
              毎月の給与から天引きされる所得税。その計算方法を、給与所得控除や累進課税の仕組みとともに、具体的な数字で解説します。
            </p>
          </header>

          <div className="space-y-8">
            {/* TOC */}
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#shikumi" className="hover:underline">所得税の基本的な仕組み</a></li>
                <li><a href="#kyuyo-shotoku-kojo" className="hover:underline">給与所得控除とは</a></li>
                <li><a href="#shotoku-kojo" className="hover:underline">所得控除の種類</a></li>
                <li><a href="#ruishin-kazei" className="hover:underline">累進課税と税率表</a></li>
                <li><a href="#keisan-rei" className="hover:underline">具体的な計算例</a></li>
                <li><a href="#nenmatsu-chosei" className="hover:underline">年末調整と確定申告</a></li>
              </ol>
            </nav>

            <AdSenseUnit slot="guide-ad-1" />

            {/* Section 1 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shikumi">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 所得税の基本的な仕組み</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  所得税は、個人の所得（もうけ）に対して課される国税です。会社員の場合、毎月の給与から<strong>源泉徴収</strong>として天引きされ、年末に<strong>年末調整</strong>で過不足を精算します。
                </p>
                <p>
                  所得税の計算は以下の流れで行われます。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1 font-mono text-sm">
                  <p>1. 年間の給与収入（額面年収）</p>
                  <p>2. &minus; 給与所得控除 = 給与所得</p>
                  <p>3. &minus; 各種所得控除 = 課税所得</p>
                  <p>4. &times; 税率 &minus; 控除額 = 所得税額</p>
                  <p>5. &times; 1.021（復興特別所得税）= 最終税額</p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kyuyo-shotoku-kojo">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 給与所得控除とは</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  給与所得控除は、会社員の「必要経費」に相当する控除です。年収に応じて自動的に決まり、確定申告は不要です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">給与収入</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">給与所得控除額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">162.5万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">55万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">162.5万円超〜180万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">収入 &times; 40% &minus; 10万円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">180万円超〜360万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">収入 &times; 30% + 8万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">360万円超〜660万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">収入 &times; 20% + 44万円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">660万円超〜850万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">収入 &times; 10% + 110万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">850万円超</td>
                        <td className="border border-slate-200 px-4 py-2">195万円（上限）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  たとえば年収400万円の場合、給与所得控除は 400万 &times; 20% + 44万 = <strong>124万円</strong>。給与所得は 400万 &minus; 124万 = <strong>276万円</strong>です。
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shotoku-kojo">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 所得控除の種類</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  給与所得からさらに差し引ける所得控除があります。主な控除は以下のとおりです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">控除の種類</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">控除額</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">条件</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">基礎控除</td>
                        <td className="border border-slate-200 px-4 py-2">48万円</td>
                        <td className="border border-slate-200 px-4 py-2">所得2,400万円以下の全員</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">社会保険料控除</td>
                        <td className="border border-slate-200 px-4 py-2">支払額全額</td>
                        <td className="border border-slate-200 px-4 py-2">健康保険・年金・雇用保険</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">扶養控除</td>
                        <td className="border border-slate-200 px-4 py-2">38万〜63万円/人</td>
                        <td className="border border-slate-200 px-4 py-2">扶養親族がいる場合</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">配偶者控除</td>
                        <td className="border border-slate-200 px-4 py-2">最大38万円</td>
                        <td className="border border-slate-200 px-4 py-2">配偶者の所得48万円以下</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">生命保険料控除</td>
                        <td className="border border-slate-200 px-4 py-2">最大12万円</td>
                        <td className="border border-slate-200 px-4 py-2">生命保険に加入</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">iDeCo（小規模企業共済等掛金控除）</td>
                        <td className="border border-slate-200 px-4 py-2">掛金全額</td>
                        <td className="border border-slate-200 px-4 py-2">iDeCoに加入</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="ruishin-kazei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 累進課税と税率表</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  日本の所得税は<strong>累進課税</strong>を採用しており、所得が高いほど高い税率が適用されます。ただし「超過累進」方式なので、全額に高い税率がかかるわけではありません。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">課税所得</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">税率</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">控除額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">195万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">5%</td>
                        <td className="border border-slate-200 px-4 py-2">0円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">195万円超〜330万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">10%</td>
                        <td className="border border-slate-200 px-4 py-2">97,500円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">330万円超〜695万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">20%</td>
                        <td className="border border-slate-200 px-4 py-2">427,500円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">695万円超〜900万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">23%</td>
                        <td className="border border-slate-200 px-4 py-2">636,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">900万円超〜1,800万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">33%</td>
                        <td className="border border-slate-200 px-4 py-2">1,536,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  速算表の使い方：<strong>課税所得 &times; 税率 &minus; 控除額</strong> で所得税額が求められます。
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="keisan-rei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 具体的な計算例</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>年収400万円・独身・30歳の場合で計算してみましょう。</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <p><strong>Step 1: 給与所得控除</strong></p>
                  <p className="pl-4">400万 &times; 20% + 44万 = 124万円</p>
                  <p><strong>Step 2: 給与所得</strong></p>
                  <p className="pl-4">400万 &minus; 124万 = 276万円</p>
                  <p><strong>Step 3: 社会保険料（概算）</strong></p>
                  <p className="pl-4">健康保険 + 厚生年金 + 雇用保険 &asymp; 年間約59万円</p>
                  <p><strong>Step 4: 課税所得</strong></p>
                  <p className="pl-4">276万 &minus; 48万（基礎控除）&minus; 59万（社保控除）= 169万円</p>
                  <p><strong>Step 5: 所得税額</strong></p>
                  <p className="pl-4">169万 &times; 5% = 84,500円</p>
                  <p><strong>Step 6: 復興特別所得税込み</strong></p>
                  <p className="pl-4 text-lg font-bold text-emerald-600">84,500 &times; 1.021 = 約86,274円（年額）</p>
                  <p className="pl-4">月額にすると約 <strong>7,189円</strong></p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="nenmatsu-chosei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. 年末調整と確定申告</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  毎月の源泉徴収は概算で行われるため、年末に正確な税額との差額を精算するのが<strong>年末調整</strong>です。多くの場合、12月か1月の給与で還付（戻ってくる）されます。
                </p>
                <p>
                  年末調整で精算される主な項目：
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>生命保険料控除・地震保険料控除</li>
                  <li>配偶者控除・扶養控除の変動</li>
                  <li>住宅ローン控除（2年目以降）</li>
                  <li>iDeCo・小規模企業共済の掛金</li>
                </ul>
                <p>
                  医療費控除やふるさと納税（6自治体超）など、年末調整で処理できない控除は<strong>確定申告</strong>が必要です。ただし、ふるさと納税が5自治体以内なら「ワンストップ特例」で確定申告は不要です。
                </p>
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
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    給与所得控除
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">手取り額を計算してみる</h2>
              <p className="text-sm text-slate-600 mb-4">
                所得税・住民税・社会保険料を含めた手取り額を即座に計算できます。
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
                <Link href="/guide/juuminzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">住民税の計算方法</p>
                </Link>
                <Link href="/guide/nenmatsu-chousei" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年末調整の仕組み</p>
                </Link>
                <Link href="/guide/fuyou-kojo-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">扶養控除と103万円の壁</p>
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
