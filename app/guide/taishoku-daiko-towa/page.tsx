import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import AffiliateSection from "../../../components/affiliates/affiliate-section";
import { TAISHOKU_AFFILIATES, ZANGYODAI_AFFILIATES } from "../../../lib/affiliates";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FAQPageJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "退職代行サービスとは？仕組み・費用・おすすめの選び方 | 給料ラボ",
  description:
    "退職代行サービスの仕組み・費用相場・弁護士法人と民間の違い・残業代請求との組み合わせまで解説。即日退職・ブラック企業対応のポイントも。",
  keywords: "退職代行,退職代行 費用,退職代行 おすすめ,仕事 辞めたい,ブラック企業 退職",
  alternates: { canonical: "/guide/taishoku-daiko-towa" },
  openGraph: {
    title: "退職代行サービスとは？仕組み・費用・選び方",
    description: "退職代行の仕組みから費用・選び方まで徹底解説。",
    type: "article",
  },
};

const faqItems = [
  {
    question: "退職代行を使っても会社に損害賠償を請求されませんか？",
    answer:
      "労働者には退職の自由が法律で保障されており（民法627条）、正当な退職手続きを踏んでいれば損害賠償を請求されることはほとんどありません。退職代行サービスを使って即日退職しても、それ自体が損害賠償の原因にはなりません。",
  },
  {
    question: "退職代行を使うと転職活動に影響しますか？",
    answer:
      "退職代行を利用した事実が次の転職先に伝わることはありません。退職理由は「一身上の都合」と伝えるのが一般的で、離職票や雇用保険の手続きも通常通り行われます。",
  },
  {
    question: "弁護士法人の退職代行と民間の退職代行の違いは？",
    answer:
      "民間の退職代行は「退職の意思を伝える」ことのみ行えますが、弁護士法人は未払い残業代・慰謝料の請求や会社との交渉まで代行できます。ブラック企業や残業代未払いがある場合は弁護士法人の利用をおすすめします。",
  },
  {
    question: "即日退職は本当にできますか？",
    answer:
      "原則として申し込んだ当日から会社への連絡を代行してもらえます。欠勤扱いになる場合もありますが、出社することなく退職手続きを進めることが可能です。",
  },
];

export default function TaishokuDaikoTowaPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="退職代行サービスとは？仕組み・費用・おすすめの選び方"
        description="退職代行サービスの仕組み・費用相場・弁護士法人と民間の違いを徹底解説。"
        url="https://kyuryo-lab.com/guide/taishoku-daiko-towa"
        datePublished="2026-04-15"
      />
      <FAQPageJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "退職代行サービスとは", url: "https://kyuryo-lab.com/guide/taishoku-daiko-towa" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", url: "/" },
          { name: "給与ガイド", url: "/guide" },
          { name: "退職代行サービスとは", url: "/guide/taishoku-daiko-towa" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              退職代行サービスとは？仕組み・費用・おすすめの選び方
            </h1>
            <p className="text-slate-500">
              「会社を辞めたいけれど言い出せない」「残業が多くて限界…」そんな方のために、
              退職代行サービスの仕組み・費用相場・弁護士法人と民間の違いを解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#shikumi" className="hover:underline">退職代行とは・仕組み</a></li>
                <li><a href="#hiyou" className="hover:underline">費用相場</a></li>
                <li><a href="#bengoshi-vs-minkann" className="hover:underline">弁護士法人 vs 民間サービスの違い</a></li>
                <li><a href="#zangyodai" className="hover:underline">退職と同時に残業代も請求できる</a></li>
                <li><a href="#ryuui" className="hover:underline">使う前の注意点</a></li>
              </ol>
            </nav>

            {/* Section 1 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shikumi">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 退職代行とは・仕組み</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  退職代行サービスとは、労働者が会社に「退職したい」と伝える作業を代わりに行ってくれるサービスです。
                  2018年頃から広まり、現在では年間数万人以上が利用しています。
                </p>
                <p>
                  利用の流れは一般的に以下の通りです。
                </p>
                <ol className="list-decimal list-inside space-y-1 pl-2">
                  <li>退職代行サービスに申し込む（LINEやメールで即日可）</li>
                  <li>退職の意向・希望退職日・返却物などを伝える</li>
                  <li>代行業者が会社に連絡・退職交渉を行う</li>
                  <li>出社せずに退職完了</li>
                </ol>
                <p>
                  サービスによっては申し込みから<strong>最短即日</strong>で会社への連絡を行ってくれます。
                </p>
              </div>
            </section>

            {/* アフィリエイト①：退職代行 */}
            <AffiliateSection
              heading="今すぐ退職代行を確認する"
              items={TAISHOKU_AFFILIATES}
            />

            {/* Section 2 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="hiyou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 費用相場</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">種別</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">費用相場</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">できること</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-slate-200 font-medium">民間退職代行</td>
                        <td className="p-3 border border-slate-200">15,000〜30,000円</td>
                        <td className="p-3 border border-slate-200">退職の意思伝達のみ</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 border border-slate-200 font-medium">弁護士法人運営</td>
                        <td className="p-3 border border-slate-200">27,000〜55,000円</td>
                        <td className="p-3 border border-slate-200">交渉・未払い請求・慰謝料請求も可</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-slate-200 font-medium">労働組合運営</td>
                        <td className="p-3 border border-slate-200">20,000〜30,000円</td>
                        <td className="p-3 border border-slate-200">団体交渉権あり・条件交渉も可能</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  費用は一見高く見えますが、<strong>未払い残業代が数十万〜数百万円あるケース</strong>では、弁護士法人で退職代行と同時に請求を依頼することで十分元が取れることがあります。
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="bengoshi-vs-minkann">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 弁護士法人 vs 民間サービスの違い</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  最も重要な違いは<strong>「交渉できるかどうか」</strong>です。
                </p>
                <p>
                  民間の退職代行は弁護士でないため、法律上「交渉」は行えません。
                  退職の意思を伝えることしかできず、会社が「有給消化を認めない」「退職金を払わない」と言っても対応が難しいです。
                </p>
                <p>
                  一方、弁護士法人が運営するサービスは、退職の連絡だけでなく有給消化の請求・未払い残業代の交渉・慰謝料請求まで一括して対応できます。
                  ブラック企業や残業代未払いの疑いがある場合は弁護士法人を選ぶべきでしょう。
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="zangyodai">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 退職と同時に残業代も請求できる</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  「どうせ辞めるから残業代はあきらめよう」と思っていませんか？
                  それは大きな損失です。
                </p>
                <p>
                  残業代の時効は3年のため、退職後でも最大3年分を請求できます。
                  弁護士法人の退職代行であれば、<strong>退職手続きと残業代請求を同時に進める</strong>ことが可能です。
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-blue-800 font-semibold text-sm mb-1">📊 試算例</p>
                  <p className="text-blue-700 text-sm">
                    月給30万円 × 月20時間の未払い残業 × 36ヶ月（3年）= 約112万円の請求権
                  </p>
                  <p className="text-blue-700 text-sm mt-1">
                    まずは<Link href="/" className="underline">残業代計算ツール</Link>で未払い額の見当をつけてみましょう。
                  </p>
                </div>
              </div>
            </section>

            {/* アフィリエイト②：弁護士 */}
            <AffiliateSection
              heading="退職 + 未払い残業代の請求を同時に相談"
              items={ZANGYODAI_AFFILIATES}
            />

            {/* Section 5 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="ryuui">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 使う前の注意点</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>会社の備品・保険証は退職前に返却</strong>…返却方法は代行業者が案内してくれます</li>
                  <li><strong>離職票・源泉徴収票の受け取り</strong>…郵送してもらうよう代行業者経由で伝えてもらえます</li>
                  <li><strong>有給が残っている場合は消化してから退職</strong>…有給消化中も給与が支払われます</li>
                  <li><strong>即日退職でも失業給付は受給可能</strong>…退職理由（自己都合 or 会社都合）によって待期期間が異なります</li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">よくある質問</h2>
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question}>
                    <h3 className="font-semibold text-slate-700 mb-1">Q. {item.question}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">A. {item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 関連 */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連ツール・ガイド</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">残業代計算ツール</p>
                  <p className="text-xs text-slate-400 mt-1">未払い額を今すぐ試算</p>
                </Link>
                <Link href="/guide/zangyodai-miharai-soudan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">残業代未払いの相談方法</p>
                  <p className="text-xs text-slate-400 mt-1">弁護士・労基署の選び方</p>
                </Link>
                <Link href="/guide/zangyoudai-keisan-houhou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">残業代の計算方法</p>
                  <p className="text-xs text-slate-400 mt-1">割増率・計算例つき</p>
                </Link>
                <Link href="/guide/minashi-zangyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">みなし残業（固定残業代）とは</p>
                  <p className="text-xs text-slate-400 mt-1">知らないと損する仕組み</p>
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
