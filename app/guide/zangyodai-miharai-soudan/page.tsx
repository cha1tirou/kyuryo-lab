import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import AffiliateSection from "../../../components/affiliates/affiliate-section";
import { ZANGYODAI_AFFILIATES, TAISHOKU_AFFILIATES } from "../../../lib/affiliates";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FAQPageJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "残業代の未払いを相談する方法｜弁護士・労基署・無料窓口まとめ | 給料ラボ",
  description:
    "残業代が払われていない場合の相談先を徹底解説。弁護士・労働基準監督署・無料相談窓口の違いと選び方、相談前に準備すべき証拠まで。",
  keywords: "残業代 未払い 相談,残業代 請求,弁護士 相談,労働基準監督署,未払い残業代",
  alternates: { canonical: "/guide/zangyodai-miharai-soudan" },
  openGraph: {
    title: "残業代の未払いを相談する方法｜弁護士・労基署・無料窓口まとめ",
    description: "残業代が払われていない場合の相談先と選び方を徹底解説。",
    type: "article",
  },
};

const faqItems = [
  {
    question: "残業代の未払いを相談できる無料窓口はありますか？",
    answer:
      "労働基準監督署（労基署）では無料で相談を受け付けています。また、弁護士の初回相談無料サービスや、法テラス（日本司法支援センター）でも無料相談が可能です。近年は完全成功報酬型の弁護士事務所も増えており、着手金ゼロで依頼できるケースも多いです。",
  },
  {
    question: "未払い残業代はどのくらいさかのぼって請求できますか？",
    answer:
      "2020年4月の法改正により、残業代の時効は2年から3年に延長されました。2020年4月1日以降に発生した未払い残業代については、最大3年分を請求できます。ただし時効は毎月進行するため、気づいたら早めに行動することが重要です。",
  },
  {
    question: "証拠がなくても残業代を請求できますか？",
    answer:
      "タイムカードや出退勤記録がなくても、メールの送受信時刻・交通系ICカードの履歴・スマートフォンの位置情報などが証拠になり得ます。弁護士に相談すれば証拠の集め方についてもアドバイスをもらえます。",
  },
  {
    question: "会社に残業代を請求したら報復されませんか？",
    answer:
      "労働基準法は、残業代請求を理由とした不当解雇や不利益扱いを禁止しています。弁護士を代理人にすれば会社と直接交渉する必要がなく、精神的な負担も軽減できます。",
  },
];

export default function ZangyodaiMiharaiSoudanPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="残業代の未払いを相談する方法｜弁護士・労基署・無料窓口まとめ"
        description="残業代が払われていない場合の相談先を徹底解説。"
        url="https://kyuryo-lab.com/guide/zangyodai-miharai-soudan"
        datePublished="2026-04-15"
      />
      <FAQPageJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "残業代未払いの相談方法", url: "https://kyuryo-lab.com/guide/zangyodai-miharai-soudan" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "残業代未払いの相談方法", href: "/guide/zangyodai-miharai-soudan" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              残業代の未払いを相談する方法｜弁護士・労基署・無料窓口まとめ
            </h1>
            <p className="text-slate-500">
              「残業代が払われていない気がする」と感じたとき、どこに相談すればいいのかを解説します。
              弁護士・労働基準監督署・無料窓口の違い、相談前に準備すべき証拠まで。
            </p>
          </header>

          <div className="space-y-8">
            {/* TOC */}
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#check" className="hover:underline">まず確認：未払いかどうか計算する</a></li>
                <li><a href="#soudan-saki" className="hover:underline">相談先の選び方</a></li>
                <li><a href="#bengoshi" className="hover:underline">弁護士に相談するメリット</a></li>
                <li><a href="#rouki" className="hover:underline">労働基準監督署（労基署）への申告</a></li>
                <li><a href="#shoko" className="hover:underline">相談前に用意する証拠</a></li>
                <li><a href="#jikkou" className="hover:underline">時効に注意：早めに動くべき理由</a></li>
              </ol>
            </nav>

            {/* Section 1 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="check">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. まず確認：未払いかどうか計算する</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  相談する前に、まず自分の残業代が正しく支払われているかを確認しましょう。
                  計算に必要な情報は「月給（基本給）」と「残業時間数」だけです。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 text-sm">
                  <p className="font-semibold text-slate-700 mb-2">基本的な計算式</p>
                  <p className="font-mono text-slate-700">基礎時給 = 月給 ÷ 月所定労働時間（約160時間）</p>
                  <p className="font-mono text-slate-700 mt-1">残業代 = 基礎時給 × 1.25 × 残業時間数</p>
                </div>
                <p>
                  給与明細の「時間外手当」がこの計算結果より著しく少ない場合、未払いが発生している可能性があります。
                  給料ラボの<Link href="/" className="text-blue-600 hover:underline">残業代計算ツール</Link>で正確な金額を確認してみてください。
                </p>
              </div>
            </section>

            {/* アフィリエイト①：弁護士相談 */}
            <AffiliateSection
              heading="未払い残業代は取り戻せます"
              items={ZANGYODAI_AFFILIATES}
            />

            {/* Section 2 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="soudan-saki">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 相談先の選び方</h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  残業代の未払いを相談できる窓口は大きく3つあります。状況に応じて選びましょう。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">相談先</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">費用</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">特徴</th>
                        <th className="text-left p-3 border border-slate-200 font-semibold text-slate-700">向いている状況</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-slate-200 font-medium text-slate-700">弁護士</td>
                        <td className="p-3 border border-slate-200">初回無料〜<br/>完全成功報酬型も</td>
                        <td className="p-3 border border-slate-200">代理人として交渉・請求まで対応</td>
                        <td className="p-3 border border-slate-200">確実に回収したい・金額が大きい</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 border border-slate-200 font-medium text-slate-700">労働基準監督署</td>
                        <td className="p-3 border border-slate-200">無料</td>
                        <td className="p-3 border border-slate-200">会社への指導・是正勧告</td>
                        <td className="p-3 border border-slate-200">会社全体の是正を求めたい</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-slate-200 font-medium text-slate-700">法テラス</td>
                        <td className="p-3 border border-slate-200">無料（収入制限あり）</td>
                        <td className="p-3 border border-slate-200">弁護士費用の立替制度あり</td>
                        <td className="p-3 border border-slate-200">費用が心配な方</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  未払い残業代を確実に回収したい場合は、<strong>弁護士への依頼が最も確実</strong>です。
                  労基署は会社に指導はできますが、個人への支払いを強制する権限は持っていないためです。
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="bengoshi">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 弁護士に相談するメリット</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>弁護士に依頼する主なメリットは以下の3点です。</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>会社と直接話さなくていい</strong>…弁護士が代理人として交渉するため、精神的負担が激減します</li>
                  <li><strong>付加金・遅延損害金も請求できる</strong>…裁判になった場合、未払い額と同額の付加金（ペナルティ）が加算される場合があります</li>
                  <li><strong>完全成功報酬型なら着手金ゼロ</strong>…最近は「回収できなければ費用なし」の事務所が増えています</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                  <p className="text-amber-800 font-semibold text-sm mb-1">💡 ポイント</p>
                  <p className="text-amber-700 text-sm">
                    月給30万円で毎月20時間の残業代が未払いの場合、3年分で約110万円以上になることも。
                    まずは無料相談で自分のケースを確認してみましょう。
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="rouki">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 労働基準監督署（労基署）への申告</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  労基署は全国に設置されている厚生労働省の出先機関で、労働基準法違反について無料で相談・申告できます。
                </p>
                <p>
                  申告を受けた労基署は会社に対して是正勧告を行うことができますが、<strong>個人の残業代を直接回収する機能はありません。</strong>
                  会社への圧力という意味では有効ですが、確実な回収には弁護士との組み合わせがおすすめです。
                </p>
                <p>
                  <strong>申告できる内容：</strong>残業代の未払い、最低賃金違反、タイムカードの改ざん、サービス残業の強要など
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shoko">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 相談前に用意する証拠</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>弁護士や労基署に相談する前に、以下の資料を可能な限り集めておきましょう。</p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>タイムカード・出退勤記録</strong>…会社が保管しているものをコピーしておく</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>給与明細（直近3年分）</strong>…支払われた残業代と実際の残業時間の比較に使う</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>業務メール・チャット</strong>…送受信時刻が労働時間の証明になる</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>交通系ICカードの履歴</strong>…入退館・乗降記録が残業時間の証拠になる</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>雇用契約書・就業規則</strong>…所定労働時間・残業代の規定を確認する</span>
                  </li>
                </ul>
                <p className="text-slate-500">
                  ※証拠が少なくても相談は可能です。弁護士が証拠収集をサポートしてくれる場合もあります。
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="jikkou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. 時効に注意：早めに動くべき理由</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  残業代の請求には時効があります。2020年4月以降に発生した未払い残業代は<strong>3年</strong>が時効です。
                  つまり、毎月少しずつ請求権が消滅していきます。
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-800 font-semibold text-sm mb-1">⚠️ 注意</p>
                  <p className="text-red-700 text-sm">
                    3年前の残業代は今日で時効を迎え、明日から請求できなくなります。
                    未払いの疑いがあれば、まず今すぐ無料相談だけでも利用することをおすすめします。
                  </p>
                </div>
              </div>
            </section>

            {/* アフィリエイト②：退職代行（会社を辞めたい文脈） */}
            <AffiliateSection
              heading="残業の多い会社を辞めたいと感じたら"
              items={TAISHOKU_AFFILIATES}
            />

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

            {/* 関連ページ */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連ツール・ガイド</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">残業代計算ツール</p>
                  <p className="text-xs text-slate-400 mt-1">未払い額をすぐに試算</p>
                </Link>
                <Link href="/guide/zangyoudai-keisan-houhou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">残業代の計算方法</p>
                  <p className="text-xs text-slate-400 mt-1">割増率・基礎時給の求め方</p>
                </Link>
                <Link href="/guide/minashi-zangyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">みなし残業（固定残業代）とは</p>
                  <p className="text-xs text-slate-400 mt-1">知らないと損する仕組み</p>
                </Link>
                <Link href="/guide/zangyou-60jikan-rule" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">月60時間超の残業代50%増</p>
                  <p className="text-xs text-slate-400 mt-1">2023年改正のポイント</p>
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
