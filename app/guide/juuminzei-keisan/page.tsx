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
  title: "住民税の計算方法 | 税率10%の仕組みと計算例 | 給料ラボ",
  description:
    "住民税の計算方法を、均等割・所得割の仕組み���ら具体的な計算例まで解説。新卒2年目に手取りが減る理由や、ふるさと納税との関係も紹介。",
  keywords: "住民税,計算,税率,10%,均等割,所得割,ふるさと納税",
  alternates: { canonical: "/guide/juuminzei-keisan" },
  openGraph: {
    title: "住民税の計算方法 | 税率10%の仕組みと計算例",
    description: "住民税の計算方法を具体的な計算例とともに解説。",
    type: "article",
  },
};

export default function JuuminzeiPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="住民税の計算方法 | 税率10%の仕組みと計算例"
        description="住民税の計算方法を、均等割・所得割の仕組みから具体的な計算例まで解説。"
        url="https://kyuryo-lab.com/guide/juuminzei-keisan"
        datePublished="2025-04-04"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "住民税の計算方法", url: "https://kyuryo-lab.com/guide/juuminzei-keisan" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "住民税の計算方法", href: "/guide/juuminzei-keisan" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              住民税の計算方法 | 税率10%の仕組みと計算例
            </h1>
            <p className="text-slate-500">
              住民税は前年の所得に基づいて課税されるため、新卒2年目に「手取りが減った」と感じる大きな原因です。その仕組みを詳しく解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#shikumi" className="hover:underline">住民税の基本的な仕組み</a></li>
                <li><a href="#kintouwari" className="hover:underline">均等割と所得割</a></li>
                <li><a href="#keisan" className="hover:underline">住民税の計算手順</a></li>
                <li><a href="#keisan-rei" className="hover:underline">具体的な計算例</a></li>
                <li><a href="#2nenme" className="hover:underline">新卒2年目の壁</a></li>
                <li><a href="#furusato" className="hover:underline">ふるさと納税で住民税を減らす</a></li>
              </ol>
            </nav>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shikumi">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 住民税の基本的な仕組み</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  住民税は都道府県と市区町村に納める地方税です。所得税と大きく異なるのは、<strong>前年の1月〜12月の所得</strong>に基づいて計算され、翌年6月から翌々年5月にかけて天引きされる点です。
                </p>
                <p>
                  会社員の場合、毎年5月頃に市区町村から会社に「住民税決定通知書」が届き、6月の給与から新しい金額で天引き（特別��収）が始まります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kintouwari">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 均等割と所得割</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>住民税は「均等割」と「所得割」の2つで構成されます。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">区分</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">内容</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">均等割</td>
                        <td className="border border-slate-200 px-4 py-2">所得に関係なく一定額</td>
                        <td className="border border-slate-200 px-4 py-2">年額5,000円（市区町村3,500円 + 都道府県1,500円）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">所得割</td>
                        <td className="border border-slate-200 px-4 py-2">課税所得に税率を適用</td>
                        <td className="border border-slate-200 px-4 py-2">一律10%（市区町村6% + 都道府県4%）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  所得税と異なり、住民税の税率は<strong>一律10%</strong>です。所得が高くても低くても同じ税率が適用されます（累進課税ではない）。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="keisan">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 住民税の計算手順</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>住民税の計算手順は所得税とほぼ同じですが、控除額が若干異なります。</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1 font-mono text-sm">
                  <p>1. 前年の給与収入</p>
                  <p>2. &minus; 給与所得控除 = 給与所得</p>
                  <p>3. &minus; 所得控除 = 課税所得</p>
                  <p>4. &times; 10%（所得割）+ 5,000円（均等割）= 住民税</p>
                </div>
                <p>
                  住民税の基礎控除は<strong>43万円</strong>（所得税は48万円）と5万円少ないため、同じ年収でも住民税の課税所得の方がやや大きくなります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="keisan-rei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 具体的な計算例</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>年収400万円・独身・30歳の場合：</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <p><strong>Step 1:</strong> 給与所得控除 = 400万 &times; 20% + 44万 = 124万円</p>
                  <p><strong>Step 2:</strong> 給与所得 = 400万 &minus; 124万 = 276万円</p>
                  <p><strong>Step 3:</strong> 社会保険料控除 &asymp; 59万円</p>
                  <p><strong>Step 4:</strong> 課税所得 = 276万 &minus; 43万（基礎控除）&minus; 59万 = 174万円</p>
                  <p><strong>Step 5:</strong> 所得割 = 174万 &times; 10% = 174,000円</p>
                  <p><strong>Step 6:</strong> 住民税（年額）= 174,000 + 5,000 = <span className="text-lg font-bold text-emerald-600">179,000円</span></p>
                  <p className="pl-4">月額にすると約 <strong>14,916円</strong></p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="2nenme">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 新卒2年目の壁</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  新卒1年目は前年の所得がない（または少ない）ため、住民税がかかりません。しかし<strong>2年目の6月</strong>から1年目の所得に基づく住民税が天引きされ始めます。
                </p>
                <p>
                  たとえば初任給で年収300万円の場合、2年目から月額約1万円の住民税が発生し、手取りがその分減ります。これが「2年目の壁」と呼ばれる現象です。
                </p>
                <p>
                  さらに昇給で所得税も増えるため、「給料は上がったのに手取りは減った」と感じるケースもあります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="furusato">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. ふるさと納税で住民税を減らす</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  ふるさと納税は、自治体への寄付を通じて住民税（と一部所得税��を前払いする制度です。���己負担2,000円で返礼品が受け取れるため、実質的な節税効果があります。
                </p>
                <p>
                  年収400万円・独身の場合の控除上限目安は約<strong>42,000円</strong>です。この範囲内であれば、寄付額 &minus; 2,000円が住民税から控除されます。
                </p>
                <p>
                  5���治体以内であれば「ワンストップ特例」を利用でき、確定申告なしで住民税から控除されます。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.soumu.go.jp/main_sosiki/jichi_zeisei/czaisei/czaisei_seido/150790_06.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    個人住民税
                  </a>
                  <span className="text-slate-400 ml-1">（総務省）</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">手取り額を計算してみる</h2>
              <p className="text-sm text-slate-600 mb-4">
                住民税・所得税・社会保険料を含めた手取り額を即座に計算できます。
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
                <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
                </Link>
                <Link href="/guide/nenshu-tedori-hayamihyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年収別の手取り早見表</p>
                </Link>
                <Link href="/guide/tedori-shikumi" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">手取り額の仕組み</p>
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
