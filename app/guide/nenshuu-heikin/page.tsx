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
  title: "【2025年版】年齢別・業種別の平均年収まとめ | 給料ラボ",
  description:
    "日本の平均年収を年齢別・業種別・男女別に一覧表で紹介。令和5年度の国税庁データをもとに、20代〜60代の年収推移や業種ごとの差、年収アップの方法も解説します。",
  keywords: "平均年収,年齢別,業種別,年収,男女別,年収アップ",
  alternates: { canonical: "/guide/nenshuu-heikin" },
  openGraph: {
    title: "【2025年版】年齢別・業種別の平均年収まとめ",
    description:
      "日本の平均年収を年齢別・業種別・男女別に一覧で紹介。年収アップの方法も解説。",
    type: "article",
  },
};

export default function NenshuuHeikinPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="【2025年版】年齢別・業種別の平均年収まとめ"
        description="日本の平均年収を年齢別・業種別・男女別に一覧表で紹介。令和5年度の国税庁データをもとに解説。"
        url="https://kyuryo-lab.com/guide/nenshuu-heikin"
        datePublished="2025-04-05"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "年齢別・業種別の平均年収",
            url: "https://kyuryo-lab.com/guide/nenshuu-heikin",
          },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", url: "/" },
            { name: "給与ガイド", url: "/guide" },
            {
              name: "年齢別・業種別の平均年収",
              href: "/guide/nenshuu-heikin",
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
              【2025年版】年齢別・業種別の平均年収まとめ
            </h1>
            <p className="text-slate-500">
              自分の年収は平均と比べてどうなのか。令和5年度の国税庁「民間給与実態統計調査」をもとに、年齢別・業種別・男女別の平均年収をまとめました。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#zentai" className="hover:underline">
                    日本の平均年収（全体）
                  </a>
                </li>
                <li>
                  <a href="#nenrei" className="hover:underline">
                    年齢別の平均年収
                  </a>
                </li>
                <li>
                  <a href="#gyoushu" className="hover:underline">
                    業種別の平均年収
                  </a>
                </li>
                <li>
                  <a href="#danjo" className="hover:underline">
                    男女別の平均年収
                  </a>
                </li>
                <li>
                  <a href="#nenshu-up" className="hover:underline">
                    年収を上げるための方法
                  </a>
                </li>
                <li>
                  <a href="#tedori" className="hover:underline">
                    手取りとの関係
                  </a>
                </li>
              </ol>
            </nav>

            {/* 1. 日本の平均年収（全体） */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="zentai"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. 日本の平均年収（全体）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  国税庁の「令和5年分 民間給与実態統計調査」によると、
                  <strong className="text-slate-800">
                    日本の給与所得者の平均年収は約460万円
                  </strong>
                  です。これは正規・非正規を含む全体の平均であり、正規雇用者に限ると約530万円、非正規雇用者では約202万円と大きな差があります。
                </p>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <p className="text-center">
                    <span className="text-sm text-slate-500">
                      全体の平均年収（令和5年度）
                    </span>
                    <br />
                    <span className="text-4xl font-bold text-emerald-600">
                      約460万円
                    </span>
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          雇用形態
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          平均年収
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: "全体", amount: "約460万円" },
                        { type: "正規雇用", amount: "約530万円" },
                        { type: "非正規雇用", amount: "約202万円" },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 1 ? "bg-slate-50" : ""}
                        >
                          <td className="border border-slate-200 px-3 py-2 font-semibold">
                            {row.type}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-600">
                            {row.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p>
                  平均年収はここ数年、緩やかな上昇傾向にあります。ただし物価上昇（インフレ）を考慮した実質賃金では、必ずしも生活が楽になっているとは言えません。
                </p>
              </div>
            </section>

            {/* 2. 年齢別の平均年収 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="nenrei"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 年齢別の平均年収
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  年齢が上がるにつれて年収も上昇し、50代前半でピークを迎えるのが一般的です。以下は年齢階層別の平均年収です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          年齢層
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          男性
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          女性
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          全体
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          age: "20〜24歳",
                          male: "277万円",
                          female: "249万円",
                          all: "267万円",
                        },
                        {
                          age: "25〜29歳",
                          male: "398万円",
                          female: "335万円",
                          all: "371万円",
                        },
                        {
                          age: "30〜34歳",
                          male: "474万円",
                          female: "338万円",
                          all: "413万円",
                        },
                        {
                          age: "35〜39歳",
                          male: "528万円",
                          female: "333万円",
                          all: "445万円",
                        },
                        {
                          age: "40〜44歳",
                          male: "576万円",
                          female: "340万円",
                          all: "476万円",
                        },
                        {
                          age: "45〜49歳",
                          male: "614万円",
                          female: "341万円",
                          all: "499万円",
                        },
                        {
                          age: "50〜54歳",
                          male: "650万円",
                          female: "340万円",
                          all: "525万円",
                        },
                        {
                          age: "55〜59歳",
                          male: "632万円",
                          female: "329万円",
                          all: "503万円",
                        },
                        {
                          age: "60〜64歳",
                          male: "450万円",
                          female: "275万円",
                          all: "379万円",
                        },
                        {
                          age: "65〜69歳",
                          male: "362万円",
                          female: "238万円",
                          all: "313万円",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 1 ? "bg-slate-50" : ""}
                        >
                          <td className="border border-slate-200 px-3 py-2 font-semibold">
                            {row.age}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-right">
                            {row.male}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-right">
                            {row.female}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-600">
                            {row.all}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 国税庁「令和5年分 民間給与実態統計調査」をもとに作成。正規・非正規を含む平均。
                </p>
                <p>
                  男性は50〜54歳で平均650万円のピークを迎えます。60歳以降は再雇用や嘱託での就労が多く、大幅に年収が下がる傾向があります。女性は年齢による変動が比較的小さく、300万円台で推移します。
                </p>
              </div>
            </section>

            {/* 3. 業種別の平均年収 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="gyoushu"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 業種別の平均年収
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  業種によって平均年収には大きな差があります。以下は主要業種の平均年収を高い順に並べたものです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          業種
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          平均年収
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          全体比
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          industry: "電気・ガス・水道",
                          amount: "747万円",
                          ratio: "+62%",
                        },
                        {
                          industry: "金融・保険",
                          amount: "656万円",
                          ratio: "+43%",
                        },
                        {
                          industry: "情報通信（IT）",
                          amount: "632万円",
                          ratio: "+37%",
                        },
                        {
                          industry: "建設",
                          amount: "529万円",
                          ratio: "+15%",
                        },
                        {
                          industry: "製造",
                          amount: "520万円",
                          ratio: "+13%",
                        },
                        {
                          industry: "教育・学習支援",
                          amount: "496万円",
                          ratio: "+8%",
                        },
                        {
                          industry: "運輸・郵便",
                          amount: "477万円",
                          ratio: "+4%",
                        },
                        {
                          industry: "医療・福祉",
                          amount: "407万円",
                          ratio: "-12%",
                        },
                        {
                          industry: "卸売・小売",
                          amount: "384万円",
                          ratio: "-17%",
                        },
                        {
                          industry: "宿泊・飲食サービス",
                          amount: "264万円",
                          ratio: "-43%",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 1 ? "bg-slate-50" : ""}
                        >
                          <td className="border border-slate-200 px-3 py-2 font-semibold">
                            {row.industry}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-600">
                            {row.amount}
                          </td>
                          <td
                            className={`border border-slate-200 px-3 py-2 text-right ${row.ratio.startsWith("+") ? "text-blue-600" : "text-red-500"}`}
                          >
                            {row.ratio}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 国税庁「令和5年分 民間給与実態統計調査」をもとに作成。
                </p>
                <p>
                  最も高い「電気・ガス・水道」と最も低い「宿泊・飲食サービス」では約480万円もの差があります。IT（情報通信）業界は平均632万円と高水準で、近年のDX需要により上昇傾向が続いています。
                </p>
              </div>
            </section>

            {/* 4. 男女別の平均年収 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="danjo"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 男女別の平均年収の差
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  日本では男女間の賃金格差が依然として大きい状態です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          区分
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          平均年収
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          正規雇用
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          非正規雇用
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-3 py-2 font-semibold">
                          男性
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-600">
                          569万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right">
                          594万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right">
                          270万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-3 py-2 font-semibold">
                          女性
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-600">
                          316万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right">
                          413万円
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right">
                          169万円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-3 py-2 font-semibold">
                          格差（男性を100とした場合）
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-red-500">
                          55.5%
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-red-500">
                          69.5%
                        </td>
                        <td className="border border-slate-200 px-3 py-2 text-right text-red-500">
                          62.6%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  全体では女性の平均年収は男性の約56%にとどまります。これは非正規雇用の割合が女性に多いことが大きな要因です。正規雇用に限っても約70%と、格差は解消されていません。
                </p>
                <p>
                  背景には、出産・育児による離職やキャリアの中断、管理職比率の低さなどがあります。近年は女性活躍推進法の施行により改善傾向にありますが、OECD平均と比べると日本の男女賃金格差は依然大きい水準です。
                </p>
              </div>
            </section>

            {/* 5. 年収を上げるための方法 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="nenshu-up"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 年収を上げるための方法
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  平均年収と比較して「もっと上げたい」と感じた方へ、年収アップの主な方法を紹介します。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  転職
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    転職による年収アップは最も即効性があります。厚生労働省の調査では、転職者の約37%が「賃金が増加した」と回答しています。
                  </li>
                  <li>
                    特に20代後半〜30代前半は転職市場での評価が高く、同じスキルでも業界を変えるだけで年収が50万〜100万円以上アップするケースもあります。
                  </li>
                  <li>
                    年収が高い業種（IT・金融・インフラ）への業種転換は有効な選択肢です。
                  </li>
                </ul>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  スキルアップ・資格取得
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    ITスキル（プログラミング、クラウド、データ分析）は需要が高く、資格や実績があれば年収アップに直結します。
                  </li>
                  <li>
                    国家資格（社労士、税理士、宅建など）は資格手当や独立の道もあり、長期的なキャリアアップに有効です。
                  </li>
                  <li>
                    TOEIC 800点以上の英語力があると、外資系企業や海外取引のある企業で評価が高まります。
                  </li>
                </ul>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  副業
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    副業解禁の流れが広がり、本業以外の収入源を持つ人が増えています。Webライティング、プログラミング、動画編集、コンサルティングなどが人気です。
                  </li>
                  <li>
                    副業で月5万〜10万円の収入を得ることで、年間60万〜120万円の年収アップと同等の効果があります。
                  </li>
                  <li>
                    副業で得たスキルや人脈が本業の評価向上やキャリアチェンジにつながることも多いです。
                  </li>
                </ul>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  社内でのキャリアアップ
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    管理職への昇進は年収を大きく伸ばす王道の方法です。課長クラスで年収100万円以上アップするケースも珍しくありません。
                  </li>
                  <li>
                    成果を可視化し、上司や経営層にアピールする「社内営業力」も重要です。
                  </li>
                </ul>
              </div>
            </section>

            {/* 6. 手取りとの関係 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="tedori"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 年収と手取りの関係
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  年収（額面）だけを見ていると、実際に使えるお金の感覚とズレが生じます。年収から社会保険料と税金を差し引いた「手取り」で考えることが大切です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-3 py-2 text-left font-semibold">
                          年収（額面）
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          手取り目安
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          手取り率
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-right font-semibold">
                          月の手取り
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          nen: "300万円",
                          tedori: "約239万円",
                          rate: "約80%",
                          monthly: "約19.9万円",
                        },
                        {
                          nen: "400万円",
                          tedori: "約313万円",
                          rate: "約78%",
                          monthly: "約26.1万円",
                        },
                        {
                          nen: "500万円",
                          tedori: "約386万円",
                          rate: "約77%",
                          monthly: "約32.2万円",
                        },
                        {
                          nen: "600万円",
                          tedori: "約457万円",
                          rate: "約76%",
                          monthly: "約38.1万円",
                        },
                        {
                          nen: "700万円",
                          tedori: "約522万円",
                          rate: "約75%",
                          monthly: "約43.5万円",
                        },
                        {
                          nen: "800万円",
                          tedori: "約583万円",
                          rate: "約73%",
                          monthly: "約48.6万円",
                        },
                        {
                          nen: "1000万円",
                          tedori: "約713万円",
                          rate: "約71%",
                          monthly: "約59.4万円",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 1 ? "bg-slate-50" : ""}
                        >
                          <td className="border border-slate-200 px-3 py-2 font-semibold">
                            {row.nen}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-600">
                            {row.tedori}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-right">
                            {row.rate}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-right">
                            {row.monthly}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 独身・扶養なし・40歳未満・賞与なしの場合の概算値。
                </p>
                <p>
                  年収が上がるほど手取り率は低下します。年収500万円なら手取りは約386万円（77%）ですが、年収1000万円では約713万円（71%）と、額面ほどの差が手取りには反映されません。
                </p>
                <p>
                  転職や昇給で年収が上がった際は、手取り額でどれだけ増えるかを確認しましょう。当サイトの手取り計算ツールで簡単に試算できます。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan/gaiyou/2023.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    令和5年分 民間給与実態統計調査
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
                <li>
                  <a
                    href="https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2023/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    令和5年 賃金構造基本統計調査
                  </a>
                  <span className="text-slate-400 ml-1">（厚生労働省）</span>
                </li>
                <li>
                  <a
                    href="https://www.mhlw.go.jp/toukei/itiran/roudou/koyou/doukou/24-2/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    雇用動向調査
                  </a>
                  <span className="text-slate-400 ml-1">（厚生労働省）</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                あなたの手取りを計算する
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                月収・年齢・扶養人数を入力して、実際の手取り額を確認しましょう。
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
                  href="/guide/nenshu-tedori-hayamihyou"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    年収別の手取り早見表
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
                  href="/guide/shotokuzei-keisan"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    所得税の計算方法
                  </p>
                </Link>
                <Link
                  href="/guide/saitei-chingin"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    最低賃金一覧
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
