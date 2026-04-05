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
  title: "ボーナスの手取りと税金 | 賞与から引かれる金額を解説 | 給料ラボ",
  description:
    "ボーナス（賞与）から引かれる社会保険料・所得税の仕組みと計算方法を解説。額面別の手取り目安も紹介します。",
  keywords: "ボーナス,手取り,税金,賞与,社会保険料,所得税",
  alternates: { canonical: "/guide/bonus-zeikin" },
  openGraph: {
    title: "ボーナスの手取りと税金 | 賞与から引かれる金額を解説",
    description: "ボーナスから引かれる社会保険料・所得税の仕組みを解説。",
    type: "article",
  },
};

export default function BonusZeikinPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="ボーナスの手取りと税金 | 賞与から引かれる金額を解説"
        description="ボーナスから引かれる社会保険料・所得税の計算方法と手取り目安を解説。"
        url="https://kyuryo-lab.com/guide/bonus-zeikin"
        datePublished="2025-04-04"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "ボーナスの手取りと税金", url: "https://kyuryo-lab.com/guide/bonus-zeikin" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "ボーナスの手取りと税金", href: "/guide/bonus-zeikin" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              ボーナスの手取りと税金 | 賞与から引かれる金額を解説
            </h1>
            <p className="text-slate-500">
              ボーナス（賞与）は毎月の給与とは異なる方法で税金が計算されます。額面から何がいくら引かれるのか、手取りの目安を解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#shikumi" className="hover:underline">ボーナスにかかる税金の仕組み</a></li>
                <li><a href="#shakai" className="hover:underline">社会保険料の計算</a></li>
                <li><a href="#shotoku" className="hover:underline">所得税の計算</a></li>
                <li><a href="#keisan-rei" className="hover:underline">具体的な計算例</a></li>
                <li><a href="#hayami" className="hover:underline">ボーナス額面別の手取り目安</a></li>
              </ol>
            </nav>


            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shikumi">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. ボーナスにかかる税金の仕組み</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  ボーナスから天引きされるのは<strong>社会保険料</strong>と<strong>所得税</strong>の2つです。住民税はボーナスからは引かれません（毎月の給与から均等に徴収）。
                </p>
                <p>
                  ボーナスの手取りは一般的に額面の<strong>75〜85%</strong>程度です。毎月の給与と比べると手取り率はやや高い傾向にあります（住民税が引かれないため）。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shakai">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 社会保険料の計算</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>ボーナスの社会保険料は「標準賞与額」（1,000円未満切り捨て）に各保険料率を掛けて計算します。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">保険の種類</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">本人負担率</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">上限額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">健康保険料</td>
                        <td className="border border-slate-200 px-4 py-2">約4.99%</td>
                        <td className="border border-slate-200 px-4 py-2">年度累計573万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">厚生年金</td>
                        <td className="border border-slate-200 px-4 py-2">9.15%</td>
                        <td className="border border-slate-200 px-4 py-2">1回150万円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">雇用保険</td>
                        <td className="border border-slate-200 px-4 py-2">0.6%</td>
                        <td className="border border-slate-200 px-4 py-2">なし</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">介護保険（40歳以上）</td>
                        <td className="border border-slate-200 px-4 py-2">約0.91%</td>
                        <td className="border border-slate-200 px-4 py-2">健保と同じ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  毎月の給与と同じ料率ですが、ボーナスには<strong>上限</strong>があります。厚生年金は1回あたり150万円が上限のため、それを超えるボーナスでは厚生年金の負担割合が下がります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shotoku">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 所得税の計算</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  ボーナスの所得税は、毎月の給与とは異なる「賞与に対する源泉徴収税額の算出率の表」を使って計算します。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1 font-mono text-sm">
                  <p>1. 前月の給与（社会保険料控除後）を確認</p>
                  <p>2. 扶養人数に応じた税率を表から取得</p>
                  <p>3. ボーナス（社会保険料控除後）&times; 税率 = 所得税</p>
                </div>
                <p>
                  たとえば前月の社保控除後給与が25万円・扶養0人の場合、賞与の源泉徴収率は<strong>6.126%</strong>です。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="keisan-rei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 具体的な計算例</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>ボーナス額面50万円・30歳・独身・前月給与30万円の場合：</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <p><strong>社会保険料</strong></p>
                  <p className="pl-4">健康保険：500,000 &times; 4.99% = 24,950円</p>
                  <p className="pl-4">厚生年金：500,000 &times; 9.15% = 45,750円</p>
                  <p className="pl-4">雇用保険：500,000 &times; 0.6% = 3,000円</p>
                  <p className="pl-4">社保合計：<strong>73,700円</strong></p>
                  <p className="mt-2"><strong>所得税</strong></p>
                  <p className="pl-4">社保控除後：500,000 &minus; 73,700 = 426,300円</p>
                  <p className="pl-4">所得税：426,300 &times; 6.126% = <strong>26,115円</strong></p>
                  <p className="mt-2 border-t border-slate-300 pt-2 text-lg font-bold text-emerald-600">
                    手取り：500,000 &minus; 73,700 &minus; 26,115 = 約400,185円（額面の約80%）
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="hayami">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. ボーナス額面別の手取り目安</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>独身・30歳・前月給与30万円の場合の概算です。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">ボーナス額面</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">社保+税金</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">手取り目安</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">手取り率</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">30万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">約6.0万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">約24.0万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">80%</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">50万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">約10.0万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">約40.0万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">80%</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">80万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">約16.0万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">約64.0万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">80%</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">100万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">約20.0万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">約80.0万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">80%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 概算値です。扶養人数や前月給与、年齢によって変動します。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2523.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    賞与に対する源泉徴収
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">毎月の手取りを計算する</h2>
              <p className="text-sm text-slate-600 mb-4">
                月給から社会保険料・税金を差し引いた手取り額を計算できます。
              </p>
              <Link
                href="/kyuryo/tetsuke"
                className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
              >
                手取り計算ツールを使う
              </Link>
            </section>


            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連記事</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/guide/shakaihokenryou-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">社会保険料の計算方法</p>
                </Link>
                <Link href="/guide/nenshu-tedori-hayamihyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年収別の手取り早見表</p>
                </Link>
                <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
                </Link>
                <Link href="/guide/nenmatsu-chousei" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年末調整の仕組み</p>
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
