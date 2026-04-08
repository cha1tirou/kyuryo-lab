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
    "産休・育休の手当と給付金まとめ | 出産手当金・育児休業給付金の計算方法 | 給料ラボ",
  description:
    "産休・育休でもらえる手当と給付金を徹底解説。出産手当金（標準報酬日額×2/3）、出産育児一時金50万円、育児休業給付金（67%→50%）の計算方法、社会保険料免除、月給別シミュレーションまで網羅。",
  keywords:
    "産休,育休,出産手当金,育児休業給付金,出産育児一時金,産前産後休業,パパ育休,社会保険料免除",
  alternates: { canonical: "/guide/sankyuu-ikukyuu-kyuufu" },
  openGraph: {
    title: "産休・育休の手当と給付金まとめ | 出産手当金・育児休業給付金の計算方法",
    description:
      "産休・育休でもらえる手当と給付金を徹底解説。計算方法・申請手続き・月給別シミュレーションまで網羅。",
    type: "article",
  },
};

export default function SankyuuIkukyuuKyuufuPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="産休・育休の手当と給付金まとめ | 出産手当金・育児休業給付金の計算方法"
        description="産休・育休でもらえる手当と給付金を徹底解説。出産手当金、出産育児一時金、育児休業給付金の計算方法、社会保険料免除、月給別シミュレーションまで網羅。"
        url="https://kyuryo-lab.com/guide/sankyuu-ikukyuu-kyuufu"
        datePublished="2026-04-08"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "産休・育休の手当と給付金",
            url: "https://kyuryo-lab.com/guide/sankyuu-ikukyuu-kyuufu",
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
                  name: "産休・育休の手当と給付金",
                  href: "/guide/sankyuu-ikukyuu-kyuufu",
                },
              ]}
            />
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">
                給与ガイド
              </Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              産休・育休の手当と給付金まとめ | 計算方法・申請手続きを徹底解説
            </h1>
            <p className="text-slate-500">
              産休・育休中は給料が出ないケースが多いですが、健康保険や雇用保険から各種手当・給付金が支給されます。出産手当金、出産育児一時金、育児休業給付金の計算方法から申請手続き、社会保険料の免除制度まで、知っておくべき制度を網羅的に解説します。
            </p>
          </header>

          <div className="space-y-8">
            {/* 目次 */}
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#sankyuu-gaiyou" className="hover:underline">
                    産休（産前産後休業）の概要
                  </a>
                </li>
                <li>
                  <a href="#shussan-teatekin" className="hover:underline">
                    出産手当金の計算方法と申請
                  </a>
                </li>
                <li>
                  <a href="#shussan-ikuji-ichijikin" className="hover:underline">
                    出産育児一時金（50万円）
                  </a>
                </li>
                <li>
                  <a href="#ikukyuu-gaiyou" className="hover:underline">
                    育休（育児休業）の概要
                  </a>
                </li>
                <li>
                  <a href="#ikukyuu-kyuufukin" className="hover:underline">
                    育児休業給付金の計算方法
                  </a>
                </li>
                <li>
                  <a href="#shakai-hoken-menjo" className="hover:underline">
                    社会保険料の免除制度
                  </a>
                </li>
                <li>
                  <a href="#simulation" className="hover:underline">
                    月給別シミュレーション表
                  </a>
                </li>
                <li>
                  <a href="#shinsei-nagare" className="hover:underline">
                    申請手続きの流れ
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    よくある質問
                  </a>
                </li>
              </ol>
            </nav>

            {/* 1. 産休の概要 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="sankyuu-gaiyou"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. 産休（産前産後休業）の概要
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  産休は<strong>労働基準法第65条</strong>で定められた制度で、出産前後の女性労働者が取得できる休業です。正社員・パート・派遣など<strong>雇用形態を問わず</strong>すべての女性労働者が対象です。
                </p>

                <h3 className="font-semibold text-slate-700">産休の期間</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          区分
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          期間
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          備考
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          産前休業
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          出産予定日の<strong>6週間前</strong>から
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          本人の請求が必要（任意取得）。多胎妊娠は14週間前から
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          産後休業
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          出産翌日から<strong>8週間</strong>
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          強制休業（6週間経過後は医師の許可があれば就業可）
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p>
                    <strong>ポイント</strong>：産前休業は本人が希望すれば出産直前まで働くことができますが、産後休業の最初の6週間は<strong>法律上働くことが禁止</strong>されています。出産日当日は「産前休業」に含まれます。
                  </p>
                </div>

                <h3 className="font-semibold text-slate-700">対象者</h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>すべての女性労働者（正社員・契約社員・パート・派遣）</li>
                  <li>勤続年数の要件なし</li>
                  <li>入社直後でも取得可能</li>
                </ul>

                <p>
                  産休中の給料については法律上の支払い義務はなく、多くの会社では<strong>無給</strong>となります。その代わりに健康保険から「出産手当金」が支給されます。
                </p>
              </div>
            </section>

            {/* 2. 出産手当金 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="shussan-teatekin"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 出産手当金の計算方法と申請
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  出産手当金は、産休中に給与が支払われない場合に<strong>健康保険</strong>から支給される手当です。会社員（健康保険の被保険者）が対象で、国民健康保険の加入者は対象外です。
                </p>

                <h3 className="font-semibold text-slate-700">計算方法</h3>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="font-semibold text-slate-700 mb-2">出産手当金の計算式</p>
                  <p>
                    1日あたりの支給額 = <strong>支給開始日以前12か月間の標準報酬月額の平均 &divide; 30 &times; 2/3</strong>
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    ※ 標準報酬月額とは、健康保険料の計算に使われる報酬の等級区分です。おおむね月給（交通費含む）に近い金額です。
                  </p>
                </div>

                <h3 className="font-semibold text-slate-700">支給期間</h3>
                <p>
                  出産日（出産が予定日より後の場合は出産予定日）以前42日（多胎妊娠は98日）から出産日後56日までの期間で、仕事を休んだ日数分が支給されます。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>単胎の場合：最大<strong>98日間</strong>（産前42日 + 産後56日）</li>
                  <li>多胎（双子以上）の場合：最大<strong>154日間</strong>（産前98日 + 産後56日）</li>
                  <li>出産日が予定日より遅れた場合、遅れた日数分も支給対象</li>
                </ul>

                <h3 className="font-semibold text-slate-700">計算例</h3>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>月給30万円（標準報酬月額30万円）の場合</strong>
                  </p>
                  <p className="mt-1">1日あたり = 300,000 &divide; 30 &times; 2/3 = <strong>6,667円</strong></p>
                  <p>98日間の合計 = 6,667 &times; 98 = <strong>約65.3万円</strong></p>
                </div>

                <h3 className="font-semibold text-slate-700">申請方法</h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>「健康保険出産手当金支給申請書」を加入している健康保険組合（または協会けんぽ）に提出</li>
                  <li>医師または助産師の証明欄への記入が必要</li>
                  <li>産前分・産後分をまとめて産後に申請するのが一般的</li>
                  <li>申請期限：出産手当金の支給対象日ごとにその翌日から<strong>2年</strong>（時効）</li>
                </ul>

                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <p>
                    <strong>注意</strong>：産休中に会社から給与が支払われる場合、出産手当金の日額より少ない金額であれば差額が支給されますが、日額以上の給与がある場合は支給されません。
                  </p>
                </div>
              </div>
            </section>

            {/* 3. 出産育児一時金 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="shussan-ikuji-ichijikin"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 出産育児一時金（50万円）
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  出産育児一時金は、出産にかかる費用の負担を軽減するため、健康保険または国民健康保険から支給される一時金です。2023年4月の改定により、支給額が<strong>42万円から50万円に引き上げ</strong>られました。
                </p>

                <h3 className="font-semibold text-slate-700">支給額と対象</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          項目
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          内容
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">支給額</td>
                        <td className="border border-slate-200 px-4 py-2">
                          子ども1人あたり<strong>50万円</strong>（産科医療補償制度加算対象外の場合は48.8万円）
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">対象者</td>
                        <td className="border border-slate-200 px-4 py-2">
                          健康保険または国民健康保険の被保険者・被扶養者
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">多胎出産</td>
                        <td className="border border-slate-200 px-4 py-2">
                          子どもの人数分が支給（双子なら100万円）
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">妊娠週数</td>
                        <td className="border border-slate-200 px-4 py-2">
                          妊娠85日（4か月）以上であれば、流産・死産の場合も支給対象
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-700">直接支払制度</h3>
                <p>
                  「直接支払制度」を利用すると、出産育児一時金が<strong>健康保険から医療機関に直接支払われる</strong>ため、窓口での立て替え負担が不要になります。出産費用が50万円未満の場合は、差額を後から請求できます。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>ほとんどの医療機関が直接支払制度に対応</li>
                  <li>入院時に医療機関と合意文書を取り交わすだけで手続き完了</li>
                  <li>出産費用が50万円を超える場合は差額を自己負担</li>
                  <li>50万円未満の場合は差額を健康保険に申請して受け取り</li>
                </ul>

                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p>
                    <strong>ポイント</strong>：出産育児一時金は健康保険・国民健康保険どちらの加入者でも受け取れます。専業主婦で夫の扶養に入っている場合は「家族出産育児一時金」として夫の健康保険から支給されます。
                  </p>
                </div>
              </div>
            </section>

            {/* 4. 育休の概要 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="ikukyuu-gaiyou"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 育休（育児休業）の概要
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  育児休業は<strong>育児・介護休業法</strong>に基づく制度で、子どもが<strong>原則1歳になるまで</strong>取得できる休業です。男女ともに取得可能で、2022年の法改正により「産後パパ育休」制度も創設されました。
                </p>

                <h3 className="font-semibold text-slate-700">育休の期間</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          種類
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          期間
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          備考
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          通常の育児休業
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          子どもが<strong>1歳になるまで</strong>
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          2回に分割して取得可能
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          延長（1歳6か月まで）
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          1歳〜<strong>1歳6か月</strong>
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          保育所に入れない等の事由が必要
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          再延長（2歳まで）
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          1歳6か月〜<strong>2歳</strong>
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          引き続き保育所に入れない場合
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          産後パパ育休（出生時育児休業）
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          出生後<strong>8週間以内に最大4週間</strong>
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          2回に分割可能。労使協定があれば休業中の就業も可
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-700">対象者</h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>原則としてすべての労働者（男女問わず）</li>
                  <li>有期雇用の場合：子どもが1歳6か月になるまでに契約が満了することが明らかでないこと</li>
                  <li>日々雇用される者は対象外</li>
                  <li>労使協定で入社1年未満の者等を対象外にできる</li>
                </ul>

                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p>
                    <strong>2022年改正のポイント</strong>：育児休業は<strong>2回まで分割取得</strong>が可能になりました。また「産後パパ育休」は通常の育休とは別に取得でき、男性は最大4回に分けて育休を取ることができます。
                  </p>
                </div>
              </div>
            </section>

            {/* 5. 育児休業給付金 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="ikukyuu-kyuufukin"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 育児休業給付金の計算方法
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  育児休業給付金は、育休中に<strong>雇用保険</strong>から支給される給付金です。雇用保険に加入している労働者が対象で、育休開始前2年間に被保険者期間が12か月以上あることが要件です。
                </p>

                <h3 className="font-semibold text-slate-700">支給率</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          期間
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          支給率
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          備考
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          最初の180日間
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          <strong>67%</strong>
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          休業開始時賃金日額 &times; 支給日数 &times; 67%
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">
                          181日目以降
                        </td>
                        <td className="border border-slate-200 px-4 py-2 text-right">
                          <strong>50%</strong>
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          休業開始時賃金日額 &times; 支給日数 &times; 50%
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-700">計算方法</h3>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="font-semibold text-slate-700 mb-2">育児休業給付金の計算式</p>
                  <p>
                    休業開始時賃金日額 = <strong>育休開始前6か月間の賃金合計 &divide; 180</strong>
                  </p>
                  <p className="mt-1">
                    1支給単位期間（30日）あたりの給付額 = 賃金日額 &times; 30 &times; 67%（または50%）
                  </p>
                </div>

                <h3 className="font-semibold text-slate-700">上限額と下限額（2026年度）</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          区分
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          賃金日額上限
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          月額上限（67%）
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">
                          月額上限（50%）
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">上限</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">15,430円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">約31.0万円</td>
                        <td className="border border-slate-200 px-4 py-2 text-right">約23.1万円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 上限額は毎年8月に改定されます。最新の金額はハローワークの公式情報を確認してください。
                </p>

                <h3 className="font-semibold text-slate-700">計算例</h3>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>月給30万円の場合</strong>
                  </p>
                  <p className="mt-1">賃金日額 = 300,000 &times; 6 &divide; 180 = <strong>10,000円</strong></p>
                  <p>最初の180日：10,000 &times; 30 &times; 67% = <strong>月額201,000円</strong></p>
                  <p>181日目以降：10,000 &times; 30 &times; 50% = <strong>月額150,000円</strong></p>
                </div>

                <h3 className="font-semibold text-slate-700">受給要件</h3>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>雇用保険に加入していること</li>
                  <li>育休開始前2年間に、賃金支払基礎日数が11日以上の月が12か月以上あること</li>
                  <li>育休期間中の就業日数が各支給単位期間ごとに10日以下（または80時間以下）であること</li>
                  <li>育休期間中に支払われた賃金が、休業開始時賃金月額の80%未満であること</li>
                </ul>

                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <p>
                    <strong>注意</strong>：育児休業給付金は非課税です。所得税・住民税はかかりません。また社会保険料も免除されるため、手取りベースでは<strong>実質的に休業前の約80%</strong>の収入が確保されます。
                  </p>
                </div>
              </div>
            </section>

            {/* 6. 社会保険料の免除 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="shakai-hoken-menjo"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 社会保険料の免除制度
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  産休・育休中は申請により<strong>健康保険料と厚生年金保険料が免除</strong>されます。免除期間中も被保険者資格は継続し、将来の年金額にも影響しません（保険料を納付したものとして扱われます）。
                </p>

                <h3 className="font-semibold text-slate-700">免除の対象と条件</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          対象
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          免除される保険料
                        </th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">
                          条件
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">産休中</td>
                        <td className="border border-slate-200 px-4 py-2">
                          健康保険料 + 厚生年金保険料（本人負担分・会社負担分とも）
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          事業主が年金事務所に届出
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2 font-semibold">育休中（月額保険料）</td>
                        <td className="border border-slate-200 px-4 py-2">
                          同上
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          月末時点で育休中、または同月内に14日以上の育休取得
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2 font-semibold">育休中（賞与保険料）</td>
                        <td className="border border-slate-200 px-4 py-2">
                          賞与にかかる保険料
                        </td>
                        <td className="border border-slate-200 px-4 py-2">
                          連続して1か月を超える育休を取得している場合
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-700">免除額のイメージ</h3>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p>
                    <strong>月給30万円の場合の月額免除額</strong>
                  </p>
                  <p className="mt-1">健康保険料（本人分）：約14,970円</p>
                  <p>厚生年金保険料（本人分）：約27,450円</p>
                  <p className="font-semibold mt-1">合計：約<strong>42,420円/月</strong>が免除</p>
                  <p className="mt-1 text-xs text-slate-400">
                    ※ 会社負担分も同額免除されるため、会社側のメリットもあります。
                  </p>
                </div>

                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <p>
                    <strong>ポイント</strong>：2022年10月の改正により、育休の社会保険料免除の条件が見直されました。短期間の育休でも<strong>月内に14日以上</strong>取得すればその月の保険料が免除されます。ただし賞与の保険料免除には<strong>1か月超の育休</strong>が必要です。
                  </p>
                </div>

                <p>
                  なお、雇用保険料は給与が支払われなければそもそも発生しないため、実質的に負担はありません。
                </p>
              </div>
            </section>

            {/* 7. 月給別シミュレーション */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="simulation"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                7. 月給別シミュレーション表
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  月給ごとの出産手当金・育児休業給付金の目安を一覧にまとめました。実際の金額は標準報酬月額や賃金日額により異なります。
                </p>

                <h3 className="font-semibold text-slate-700">出産手当金（98日間の合計）</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">月給</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">日額</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">98日間合計</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { salary: "25万円", daily: "5,556円", total: "約54.4万円" },
                        { salary: "30万円", daily: "6,667円", total: "約65.3万円" },
                        { salary: "35万円", daily: "7,778円", total: "約76.2万円" },
                        { salary: "40万円", daily: "8,889円", total: "約87.1万円" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                          <td className="border border-slate-200 px-4 py-2 font-semibold">{row.salary}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right">{row.daily}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right font-semibold">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-700 mt-4">育児休業給付金（月額）</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">月給</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">最初の180日（67%）</th>
                        <th className="border border-slate-200 px-4 py-2 text-right font-semibold">181日目〜（50%）</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { salary: "25万円", first: "167,500円", after: "125,000円" },
                        { salary: "30万円", first: "201,000円", after: "150,000円" },
                        { salary: "35万円", first: "234,500円", after: "175,000円" },
                        { salary: "40万円", first: "268,000円", after: "200,000円" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                          <td className="border border-slate-200 px-4 py-2 font-semibold">{row.salary}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right">{row.first}</td>
                          <td className="border border-slate-200 px-4 py-2 text-right">{row.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="font-semibold text-slate-700 mt-4">
                  産休・育休を通じた手当の合計（月給30万円の場合）
                </h3>
                <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr>
                          <th className="border border-emerald-200 px-4 py-2 text-left font-semibold bg-emerald-100">項目</th>
                          <th className="border border-emerald-200 px-4 py-2 text-right font-semibold bg-emerald-100">金額</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-emerald-200 px-4 py-2">出産育児一時金</td>
                          <td className="border border-emerald-200 px-4 py-2 text-right">500,000円</td>
                        </tr>
                        <tr>
                          <td className="border border-emerald-200 px-4 py-2">出産手当金（98日間）</td>
                          <td className="border border-emerald-200 px-4 py-2 text-right">約653,000円</td>
                        </tr>
                        <tr>
                          <td className="border border-emerald-200 px-4 py-2">育児休業給付金（180日 &times; 67%）</td>
                          <td className="border border-emerald-200 px-4 py-2 text-right">約1,206,000円</td>
                        </tr>
                        <tr>
                          <td className="border border-emerald-200 px-4 py-2">育児休業給付金（残り約4か月 &times; 50%）</td>
                          <td className="border border-emerald-200 px-4 py-2 text-right">約600,000円</td>
                        </tr>
                        <tr>
                          <td className="border border-emerald-200 px-4 py-2">社会保険料免除額（約14か月分）</td>
                          <td className="border border-emerald-200 px-4 py-2 text-right">約594,000円</td>
                        </tr>
                        <tr className="bg-emerald-100">
                          <td className="border border-emerald-200 px-4 py-2 font-bold">合計</td>
                          <td className="border border-emerald-200 px-4 py-2 text-right font-bold text-emerald-700">約355万円</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    ※ 育休を1歳まで取得し、産休・育休を通じて給与が支払われない前提での概算です。
                  </p>
                </div>
              </div>
            </section>

            {/* 8. 申請手続きの流れ */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="shinsei-nagare"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                8. 申請手続きの流れ
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  産休・育休に関する手続きは複数あり、それぞれ申請先・タイミングが異なります。以下のタイムラインを参考に、漏れなく手続きを進めましょう。
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                        妊娠判明
                      </span>
                    </div>
                    <div className="flex-1 border-l-2 border-blue-200 pl-4 pb-4">
                      <p className="font-semibold text-slate-700">会社への報告</p>
                      <p>上司・人事部門に妊娠を報告。産休・育休の取得希望を伝える。母性健康管理指導事項連絡カードの活用も検討。</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                        産前6週前
                      </span>
                    </div>
                    <div className="flex-1 border-l-2 border-blue-200 pl-4 pb-4">
                      <p className="font-semibold text-slate-700">産前休業の開始</p>
                      <p>会社に産前休業の届出を提出。出産予定日の6週間前（多胎は14週間前）から取得可能。</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full">
                        出産
                      </span>
                    </div>
                    <div className="flex-1 border-l-2 border-emerald-200 pl-4 pb-4">
                      <p className="font-semibold text-slate-700">出産育児一時金の手続き</p>
                      <p>直接支払制度を利用する場合は入院時に医療機関で合意文書に署名。差額がある場合は後日請求。</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                        産後8週
                      </span>
                    </div>
                    <div className="flex-1 border-l-2 border-blue-200 pl-4 pb-4">
                      <p className="font-semibold text-slate-700">出産手当金の申請 / 育休の開始</p>
                      <p>産後休業終了後に出産手当金の申請書を健康保険に提出（産前・産後まとめて）。同時に育児休業を開始。</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                        育休開始後
                      </span>
                    </div>
                    <div className="flex-1 border-l-2 border-blue-200 pl-4 pb-4">
                      <p className="font-semibold text-slate-700">育児休業給付金の初回申請</p>
                      <p>事業主がハローワークに「育児休業給付受給資格確認票・（初回）育児休業給付金支給申請書」を提出。通常は会社が手続きを代行。</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                        2か月ごと
                      </span>
                    </div>
                    <div className="flex-1 border-l-2 border-blue-200 pl-4 pb-4">
                      <p className="font-semibold text-slate-700">育児休業給付金の追加申請</p>
                      <p>2か月に1回、支給申請書をハローワークに提出。これも通常は会社が代行してくれるが、自分で確認することが大切。</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-24 text-right">
                      <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full">
                        1歳前後
                      </span>
                    </div>
                    <div className="flex-1 pl-4">
                      <p className="font-semibold text-slate-700">復職または育休延長</p>
                      <p>保育所に入所できた場合は復職。入所できない場合は延長申請（不承諾通知書が必要）。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
                  <p>
                    <strong>注意</strong>：育児休業給付金の申請には期限があります。各支給対象期間の末日の翌日から起算して<strong>2か月以内</strong>に申請しないと、給付金を受け取れなくなる可能性があります。会社任せにせず、自分でもスケジュールを把握しておきましょう。
                  </p>
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
                    Q1. パート・アルバイトでも産休・育休は取得できますか？
                  </h3>
                  <p>
                    <strong>産休はすべての女性労働者が取得できます</strong>。雇用形態や勤続年数の制限はありません。育休は、有期雇用の場合「子どもが1歳6か月になるまでに契約が満了することが明らかでないこと」が要件です。ただし、雇用保険に加入していない場合は育児休業給付金の対象外となります。出産手当金は健康保険の被保険者（会社の社会保険に加入）であることが条件で、国民健康保険では支給されません。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q2. 育児休業給付金と出産手当金は同時にもらえますか？
                  </h3>
                  <p>
                    <strong>同時に受け取ることはできません</strong>。出産手当金は産休期間中（産前42日〜産後56日）に支給され、育児休業給付金は育休期間中（産後休業終了後〜）に支給されます。期間が重複しない設計のため、切り替わりのタイミングで手続きが必要です。なお、出産育児一時金（50万円）はこれらとは別枠で受け取れます。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    Q3. 男性も育児休業給付金を受け取れますか？
                  </h3>
                  <p>
                    <strong>受け取れます</strong>。育児休業給付金は男女問わず、雇用保険の加入要件を満たしていれば支給対象です。男性の場合は出産日（または出産予定日）から育休を取得でき、「産後パパ育休（出生時育児休業）」と合わせて最大4回に分割して取得することも可能です。支給率・計算方法は女性と同じです。
                  </p>
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
                    href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000130583.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    厚生労働省「育児休業制度について」
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kyoukaikenpo.or.jp/g6/cat620/r311/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    全国健康保険協会「出産手当金について」
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.hellowork.mhlw.go.jp/insurance/insurance_continue.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ハローワーク「育児休業給付について」
                  </a>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                手取り額をシミュレーションしてみる
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                産休・育休前後の手取り額の変化を確認できます。月収から社会保険料・税金を差し引いた手取り額を即計算。
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
                    社会保険料の計算方法ガイド
                  </p>
                </Link>
                <Link
                  href="/guide/tedori-shikumi"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    手取りの仕組みを解説
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
