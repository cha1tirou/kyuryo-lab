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
  title: "iDeCoの節税効果と手取りへの影響 | シミュレーション付き | 給料ラボ",
  description:
    "iDeCo（個人型確定拠出年金）の節税効果を年収別・掛金別にシミュレーション。所得控除による所得税・住民税の軽減額や手取りへの影響、企業型DCとの違い、デメリットまで徹底解説します。",
  keywords:
    "iDeCo,節税,手取り,所得控除,確定拠出年金,シミュレーション",
  alternates: { canonical: "/guide/ideco-setuzei" },
  openGraph: {
    title: "iDeCoの節税効果と手取りへの影響 | シミュレーション付き",
    description:
      "iDeCoの節税効果を年収別・掛金別にシミュレーション。所得控除による手取りへの影響を徹底解説。",
    type: "article",
  },
};

export default function IdecoSetuzeiPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="iDeCoの節税効果と手取りへの影響 | シミュレーション付き"
        description="iDeCo（個人型確定拠出年金）の節税効果を年収別・掛金別にシミュレーション。所得控除による所得税・住民税の軽減額や手取りへの影響、企業型DCとの違い、デメリットまで徹底解説します。"
        url="https://kyuryo-lab.com/guide/ideco-setuzei"
        datePublished="2026-04-08"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "iDeCoの節税効果",
            url: "https://kyuryo-lab.com/guide/ideco-setuzei",
          },
        ]}
      />
      <FAQPageJsonLd
        items={[
          {
            question: "iDeCoとNISAはどちらを優先すべき？",
            answer: "老後資金目的であればiDeCoの節税効果（掛金の所得控除）が確実なのでiDeCo優先がおすすめです。ただし60歳まで引き出せないため、近い将来使う資金はNISAが柔軟です。",
          },
          {
            question: "転職・退職したらiDeCoはどうなる？",
            answer: "転職先に企業型DCがあれば移換、なければiDeCoを継続できます。自営業者や専業主婦になっても加入者区分を変更して拠出を続けられ、資産が失われることはありません。",
          },
          {
            question: "掛金を途中で変更・停止できる？",
            answer: "掛金の変更は年1回可能です。拠出を一時停止して運用指図者に切り替えることもできますが、口座管理手数料はかかるため最低額5,000円/月でも拠出を続けるのが有利です。",
          },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", href: "/" },
            { name: "給与ガイド", href: "/guide" },
            {
              name: "iDeCoの節税効果",
              href: "/guide/ideco-setuzei",
            },
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
              iDeCoの節税効果と手取りへの影響 | シミュレーション付き
            </h1>
            <p className="text-slate-500">
              iDeCo（個人型確定拠出年金）に加入すると、毎月の掛金が全額所得控除になり、所得税・住民税が軽減されます。年収や掛金額ごとの節税シミュレーションと、手取りへの具体的な影響をわかりやすく解説します。
            </p>
          </header>

          <div className="space-y-8">
            {/* 目次 */}
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#about" className="hover:underline">
                    iDeCo（個人型確定拠出年金）とは
                  </a>
                </li>
                <li>
                  <a href="#merits" className="hover:underline">
                    iDeCoの3つの節税メリット
                  </a>
                </li>
                <li>
                  <a href="#limit" className="hover:underline">
                    掛金の上限額
                  </a>
                </li>
                <li>
                  <a href="#simulation" className="hover:underline">
                    年収別・掛金別の節税シミュレーション
                  </a>
                </li>
                <li>
                  <a href="#tedori" className="hover:underline">
                    手取りへの影響
                  </a>
                </li>
                <li>
                  <a href="#demerits" className="hover:underline">
                    iDeCoのデメリット・注意点
                  </a>
                </li>
                <li>
                  <a href="#vs-dc" className="hover:underline">
                    企業型DC（企業型確定拠出年金）との違い
                  </a>
                </li>
                <li>
                  <a href="#flow" className="hover:underline">
                    加入手続きの流れ
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    よくある質問
                  </a>
                </li>
                <li>
                  <a href="#related" className="hover:underline">
                    関連ツール・記事
                  </a>
                </li>
              </ol>
            </nav>

            {/* セクション1: iDeCoとは */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="about"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. iDeCo（個人型確定拠出年金）とは
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  iDeCo（イデコ）とは、<strong>個人型確定拠出年金</strong>の愛称で、自分で掛金を拠出し、自分で運用方法を選んで老後の資金を積み立てる私的年金制度です。国民年金・厚生年金といった公的年金に上乗せして、老後の資産形成を行うことができます。
                </p>
                <p>
                  2001年に制度がスタートし、2017年の法改正により加入対象者が大幅に拡大。現在では会社員・公務員・自営業者・専業主婦（夫）など、原則として20歳以上65歳未満の国民年金被保険者であれば加入できます。
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  2022年の主な改正ポイント
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>
                    <strong>加入年齢の拡大</strong>：加入可能年齢が60歳未満から65歳未満に引き上げ（国民年金被保険者であること）
                  </li>
                  <li>
                    <strong>受給開始年齢の拡大</strong>：受給開始の上限が70歳から75歳に延長。60〜75歳の間で柔軟に選択可能
                  </li>
                  <li>
                    <strong>企業型DCとの同時加入</strong>：企業型DC加入者もiDeCoに同時加入しやすくなった（マッチング拠出を利用していない場合）
                  </li>
                </ul>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 mt-3">
                  <p className="text-sm text-emerald-800">
                    <strong>ポイント：</strong>iDeCoは「節税しながら老後資金を貯められる」制度です。特に会社員にとっては、数少ない所得控除を増やす手段として注目されています。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション2: 3つの節税メリット */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="merits"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. iDeCoの3つの節税メリット
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <div className="bg-white rounded-xl border border-slate-200 p-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    メリット① 掛金が全額所得控除
                  </h3>
                  <p>
                    iDeCoに拠出した掛金は、<strong>全額が「小規模企業共済等掛金控除」として所得控除</strong>の対象になります。生命保険料控除のような上限額はなく、掛金の全額が課税所得から差し引かれるため、所得税と住民税の両方が軽減されます。
                  </p>
                  <p className="mt-2">
                    例えば、月2万3,000円（年間27万6,000円）を拠出した場合、所得税率10%・住民税率10%の人なら、年間で<strong>約5万5,200円</strong>の税金が安くなります。
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    メリット② 運用益が非課税
                  </h3>
                  <p>
                    通常、投資信託や預金の運用益（利息・配当・売却益）には約20.315%の税金がかかりますが、iDeCo口座内の運用益は<strong>全額非課税</strong>です。運用益がそのまま再投資に回るため、複利効果を最大限に活かせます。
                  </p>
                  <p className="mt-2">
                    例えば、月2万円を年利3%で30年間運用した場合、通常の課税口座と比べてiDeCoなら<strong>約100万円以上多く</strong>資産を形成できる計算になります。
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    メリット③ 受取時も税制優遇
                  </h3>
                  <p>
                    iDeCoの資産を受け取る際にも税制上の優遇があります。受取方法によって適用される控除が異なります。
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm mt-2">
                    <li>
                      <strong>一時金として受け取る場合</strong>：退職所得控除が適用。勤続年数（掛金拠出年数）に応じた控除額が差し引かれる
                    </li>
                    <li>
                      <strong>年金として受け取る場合</strong>：公的年金等控除が適用。他の公的年金と合算して控除額を計算
                    </li>
                    <li>
                      <strong>一時金と年金の併用</strong>も可能
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p className="text-sm text-emerald-800">
                    <strong>まとめ：</strong>「拠出時」「運用中」「受取時」の3段階すべてで税制優遇を受けられるのがiDeCoの最大の特徴です。特に拠出時の所得控除は、毎月の手取りに直接効果が表れます。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション3: 掛金の上限額 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="limit"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 掛金の上限額
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  iDeCoの掛金上限額は、加入者の職業や企業年金の有無によって異なります。月額5,000円以上、1,000円単位で設定でき、年1回まで変更可能です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          加入者区分
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-700">
                          月額上限
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-700">
                          年額上限
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          自営業者（第1号被保険者）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-800">
                          6.8万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-slate-700">
                          81.6万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          会社員（企業年金なし）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-800">
                          2.3万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-slate-700">
                          27.6万円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          会社員（企業型DCあり）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-800">
                          2.0万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-slate-700">
                          24.0万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          会社員（DB・厚生年金基金あり）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-800">
                          1.2万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-slate-700">
                          14.4万円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          公務員
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-800">
                          1.2万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-slate-700">
                          14.4万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          専業主婦（夫）（第3号被保険者）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-800">
                          2.3万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-slate-700">
                          27.6万円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 mt-3">
                  <p className="text-sm text-amber-800">
                    <strong>注意：</strong>自営業者の6.8万円は国民年金基金との合算上限です。国民年金基金に加入している場合は、その掛金と合計で6.8万円が上限となります。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション4: 節税シミュレーション */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="simulation"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 年収別・掛金別の節税シミュレーション
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  会社員（企業年金なし）を想定し、年収と月額掛金ごとの<strong>年間節税額（所得税＋住民税の合計軽減額）</strong>を一覧にしました。扶養なし・40歳未満の場合の概算値です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-700">
                          年収
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-medium text-slate-700">
                          月1万円
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-medium text-slate-700">
                          月1.5万円
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-medium text-slate-700">
                          月2万円
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-medium text-slate-700">
                          月2.3万円
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                          400万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          24,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          36,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          48,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          55,200円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                          500万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          24,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          36,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          48,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          55,200円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                          600万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          24,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          36,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          48,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          55,200円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                          700万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          36,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          54,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          72,000円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-emerald-600 font-medium">
                          82,800円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  ※ 概算値です。実際の税額は各種控除の適用状況により異なります。年収400〜600万円は所得税率10%+住民税率10%=20%で計算。年収700万円は所得税率20%+住民税率10%=30%で計算。
                </p>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 mt-3">
                  <p className="text-sm text-emerald-800">
                    <strong>注目：</strong>年収700万円で月2.3万円の掛金を拠出した場合、年間約8.3万円の節税効果があります。30年間続ければ、節税額だけで<strong>約249万円</strong>になります。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション5: 手取りへの影響 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="tedori"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 手取りへの影響
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  iDeCoに加入すると掛金分だけ手取りが減りますが、所得控除による節税効果で<strong>実質的な負担額は掛金よりも小さく</strong>なります。具体例で見てみましょう。
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  具体例：年収500万円・月2.3万円の掛金の場合
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          項目
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-700">
                          月額
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-700">
                          年額
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          iDeCo掛金（支出）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-slate-700">
                          23,000円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-slate-700">
                          276,000円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          所得税の軽減額
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-emerald-600">
                          -2,300円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-emerald-600">
                          -27,600円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          住民税の軽減額
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-emerald-600">
                          -2,300円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-emerald-600">
                          -27,600円
                        </td>
                      </tr>
                      <tr className="bg-emerald-50">
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                          実質負担額
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-bold text-emerald-600">
                          18,400円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-bold text-emerald-600">
                          220,800円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  つまり、毎月2.3万円を積み立てているにもかかわらず、手取りの減少額は<strong>月1.84万円</strong>で済みます。差額の4,600円/月は、節税により「戻ってきた」お金です。
                </p>
                <p>
                  住民税の軽減は翌年度の住民税に反映されるため、年末調整後すぐに実感するのは所得税分のみですが、トータルでは上記の通りの効果が得られます。
                </p>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 mt-3">
                  <p className="text-sm text-emerald-800">
                    <strong>ポイント：</strong>実質負担率は掛金の約80%（所得税率10%の場合）。つまり、iDeCoは<strong>「2割引きで老後資金を積み立てられる」</strong>制度とも言えます。年収が高く所得税率が上がるほど、割引率も大きくなります。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション6: デメリット・注意点 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="demerits"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. iDeCoのデメリット・注意点
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <p className="text-sm text-amber-800">
                    <strong>重要：</strong>iDeCoは節税効果が高い一方で、いくつかの制約があります。加入前に必ず確認しておきましょう。
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  ① 原則60歳まで引き出せない
                </h3>
                <p>
                  iDeCoに拠出した資金は、原則として<strong>60歳になるまで引き出すことができません</strong>。途中解約は、障害・死亡などごく限られた場合にのみ認められます。急な出費や生活費の不足に対応できないため、無理のない掛金設定が重要です。
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  ② 各種手数料がかかる
                </h3>
                <p>
                  iDeCoには以下のような手数料がかかります。
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>
                    <strong>加入時手数料</strong>：2,829円（国民年金基金連合会への初回手数料）
                  </li>
                  <li>
                    <strong>口座管理手数料</strong>：月171円〜（金融機関によって異なる。最安はネット証券の171円/月）
                  </li>
                  <li>
                    <strong>給付時手数料</strong>：440円/回
                  </li>
                </ul>
                <p>
                  金融機関によって口座管理手数料が大きく異なるため、<strong>手数料の安いネット証券</strong>（SBI証券、楽天証券、マネックス証券など）を選ぶのがおすすめです。
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  ③ 元本割れリスクがある
                </h3>
                <p>
                  iDeCoで投資信託を選んだ場合、運用成績次第では<strong>元本割れ</strong>する可能性があります。元本確保型の定期預金商品もありますが、低金利の現状では手数料負けする場合もあります。
                </p>
                <p>
                  長期・分散投資を心がけ、リスク許容度に合った商品選びが大切です。
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  ④ 受取時に課税される場合がある
                </h3>
                <p>
                  受取時の退職所得控除や公的年金等控除には上限があるため、企業からの退職金が多い場合や他の年金収入が多い場合は、iDeCoの受取額に対して<strong>課税が発生する可能性</strong>があります。特に一時金受取の場合、退職金とiDeCoの受取時期によって控除額の計算が変わるため、事前にシミュレーションしておくことをおすすめします。
                </p>
              </div>
            </section>

            {/* セクション7: 企業型DCとの違い */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="vs-dc"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                7. 企業型DC（企業型確定拠出年金）との違い
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  企業型DCとiDeCoは同じ「確定拠出年金」の仕組みですが、いくつかの重要な違いがあります。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          比較項目
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          iDeCo（個人型）
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          企業型DC
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          掛金の負担者
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          加入者本人
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          原則として企業（マッチング拠出で本人も可）
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          掛金上限
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          職業により1.2〜6.8万円/月
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          5.5万円/月（他の企業年金なしの場合）
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          金融機関の選択
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          自分で自由に選べる
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          企業が選定した金融機関
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          運用商品
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          自分で自由に選べる（金融機関の商品ラインナップ内）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          企業が選定した商品の中から選ぶ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          口座管理手数料
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          加入者負担（月171円〜）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          企業負担が多い
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          所得控除
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          小規模企業共済等掛金控除
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          企業拠出分は損金算入（本人のマッチング拠出分は所得控除）
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          社会保険料への影響
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          影響なし
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          企業拠出分は報酬に含まれないため社会保険料が下がる場合あり
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  企業型DCがある会社に勤めている場合でも、マッチング拠出を行っていなければiDeCoに同時加入できます。ただし、iDeCoの掛金上限額は企業型DCの掛金との兼ね合いで制限される場合があります。
                </p>
              </div>
            </section>

            {/* セクション8: 加入手続きの流れ */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="flow"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                8. 加入手続きの流れ
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  iDeCoの加入手続きは、以下のステップで進めます。申込みから運用開始まで<strong>1〜2か月程度</strong>かかるのが一般的です。
                </p>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-slate-800">
                        金融機関（運営管理機関）を選ぶ
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        手数料の安さ・運用商品のラインナップ・使いやすさを比較して選びましょう。ネット証券（SBI証券・楽天証券など）が口座管理手数料が安くおすすめです。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-slate-800">
                        加入申込書を取り寄せる
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        選んだ金融機関のウェブサイトから資料請求します。オンラインで完結する金融機関も増えています。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-slate-800">
                        必要書類を準備・提出する
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        会社員の場合は「事業主の証明書」が必要です。勤務先の総務・人事部門に依頼しましょう。本人確認書類・年金手帳（基礎年金番号通知書）のコピーも準備します。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">
                      4
                    </span>
                    <div>
                      <p className="font-medium text-slate-800">
                        国民年金基金連合会の審査
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        書類提出後、国民年金基金連合会による審査が行われます。通常1〜2か月で完了します。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex items-center justify-center">
                      5
                    </span>
                    <div>
                      <p className="font-medium text-slate-800">
                        運用商品を選んで積立開始
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        口座開設の通知が届いたら、運用商品の配分を設定します。掛金は指定した銀行口座から毎月自動引き落としされます。
                      </p>
                    </div>
                  </li>
                </ol>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 mt-3">
                  <p className="text-sm text-emerald-800">
                    <strong>ヒント：</strong>年末調整で所得控除を受けるためには、10月頃に届く「小規模企業共済等掛金払込証明書」を会社に提出する必要があります。届いたら大切に保管しておきましょう。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション9: よくある質問 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="faq"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                9. よくある質問
              </h2>
              <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. iDeCoとNISAはどちらを優先すべき？
                  </h3>
                  <p>
                    一般的に、<strong>iDeCoの節税効果は確実</strong>（掛金の所得控除）なので、老後資金目的であればiDeCoを優先するのがおすすめです。ただし、iDeCoは60歳まで引き出せないため、近い将来に使う可能性のある資金はNISAで運用するほうが柔軟性があります。余裕があれば両方を併用するのがベストです。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. 転職・退職したらiDeCoはどうなる？
                  </h3>
                  <p>
                    転職先に企業型DCがある場合は企業型DCへの移換、ない場合はiDeCoの継続が可能です。退職して自営業者や専業主婦になった場合も、加入者区分を変更して引き続き拠出できます。資産はポータビリティ（持ち運び可能）があるため、積み立てた資産が失われることはありません。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. 掛金を途中で変更・停止できる？
                  </h3>
                  <p>
                    掛金の変更は<strong>年1回（毎年12月分〜翌年11月分）</strong>可能です。また、掛金の拠出を一時停止して「運用指図者」に切り替えることもできます。ただし運用指図者の間も口座管理手数料はかかるため、できれば最低額の5,000円/月でも拠出を続けるのが有利です。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション10: 関連ツール・記事 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="related"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                10. 関連ツール・記事
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/kyuryo/tetsuke"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-blue-600 mb-1">
                    手取り計算ツール
                  </p>
                  <p className="text-sm text-slate-500">
                    月収から手取り額を即計算。iDeCoの所得控除効果を実感するために、控除前後の手取りを比較してみましょう。
                  </p>
                </Link>
                <Link
                  href="/guide/shakaihokenryou-setuyaku"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-blue-600 mb-1">
                    社会保険料を安くする方法7選
                  </p>
                  <p className="text-sm text-slate-500">
                    iDeCoは所得税・住民税の節税には有効ですが、社会保険料には影響しません。社会保険料を抑える方法も合わせて確認しましょう。
                  </p>
                </Link>
                <Link
                  href="/guide/shotokuzei-keisan"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-blue-600 mb-1">
                    所得税の計算方法ガイド
                  </p>
                  <p className="text-sm text-slate-500">
                    所得控除がどのように所得税を減らすのか、計算の仕組みから理解したい方はこちらをご覧ください。
                  </p>
                </Link>
                <Link
                  href="/guide/nenmatsu-chousei"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-blue-600 mb-1">
                    年末調整ガイド
                  </p>
                  <p className="text-sm text-slate-500">
                    iDeCoの掛金控除は年末調整で申告します。年末調整の手続きや必要書類について解説しています。
                  </p>
                </Link>
              </div>
            </section>

            {/* 免責事項 */}
            <div className="text-xs text-slate-400 leading-relaxed">
              <p>
                ※ 本記事の内容は2026年4月時点の情報に基づいています。税率・制度は変更される場合があります。
              </p>
              <p>
                ※ 節税シミュレーションの金額は概算です。実際の税額は各種控除の適用状況、社会保険料の額、お住まいの自治体により異なります。正確な税額は税理士にご相談ください。
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
