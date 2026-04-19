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
  title: "パート・アルバイトの年末調整 | 必要書類と手取りへの影響 | 給料ラボ",
  description:
    "パート・アルバイトでも年末調整は必要？対象者の条件、必要書類一覧、受けられる控除、還付金の目安、掛け持ちバイトの確定申告まで徹底解説。103万円の壁との関係もわかりやすく説明します。",
  keywords: "年末調整,パート,アルバイト,確定申告,還付金,手取り",
  alternates: { canonical: "/guide/part-nenmatsu-chousei" },
  openGraph: {
    title: "パート・アルバイトの年末調整 | 必要書類と手取りへの影響",
    description:
      "パート・アルバイトの年末調整を徹底解説。対象条件、必要書類、還付金の目安まで。",
    type: "article",
  },
};

export default function PartNenmatsuChouseiPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="パート・アルバイトの年末調整 | 必要書類と手取りへの影響"
        description="パート・アルバイトの年末調整について、対象条件・必要書類・控除・還付金の目安・掛け持ちの確定申告まで解説。"
        url="https://kyuryo-lab.com/guide/part-nenmatsu-chousei"
        datePublished="2026-04-08"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "パートの年末調整",
            url: "https://kyuryo-lab.com/guide/part-nenmatsu-chousei",
          },
        ]}
      />
      <FAQPageJsonLd
        items={[
          {
            question: "年末調整の書類を出し忘れたらどうなる？",
            answer: "勤務先で年末調整が行われません。その場合は翌年に自分で確定申告をすれば同様に税金の精算ができます。還付申告であれば1月1日から5年間申告可能です。",
          },
          {
            question: "短期バイトや単発バイトでも年末調整は必要？",
            answer: "扶養控除等申告書を提出していて12月31日時点で在籍していれば年末調整の対象です。短期間で辞めた場合は源泉徴収票をもらって確定申告で精算しましょう。",
          },
          {
            question: "学生アルバイトでも年末調整は必要？",
            answer: "学生でも年末調整は必要です。勤労学生控除（27万円）が適用でき年収130万円まで所得税が非課税になりますが、103万円を超えると親の扶養控除から外れる点に注意が必要です。",
          },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", url: "/" },
            { name: "給与ガイド", url: "/guide" },
            {
              name: "パートの年末調整",
              href: "/guide/part-nenmatsu-chousei",
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
              パート・アルバイトの年末調整 | 必要書類と手取りへの影響
            </h1>
            <p className="text-slate-500">
              パートやアルバイトでも年末調整は必要？対象になる条件や必要書類、還付金の目安、掛け持ちバイトの確定申告まで、わかりやすく解説します。
            </p>
          </header>

          <div className="space-y-8">
            {/* 目次 */}
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#hitsuyou" className="hover:underline">
                    パート・アルバイトでも年末調整は必要？
                  </a>
                </li>
                <li>
                  <a href="#taishou" className="hover:underline">
                    年末調整の対象になる人・ならない人
                  </a>
                </li>
                <li>
                  <a href="#shorui" className="hover:underline">
                    必要書類一覧
                  </a>
                </li>
                <li>
                  <a href="#kojo" className="hover:underline">
                    年末調整で受けられる控除
                  </a>
                </li>
                <li>
                  <a href="#kanpu" className="hover:underline">
                    還付金の目安
                  </a>
                </li>
                <li>
                  <a href="#kakemochi" className="hover:underline">
                    掛け持ちバイトの場合の確定申告
                  </a>
                </li>
                <li>
                  <a href="#103man" className="hover:underline">
                    103万円の壁との関係
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    よくある質問
                  </a>
                </li>
              </ol>
            </nav>

            {/* 1. パート・アルバイトでも年末調整は必要？ */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="hitsuyou"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. パート・アルバイトでも年末調整は必要？
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  結論から言うと、パート・アルバイトでも<strong>年末調整は必要</strong>です。雇用形態に関係なく、以下の条件を満たす人は年末調整の対象になります。
                </p>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p className="font-semibold text-emerald-800 mb-2">
                    年末調整が必要な条件
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                    <li>
                      主たる勤務先（メインの勤め先）が<strong>1か所</strong>
                      ある
                    </li>
                    <li>
                      その勤務先に「<strong>扶養控除等（異動）申告書</strong>
                      」を提出している
                    </li>
                    <li>
                      12月31日時点でその勤務先に在籍している（または年の途中で退職し再就職していない場合の一部）
                    </li>
                  </ul>
                </div>
                <p>
                  パートやアルバイトであっても、給与から所得税が天引き（源泉徴収）されていれば、年末調整によって払いすぎた税金が<strong>還付</strong>される可能性があります。特に年収103万円以下の方は、源泉徴収された所得税が全額戻ることもあります。
                </p>
              </div>
            </section>

            {/* 2. 年末調整の対象になる人・ならない人 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="taishou"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 年末調整の対象になる人・ならない人
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  対象になる人
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>
                    1つの勤務先にのみ勤めていて、扶養控除等申告書を提出している人
                  </li>
                  <li>年収2,000万円以下の人</li>
                  <li>12月31日時点で在籍している人</li>
                  <li>
                    中途退職者のうち、死亡退職・心身障害による退職・12月中の退職・年収103万円以下で退職した人
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  対象にならない人
                </h3>
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                    <li>
                      <strong>ダブルワーク（掛け持ち）</strong>
                      で、サブの勤務先には扶養控除等申告書を提出できない
                      → サブの勤務先では年末調整不可
                    </li>
                    <li>
                      <strong>年の途中で退職</strong>
                      して年末時点でどこにも勤めていない（上記の例外を除く）
                    </li>
                    <li>
                      <strong>年収2,000万円超</strong>の人
                    </li>
                    <li>
                      <strong>日雇い労働者</strong>
                      で「丙欄」適用の人
                    </li>
                  </ul>
                </div>
                <p>
                  対象にならない場合でも、翌年に<strong>確定申告</strong>をすれば税金の精算が可能です。むしろ確定申告した方が還付を受けられるケースが多いです。
                </p>
              </div>
            </section>

            {/* 3. 必要書類一覧 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="shorui"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 必要書類一覧
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  パート・アルバイトの年末調整で提出する書類は以下のとおりです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          書類名
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          記入内容
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          提出対象者
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          扶養控除等（異動）申告書
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          本人の氏名・住所・扶養親族の情報
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          全員必須
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          基礎控除申告書 兼 配偶者控除等申告書 兼
                          所得金額調整控除申告書
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          本人の合計所得見積額、配偶者の所得
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          全員必須
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          保険料控除申告書
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          生命保険・地震保険・iDeCoの掛金額
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          保険加入者・iDeCo加入者
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          前職の源泉徴収票
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          前の勤務先での給与・源泉徴収額
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          年の途中で転職した人
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <p className="font-semibold text-amber-800 mb-1">
                    注意ポイント
                  </p>
                  <p className="text-slate-700 text-sm">
                    保険会社から届く「控除証明書」は必ず添付が必要です。10月頃から届き始めるので、届いたら年末調整まで大切に保管しておきましょう。紛失した場合は保険会社に再発行を依頼できます。
                  </p>
                </div>
              </div>
            </section>

            {/* 4. 年末調整で受けられる控除 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kojo"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 年末調整で受けられる控除
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  パート・アルバイトでも適用できる主な控除は以下のとおりです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          控除の種類
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          控除額
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          内容
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          基礎控除
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          48万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          合計所得2,400万円以下の全員に適用
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          給与所得控除
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          最低55万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          給与収入に対して自動的に適用
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          配偶者控除
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          最大38万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          配偶者の合計所得48万円以下の場合
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          扶養控除
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          38万〜63万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          16歳以上の扶養親族がいる場合
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">
                          生命保険料控除
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          最大12万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          生命保険・介護医療保険・個人年金に加入
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">
                          社会保険料控除
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          支払額全額
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          国民健康保険・国民年金を自分で支払った場合
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p className="font-semibold text-emerald-800 mb-1">
                    ポイント
                  </p>
                  <p className="text-slate-700 text-sm">
                    基礎控除48万円 +
                    給与所得控除55万円で、年収103万円までは所得税がかかりません。年末調整では、毎月天引きされていた所得税が還付されます。
                  </p>
                </div>
              </div>
            </section>

            {/* 5. 還付金の目安 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kanpu"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 還付金の目安
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  パート・アルバイトの年収別に、年末調整で戻ってくる還付金の目安をまとめました。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          年収
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          源泉徴収される所得税（概算）
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          年末調整後の所得税
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          還付金の目安
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-medium">
                          100万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          約8,000〜15,000円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          0円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-emerald-600 font-semibold">
                          約8,000〜15,000円（全額還付）
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-medium">
                          120万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          約15,000〜25,000円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          約8,500円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-emerald-600 font-semibold">
                          約7,000〜17,000円
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-medium">
                          150万円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          約25,000〜40,000円
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          約23,500円
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-emerald-600 font-semibold">
                          約2,000〜17,000円
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  ※
                  源泉徴収額は月額の給与額や扶養控除等申告書の提出状況によって変動します。上記は扶養控除等申告書を提出済み（甲欄適用）の場合の概算です。
                </p>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p className="font-semibold text-emerald-800 mb-1">
                    年収103万円以下なら全額還付
                  </p>
                  <p className="text-slate-700 text-sm">
                    年収103万円以下の場合、年間の所得税は0円です。毎月の給与から天引きされていた所得税は、年末調整で全額還付されます。
                  </p>
                </div>
              </div>
            </section>

            {/* 6. 掛け持ちバイトの場合の確定申告 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kakemochi"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 掛け持ちバイトの場合の確定申告
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  バイトを掛け持ちしている場合、扶養控除等申告書を提出できるのは<strong>メインの勤務先1か所だけ</strong>です。サブの勤務先では年末調整ができないため、自分で確定申告が必要です。
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  年末調整できないケース
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>
                    2か所以上で働いていて、サブの勤務先からの給与がある
                  </li>
                  <li>
                    年の途中で退職し、12月31日時点でどこにも勤めていない
                  </li>
                  <li>
                    扶養控除等申告書をどの勤務先にも提出していない（乙欄適用）
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-4">
                  確定申告の方法
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm">
                  <li>
                    すべての勤務先から<strong>源泉徴収票</strong>を受け取る
                  </li>
                  <li>
                    翌年2月16日〜3月15日の間に税務署またはe-Taxで確定申告書を提出
                  </li>
                  <li>
                    複数の給与を合算し、正しい所得税額を計算して精算
                  </li>
                </ol>

                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 mt-2">
                  <p className="font-semibold text-amber-800 mb-1">
                    確定申告しないとどうなる？
                  </p>
                  <p className="text-slate-700 text-sm">
                    サブの勤務先では所得税が高めに天引きされている（乙欄適用で3.063%〜）ため、確定申告しないと<strong>払いすぎた税金が戻ってきません</strong>。合計年収が103万円以下なら全額還付の可能性もあるので、忘れずに申告しましょう。
                  </p>
                </div>
              </div>
            </section>

            {/* 7. 103万円の壁との関係 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="103man"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                7. 103万円の壁との関係
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  「103万円の壁」とは、年収103万円を超えると所得税がかかり始めるラインのことです。年末調整では、この壁がどう関係するのでしょうか。
                </p>

                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  年末調整で所得税が0円になる仕組み
                </h3>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="space-y-2 text-sm text-slate-700">
                    <p>
                      <strong>年収103万円</strong>の場合の計算：
                    </p>
                    <p className="pl-4">
                      給与収入 103万円 - 給与所得控除 55万円 = 給与所得 48万円
                    </p>
                    <p className="pl-4">
                      給与所得 48万円 - 基礎控除 48万円 = 課税所得{" "}
                      <strong>0円</strong>
                    </p>
                    <p className="pl-4">
                      → 所得税は <strong>0円</strong>
                    </p>
                  </div>
                </div>
                <p>
                  毎月の給与から天引きされている所得税は概算のため、年末調整で正確な計算をすると「課税所得0円=所得税0円」となり、天引き分が全額還付されます。
                </p>

                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p className="font-semibold text-emerald-800 mb-1">
                    扶養にも影響
                  </p>
                  <p className="text-slate-700 text-sm">
                    年収103万円以下なら、配偶者や親の扶養に入ったまま（扶養控除の対象）でいられます。103万円を超えると扶養から外れ、扶養者の税金が増える可能性があります。ただし、150万円までは配偶者特別控除が満額適用されます。
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
                8. よくある質問
              </h2>
              <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. 年末調整の書類を出し忘れたらどうなる？
                  </h3>
                  <p>
                    年末調整の書類を出し忘れた場合、勤務先で年末調整が行われません。その場合は翌年に<strong>自分で確定申告</strong>をすれば、同様に税金の精算ができます。確定申告は翌年の2月16日〜3月15日に行えますが、還付申告であれば1月1日から5年間申告可能です。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q.
                    短期バイトや単発バイトでも年末調整は必要？
                  </h3>
                  <p>
                    短期・単発バイトでも、扶養控除等申告書を提出していて12月31日時点で在籍していれば年末調整の対象です。ただし、日雇いバイトで「丙欄」が適用されている場合は対象外です。短期間で辞めた場合は、源泉徴収票をもらって<strong>確定申告</strong>で精算しましょう。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q. 学生アルバイトでも年末調整は必要？
                  </h3>
                  <p>
                    学生でも年末調整は必要です。さらに、学生には<strong>勤労学生控除</strong>（27万円）が適用でき、年収130万円まで所得税が非課税になります。ただし、103万円を超えると親の扶養控除から外れる点に注意が必要です。勤労学生控除を受けるには、扶養控除等申告書の該当欄に記入するか、確定申告で申請します。
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
                    href="https://www.nta.go.jp/users/gensen/nencho/index.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    年末調整の仕方
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
                <li>
                  <a
                    href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    給与所得者で確定申告が必要な人
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                手取り額を計算してみる
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                所得税・住民税・社会保険料を含めた手取り額を即座に計算できます。
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
                    103万円の壁をわかりやすく解説
                  </p>
                </Link>
                <Link
                  href="/guide/nenmatsu-chousei"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    年末調整の仕組みと書き方
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
                  href="/guide/fuyou-nai-hatarakikata"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    扶養内で働く方法
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
