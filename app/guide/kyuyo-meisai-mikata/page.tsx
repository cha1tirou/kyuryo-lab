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
  title: "給与明細の見方 | 項目・控除を完全ガイド | 給料ラボ",
  description:
    "給与明細の各項目を徹底解説。基本給・残業代・社会保険料・所得税・住民税など、毎月の控除の意味と金額の目安をわかりやすく紹介します。",
  keywords: "給与明細,見方,項目,控除,天引き,社会保険料,所得税",
  alternates: { canonical: "/guide/kyuyo-meisai-mikata" },
  openGraph: {
    title: "給与明細の見方 | 項目・控除を完全ガイド",
    description: "給与明細の各項目を徹底解説。控除の意味と金額の目安を紹介。",
    type: "article",
  },
};

export default function KyuyoMeisaiPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="給与明細の見方 | 項目・控除を完全ガイド"
        description="給与明細の各項目を徹底解説。基本給・残業代・社会保険料・所得税など控除の意味を紹介。"
        url="https://kyuryo-lab.com/guide/kyuyo-meisai-mikata"
        datePublished="2025-04-04"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "給与明細の見方", url: "https://kyuryo-lab.com/guide/kyuyo-meisai-mikata" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "給与明細の見方", href: "/guide/kyuyo-meisai-mikata" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              給与明細の見方 | 項目・控除を完全ガイド
            </h1>
            <p className="text-slate-500">
              毎月受け取る給与明細。「基本給」「時間外手当」「健康保険料」など、各項目の意味と確認すべきポイントを解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#kosei" className="hover:underline">給与明細の3つの構成</a></li>
                <li><a href="#shikyuu" className="hover:underline">支給項目（もらえるお金）</a></li>
                <li><a href="#kojo" className="hover:underline">控除項目（天引きされるお金）</a></li>
                <li><a href="#tedori" className="hover:underline">差引支給額（手取り）の確認</a></li>
                <li><a href="#check" className="hover:underline">給与明細で確認すべきポイント</a></li>
              </ol>
            </nav>

            <AdSenseUnit slot="guide-ad-1" />

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kosei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 給与明細の3つの構成</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>給与明細は大きく3つのブロックに分かれています。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">ブロック</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">内容</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">勤怠</td>
                        <td className="border border-slate-200 px-4 py-2">出勤日数・残業時間・有給取得日数など</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">支給</td>
                        <td className="border border-slate-200 px-4 py-2">基本給・各種手当・残業代（総支給額＝額面）</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">控除</td>
                        <td className="border border-slate-200 px-4 py-2">社会保険料・所得税・住民税（天引き額の合計）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>差引支給額</strong>（総支給額 &minus; 控除合計）が実際に口座に振り込まれる「手取り」です。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shikyuu">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 支給項目（もらえるお金）</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">項目名</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">説明</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">基本給</td>
                        <td className="border border-slate-200 px-4 py-2">毎月固定で支払われるベースの給与</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">時間外手当（残業代）</td>
                        <td className="border border-slate-200 px-4 py-2">法定労働時間を超えた労働への割増賃金（25%〜50%増）</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">通勤手当</td>
                        <td className="border border-slate-200 px-4 py-2">通勤費用の実費補填。月15万円まで非課税</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">住宅手当</td>
                        <td className="border border-slate-200 px-4 py-2">住居費の補助。課税対象</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">家族手当</td>
                        <td className="border border-slate-200 px-4 py-2">配偶者や子がいる場合の手当。課税対象</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">役職手当</td>
                        <td className="border border-slate-200 px-4 py-2">管理職等の役職に応じた手当</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  通勤手当は<strong>月15万円まで非課税</strong>のため、社会保険料や税金の計算基準に含まれません（ただし社会保険の標準報酬月額には含まれます）。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kojo">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 控除項目（天引きされるお金）</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <h3 className="font-semibold text-slate-700">社会保険料</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">項目</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">本人負担率</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">月収30万円の目安</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">健康保険料</td>
                        <td className="border border-slate-200 px-4 py-2">約4.99%</td>
                        <td className="border border-slate-200 px-4 py-2">約14,970円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">厚生年金</td>
                        <td className="border border-slate-200 px-4 py-2">9.15%</td>
                        <td className="border border-slate-200 px-4 py-2">約27,450円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">雇用保険</td>
                        <td className="border border-slate-200 px-4 py-2">0.6%</td>
                        <td className="border border-slate-200 px-4 py-2">約1,800円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">介護保険（40歳以上）</td>
                        <td className="border border-slate-200 px-4 py-2">約0.91%</td>
                        <td className="border border-slate-200 px-4 py-2">約2,730円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="font-semibold text-slate-700 mt-4">税金</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">項目</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">説明</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">月収30万円の目安</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">所得税</td>
                        <td className="border border-slate-200 px-4 py-2">累進課税（5〜45%）。源泉徴収</td>
                        <td className="border border-slate-200 px-4 py-2">約6,000〜8,000円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">住民税</td>
                        <td className="border border-slate-200 px-4 py-2">一律10%。前年所得に基づく</td>
                        <td className="border border-slate-200 px-4 py-2">約12,000〜15,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="tedori">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 差引支給額（手取り）の確認</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  月収30万円（独身・30歳）の場合のモデルケース：
                </p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                  <p>総支給額：<strong>300,000円</strong></p>
                  <p>社会保険料合計：&minus; 約44,220円</p>
                  <p>所得税：&minus; 約6,500円</p>
                  <p>住民税：&minus; 約13,000円</p>
                  <p className="border-t border-slate-300 pt-2 mt-2 text-lg font-bold text-emerald-600">
                    手取り：約236,280円（額面の約79%）
                  </p>
                </div>
                <p>
                  一般的に額面の<strong>75〜85%</strong>が手取りの目安です。年収が高いほど税率が上がるため、手取り率は下がります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="check">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 給与明細で確認すべきポイント</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li><strong>残業時間と残業代が正しいか</strong> — 自分で記録した勤務時間と照合しましょう</li>
                  <li><strong>通勤手当が正しく反映されているか</strong> — 定期代の変更があった場合は要確認</li>
                  <li><strong>社会保険料が急に変わっていないか</strong> — 標準報酬月額の改定は毎年9月</li>
                  <li><strong>住民税が6月に変わるのは正常</strong> — 毎年6月に新しい税額に切り替わります</li>
                  <li><strong>控除に見慣れない項目がないか</strong> — 社内積立や組合費なども天引きされることがあります</li>
                </ul>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.nta.go.jp/publication/pamph/gensen/zeigakuhyo2024/02.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    源泉徴収税額表
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
              <h2 className="font-semibold text-slate-800 mb-2">あなたの手取りを計算してみる</h2>
              <p className="text-sm text-slate-600 mb-4">
                月収を入力するだけで、控除の内訳と手取り額を確認できます。
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
                <Link href="/guide/shakaihokenryou-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">社会保険料の計算方法</p>
                </Link>
                <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
                </Link>
                <Link href="/guide/zangyoudai-keisan-houhou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">残業代の計算方法</p>
                </Link>
                <Link href="/guide/juuminzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">住民税の計算方法</p>
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
