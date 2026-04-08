import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FAQPageJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "みなし残業（固定残業代）の仕組みと注意点 | 給料ラボ",
  description:
    "みなし残業（固定残業代）の仕組み、計算方法、求人票の見方、適法要件、違法ケースの見分け方を詳しく解説。月給別シミュレーション表で実質時給も比較できます。",
  keywords: "みなし残業,固定残業代,固定残業手当,求人票,見分け方,違法,計算方法",
  alternates: { canonical: "/guide/minashi-zangyou" },
  openGraph: {
    title: "みなし残業（固定残業代）の仕組みと注意点",
    description:
      "固定残業代の計算方法・適法要件・ブラック企業の見分け方を解説。月給別シミュレーション表つき。",
    type: "article",
  },
};

export default function MinashiZangyouPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="みなし残業（固定残業代）の仕組みと注意点"
        description="みなし残業（固定残業代）の仕組み、計算方法、求人票の見方、適法要件、違法ケースの見分け方を詳しく解説。"
        url="https://kyuryo-lab.com/guide/minashi-zangyou"
        datePublished="2026-04-08"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "みなし残業の仕組み",
            url: "https://kyuryo-lab.com/guide/minashi-zangyou",
          },
        ]}
      />
      <FAQPageJsonLd
        items={[
          {
            question: "固定残業時間より少なく働いた月は、給料が減りますか？",
            answer: "いいえ、減額されません。固定残業代は実際の残業時間にかかわらず定額で支給されます。残業が0時間でも全額支給されます。",
          },
          {
            question: "固定残業代は残業代の前払いですか？",
            answer: "法的には「一定時間分の残業代を定額で支払う制度」です。固定残業時間を超えた分は追加支給が必要で、残業が少ない月でも返還を求めることはできません。",
          },
          {
            question: "入社後に固定残業代制度を導入されました。拒否できますか？",
            answer: "固定残業代制度の導入は労働条件の変更にあたります。基本給の実質的な引き下げを伴う場合は労働者の同意が必要で、一方的な不利益変更は労働基準監督署や弁護士に相談できます。",
          },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", href: "/" },
            { name: "給与ガイド", href: "/guide" },
            { name: "みなし残業の仕組み", href: "/guide/minashi-zangyou" },
          ]}
        />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">
                給与ガイド
              </Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              みなし残業（固定残業代）の仕組みと注意点
            </h1>
            <p className="text-slate-500">
              「月給25万円（固定残業代含む）」という求人を見たことはありませんか？みなし残業（固定残業代）は正しく運用されていれば合法ですが、違法なケースも少なくありません。仕組み・計算方法・注意点を詳しく解説します。
            </p>
          </header>

          <div className="space-y-8">
            {/* 目次 */}
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#toha" className="hover:underline">
                    みなし残業（固定残業代）とは
                  </a>
                </li>
                <li>
                  <a href="#keisan" className="hover:underline">
                    固定残業代の計算方法
                  </a>
                </li>
                <li>
                  <a href="#kyujinhyo" className="hover:underline">
                    求人票の見方
                  </a>
                </li>
                <li>
                  <a href="#tekihou" className="hover:underline">
                    固定残業代の適法要件
                  </a>
                </li>
                <li>
                  <a href="#chouka" className="hover:underline">
                    固定残業時間を超えたらどうなる？
                  </a>
                </li>
                <li>
                  <a href="#ihou" className="hover:underline">
                    違法なケースとブラック企業の見分け方
                  </a>
                </li>
                <li>
                  <a href="#simulation" className="hover:underline">
                    月給別シミュレーション表
                  </a>
                </li>
                <li>
                  <a href="#soudan" className="hover:underline">
                    トラブル時の相談先
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    よくある質問
                  </a>
                </li>
              </ol>
            </nav>

            {/* 1. みなし残業（固定残業代）とは */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="toha"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. みなし残業（固定残業代）とは
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  みなし残業（固定残業代）とは、実際の残業時間にかかわらず、あらかじめ一定時間分の残業代を<strong>毎月定額で支給する制度</strong>です。「固定残業手当」「みなし残業手当」「定額残業代」など、企業によって呼び方は異なります。
                </p>
                <p>
                  たとえば「固定残業代として月30時間分・5万円を含む」と定められている場合、残業が0時間でも30時間でも、毎月5万円が支給されます。
                </p>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p className="font-semibold text-emerald-800 mb-1">
                    法的位置づけ
                  </p>
                  <p className="text-emerald-700 text-sm">
                    固定残業代自体は違法ではありません。最高裁判例（テックジャパン事件・日本ケミカル事件等）でも、適切な要件を満たしていれば有効と認められています。ただし、要件を満たさない場合は無効とされ、残業代の未払いとなるリスクがあります。
                  </p>
                </div>
                <p>
                  企業側のメリットとしては、人件費の予測がしやすくなること。労働者側のメリットとしては、残業が少ない月でも固定額を受け取れることが挙げられます。
                </p>
              </div>
            </section>

            {/* 2. 固定残業代の計算方法 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="keisan"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 固定残業代の計算方法
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  固定残業代は、基礎時給に割増率と固定残業時間を掛けて算出されます。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                  <p>
                    <strong>計算式：</strong>
                  </p>
                  <p>固定残業代 = 基礎時給 &times; 割増率（1.25） &times; 固定残業時間</p>
                </div>
                <div className="space-y-2 mt-4">
                  <p>
                    <strong>具体例：</strong>
                  </p>
                  <p>月給25万円（固定残業代30時間分を含む）の場合</p>
                </div>
                <div className="space-y-2 mt-2">
                  <p>
                    <strong>Step 1: 基本給部分を逆算</strong>
                  </p>
                  <p className="pl-4">
                    基本給をXとすると：X + (X &divide; 160) &times; 1.25 &times; 30 = 250,000
                  </p>
                  <p className="pl-4">
                    X + X &times; 0.234375 = 250,000
                  </p>
                  <p className="pl-4">X = 約202,532円（基本給部分）</p>
                  <p>
                    <strong>Step 2: 固定残業代</strong>
                  </p>
                  <p className="pl-4">
                    250,000 - 202,532 = 約47,468円（固定残業代部分）
                  </p>
                  <p>
                    <strong>Step 3: 実質時給</strong>
                  </p>
                  <p className="pl-4">
                    基礎時給 = 202,532 &divide; 160 = 約1,266円
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 mt-4">
                  <p className="font-semibold text-amber-800 mb-1">注意</p>
                  <p className="text-amber-700 text-sm">
                    求人で「月給25万円」と大きく書かれていても、固定残業代を差し引いた基本給は約20万円です。額面だけで判断すると実質的な待遇を見誤る可能性があります。
                  </p>
                </div>
              </div>
            </section>

            {/* 3. 求人票の見方 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kyujinhyo"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 求人票の見方
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  固定残業代を含む求人では、以下のような記載が一般的です。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="font-semibold mb-2">典型的な記載例：</p>
                  <p className="bg-white rounded-lg p-3 border border-slate-200 text-slate-700">
                    月給250,000円（固定残業代40時間分 62,500円を含む。超過分は別途支給。）
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  チェックすべき3つのポイント
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>
                    <strong>基本給がいくらか</strong> ── 上記の例では 250,000 - 62,500 = 187,500円が基本給
                  </li>
                  <li>
                    <strong>固定残業が何時間分か</strong> ── 40時間は36協定の上限に近い水準
                  </li>
                  <li>
                    <strong>「超過分は別途支給」の記載があるか</strong> ── これがないと違法の可能性
                  </li>
                </ul>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          記載内容
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          読み取れること
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          月給25万（残業代含む）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-amber-600 font-semibold">
                          時間・金額が不明 → 要確認
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          月給25万（固定残業40h分6.25万含む）
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          基本給18.75万、時給約1,172円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          月給25万 + 固定残業代3万
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          基本給25万に上乗せ → 実質月収28万
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 4. 固定残業代の適法要件 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="tekihou"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 固定残業代の適法要件
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  固定残業代が法的に有効と認められるには、以下の<strong>3つの要件</strong>をすべて満たす必要があります。
                </p>
                <div className="space-y-4">
                  <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                    <p className="font-semibold text-emerald-800 mb-1">
                      要件1：金額の明示
                    </p>
                    <p className="text-emerald-700 text-sm">
                      固定残業代の金額が明確に区分されていること。基本給と固定残業代の内訳が就業規則や雇用契約書に明記されている必要があります。
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                    <p className="font-semibold text-emerald-800 mb-1">
                      要件2：時間の明示
                    </p>
                    <p className="text-emerald-700 text-sm">
                      何時間分の残業代に相当するのかが明示されていること。「固定残業代30時間分として5万円」のように、時間と金額の両方が示されている必要があります。
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                    <p className="font-semibold text-emerald-800 mb-1">
                      要件3：超過分の別途支給
                    </p>
                    <p className="text-emerald-700 text-sm">
                      固定残業時間を超えた場合に、超過分の残業代を別途支給すること。「固定残業代に含まれるからそれ以上は払わない」は違法です。
                    </p>
                  </div>
                </div>
                <p>
                  これらの要件を1つでも満たさない場合、固定残業代制度は無効とされ、基本給全額を基礎として残業代を再計算する必要が生じます。企業にとっては大きなリスクです。
                </p>
              </div>
            </section>

            {/* 5. 固定残業時間を超えたらどうなる？ */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="chouka"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 固定残業時間を超えたらどうなる？
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  固定残業時間を超えた分の残業代は、<strong>必ず別途支給</strong>しなければなりません。これは労働基準法上の義務であり、固定残業代制度を導入していても免除されません。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                  <p>
                    <strong>例：固定残業30時間・実際の残業45時間の場合</strong>
                  </p>
                  <p>基本給 200,000円 / 月所定労働時間 160時間</p>
                  <p>基礎時給 = 200,000 &divide; 160 = 1,250円</p>
                </div>
                <div className="space-y-2 mt-2">
                  <p>
                    <strong>固定残業代（30時間分）：</strong>
                  </p>
                  <p className="pl-4">1,250 &times; 1.25 &times; 30 = 46,875円（毎月定額支給）</p>
                  <p>
                    <strong>超過分（15時間分）：</strong>
                  </p>
                  <p className="pl-4">1,250 &times; 1.25 &times; 15 = 23,437円（追加で支給が必要）</p>
                  <p>
                    <strong>当月の残業代合計：</strong>
                  </p>
                  <p className="pl-4 text-lg font-bold text-emerald-600">
                    46,875 + 23,437 = 70,312円
                  </p>
                </div>
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 mt-4">
                  <p className="font-semibold text-amber-800 mb-1">
                    よくある違法パターン
                  </p>
                  <p className="text-amber-700 text-sm">
                    「固定残業代に含まれているから、超過分は払わない」「残業は固定残業時間までしかつけられない」など、超過分を支払わないケースは明確な法律違反です。
                  </p>
                </div>
              </div>
            </section>

            {/* 6. 違法なケースとブラック企業の見分け方 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="ihou"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 違法なケースとブラック企業の見分け方
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  固定残業代制度を悪用する企業も存在します。以下のケースに該当する場合は要注意です。
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  危険な固定残業代のサイン
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>
                    <strong>固定残業時間が80時間以上</strong> ── 過労死ラインを超えており、36協定の上限にも抵触する可能性
                  </li>
                  <li>
                    <strong>固定残業代を除くと基本給が最低賃金以下</strong> ── 最低賃金法違反
                  </li>
                  <li>
                    <strong>基本給と固定残業代の区別が不明確</strong> ── 適法要件を満たさず無効
                  </li>
                  <li>
                    <strong>超過分の残業代が支払われない</strong> ── 賃金未払い（労基法37条違反）
                  </li>
                  <li>
                    <strong>残業時間を記録させない</strong> ── 労働時間管理義務違反
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  最低賃金チェックの方法
                </h3>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1">
                  <p>
                    <strong>計算式：</strong>
                  </p>
                  <p>
                    実質時給 = （月給 - 固定残業代） &divide; 月所定労働時間
                  </p>
                  <p className="mt-2">
                    <strong>例：</strong>月給22万円（固定残業45時間分・7万円含む）
                  </p>
                  <p>基本給 = 220,000 - 70,000 = 150,000円</p>
                  <p>実質時給 = 150,000 &divide; 160 = 937円</p>
                  <p className="text-amber-600 font-semibold mt-1">
                    → 東京都の最低賃金（1,163円 / 2025年度）を下回っており違法
                  </p>
                </div>

                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 mt-4">
                  <p className="font-semibold text-amber-800 mb-1">
                    固定残業45時間超は特に注意
                  </p>
                  <p className="text-amber-700 text-sm">
                    36協定の一般的な上限は月45時間です。固定残業時間がこれを超えている場合、会社が恒常的に長時間労働をさせる前提である可能性が高く、注意が必要です。
                  </p>
                </div>
              </div>
            </section>

            {/* 7. 月給別シミュレーション表 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="simulation"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                7. 月給別シミュレーション表
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  月給に固定残業代が含まれている場合、固定残業時間によって実質的な基本給と時給がどう変わるかを比較します。月所定労働時間は160時間として計算しています。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          月給（税込）
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          固定残業
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          実質基本給
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          固定残業代
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          実質時給
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* 月給22万円 */}
                      <tr>
                        <td className="border border-slate-200 px-3 py-2" rowSpan={4}>
                          22万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2">20h</td>
                        <td className="border border-slate-200 px-3 py-2">約191,304円</td>
                        <td className="border border-slate-200 px-3 py-2">約28,696円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,196円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2">30h</td>
                        <td className="border border-slate-200 px-3 py-2">約178,174円</td>
                        <td className="border border-slate-200 px-3 py-2">約41,826円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,114円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-3 py-2">40h</td>
                        <td className="border border-slate-200 px-3 py-2">約166,667円</td>
                        <td className="border border-slate-200 px-3 py-2">約53,333円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,042円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2 text-amber-600 font-semibold">45h</td>
                        <td className="border border-slate-200 px-3 py-2">約161,455円</td>
                        <td className="border border-slate-200 px-3 py-2">約58,545円</td>
                        <td className="border border-slate-200 px-3 py-2 text-amber-600 font-semibold">約1,009円</td>
                      </tr>
                      {/* 月給25万円 */}
                      <tr>
                        <td className="border border-slate-200 px-3 py-2" rowSpan={4}>
                          25万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2">20h</td>
                        <td className="border border-slate-200 px-3 py-2">約217,391円</td>
                        <td className="border border-slate-200 px-3 py-2">約32,609円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,359円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2">30h</td>
                        <td className="border border-slate-200 px-3 py-2">約202,532円</td>
                        <td className="border border-slate-200 px-3 py-2">約47,468円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,266円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-3 py-2">40h</td>
                        <td className="border border-slate-200 px-3 py-2">約189,394円</td>
                        <td className="border border-slate-200 px-3 py-2">約60,606円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,184円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2">45h</td>
                        <td className="border border-slate-200 px-3 py-2">約183,486円</td>
                        <td className="border border-slate-200 px-3 py-2">約66,514円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,147円</td>
                      </tr>
                      {/* 月給30万円 */}
                      <tr>
                        <td className="border border-slate-200 px-3 py-2" rowSpan={4}>
                          30万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2">20h</td>
                        <td className="border border-slate-200 px-3 py-2">約260,870円</td>
                        <td className="border border-slate-200 px-3 py-2">約39,130円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,630円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2">30h</td>
                        <td className="border border-slate-200 px-3 py-2">約243,038円</td>
                        <td className="border border-slate-200 px-3 py-2">約56,962円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,519円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-3 py-2">40h</td>
                        <td className="border border-slate-200 px-3 py-2">約227,273円</td>
                        <td className="border border-slate-200 px-3 py-2">約72,727円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,420円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2">45h</td>
                        <td className="border border-slate-200 px-3 py-2">約220,183円</td>
                        <td className="border border-slate-200 px-3 py-2">約79,817円</td>
                        <td className="border border-slate-200 px-3 py-2">約1,376円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  ※ 割増率25%、月所定労働時間160時間で計算。実際の金額は企業の規定により異なります。
                </p>
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 mt-2">
                  <p className="font-semibold text-amber-800 mb-1">
                    ポイント
                  </p>
                  <p className="text-amber-700 text-sm">
                    同じ月給でも、固定残業時間が長いほど実質時給は下がります。月給22万円で固定残業45時間の場合、実質時給は約1,009円まで下がり、地域によっては最低賃金に近い水準となります。
                  </p>
                </div>
              </div>
            </section>

            {/* 8. トラブル時の相談先 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="soudan"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                8. トラブル時の相談先
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  固定残業代に関するトラブルが発生した場合、以下の窓口に相談できます。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          相談先
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          特徴
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          費用
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          労働基準監督署
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          法律違反の申告・是正勧告が可能。匿名でも相談できる
                        </td>
                        <td className="border border-slate-200 px-4 py-2">無料</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          総合労働相談コーナー
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          各都道府県の労働局に設置。解雇・賃金など幅広い相談に対応
                        </td>
                        <td className="border border-slate-200 px-4 py-2">無料</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          弁護士（労働問題専門）
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          未払い残業代の請求・交渉・訴訟。成功報酬型の事務所もある
                        </td>
                        <td className="border border-slate-200 px-4 py-2">有料（初回無料の場合あり）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          法テラス
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          収入要件を満たせば弁護士費用の立替制度あり
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          無料相談あり
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 mt-4">
                  <p className="font-semibold text-emerald-800 mb-1">
                    相談前に準備しておくもの
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-emerald-700 text-sm">
                    <li>雇用契約書・労働条件通知書</li>
                    <li>給与明細（直近数か月分）</li>
                    <li>タイムカード・勤怠記録のコピー</li>
                    <li>就業規則（入手できれば）</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 9. よくある質問 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="faq"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                9. よくある質問
              </h2>
              <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. 固定残業時間より少なく働いた月は、給料が減りますか？
                  </h3>
                  <p>
                    いいえ、<strong>減額されません</strong>。固定残業代は実際の残業時間にかかわらず定額で支給されます。残業が0時間でも固定残業代は全額支給されます。これは固定残業代制度の基本ルールです。
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. 固定残業代は残業代の前払いですか？
                  </h3>
                  <p>
                    法的には「一定時間分の残業代を定額で支払う制度」です。前払いに近い性質がありますが、固定残業時間を超えた分は追加支給が必要です。また、残業が少ない月でも返還を求めることはできません。
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. 入社後に固定残業代制度を導入されました。拒否できますか？
                  </h3>
                  <p>
                    固定残業代制度の導入は<strong>労働条件の変更</strong>にあたります。基本給の実質的な引き下げを伴う場合は、労働者の同意が必要です。一方的に不利益変更された場合は、労働基準監督署や弁護士に相談することをおすすめします。
                  </p>
                </div>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000120159.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    固定残業代に関するリーフレット
                  </a>
                  <span className="text-slate-400 ml-1">（厚生労働省）</span>
                </li>
                <li>
                  <a
                    href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/roudouzikan/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    労働時間・休日に関する制度
                  </a>
                  <span className="text-slate-400 ml-1">（厚生労働省）</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                残業代を計算してみる
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                固定残業時間を超えた分の残業代がいくらになるか、計算ツールですぐに確認できます。
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
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                関連記事
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/guide/zangyoudai-keisan-houhou"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    残業代の計算方法を徹底解説
                  </p>
                </Link>
                <Link
                  href="/guide/zangyou-60jikan-rule"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    月60時間超の残業代は50%増
                  </p>
                </Link>
                <Link
                  href="/guide/zangyou-jikan-joigen"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    残業時間の上限規制
                  </p>
                </Link>
                <Link
                  href="/guide/saitei-chingin"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    最低賃金の仕組み
                  </p>
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
