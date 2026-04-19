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
    "扶養内で働く方法と申請手続き | 年収の壁と条件を徹底解説 | 給料ラボ",
  description:
    "扶養内で働くための年収の壁（103万・106万・130万・150万・201万）を一覧表で解説。税制上と社会保険上の扶養の違い、申請手続き、扶養を外れた場合の手取りシミュレーションも紹介します。",
  keywords: "扶養内,働き方,年収の壁,扶養控除,社会保険,申請手続き",
  alternates: { canonical: "/guide/fuyou-nai-hatarakikata" },
  openGraph: {
    title: "扶養内で働く方法と申請手続き | 年収の壁と条件を徹底解説",
    description:
      "扶養内で働くための年収の壁と申請手続きを徹底解説。手取りシミュレーション付き。",
    type: "article",
  },
};

export default function FuyouNaiHatarakikataPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="扶養内で働く方法と申請手続き | 年収の壁と条件を徹底解説"
        description="扶養内で働くための年収の壁（103万・106万・130万・150万・201万）を一覧表で解説。税制上と社会保険上の扶養の違い、申請手続き、扶養を外れた場合の手取りシミュレーションも紹介します。"
        url="https://kyuryo-lab.com/guide/fuyou-nai-hatarakikata"
        datePublished="2025-04-05"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "扶養内で働く方法と申請手続き",
            url: "https://kyuryo-lab.com/guide/fuyou-nai-hatarakikata",
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
                  name: "扶養内で働く方法と申請手続き",
                  href: "/guide/fuyou-nai-hatarakikata",
                },
              ]}
            />
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">
                給与ガイド
              </Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              扶養内で働く方法と申請手続き | 年収の壁と条件を徹底解説
            </h1>
            <p className="text-slate-500">
              「扶養内で働きたい」と考えるパート・アルバイトの方に向けて、税制上・社会保険上の扶養の違い、年収の壁の一覧、申請手続き、扶養を外れた場合の手取り比較まで詳しく解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#fuyou-toha" className="hover:underline">
                    「扶養内で働く」とは -- 税制上と社会保険上の違い
                  </a>
                </li>
                <li>
                  <a href="#nenshu-kabe" className="hover:underline">
                    年収の壁一覧表（100万〜201万円）
                  </a>
                </li>
                <li>
                  <a href="#merit-demerit" className="hover:underline">
                    扶養内で働くメリット・デメリット
                  </a>
                </li>
                <li>
                  <a href="#jouken" className="hover:underline">
                    扶養に入るための条件（配偶者・親族）
                  </a>
                </li>
                <li>
                  <a href="#tetsuzuki" className="hover:underline">
                    扶養の申請手続き（届出・年末調整）
                  </a>
                </li>
                <li>
                  <a href="#simulation" className="hover:underline">
                    扶養を外れた場合のシミュレーション
                  </a>
                </li>
                <li>
                  <a href="#2024-henkou" className="hover:underline">
                    2024年の制度変更ポイント
                  </a>
                </li>
              </ol>
            </nav>

            {/* セクション1 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="fuyou-toha"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. 「扶養内で働く」とは -- 税制上と社会保険上の違い
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  「扶養内で働く」とは、配偶者や親族の扶養に入った状態を維持しながら働くことを指します。扶養には大きく分けて<strong>税制上の扶養</strong>と<strong>社会保険上の扶養</strong>の2種類があり、それぞれ基準や影響が異なります。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          項目
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          税制上の扶養
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          社会保険上の扶養
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          制度
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          所得税・住民税の配偶者控除/扶養控除
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          健康保険・年金の被扶養者
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          基準額
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          年収103万円（配偶者控除）/ 201万円（配偶者特別控除）
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          年収130万円（または106万円）
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          影響を受ける人
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          扶養する側（配偶者・親）の税金
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          扶養される側の保険料負担
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          超えた場合
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          扶養する側の税金が増える
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          自分で社会保険料を支払う
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  多くの人が「扶養内で働く」と言う場合、両方の扶養を意識しています。しかし、税制上の扶養を超えても段階的に控除が減るだけなのに対し、社会保険上の扶養を外れると<strong>保険料の負担が一気に発生する</strong>ため、より注意が必要です。
                </p>
              </div>
            </section>

            {/* セクション2 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="nenshu-kabe"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 年収の壁一覧表（100万〜201万円）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  パート・アルバイトの年収には、段階的に影響が出る「壁」があります。以下に主要な壁をまとめました。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          年収の壁
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          種類
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          超えた場合の影響
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          影響度
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          100万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          税制
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          本人に<strong>住民税</strong>が発生（自治体により異なる）
                        </td>
                        <td className="px-3 py-2 border border-slate-200">
                          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded">
                            小
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          103万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          税制
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          本人に<strong>所得税</strong>が発生 / 配偶者控除の対象外に
                        </td>
                        <td className="px-3 py-2 border border-slate-200">
                          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded">
                            小〜中
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold text-blue-700">
                          106万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          社会保険
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          従業員51人以上の企業で<strong>社会保険に加入</strong>（保険料負担が発生）
                        </td>
                        <td className="px-3 py-2 border border-slate-200">
                          <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded">
                            大
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold text-red-700">
                          130万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          社会保険
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          企業規模に関係なく<strong>扶養から外れる</strong>（国保+国民年金 or 勤務先の社保）
                        </td>
                        <td className="px-3 py-2 border border-slate-200">
                          <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded">
                            大
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          150万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          税制
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          配偶者特別控除が<strong>段階的に減額</strong>開始
                        </td>
                        <td className="px-3 py-2 border border-slate-200">
                          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded">
                            中
                          </span>
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          201万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          税制
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          配偶者特別控除が<strong>完全になくなる</strong>
                        </td>
                        <td className="px-3 py-2 border border-slate-200">
                          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded">
                            中
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>ポイント</strong>
                    ：手取りへの影響が最も大きいのは<strong>106万円</strong>と<strong>130万円</strong>の壁です。税制上の壁（103万・150万・201万円）は段階的な変化ですが、社会保険上の壁は一定額を超えると突然保険料負担が発生するため、「壁」を超えた直後は手取りが大きく減る可能性があります。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション3 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="merit-demerit"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 扶養内で働くメリット・デメリット
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <h3 className="font-semibold text-slate-700">メリット</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>社会保険料の負担がゼロ</strong>
                    ：配偶者の社会保険の被扶養者であれば、自分の健康保険料・年金保険料を支払う必要がありません。年間で約15〜25万円の負担を回避できます
                  </li>
                  <li>
                    <strong>配偶者の税金が安くなる</strong>
                    ：配偶者控除（最大38万円）が適用されるため、扶養する側の所得税・住民税が軽減されます
                  </li>
                  <li>
                    <strong>会社の配偶者手当を受けられる場合がある</strong>
                    ：一部の企業では、配偶者の年収が一定以下の場合に家族手当・配偶者手当を支給しています
                  </li>
                  <li>
                    <strong>手取り率が高い</strong>
                    ：税金や保険料の天引きが少ないため、働いた分がほぼそのまま手取りになります
                  </li>
                </ul>
                <h3 className="font-semibold text-slate-700">デメリット</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>収入に上限がある</strong>
                    ：扶養を維持するために年収を抑える必要があり、スキルアップや昇給の機会を逃す可能性があります
                  </li>
                  <li>
                    <strong>将来の年金額が少ない</strong>
                    ：厚生年金に加入しないため、将来受け取れる年金は国民年金（老齢基礎年金）のみ。厚生年金加入者と比べて月額で数万円の差が出ます
                  </li>
                  <li>
                    <strong>傷病手当金・出産手当金がない</strong>
                    ：国民健康保険の被扶養者には、病気やケガで休業した場合の傷病手当金や出産手当金の制度がありません
                  </li>
                  <li>
                    <strong>年末の調整が必要</strong>
                    ：年収が壁を超えないよう、年末にシフトを減らすなどの調整が必要になる場合があります
                  </li>
                </ul>
              </div>
            </section>

            {/* セクション4 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="jouken"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 扶養に入るための条件（配偶者・親族）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <h3 className="font-semibold text-slate-700">
                  税制上の扶養（配偶者控除・扶養控除）
                </h3>
                <p>
                  配偶者控除を受けるには、以下の条件をすべて満たす必要があります。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>民法上の配偶者である（内縁関係は対象外）</li>
                  <li>生計を一にしている</li>
                  <li>
                    配偶者の<strong>合計所得金額が48万円以下</strong>（給与収入のみなら年収103万円以下）
                  </li>
                  <li>
                    扶養する側の<strong>合計所得金額が1,000万円以下</strong>（年収1,195万円以下が目安）
                  </li>
                  <li>青色申告の事業専従者でない</li>
                </ul>
                <p>
                  配偶者の所得が48万円を超えても133万円以下であれば、<strong>配偶者特別控除</strong>が段階的に適用されます（年収150万円までは控除額が同じ38万円）。
                </p>

                <h3 className="font-semibold text-slate-700">
                  社会保険上の扶養（被扶養者）
                </h3>
                <p>
                  健康保険の被扶養者になるための条件は以下の通りです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          条件
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          詳細
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          続柄
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          配偶者、子、孫、兄弟姉妹、父母、祖父母など（3親等内の親族）
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          年収要件
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          年収<strong>130万円未満</strong>（60歳以上または障害者は180万円未満）
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          収入割合
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          被扶養者の年収が扶養者の<strong>年収の1/2未満</strong>
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          同居要件
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          配偶者・子・孫・兄弟姉妹・父母は同居不要。それ以外の3親等内親族は同居が必要
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>注意</strong>
                    ：年収130万円の判定は「今後1年間の見込み収入」で行います。過去の実績ではなく、月額108,333円（130万 &divide; 12か月）を恒常的に超えるかどうかで判断されます。
                  </p>
                </div>
              </div>
            </section>

            {/* セクション5 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="tetsuzuki"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 扶養の申請手続き（届出・年末調整）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <h3 className="font-semibold text-slate-700">
                  税制上の扶養の申請
                </h3>
                <p>
                  税制上の扶養（配偶者控除・扶養控除）は、<strong>年末調整</strong>または<strong>確定申告</strong>で申告します。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          手順
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          内容
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          時期
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          1
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          「給与所得者の扶養控除等（異動）申告書」を勤務先に提出
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          入社時 / 毎年年末
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          2
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          「給与所得者の配偶者控除等申告書」に配偶者の所得見込みを記入
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          年末調整時（11〜12月）
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          3
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          年末調整で配偶者控除・扶養控除が適用される
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          12月の給与で精算
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  年末調整で申告を忘れた場合でも、翌年の<strong>確定申告</strong>（2〜3月）で申告すれば控除を受けられます。
                </p>

                <h3 className="font-semibold text-slate-700">
                  社会保険上の扶養の申請
                </h3>
                <p>
                  社会保険の被扶養者になるには、<strong>扶養する側の勤務先</strong>を通じて手続きを行います。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          手順
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          内容
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          必要書類
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          1
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          配偶者の勤務先に「被扶養者（異動）届」を提出
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          届出書
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          2
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          収入を証明する書類を添付
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          直近の給与明細、非課税証明書、離職票など
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          3
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          健康保険組合（または協会けんぽ）の審査を経て認定
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          --
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          4
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          被扶養者の保険証が発行される
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          --
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>届出のタイミング</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li>
                      結婚した時 / 配偶者が退職した時 / 子供が生まれた時
                    </li>
                    <li>
                      届出は原則として<strong>事実発生日から5日以内</strong>に行います
                    </li>
                    <li>
                      毎年の「被扶養者資格確認」（検認）で収入状況が再チェックされます
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション6 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="simulation"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 扶養を外れた場合のシミュレーション
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  扶養内で働く場合と扶養を外れて働く場合の手取り額を比較します。配偶者（会社員）の扶養に入っている40歳未満の方を想定しています。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          年収
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          扶養状態
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-right font-medium text-slate-700 border border-slate-200">
                          社保料（年額）
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-right font-medium text-slate-700 border border-slate-200">
                          税金（年額）
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-right font-medium text-slate-700 border border-slate-200">
                          手取り（年額）
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          100万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-emerald-600 font-semibold">
                          扶養内
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          0円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          0円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-right">
                          約100万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          103万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-emerald-600 font-semibold">
                          扶養内
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          0円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約0.5万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-right">
                          約102.5万円
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          120万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-emerald-600 font-semibold">
                          扶養内
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          0円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約2.6万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-right">
                          約117万円
                        </td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          130万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-red-600 font-semibold">
                          扶養外
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約19万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約2.3万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-red-600 text-right">
                          約109万円
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          150万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-red-600 font-semibold">
                          扶養外
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約22万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約3.4万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-right">
                          約125万円
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          170万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-red-600 font-semibold">
                          扶養外
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約25万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約5.2万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-emerald-600 text-right">
                          約140万円
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          200万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-red-600 font-semibold">
                          扶養外
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約29万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 text-right">
                          約7.5万円
                        </td>
                        <td className="px-3 py-2 border border-slate-200 font-semibold text-emerald-600 text-right">
                          約164万円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 東京都・協会けんぽ・40歳未満・配偶者側の税影響は含まず概算です。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>分析</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-2 mt-1">
                    <li>
                      年収130万円で扶養を外れると、手取りは扶養内の年収120万円を<strong>下回る</strong>（「働き損」ゾーン）
                    </li>
                    <li>
                      手取りで扶養内の120万円を確実に上回るには<strong>年収160〜170万円以上</strong>が必要
                    </li>
                    <li>
                      年収200万円以上であれば、扶養内よりも手取りが明確に増え、さらに将来の年金増額のメリットも得られる
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* セクション7 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="2024-henkou"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                7. 2024年の制度変更ポイント
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  2024年10月から、社会保険の適用拡大が<strong>従業員51人以上の企業</strong>にまで広がりました。これは扶養内で働く方に大きな影響を与える変更です。
                </p>

                <h3 className="font-semibold text-slate-700">
                  適用拡大のスケジュール
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          時期
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          対象企業
                        </th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">
                          影響
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          2022年10月
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          従業員101人以上
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          大企業のパートが対象
                        </td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          2024年10月
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600 font-semibold">
                          従業員51人以上
                        </td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">
                          中小企業のパートも対象に（約65万人）
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-700">
                  106万円の壁の加入条件（おさらい）
                </h3>
                <p>
                  従業員51人以上の企業で以下の4条件をすべて満たすと、社会保険への加入が義務付けられます。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>
                    週の所定労働時間が<strong>20時間以上</strong>
                  </li>
                  <li>
                    月額賃金が<strong>8.8万円以上</strong>（年収約106万円）
                  </li>
                  <li>
                    雇用期間の見込みが<strong>2か月超</strong>
                  </li>
                  <li>学生でないこと</li>
                </ul>

                <h3 className="font-semibold text-slate-700">
                  扶養内で働く方への影響
                </h3>
                <div className="bg-slate-50 rounded-xl p-4">
                  <ul className="list-disc list-inside space-y-2 pl-2">
                    <li>
                      これまで130万円の壁だけを意識していた方も、勤務先が51人以上の企業であれば<strong>106万円の壁</strong>が適用される可能性あり
                    </li>
                    <li>
                      扶養内を維持するには、年収を106万円未満に抑えるか、週20時間未満に勤務時間を調整する必要あり
                    </li>
                    <li>
                      ただし、社保に加入すると<strong>将来の年金増額</strong>や<strong>傷病手当金</strong>などの保障が得られるため、あえて加入する選択も有効
                    </li>
                  </ul>
                </div>

                <h3 className="font-semibold text-slate-700">
                  「年収の壁・支援強化パッケージ」（2023年10月〜）
                </h3>
                <p>
                  政府は「年収の壁」を意識して働き控えが起きることを問題視し、以下の支援策を実施しています。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>
                    <strong>キャリアアップ助成金（社会保険適用時処遇改善コース）</strong>
                    ：106万円の壁を超えて社保に加入した従業員に対し、企業が手取り減少分を補填する場合、1人あたり最大50万円の助成金を支給
                  </li>
                  <li>
                    <strong>130万円の壁への対応</strong>
                    ：一時的に130万円を超えても、事業主の証明があれば連続2年まで被扶養者のまま認められる特例措置
                  </li>
                </ul>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                参考資料
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    国税庁「配偶者控除」
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1195.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    国税庁「配偶者特別控除」
                  </a>
                </li>
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
                <li>
                  <a
                    href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/syakaihoken_tekiyoukakudai.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    厚生労働省「年収の壁・支援強化パッケージ」
                  </a>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                手取り額を計算してみる
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                扶養内・扶養外それぞれの手取り額をシミュレーションできます。年収の壁を超えた場合の影響を確認しましょう。
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
                  href="/guide/103man-kabe"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    103万円の壁とは？
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
                  href="/guide/shakai-hoken-kanyu-jouken"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    社会保険の加入条件
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
