import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import AffiliateSection from "../../../components/affiliates/affiliate-section";
import { ZANGYODAI_AFFILIATES } from "../../../lib/affiliates";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "残業代の計算方法を徹底解説 | 割増率・計算例つき | 給料ラボ",
  description:
    "残業代の正しい計算方法を、基礎時給の求め方から割増率の種類、具体的な計算例まで徹底解説。月60時間超の50%割増にも対応。",
  keywords: "残業代,計算方法,割増率,基礎時給,時間外労働,深夜残業",
  alternates: { canonical: "/guide/zangyoudai-keisan-houhou" },
  openGraph: {
    title: "残業代の計算方法を徹底解説 | 割増率・計算例つき",
    description: "残業代の正しい計算方法を基礎時給から割増率まで徹底解説。",
    type: "article",
  },
};

export default function ZangyoudaiKeisanPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="残業代の計算方法を徹底解説 | 割増率・計算例つき"
        description="残業代の正しい計算方法を、基礎時給の求め方から割増率の種類、具体的な計算例まで徹底解説。"
        url="https://kyuryo-lab.com/guide/zangyoudai-keisan-houhou"
        datePublished="2025-01-15"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "残業代の計算方法", url: "https://kyuryo-lab.com/guide/zangyoudai-keisan-houhou" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "残業代の計算方法", href: "/guide/zangyoudai-keisan-houhou" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              残業代の計算方法を徹底解説 | 割増率・計算例つき
            </h1>
            <p className="text-slate-500">
              残業代がいくらもらえるのか正確に知るために、基礎時給の求め方から割増率の種類、具体的な計算例までわかりやすく解説します。
            </p>
          </header>

          <div className="space-y-8">
            {/* TOC */}
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#kiso-jikyu" className="hover:underline">基礎時給の計算方法</a></li>
                <li><a href="#warimashi-ritsu" className="hover:underline">割増率の種類と適用条件</a></li>
                <li><a href="#keisan-rei" className="hover:underline">具体的な計算例</a></li>
                <li><a href="#60jikan" className="hover:underline">月60時間超の残業代</a></li>
                <li><a href="#jogai" className="hover:underline">基礎時給から除外される手当</a></li>
              </ol>
            </nav>


            {/* Section 1 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kiso-jikyu">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 基礎時給の計算方法</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  残業代を計算するための第一歩は、<strong>基礎時給</strong>（1時間あたりの賃金）を算出することです。基礎時給は以下の計算式で求めます。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  基礎時給 = 基本月給 &divide; 月所定労働時間
                </div>
                <p>
                  たとえば月給25万円、月所定労働時間160時間の場合、基礎時給は<strong>1,562円</strong>（250,000 &divide; 160）となります。
                </p>
                <p>
                  月所定労働時間は「1日の所定労働時間 &times; 月の平均所定労働日数」で算出します。多くの企業では1日8時間&times;20日 = 160時間ですが、1日7.5時間の企業では150時間になります。
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="warimashi-ritsu">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 割増率の種類と適用条件</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>労働基準法では、以下の3種類の割増賃金が定められています。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">種類</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">条件</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">割増率</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">時間外労働</td>
                        <td className="border border-slate-200 px-4 py-2">1日8時間・週40時間超</td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">25%増（1.25倍）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">深夜労働</td>
                        <td className="border border-slate-200 px-4 py-2">22時〜翌5時の労働</td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">25%増</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">法定休日労働</td>
                        <td className="border border-slate-200 px-4 py-2">週1日の法定休日に出勤</td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">35%増（1.35倍）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">深夜残業</td>
                        <td className="border border-slate-200 px-4 py-2">22時〜5時の時間外労働</td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">50%増（25%+25%）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  深夜に残業した場合は、時間外労働の25%と深夜労働の25%が<strong>重複して適用</strong>されるため、合計50%増（1.50倍）となります。同様に、法定休日の深夜労働は35%+25% = 60%増です。
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="keisan-rei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 具体的な計算例</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>以下の条件で残業代を計算してみましょう。</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                  <p>基本月給：<strong>30万円</strong></p>
                  <p>月所定労働時間：<strong>160時間</strong></p>
                  <p>今月の残業時間：<strong>30時間</strong>（うち深夜残業5時間）</p>
                  <p>法定休日出勤：<strong>8時間</strong></p>
                </div>
                <div className="space-y-2 mt-4">
                  <p><strong>Step 1: 基礎時給</strong></p>
                  <p className="pl-4">300,000 &divide; 160 = <strong>1,875円</strong></p>
                  <p><strong>Step 2: 時間外手当（30時間）</strong></p>
                  <p className="pl-4">1,875 &times; 1.25 &times; 30 = <strong>70,312円</strong></p>
                  <p><strong>Step 3: 深夜割増（5時間分の追加25%）</strong></p>
                  <p className="pl-4">1,875 &times; 0.25 &times; 5 = <strong>2,343円</strong></p>
                  <p><strong>Step 4: 休日出勤手当（8時間）</strong></p>
                  <p className="pl-4">1,875 &times; 1.35 &times; 8 = <strong>20,250円</strong></p>
                  <p><strong>残業代合計</strong></p>
                  <p className="pl-4 text-lg font-bold text-emerald-600">70,312 + 2,343 + 20,250 = 92,905円</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="60jikan">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 月60時間超の残業代</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  2023年4月から、<strong>中小企業を含むすべての企業</strong>で月60時間を超える時間外労働に対して<strong>50%増</strong>（1.50倍）の割増率が適用されています。
                </p>
                <p>
                  たとえば基礎時給1,875円で月80時間残業した場合、60時間までは1.25倍、残り20時間は1.50倍で計算します。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                  <p>60時間分：1,875 &times; 1.25 &times; 60 = <strong>140,625円</strong></p>
                  <p>20時間分：1,875 &times; 1.50 &times; 20 = <strong>56,250円</strong></p>
                  <p className="font-bold">合計：<span className="text-emerald-600">196,875円</span></p>
                </div>
                <p>
                  すべて1.25倍で計算した場合は187,500円なので、60時間超の割増により<strong>9,375円</strong>多くなります。
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="jogai">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 基礎時給から除外される手当</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  労働基準法では、以下の7種類の手当は基礎時給の計算から除外すると定められています。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>家族手当</li>
                  <li>通勤手当</li>
                  <li>別居手当</li>
                  <li>子女教育手当</li>
                  <li>住宅手当</li>
                  <li>臨時に支払われた賃金</li>
                  <li>1か月を超える期間ごとに支払われる賃金（賞与など）</li>
                </ul>
                <p>
                  ただし、これらの手当が一律に支給されている場合（例：全員に一律2万円の住宅手当）は、除外できず基礎時給に含める必要があります。名称ではなく実態で判断される点に注意しましょう。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/roudouzikan/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    時間外労働の上限規制
                  </a>
                  <span className="text-slate-400 ml-1">（厚生労働省）</span>
                </li>
                <li>
                  <a href="https://jsite.mhlw.go.jp/tokyo-roudoukyoku/hourei_seido_tetsuzuki/roudoukijun_keiyaku/newpage_00379.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    割増賃金の基礎
                  </a>
                  <span className="text-slate-400 ml-1">（東京労働局）</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">残業代を計算してみる</h2>
              <p className="text-sm text-slate-600 mb-4">
                あなたの条件で残業代を即座に計算できます。
              </p>
              <Link
                href="/"
                className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
              >
                残業代計算ツールを使う
              </Link>
            </section>


            {/* 関連記事 */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連記事</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/guide/zangyou-60jikan-rule" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">月60時間超の残業代は50%増</p>
                </Link>
                <Link href="/guide/tedori-shikumi" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">手取り額の仕組み</p>
                </Link>
                <Link href="/guide/kyuyo-meisai-mikata" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">給与明細の見方</p>
                </Link>
                <Link href="/guide/saitei-chingin" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">最低賃金一覧</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        <AffiliateSection heading="残業に悩んでいる方へ" items={ZANGYODAI_AFFILIATES} />
      </main>
      <Footer />
    </>
  );
}
