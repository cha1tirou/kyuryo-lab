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
  title: "介護保険料とは？40歳からの負担額と計算方法 | 給料ラボ",
  description:
    "介護保険料は40歳から給与天引きが始まります。第2号被保険者の保険料率（1.82%）や月給別の負担額一覧、39歳と40歳の手取り差額、65歳以降の仕組みまで詳しく解説。",
  keywords: "介護保険料,40歳,計算,天引き,第2号被保険者,手取り",
  alternates: { canonical: "/guide/kaigo-hokenryou" },
  openGraph: {
    title: "介護保険料とは？40歳からの負担額と計算方法",
    description:
      "介護保険料は40歳から給与天引きが始まります。月給別の負担額一覧や手取りへの影響を解説。",
    type: "article",
  },
};

export default function KaigoHokenryouPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="介護保険料とは？40歳からの負担額と計算方法"
        description="介護保険料は40歳から給与天引きが始まります。第2号被保険者の保険料率や月給別の負担額一覧、手取りへの影響を解説。"
        url="https://kyuryo-lab.com/guide/kaigo-hokenryou"
        datePublished="2026-04-08"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "介護保険料の計算",
            url: "https://kyuryo-lab.com/guide/kaigo-hokenryou",
          },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", href: "/" },
            { name: "給与ガイド", href: "/guide" },
            { name: "介護保険料の計算", href: "/guide/kaigo-hokenryou" },
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
              介護保険料とは？40歳からの負担額と計算方法
            </h1>
            <p className="text-slate-500">
              40歳になると給与から天引きが始まる介護保険料。いくら引かれるのか、どう計算されるのかを令和6年度の最新料率で解説します。
            </p>
          </header>

          <div className="space-y-8">
            {/* 目次 */}
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#gaiyou" className="hover:underline">
                    介護保険制度の概要
                  </a>
                </li>
                <li>
                  <a href="#kaishi" className="hover:underline">
                    いつから天引きされる？
                  </a>
                </li>
                <li>
                  <a href="#keisan" className="hover:underline">
                    介護保険料の計算方法
                  </a>
                </li>
                <li>
                  <a href="#ichiran" className="hover:underline">
                    月給別の介護保険料一覧表
                  </a>
                </li>
                <li>
                  <a href="#tedori" className="hover:underline">
                    39歳と40歳で手取りはどう変わる？
                  </a>
                </li>
                <li>
                  <a href="#kawaru" className="hover:underline">
                    介護保険料が変わるケース
                  </a>
                </li>
                <li>
                  <a href="#65sai" className="hover:underline">
                    65歳以降の介護保険料
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    よくある質問
                  </a>
                </li>
              </ol>
            </nav>

            {/* 1. 介護保険制度の概要 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="gaiyou"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. 介護保険制度の概要
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  介護保険は、高齢者が介護サービスを必要としたときに、社会全体で支える仕組みとして<strong>2000年（平成12年）</strong>にスタートした公的保険制度です。要介護認定を受けた方が、1〜3割の自己負担で介護サービスを利用できます。
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  被保険者の区分
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          区分
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          第1号被保険者
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          第2号被保険者
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          対象年齢
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          65歳以上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          40歳〜64歳
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          保険料の徴収
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          年金から天引き
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          健康保険料に上乗せ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          サービス利用
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          原因を問わず利用可
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          特定疾病の場合のみ
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  会社員にとって身近なのは<strong>第2号被保険者</strong>（40〜64歳）です。毎月の給与明細で「介護保険料」として天引きされるのがこれにあたります。
                </p>
              </div>
            </section>

            {/* 2. いつから天引きされる？ */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kaishi"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. いつから天引きされる？
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  介護保険料の徴収は<strong>40歳の誕生日の前日が属する月</strong>から始まります。法律上、年齢が加算されるのは「誕生日の前日」であるため、注意が必要です。
                </p>
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <p className="font-medium text-amber-800 mb-2">
                    注意：誕生日が月の1日の場合
                  </p>
                  <p className="text-amber-700 text-sm">
                    例えば<strong>5月1日</strong>が誕生日の方は、前日の<strong>4月30日</strong>に40歳に達するため、<strong>4月分</strong>から介護保険料が発生します。5月1日以外の5月生まれの方は5月分からとなるため、1日生まれの方は1か月早くなります。
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  具体例
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>
                    8月15日生まれ → 8月分から徴収開始（給与からの天引きは翌月の9月給与）
                  </li>
                  <li>
                    9月1日生まれ → 8月分から徴収開始（前日8月31日に40歳到達）
                  </li>
                  <li>
                    4月30日生まれ → 4月分から徴収開始
                  </li>
                </ul>
                <p>
                  実際の天引きタイミングは会社の給与計算サイクル（当月徴収か翌月徴収か）によって異なりますので、不明な場合は総務・人事部門に確認しましょう。
                </p>
              </div>
            </section>

            {/* 3. 介護保険料の計算方法 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="keisan"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 介護保険料の計算方法
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  第2号被保険者（40〜64歳の会社員）の介護保険料は、健康保険料と同じく<strong>標準報酬月額</strong>に保険料率を掛けて計算します。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  介護保険料（本人負担）= 標準報酬月額 &times; 介護保険料率
                  &divide; 2
                </div>
                <p>
                  令和6年度の協会けんぽの介護保険料率は<strong>1.82%</strong>です。労使折半なので、本人負担は<strong>0.91%</strong>となります。
                </p>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p className="font-medium text-emerald-800 mb-2">
                    計算例：標準報酬月額30万円の場合
                  </p>
                  <p className="text-emerald-700 text-sm">
                    300,000円 &times; 1.82% &divide; 2 ={" "}
                    <strong className="text-emerald-600 text-base">
                      2,730円/月
                    </strong>
                  </p>
                  <p className="text-emerald-700 text-sm mt-1">
                    年間では 2,730円 &times; 12 ={" "}
                    <strong>32,760円</strong> の負担になります。
                  </p>
                </div>
                <p>
                  なお、健康保険組合に加入している場合は、組合独自の介護保険料率が適用されるため、協会けんぽとは異なる金額になることがあります。
                </p>
              </div>
            </section>

            {/* 4. 月給別の介護保険料一覧表 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="ichiran"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 月給別の介護保険料一覧表
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  協会けんぽ（令和6年度・介護保険料率1.82%）の場合の、月給別の介護保険料（本人負担分）をまとめました。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          月給（標準報酬月額）
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-700">
                          介護保険料（月額）
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-700">
                          年間負担額
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { salary: "200,000円", monthly: "1,820円", annual: "21,840円" },
                        { salary: "220,000円", monthly: "2,002円", annual: "24,024円" },
                        { salary: "240,000円", monthly: "2,184円", annual: "26,208円" },
                        { salary: "260,000円", monthly: "2,366円", annual: "28,392円" },
                        { salary: "280,000円", monthly: "2,548円", annual: "30,576円" },
                        { salary: "300,000円", monthly: "2,730円", annual: "32,760円" },
                        { salary: "320,000円", monthly: "2,912円", annual: "34,944円" },
                        { salary: "340,000円", monthly: "3,094円", annual: "37,128円" },
                        { salary: "360,000円", monthly: "3,276円", annual: "39,312円" },
                        { salary: "380,000円", monthly: "3,458円", annual: "41,496円" },
                        { salary: "400,000円", monthly: "3,640円", annual: "43,680円" },
                        { salary: "440,000円", monthly: "4,004円", annual: "48,048円" },
                        { salary: "500,000円", monthly: "4,550円", annual: "54,600円" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "" : "bg-slate-50"}>
                          <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                            {row.salary}
                          </td>
                          <td className="border border-slate-200 px-4 py-2 text-right text-emerald-600 font-medium">
                            {row.monthly}
                          </td>
                          <td className="border border-slate-200 px-4 py-2 text-right text-slate-700">
                            {row.annual}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 上記は協会けんぽの介護保険料率1.82%（本人負担0.91%）で計算した概算値です。実際の金額は標準報酬月額の等級により若干異なる場合があります。
                </p>
              </div>
            </section>

            {/* 5. 39歳と40歳で手取りはどう変わる？ */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="tedori"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 39歳と40歳で手取りはどう変わる？
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  40歳になって介護保険料の天引きが始まると、手取りはどのくらい減るのでしょうか。月給30万円の会社員を例にシミュレーションしてみます。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-medium text-slate-700">
                          項目
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-700">
                          39歳
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-medium text-slate-700">
                          40歳
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          月給（額面）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          300,000円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          300,000円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          健康保険料
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          14,970円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          14,970円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          介護保険料
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          0円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right text-red-600 font-medium">
                          2,730円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          厚生年金
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          27,450円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          27,450円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 text-slate-700">
                          雇用保険
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          1,800円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          1,800円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                          社会保険料合計
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-medium">
                          44,220円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-medium">
                          46,950円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p className="font-medium text-emerald-800 mb-1">
                    手取りの差額
                  </p>
                  <p className="text-emerald-700 text-sm">
                    40歳になると、月額で約<strong className="text-emerald-600 text-base">2,730円</strong>（年間約32,760円）手取りが減ります。加えて、介護保険料が増えた分だけ課税所得が減る（社会保険料控除）ため、所得税・住民税がわずかに下がり、実質的な負担は若干軽くなります。
                  </p>
                </div>
              </div>
            </section>

            {/* 6. 介護保険料が変わるケース */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kawaru"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 介護保険料が変わるケース
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  標準報酬月額の改定（定時決定・随時改定）
                </h3>
                <p>
                  毎年4〜6月の報酬の平均から標準報酬月額が見直されます（<strong>定時決定</strong>）。昇給・降給があった場合、翌年の9月から新しい等級が適用されます。また、固定的賃金に大幅な変動があった場合は<strong>随時改定</strong>として、年度の途中でも変更されることがあります。
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  健保組合による料率の違い
                </h3>
                <p>
                  介護保険料率は加入している健康保険によって異なります。協会けんぽは全国一律<strong>1.82%</strong>ですが、大企業の健康保険組合は独自の料率を設定しています。
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>協会けんぽ：1.82%（令和6年度）</li>
                  <li>
                    健保組合：組合により異なる（1.2%〜2.5%程度の幅がある）
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  年度ごとの料率改定
                </h3>
                <p>
                  介護保険料率は毎年見直されます。高齢化の進展に伴い、長期的には上昇傾向にあります。協会けんぽの介護保険料率の推移は以下のとおりです。
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>令和3年度：1.80%</li>
                  <li>令和4年度：1.64%</li>
                  <li>令和5年度：1.82%</li>
                  <li>令和6年度：1.82%</li>
                </ul>
              </div>
            </section>

            {/* 7. 65歳以降の介護保険料 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="65sai"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                7. 65歳以降の介護保険料
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  65歳になると<strong>第1号被保険者</strong>に切り替わり、介護保険料の仕組みが大きく変わります。
                </p>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  第1号被保険者の特徴
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>
                    保険料は<strong>市区町村ごと</strong>に決定される（全国一律ではない）
                  </li>
                  <li>
                    所得段階に応じた<strong>定額制</strong>（会社員時代の料率計算とは異なる）
                  </li>
                  <li>
                    原則として<strong>年金から天引き</strong>（特別徴収）される
                  </li>
                  <li>
                    年金額が年18万円未満の場合は納付書で支払い（普通徴収）
                  </li>
                </ul>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  保険料の目安
                </h3>
                <p>
                  第1号被保険者の基準額は市区町村により異なりますが、全国平均は月額<strong>約6,000〜7,000円</strong>（令和6〜8年度）です。所得が高い方は基準額の1.5〜2倍以上になることもあります。
                </p>
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <p className="font-medium text-amber-800 mb-2">
                    65歳になるときの切り替え
                  </p>
                  <p className="text-amber-700 text-sm">
                    65歳になると、給与からの介護保険料の天引きは終了し、代わりに年金から天引きされるようになります。ただし、65歳以降も会社で働いている場合でも、健康保険料からは介護保険料分が外れ、年金からの天引きに一本化されます。
                  </p>
                </div>
              </div>
            </section>

            {/* 8. よくある質問 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="faq"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                よくある質問
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. パートやアルバイトでも介護保険料は引かれますか？
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    社会保険に加入している40歳以上の方であれば、パート・アルバイトでも介護保険料は天引きされます。社会保険の加入条件（週の所定労働時間が正社員の3/4以上、または従業員51人以上の企業で週20時間以上など）を満たしているかどうかがポイントです。社会保険に加入していない場合は、国民健康保険を通じて介護保険料を支払います。
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. 介護保険料は年末調整や確定申告で控除できますか？
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    はい、介護保険料は<strong>社会保険料控除</strong>の対象です。会社員の場合、給与から天引きされた介護保険料は年末調整で自動的に控除されるため、特別な手続きは不要です。控除により課税所得が減り、所得税・住民税が軽減されます。
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. 介護保険料を払っていても、40〜64歳は介護サービスを使えないのですか？
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    第2号被保険者（40〜64歳）でも、<strong>特定疾病</strong>（末期がん、関節リウマチ、初老期における認知症など16種類）が原因で要介護状態になった場合は、介護サービスを利用できます。交通事故などの特定疾病以外が原因の場合は対象外です。
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                手取り額を計算してみる
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                介護保険料を含めた社会保険料・税金の控除後の手取り額を即座に計算できます。
              </p>
              <Link
                href="/kyuryo/tetsuke"
                className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
              >
                手取り計算ツールを使う
              </Link>
            </section>

            {/* 関連記事 */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                関連記事
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/guide/shakaihokenryou-guide"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    社会保険料の計算方法
                  </p>
                </Link>
                <Link
                  href="/guide/tedori-shikumi"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    手取り額の仕組み
                  </p>
                </Link>
                <Link
                  href="/guide/nenshu-tedori-hayamihyou"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    年収別の手取り早見表
                  </p>
                </Link>
                <Link
                  href="/guide/shakai-hoken-kanyu-jouken"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    社会保険の加入条件
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
