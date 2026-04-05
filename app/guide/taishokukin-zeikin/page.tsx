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
  title: "退職金の税金と手取り | 退職所得控除の計算方法 | 給料ラボ",
  description:
    "退職金にかかる税金の計算方法を、退職所得控除・分離課税の仕組みから具体例まで解説。勤続年数別の控除額と手取り目安も紹介。",
  keywords: "退職金,税金,手取り,退職所得控除,分離課税,勤続年数",
  alternates: { canonical: "/guide/taishokukin-zeikin" },
  openGraph: {
    title: "退職金の税金と手取り | 退職所得控除の計算方法",
    description: "退職金にかかる税金の計算方法を退職所得控除から具体例まで解説。",
    type: "article",
  },
};

export default function TaishokukinPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="退職金の税金と手取り | 退職所得控除の計算方法"
        description="退職金にかかる税金を退職所得控除・分離課税の仕組みから解説。"
        url="https://kyuryo-lab.com/guide/taishokukin-zeikin"
        datePublished="2025-04-04"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "退職金の税金と手取り", url: "https://kyuryo-lab.com/guide/taishokukin-zeikin" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "退職金の税金と手取り", href: "/guide/taishokukin-zeikin" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              退職金の税金と手取り | 退職所得控除の計算方法
            </h1>
            <p className="text-slate-500">
              退職金は通常の給与とは異なる「分離課税」が適用され、税負担が大幅に軽減されます。その仕組みと計算方法を解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#shikumi" className="hover:underline">退職金の課税の仕組み</a></li>
                <li><a href="#kojo" className="hover:underline">退職所得控除の計算</a></li>
                <li><a href="#keisan" className="hover:underline">退職所得と税額の計算</a></li>
                <li><a href="#rei" className="hover:underline">具体的な計算例</a></li>
                <li><a href="#hayami" className="hover:underline">勤続年数別の手取り目安</a></li>
              </ol>
            </nav>

            <AdSenseUnit slot="guide-ad-1" />

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shikumi">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 退職金の課税の仕組み</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  退職金は長年の勤労に対する報酬であるため、税制上の優遇措置があります。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li><strong>退職所得控除</strong>：勤続年数に応じた大きな控除が受けられる</li>
                  <li><strong>1/2課税</strong>：控除後の金額の半分だけが課税対象</li>
                  <li><strong>分離課税</strong>：他の所得と合算されず、別枠で税額計算</li>
                </ul>
                <p>
                  この3つの優遇により、退職金の税負担は通常の給与に比べて大幅に軽くなります。勤続20年・退職金800万円なら税金ゼロというケースも珍しくありません。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kojo">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 退職所得控除の計算</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>退職所得控除額は勤続年数によって異なります。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">勤続年数</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">退職所得控除額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">20年以下</td>
                        <td className="border border-slate-200 px-4 py-2">40万円 &times; 勤続年数（最低80万円）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">20年超</td>
                        <td className="border border-slate-200 px-4 py-2">800万円 + 70万円 &times;（勤続年数 &minus; 20年）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>たとえば勤続年数別の控除額：</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                  <p>10年：40万 &times; 10 = <strong>400万円</strong></p>
                  <p>20年：40万 &times; 20 = <strong>800万円</strong></p>
                  <p>30年：800万 + 70万 &times; 10 = <strong>1,500万円</strong></p>
                  <p>38年：800万 + 70万 &times; 18 = <strong>2,060万円</strong></p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="keisan">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 退職所得と税額の計算</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>退職所得の計算式：</p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  退職所得 =（退職金 &minus; 退職所得控除額）&times; 1/2
                </div>
                <p>
                  この退職所得に対して、所得税の税率表（累進課税）を適用して税額を計算します。さらに住民税10%も別途かかります。
                </p>
                <p>
                  退職金が退職所得控除以下であれば、<strong>税金はゼロ</strong>です。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="rei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 具体的な計算例</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>勤続25年・退職金1,500万円の場合：</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <p><strong>Step 1: 退職所得控除</strong></p>
                  <p className="pl-4">800万 + 70万 &times; 5 = 1,150万円</p>
                  <p><strong>Step 2: 退職所得</strong></p>
                  <p className="pl-4">（1,500万 &minus; 1,150万）&times; 1/2 = 175万円</p>
                  <p><strong>Step 3: 所得税</strong></p>
                  <p className="pl-4">175万 &times; 5% = 87,500円</p>
                  <p className="pl-4">復興特別所得税込み：87,500 &times; 1.021 = 89,337円</p>
                  <p><strong>Step 4: 住民税</strong></p>
                  <p className="pl-4">175万 &times; 10% = 175,000円</p>
                  <p className="mt-2 border-t border-slate-300 pt-2">
                    <strong>税金合計</strong>：89,337 + 175,000 = <strong>264,337円</strong>
                  </p>
                  <p className="text-lg font-bold text-emerald-600">
                    手取り：1,500万 &minus; 約26.4万 = 約1,473.6万円（税率約1.8%）
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="hayami">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 勤続年数別の手取り目安</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">勤続年数</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">退職金</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">控除額</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">税金概算</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">手取り</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">10年</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">300万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">400万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">0円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">300万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">20年</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">800万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">800万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">0円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">800万円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">30年</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">2,000万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">1,500万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">約53万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">約1,947万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">38年</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">2,500万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">2,060万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">約36万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">約2,464万円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 所得税（復興特別所得税込み）+ 住民税の概算です。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    退職金と税
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

            <AdSenseUnit slot="guide-ad-2" />

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連記事</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
                </Link>
                <Link href="/guide/nenshu-tedori-hayamihyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年収別の手取り早見表</p>
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
