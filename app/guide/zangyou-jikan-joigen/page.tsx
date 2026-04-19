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
  title: "残業時間の上限規制と36協定をわかりやすく解説 | 給料ラボ",
  description:
    "残業時間の上限は月45時間・年360時間が原則。36協定（サブロク協定）の仕組み、特別条項の上限、2024年から適用の猶予業種、違反時の罰則まで詳しく解説します。",
  keywords: "残業時間,上限,36協定,サブロク協定,働き方改革,時間外労働",
  alternates: { canonical: "/guide/zangyou-jikan-joigen" },
  openGraph: {
    title: "残業時間の上限規制と36協定をわかりやすく解説",
    description:
      "36協定の基本から上限規制、特別条項、罰則まで。残業時間のルールを網羅的に解説。",
    type: "article",
  },
};

export default function ZangyouJikanJoigenPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="残業時間の上限規制と36協定をわかりやすく解説"
        description="残業時間の上限は月45時間・年360時間が原則。36協定の仕組み、特別条項の上限、猶予業種、違反時の罰則まで詳しく解説します。"
        url="https://kyuryo-lab.com/guide/zangyou-jikan-joigen"
        datePublished="2025-04-05"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "残業時間の上限規制と36協定",
            url: "https://kyuryo-lab.com/guide/zangyou-jikan-joigen",
          },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", url: "/" },
            { name: "給与ガイド", url: "/guide" },
            {
              name: "残業時間の上限規制と36協定",
              href: "/guide/zangyou-jikan-joigen",
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
              残業時間の上限規制と36協定をわかりやすく解説
            </h1>
            <p className="text-slate-500">
              「残業は何時間まで許されるのか？」という疑問に答えるため、36協定（サブロク協定）の基本から、働き方改革法で導入された罰則付き上限規制、特別条項のルール、適用猶予業種まで網羅的に解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#36kyoutei" className="hover:underline">
                    36協定（サブロク協定）とは
                  </a>
                </li>
                <li>
                  <a href="#joigen" className="hover:underline">
                    残業時間の上限規制の概要
                  </a>
                </li>
                <li>
                  <a href="#tokubetsu" className="hover:underline">
                    特別条項付き36協定の上限
                  </a>
                </li>
                <li>
                  <a href="#hatarakikata" className="hover:underline">
                    働き方改革法による罰則付き上限規制
                  </a>
                </li>
                <li>
                  <a href="#tekiyou-jogai" className="hover:underline">
                    上限規制の適用除外・猶予業種
                  </a>
                </li>
                <li>
                  <a href="#bassoku" className="hover:underline">
                    違反した場合の罰則
                  </a>
                </li>
                <li>
                  <a href="#kakunin" className="hover:underline">
                    自分の残業時間を確認する方法
                  </a>
                </li>
              </ol>
            </nav>

            {/* セクション1: 36協定とは */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="36kyoutei"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. 36協定（サブロク協定）とは
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  労働基準法第36条に基づき、使用者（会社）と労働者の過半数代表者（または労働組合）との間で締結する書面協定のことを<strong>36協定（サブロク協定）</strong>と呼びます。
                </p>
                <p>
                  労働基準法では、法定労働時間を<strong>1日8時間・週40時間</strong>と定めており、これを超えて労働させること（残業）は原則として禁止されています。36協定を締結し、労働基準監督署に届け出ることで、初めて法定労働時間を超えた残業が認められます。
                </p>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <p className="font-medium text-amber-800 mb-1">
                    重要ポイント
                  </p>
                  <p className="text-amber-700 text-sm">
                    36協定を締結せずに残業をさせた場合、たとえ1分であっても労働基準法違反となります。また、36協定を締結しても無制限に残業させられるわけではなく、上限規制があります。
                  </p>
                </div>
                <p>36協定に記載する主な事項は以下の通りです。</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>時間外労働をさせる必要のある具体的事由</li>
                  <li>時間外労働の対象となる労働者の範囲</li>
                  <li>
                    1日、1か月、1年あたりの時間外労働の上限時間
                  </li>
                  <li>協定の有効期間（通常1年間）</li>
                </ul>
              </div>
            </section>

            {/* セクション2: 上限規制の概要 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="joigen"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 残業時間の上限規制の概要
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  36協定を締結した場合でも、残業時間には<strong>原則的な上限</strong>が設けられています。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          期間
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          上限時間
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          1週間
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          15時間
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          2週間
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          27時間
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          4週間
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          43時間
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-medium">
                          1か月
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-emerald-600">
                          45時間
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          2か月
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          81時間
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          3か月
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          120時間
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-medium">
                          1年間
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-emerald-600">
                          360時間
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  この<strong>月45時間・年360時間</strong>が原則的な上限です。1日あたりの残業時間に換算すると、月20日勤務の場合は約2時間15分となります。
                </p>
              </div>
            </section>

            {/* セクション3: 特別条項 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="tokubetsu"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 特別条項付き36協定の上限
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  繁忙期など臨時的に月45時間を超える残業が必要な場合は、<strong>特別条項付き36協定</strong>を締結することで上限を拡大できます。ただし、特別条項にも明確な上限があります。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          項目
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          上限
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          年間の時間外労働
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-emerald-600">
                          720時間以内
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          単月の時間外労働＋休日労働
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-emerald-600">
                          100時間未満
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          2~6か月の平均（時間外＋休日）
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-emerald-600">
                          80時間以内
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          月45時間超が許される回数
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-emerald-600">
                          年6回まで
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <p className="font-medium text-amber-800 mb-1">
                    複数の条件を同時に満たす必要があります
                  </p>
                  <p className="text-amber-700 text-sm">
                    例えば、ある月に95時間の残業をしても「100時間未満」の条件は満たしますが、翌月も70時間残業すると2か月平均が82.5時間となり、「2~6か月平均80時間以内」の条件に違反します。
                  </p>
                </div>
                <p>
                  特別条項を適用するためには、「臨時的な特別の事情」が必要です。「業務上必要な場合」のような漠然とした理由は認められず、<strong>具体的な事由</strong>（決算期、大規模なクレーム対応、納期の逼迫など）を明記する必要があります。
                </p>
              </div>
            </section>

            {/* セクション4: 働き方改革法 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="hatarakikata"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 働き方改革法による罰則付き上限規制
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  2019年4月（中小企業は2020年4月）に施行された<strong>働き方改革関連法</strong>により、残業時間の上限規制に初めて<strong>法的な罰則</strong>が設けられました。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          改正前
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          改正後
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          上限は大臣告示（行政指導のみ）
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-medium">
                          法律による上限（罰則あり）
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          特別条項に上限なし
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-medium">
                          年720時間・月100時間未満等の上限
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          違反しても行政指導のみ
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-medium">
                          違反は刑事罰の対象
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  改正前は、特別条項を付ければ事実上無制限に残業をさせることが可能でしたが、改正後は特別条項にも絶対的な上限が設けられ、これを超えると<strong>刑事罰</strong>が科される仕組みになりました。
                </p>
                <p>
                  この改正は長時間労働による過労死・過労自殺を防止するために導入されたもので、日本の労働法制における大きな転換点とされています。
                </p>
              </div>
            </section>

            {/* セクション5: 適用除外・猶予 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="tekiyou-jogai"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 上限規制の適用除外・猶予業種
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  一部の業種・職種については、業務の特殊性から上限規制の適用が猶予されていましたが、<strong>2024年4月</strong>からほぼすべての業種に適用が拡大されました。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          業種・職種
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          猶予期間
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          2024年4月以降の扱い
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          建設事業
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          5年間猶予
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          原則適用（災害復旧を除く）
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          自動車運転業務
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          5年間猶予
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          年960時間の特例上限を適用
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          医師
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          5年間猶予
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          年960~1,860時間の特例上限（区分あり）
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          鹿児島・沖縄の砂糖製造
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          5年間猶予
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          原則適用
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          新技術・新商品の研究開発
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          -
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-medium">
                          引き続き適用除外
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  特に自動車運転業務の上限規制適用は<strong>「2024年問題」</strong>として社会的にも大きな注目を集めました。物流・バス・タクシー業界では、ドライバーの労働時間制限により人手不足や輸送力低下が懸念されています。
                </p>
              </div>
            </section>

            {/* セクション6: 罰則 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="bassoku"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 違反した場合の罰則
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  上限規制に違反した場合、労働基準法第119条により以下の罰則が科されます。
                </p>
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <p className="font-semibold text-red-800 text-base mb-1">
                    6か月以下の懲役 または 30万円以下の罰金
                  </p>
                  <p className="text-red-700 text-sm">
                    罰則の対象は使用者（事業主）だけでなく、実際に違法な残業を指示した上司（管理職）にも及ぶ場合があります。
                  </p>
                </div>
                <p>具体的に罰則の対象となるケースは以下の通りです。</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>
                    36協定を締結せずに法定労働時間を超えて労働させた場合
                  </li>
                  <li>
                    36協定で定めた上限時間を超えて労働させた場合
                  </li>
                  <li>
                    特別条項の上限（月100時間未満・年720時間等）を超えた場合
                  </li>
                  <li>
                    2~6か月の平均が80時間を超えた場合
                  </li>
                </ul>
                <p>
                  また、罰則以外にも<strong>企業名の公表</strong>（いわゆる「ブラック企業リスト」への掲載）や、労働基準監督署による<strong>是正勧告・指導</strong>が行われることがあります。悪質な場合は書類送検に至るケースもあります。
                </p>
              </div>
            </section>

            {/* セクション7: 確認方法 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kakunin"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                7. 自分の残業時間を確認する方法
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  自分が上限規制を超えていないか確認するために、以下の方法で残業時間を把握しましょう。
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-1">
                      (1) 給与明細を確認する
                    </h3>
                    <p>
                      毎月の給与明細には「時間外労働時間」が記載されています。月ごとに記録し、月45時間を超えていないか、年間の累計が360時間（特別条項ありの場合は720時間）を超えていないかチェックしましょう。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-1">
                      (2) 勤怠管理システムを確認する
                    </h3>
                    <p>
                      多くの企業では勤怠管理システム（タイムカード、ICカード、PCログ等）で労働時間を記録しています。自分の打刻記録と実際の労働時間に乖離がないか確認しましょう。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-1">
                      (3) 自分で記録をつける
                    </h3>
                    <p>
                      会社の記録が実態と異なる場合に備え、自分でも出退勤時刻をメモやアプリで記録しておくことをおすすめします。未払い残業代を請求する際の重要な証拠にもなります。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-1">
                      (4) 36協定の内容を確認する
                    </h3>
                    <p>
                      36協定は職場に掲示するか、労働者に周知することが義務付けられています。自社の36協定で定められた上限時間を確認し、それを超えていないかチェックしましょう。
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-2">
                  <p className="font-medium text-blue-800 mb-1">
                    上限を超えていたら
                  </p>
                  <p className="text-blue-700 text-sm">
                    残業時間が上限を超えている場合は、まず会社の人事・労務部門に相談しましょう。改善されない場合は、最寄りの労働基準監督署に相談することもできます（相談は匿名でも可能です）。
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
                    href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000148322_00001.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    時間外労働の上限規制
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
                <li>
                  <a
                    href="https://www.mhlw.go.jp/content/000350731.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    36協定届の記載例
                  </a>
                  <span className="text-slate-400 ml-1">
                    （厚生労働省 PDF）
                  </span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                残業代を計算してみる
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                あなたの残業時間から残業代を自動計算。深夜・休日・60時間超の割増にも対応しています。
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
                  href="/guide/kyuyo-meisai-mikata"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    給与明細の見方
                  </p>
                </Link>
                <Link
                  href="/guide/yukyu-kyuka-keisan"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    有給休暇の計算方法
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
