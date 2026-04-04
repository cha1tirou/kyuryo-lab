import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Link from "next/link";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "月60時間超の残業代は50%増 | 2023年改正のポイント | 給料ラボ",
  description:
    "2023年4月から中小企業にも適用された月60時間超の残業割増率50%への引き上げ。改正のポイント、計算例、企業が取るべき対応を解説。",
  keywords: "残業代,60時間,50%増,割増率,2023年改正,中小企業",
  openGraph: {
    title: "月60時間超の残業代は50%増 | 2023年改正のポイント",
    description: "月60時間超の残業代50%増の改正ポイントを計算例つきで解説。",
    type: "article",
  },
};

export default function Zangyou60Page() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="月60時間超の残業代は50%増 | 2023年改正のポイント"
        description="2023年4月から中小企業にも適用された月60時間超の残業割増率50%への引き上げを解説。"
        url="https://kyuryo-lab.com/guide/zangyou-60jikan-rule"
        datePublished="2025-01-15"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "月60時間超の残業代50%増", url: "https://kyuryo-lab.com/guide/zangyou-60jikan-rule" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              月60時間超の残業代は50%増 | 2023年改正のポイント
            </h1>
            <p className="text-slate-500">
              2023年4月1日から、中小企業でも月60時間を超える残業に50%の割増率が適用されるようになりました。この改正の影響と計算方法を詳しく解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#kaisei" className="hover:underline">2023年法改正の概要</a></li>
                <li><a href="#taishou" className="hover:underline">対象となる企業と労働者</a></li>
                <li><a href="#keisan" className="hover:underline">計算方法と具体例</a></li>
                <li><a href="#daikyu" className="hover:underline">代替休暇制度</a></li>
                <li><a href="#taiou" className="hover:underline">企業の対応ポイント</a></li>
              </ol>
            </nav>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kaisei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 2023年法改正の概要</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  労働基準法第37条により、月60時間を超える時間外労働に対する割増賃金率は<strong>50%以上</strong>と定められています。
                </p>
                <p>
                  大企業には2010年から適用されていましたが、中小企業には猶予措置が設けられていました。この猶予が<strong>2023年4月1日をもって廃止</strong>され、すべての企業に50%の割増率が義務付けられました。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">残業時間</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">改正前（中小企業）</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">改正後（全企業）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">月60時間以内</td>
                        <td className="border border-slate-200 px-4 py-2">25%増</td>
                        <td className="border border-slate-200 px-4 py-2">25%増（変更なし）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">月60時間超</td>
                        <td className="border border-slate-200 px-4 py-2">25%増</td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold text-emerald-600">50%増</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="taishou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 対象となる企業と労働者</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  この改正は、企業規模を問わず<strong>すべての企業</strong>に適用されます。これまで猶予されていた中小企業の定義は以下の通りです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">業種</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">資本金</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">従業員数</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">小売業</td>
                        <td className="border border-slate-200 px-4 py-2">5,000万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">50人以下</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">サービス業</td>
                        <td className="border border-slate-200 px-4 py-2">5,000万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">100人以下</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">卸売業</td>
                        <td className="border border-slate-200 px-4 py-2">1億円以下</td>
                        <td className="border border-slate-200 px-4 py-2">100人以下</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">その他</td>
                        <td className="border border-slate-200 px-4 py-2">3億円以下</td>
                        <td className="border border-slate-200 px-4 py-2">300人以下</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  対象となる労働者は、管理監督者を除くすべての労働者です。パート・アルバイトも含まれます。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="keisan">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 計算方法と具体例</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>月60時間を超える残業がある場合、60時間までと超過分で割増率が異なります。</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                  <p><strong>条件：</strong></p>
                  <p>基本月給：25万円 / 月所定労働時間：160時間 / 残業時間：80時間</p>
                </div>
                <div className="space-y-2 mt-4">
                  <p><strong>Step 1: 基礎時給</strong></p>
                  <p className="pl-4">250,000 &divide; 160 = 1,562円</p>
                  <p><strong>Step 2: 60時間以内の残業代</strong></p>
                  <p className="pl-4">1,562 &times; 1.25 &times; 60 = 117,150円</p>
                  <p><strong>Step 3: 60時間超の残業代（20時間分）</strong></p>
                  <p className="pl-4">1,562 &times; 1.50 &times; 20 = 46,860円</p>
                  <p><strong>残業代合計</strong></p>
                  <p className="pl-4 text-lg font-bold text-emerald-600">117,150 + 46,860 = 164,010円</p>
                </div>
                <p className="mt-2">
                  もし全時間が25%増だった場合は156,200円なので、<strong>7,810円の増額</strong>となります。残業時間が多いほど差は大きくなります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="daikyu">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 代替休暇制度</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  月60時間超の残業について、割増賃金の引き上げ分（25%→50%の差額25%分）を金銭ではなく<strong>有給の休暇</strong>で付与する制度が「代替休暇」です。
                </p>
                <p>
                  代替休暇の導入には労使協定の締結が必要で、以下の事項を定めます。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>代替休暇の計算方法</li>
                  <li>代替休暇の単位（1日または半日）</li>
                  <li>代替休暇を与える期間（60時間超が発生した月の翌月末まで等）</li>
                  <li>代替休暇の取得か割増賃金かの選択方法</li>
                </ul>
                <p>
                  重要なのは、代替休暇を取得しなかった場合は<strong>必ず50%の割増賃金を支払う</strong>必要がある点です。労働者に選択権があります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="taiou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 企業の対応ポイント</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>企業が確認・対応すべきポイントは以下の通りです。</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>就業規則の改定</strong>：割増賃金率を50%に更新し、労働基準監督署に届出
                  </li>
                  <li>
                    <strong>給与計算システムの設定変更</strong>：60時間超の自動計算に対応しているか確認
                  </li>
                  <li>
                    <strong>残業時間の管理強化</strong>：月60時間に近づいた時点でアラートを出す仕組み
                  </li>
                  <li>
                    <strong>代替休暇制度の検討</strong>：導入する場合は労使協定を締結
                  </li>
                  <li>
                    <strong>業務効率化</strong>：60時間を超えないための業務配分の見直し
                  </li>
                </ul>
                <p>
                  違反した場合は<strong>6か月以下の懲役または30万円以下の罰金</strong>が科される可能性があります。
                </p>
              </div>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">残業代を計算してみる</h2>
              <p className="text-sm text-slate-600 mb-4">
                60時間超の割増率にも対応した残業代計算ツールです。
              </p>
              <Link
                href="/"
                className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
              >
                残業代計算ツールを使う
              </Link>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
