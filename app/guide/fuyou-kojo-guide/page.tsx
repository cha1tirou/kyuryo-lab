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
  title: "扶養控除と103万円の壁 | 年収の壁を完全解説 | 給料ラボ",
  description:
    "103万円・106万円・130万円・150万円の壁を一覧で解説。扶養控除・配偶者控除の仕組みと、壁を超えた場合の影響を具体的な金額で紹介。",
  keywords: "扶養控除,103万の壁,130万の壁,配偶者控除,年収の壁,扶養",
  alternates: { canonical: "/guide/fuyou-kojo-guide" },
  openGraph: {
    title: "扶養控除と103万円の壁 | 年収の壁を完全解説",
    description: "103万・130万・150万の壁と扶養控除の仕組みを解説。",
    type: "article",
  },
};

export default function FuyouKojoPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="扶養控除と103万円の壁 | 年収の壁を完全解説"
        description="103万円・130万円・150万円の壁と扶養控除・配偶者控除の仕組みを解説。"
        url="https://kyuryo-lab.com/guide/fuyou-kojo-guide"
        datePublished="2025-04-04"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "扶養控除と103万円の壁", url: "https://kyuryo-lab.com/guide/fuyou-kojo-guide" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "扶養控除と103万円の壁", href: "/guide/fuyou-kojo-guide" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              扶養控除と103万円の壁 | 年収の壁を完全解説
            </h1>
            <p className="text-slate-500">
              パートやアルバイトで「103万円を超えないように」と言われたことはありませんか？年収の壁の種類と影響を詳しく解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#ichiran" className="hover:underline">年収の壁一覧</a></li>
                <li><a href="#103man" className="hover:underline">103万円の壁（所得税）</a></li>
                <li><a href="#106man" className="hover:underline">106万円の壁（社会保険）</a></li>
                <li><a href="#130man" className="hover:underline">130万円の壁（扶養から外れる）</a></li>
                <li><a href="#150man" className="hover:underline">150万円の壁（配偶者特別控除）</a></li>
                <li><a href="#fuyou" className="hover:underline">扶養控除の種類と控除額</a></li>
              </ol>
            </nav>

            <AdSenseUnit slot="guide-ad-1" />

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="ichiran">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 年収の壁一覧</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">壁</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">超えると何が起きる？</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">影響を受ける人</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">100万円</td>
                        <td className="border border-slate-200 px-4 py-2">住民税がかかり始める</td>
                        <td className="border border-slate-200 px-4 py-2">本人</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold text-red-600">103万円</td>
                        <td className="border border-slate-200 px-4 py-2">所得税がかかり始める／扶養控除の対象外</td>
                        <td className="border border-slate-200 px-4 py-2">本人 + 扶養者</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold text-red-600">106万円</td>
                        <td className="border border-slate-200 px-4 py-2">社会保険の加入義務（大企業）</td>
                        <td className="border border-slate-200 px-4 py-2">本人</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold text-red-600">130万円</td>
                        <td className="border border-slate-200 px-4 py-2">社会保険の扶養から外れる</td>
                        <td className="border border-slate-200 px-4 py-2">本人</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">150万円</td>
                        <td className="border border-slate-200 px-4 py-2">配偶者特別控除が段階的に減少</td>
                        <td className="border border-slate-200 px-4 py-2">配偶者（扶養者）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">201万円</td>
                        <td className="border border-slate-200 px-4 py-2">配偶者特別控除がゼロに</td>
                        <td className="border border-slate-200 px-4 py-2">配偶者（扶養者）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="103man">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 103万円の壁（所得税）</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  給与収入103万円以下であれば、給与所得控除55万円 + 基礎控除48万円 = 103万円で課税所得がゼロになるため、<strong>所得税がかかりません</strong>。
                </p>
                <p>
                  また、扶養者（親や配偶者）が受けている<strong>扶養控除</strong>の対象にもなれます。103万円を超えると、扶養者側の控除がなくなり、扶養者の税負担が増えます。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p><strong>影響の例</strong>：子のバイト収入が104万円になった場合</p>
                  <p className="pl-4">・本人の所得税：約500円程度（ほぼ影響なし）</p>
                  <p className="pl-4">・親の税負担増：扶養控除38万円 &times; 税率20% = <strong>約7.6万円の増税</strong></p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="106man">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 106万円の壁（社会保険）</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  従業員51人以上の企業で働く場合、以下の条件を<strong>すべて満たす</strong>と社会保険への加入が義務付けられます。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>週の所定労働時間が20時間以上</li>
                  <li>月額賃金が8.8万円以上（年収約106万円）</li>
                  <li>2か月を超える雇用見込み</li>
                  <li>学生でない</li>
                </ul>
                <p>
                  社会保険に加入すると、健康保険料＋厚生年金で<strong>月額約1.5万円</strong>（年収106万円の場合）の負担が発生します。ただし、将来の年金額が増えるメリットもあります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="130man">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 130万円の壁（扶養から外れる）</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  年収が130万円以上になると、配偶者や親の<strong>健康保険の扶養</strong>から外れ、自分で社会保険に加入するか国民健康保険＋国民年金に加入する必要があります。
                </p>
                <p>
                  130万円を少し超えただけの場合、社会保険料の負担（年間約20万円）で手取りが130万円未満の場合より<strong>減ってしまう</strong>ことがあります。これが「働き損」と呼ばれる現象です。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p><strong>手取りの逆転ゾーン</strong></p>
                  <p className="pl-4">年収130万円の手取り：約126万円（扶養内、社保負担なし）</p>
                  <p className="pl-4">年収140万円の手取り：約118万円（扶養外、社保負担あり）</p>
                  <p className="pl-4 text-red-600 font-semibold">→ 10万円多く稼いだのに手取りは8万円減！</p>
                </div>
                <p>
                  手取りが逆転しなくなるのは<strong>年収約160〜170万円</strong>からが目安です。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="150man">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 150万円の壁（配偶者特別控除）</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  配偶者の年収が150万円以下であれば、扶養者は<strong>配偶者控除38万円</strong>（または配偶者特別控除の満額38万円）を受けられます。
                </p>
                <p>
                  150万円を超えると配偶者特別控除が段階的に減少し、201万円で完全にゼロになります。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">配偶者の年収</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">控除額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">103万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">配偶者控除38万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">103万超〜150万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">配偶者特別控除38万円（満額）</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">150万超〜201万円以下</td>
                        <td className="border border-slate-200 px-4 py-2">段階的に減少（36万〜1万円）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">201万円超</td>
                        <td className="border border-slate-200 px-4 py-2">0円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="fuyou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. 扶養控除の種類と控除額</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>扶養控除は扶養親族の年齢や同居状況によって控除額が異なります。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">区分</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">対象</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">所得税控除</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">住民税控除</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">一般の扶養親族</td>
                        <td className="border border-slate-200 px-4 py-2">16歳以上</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">38万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">33万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">特定扶養親族</td>
                        <td className="border border-slate-200 px-4 py-2">19〜22歳</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">63万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">45万円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">老人扶養親族（同居）</td>
                        <td className="border border-slate-200 px-4 py-2">70歳以上（同居）</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">58万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">45万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">老人扶養親族（別居）</td>
                        <td className="border border-slate-200 px-4 py-2">70歳以上（別居）</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">48万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">38万円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  いずれも扶養親族の<strong>年間所得が48万円以下</strong>（給与収入のみなら年収103万円以下）が条件です。16歳未満の子は扶養控除の対象外ですが、住民税の非課税判定に影響します。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    扶養控除
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
                <li>
                  <a href="https://www.nenkin.go.jp/service/kounen/jigyosho-hiho/hihokensha1/20141204-02.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    被扶養者の認定
                  </a>
                  <span className="text-slate-400 ml-1">（日本年金機構）</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">手取り額を計算してみる</h2>
              <p className="text-sm text-slate-600 mb-4">
                扶養人数を入力して手取り額の変化を確認できます。
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
                <Link href="/guide/nenmatsu-chousei" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年末調整の仕組み</p>
                </Link>
                <Link href="/guide/juuminzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">住民税の計算方法</p>
                </Link>
                <Link href="/guide/tedori-shikumi" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">手取り額の仕組み</p>
                </Link>
                <Link href="/guide/nenshu-tedori-hayamihyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年収別の手取り早見表</p>
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
