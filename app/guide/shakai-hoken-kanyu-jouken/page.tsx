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
  title:
    "社会保険の加入条件 | パート・アルバイトの適用拡大を解説 | 給料ラボ",
  description:
    "パート・アルバイトの社会保険加入条件を2024年の適用拡大を含めて解説。106万円の壁・130万円の壁の違い、加入のメリット・デメリット、損益分岐点シミュレーションも紹介。",
  keywords: "社会保険,加入条件,パート,適用拡大,106万円,130万円",
  alternates: { canonical: "/guide/shakai-hoken-kanyu-jouken" },
  openGraph: {
    title: "社会保険の加入条件 | パート・アルバイトの適用拡大を解説",
    description:
      "パートの社会保険加入条件と106万・130万の壁を詳しく解説。",
    type: "article",
  },
};

export default function ShakaiHokenKanyuJoukenPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="社会保険の加入条件 | パート・アルバイトの適用拡大を解説"
        description="パート・アルバイトの社会保険加入条件を2024年の適用拡大を含めて解説。"
        url="https://kyuryo-lab.com/guide/shakai-hoken-kanyu-jouken"
        datePublished="2025-04-05"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "社会保険の加入条件",
            url: "https://kyuryo-lab.com/guide/shakai-hoken-kanyu-jouken",
          },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <article>
          <header className="mb-8">
            <Breadcrumb
              items={[
                { name: "ホーム", href: "/" },
                { name: "給与ガイド", href: "/guide" },
                {
                  name: "社会保険の加入条件",
                  href: "/guide/shakai-hoken-kanyu-jouken",
                },
              ]}
            />
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">
                給与ガイド
              </Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              社会保険の加入条件 | パート・アルバイトの適用拡大を解説
            </h1>
            <p className="text-slate-500">
              パートやアルバイトでも社会保険に加入する必要があるのか？2024年の適用拡大で変わった加入条件と、加入した場合のメリット・デメリットを詳しく解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#kihon" className="hover:underline">
                    社会保険の加入条件（正社員・パートの違い）
                  </a>
                </li>
                <li>
                  <a href="#tekiyou" className="hover:underline">
                    2024年の適用拡大（51人以上企業）
                  </a>
                </li>
                <li>
                  <a href="#106man" className="hover:underline">
                    106万円の壁と加入要件の詳細
                  </a>
                </li>
                <li>
                  <a href="#merit" className="hover:underline">
                    加入するメリット・デメリット
                  </a>
                </li>
                <li>
                  <a href="#130man" className="hover:underline">
                    130万円の壁との違い
                  </a>
                </li>
                <li>
                  <a href="#simulation" className="hover:underline">
                    扶養内 vs 社保加入 -- 損益分岐点シミュレーション
                  </a>
                </li>
              </ol>
            </nav>


            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kihon"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. 社会保険の加入条件（正社員・パートの違い）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  社会保険（健康保険・厚生年金）は、法人の事業所や常時5人以上の従業員がいる個人事業所（一部業種除く）が<strong>適用事業所</strong>となり、そこで働く従業員が加入対象になります。
                </p>
                <h3 className="font-semibold text-slate-700">
                  正社員の場合
                </h3>
                <p>
                  正社員は原則として<strong>全員が加入対象</strong>です。入社日から社会保険に加入します。
                </p>
                <h3 className="font-semibold text-slate-700">
                  パート・アルバイトの場合
                </h3>
                <p>
                  従来、パート・アルバイトは<strong>「正社員の4分の3以上」</strong>の労働時間・日数を満たす場合に加入対象でした。具体的には以下の通りです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          条件
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          基準
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          例（正社員が週40時間の場合）
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          週の所定労働時間
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          正社員の3/4以上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          週30時間以上
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          月の所定労働日数
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          正社員の3/4以上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          月16日以上
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  これに加え、2016年から段階的に「短時間労働者」への適用拡大が進んでいます。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="tekiyou"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 2024年の適用拡大（51人以上企業）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  短時間労働者への社会保険の適用拡大は、以下のスケジュールで段階的に進められてきました。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          時期
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          対象企業の規模
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          対象人数（推計）
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          2016年10月〜
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          従業員501人以上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          約25万人
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          2022年10月〜
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          従業員101人以上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          約45万人
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          2024年10月〜
                        </td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          従業員51人以上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          約65万人
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  2024年10月からは<strong>従業員51人以上の企業</strong>にまで拡大されました。これにより、中小企業で働くパート・アルバイトにも大きな影響が出ています。
                </p>
                <p>
                  なお、ここでいう「従業員」は、すでに社会保険に加入している被保険者数（フルタイム＋週30時間以上のパート）を指します。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="106man"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 106万円の壁と加入要件の詳細
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  適用拡大の対象企業で働く短時間労働者は、以下の<strong>4つの条件をすべて満たす</strong>場合に社会保険への加入が義務付けられます。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          条件
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          基準
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          補足
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          週の所定労働時間
                        </td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          20時間以上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          契約上の時間で判定
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          月額賃金
                        </td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          8.8万円以上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          残業代・賞与・通勤手当は除く
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          雇用期間の見込み
                        </td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          2か月超
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          2022年10月から緩和
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          学生でない
                        </td>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          --
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          休学中・夜間学生は加入対象
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  月額賃金8.8万円 &times; 12か月 =
                  約106万円であるため、<strong>「106万円の壁」</strong>と呼ばれています。ただし、正確には「月額8.8万円」が基準であり、年収で判定するわけではありません。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>注意点</strong>
                    ：月額賃金に含まれないもの
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li>残業代（時間外手当）</li>
                    <li>賞与</li>
                    <li>通勤手当</li>
                    <li>臨時に支払われる賃金</li>
                  </ul>
                  <p className="mt-2">
                    基本給＋諸手当（家族手当・役職手当等）で8.8万円以上かどうかを判定します。
                  </p>
                </div>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="merit"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 加入するメリット・デメリット
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <h3 className="font-semibold text-slate-700">メリット</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>将来の年金が増える</strong>
                    ：厚生年金に加入することで、老齢基礎年金に加えて老齢厚生年金を受け取れます。例えば月額8.8万円で20年加入した場合、年金が年額約11.6万円増えます
                  </li>
                  <li>
                    <strong>傷病手当金</strong>
                    ：病気やケガで働けない場合、給与の約2/3が最長1年6か月支給されます（国民健康保険にはない制度）
                  </li>
                  <li>
                    <strong>出産手当金</strong>
                    ：産前42日・産後56日の間、給与の約2/3が支給されます
                  </li>
                  <li>
                    <strong>障害厚生年金</strong>
                    ：障害等級3級でも年金を受給でき、国民年金のみの場合より保障が手厚くなります
                  </li>
                  <li>
                    <strong>保険料の半分は会社負担</strong>
                    ：社会保険料は労使折半のため、自分で国民健康保険＋国民年金を払うよりも有利なケースが多いです
                  </li>
                </ul>
                <h3 className="font-semibold text-slate-700">デメリット</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>手取りが減る</strong>
                    ：月額8.8万円の場合、社会保険料の本人負担は約1.2万円/月。年間約15万円の負担増です
                  </li>
                  <li>
                    <strong>配偶者の扶養手当がなくなる場合がある</strong>
                    ：会社によっては、扶養から外れると配偶者手当（家族手当）が支給されなくなります
                  </li>
                </ul>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>月額8.8万円で加入した場合の保険料（目安）</strong>
                  </p>
                  <p className="pl-4">
                    健康保険料：約4,391円/月（東京・協会けんぽ）
                  </p>
                  <p className="pl-4">厚生年金保険料：約8,052円/月</p>
                  <p className="pl-4 font-semibold">
                    合計：約12,443円/月（年間約14.9万円）
                  </p>
                </div>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="130man"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 130万円の壁との違い
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  「106万円の壁」と「130万円の壁」は混同されやすいですが、それぞれ別の制度に基づいています。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          項目
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          106万円の壁
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          130万円の壁
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          根拠
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          自分の勤務先の社保に加入
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          配偶者等の社保の扶養から外れる
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          対象企業
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          従業員51人以上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          企業規模に関係なし
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          判定基準
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          月額賃金8.8万円以上 等
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          年収見込み130万円以上
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          超えた場合
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          勤務先の健保・厚生年金に加入
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          自分で国保・国民年金に加入
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          保険料負担
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-emerald-600 font-semibold">
                          労使折半（会社が半額負担）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-red-600 font-semibold">
                          全額自己負担
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  106万円の壁に該当しない企業（従業員50人以下）で働く場合は、130万円までは配偶者の扶養に入れます。逆に、51人以上の企業で条件を満たす場合は、130万円より先に106万円の壁に当たることになります。
                </p>
                <p>
                  130万円を超えて自分の勤務先の社保に入れない場合は、<strong>国民健康保険＋国民年金</strong>に加入することになり、保険料は全額自己負担です。この場合の負担は106万円の壁で社保に入るよりも重くなります。
                </p>
              </div>
            </section>

            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="simulation"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 扶養内 vs 社保加入 -- 損益分岐点シミュレーション
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  扶養内（年収130万円未満）で働く場合と、社保に加入して働く場合の手取りを比較します。配偶者の扶養に入っている前提です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          年収
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          社保加入
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          社保料（年額）
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          税金（年額）
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          手取り（年額）
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          100万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          なし（扶養内）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          0円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          0円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          約100万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          120万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          なし（扶養内）
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          0円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約2.6万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          約117万円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          130万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-red-600">
                          あり
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約19万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約2.3万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-red-600">
                          約109万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          150万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-red-600">
                          あり
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約22万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約3.4万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          約125万円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          170万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-red-600">
                          あり
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約25万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          約5.2万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right font-semibold text-emerald-600">
                          約140万円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※
                  東京都・協会けんぽ・40歳未満・配偶者控除の影響は考慮せず、概算で計算しています。
                </p>
                <p>
                  扶養内で年収120万円の手取り約117万円を上回るには、社保に加入した上で<strong>年収約160〜170万円</strong>稼ぐ必要があります。この金額が損益分岐点の目安です。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>結論</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li>
                      年収130〜150万円のゾーンは「働き損」になりやすい
                    </li>
                    <li>
                      年収170万円以上なら手取りで扶養内を確実に上回る
                    </li>
                    <li>
                      将来の年金増額・傷病手当金を考慮すれば、損益分岐点はさらに下がる
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                参考資料
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="https://www.nenkin.go.jp/service/kounen/tekiyo/jigyosho/tanjikan.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    日本年金機構「短時間労働者に対する適用拡大」
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/2699_00002.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    厚生労働省「社会保険の適用拡大」
                  </a>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                手取り額を計算してみる
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                社会保険料を含めた手取り額をシミュレーションできます。
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
                  href="/guide/fuyou-kojo-guide"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    扶養控除と103万円の壁
                  </p>
                </Link>
                <Link
                  href="/guide/103man-kabe"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    103万円の壁とは？
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
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
