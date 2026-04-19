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
  title: "副業の税金と確定申告 | 20万円ルール・計算方法を解説 | 給料ラボ",
  description:
    "副業の税金はいくら？確定申告が必要になる20万円ルール、所得税・住民税の計算方法、経費の考え方、会社にバレない方法まで、副業の税金についてわかりやすく解説します。",
  keywords: "副業,税金,確定申告,20万円,住民税,副業バレ",
  alternates: { canonical: "/guide/fukugyou-zeikin" },
  openGraph: {
    title: "副業の税金と確定申告 | 20万円ルール・計算方法を解説",
    description: "副業の確定申告が必要になる条件や税金の計算方法を具体例つきで解説。",
    type: "article",
  },
};

export default function FukugyouZeikinPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="副業の税金と確定申告 | 20万円ルール・計算方法を解説"
        description="副業の確定申告が必要になる条件、所得税・住民税の計算方法、経費や会社バレ対策まで網羅的に解説。"
        url="https://kyuryo-lab.com/guide/fukugyou-zeikin"
        datePublished="2026-04-05"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "副業の税金と確定申告", url: "https://kyuryo-lab.com/guide/fukugyou-zeikin" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", url: "/" },
          { name: "給与ガイド", url: "/guide" },
          { name: "副業の税金と確定申告", url: "/guide/fukugyou-zeikin" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              副業の税金と確定申告 | 20万円ルール・計算方法を解説
            </h1>
            <p className="text-slate-500">
              副業で収入を得たら、税金はどうなる？確定申告が必要になる条件から、所得税・住民税の計算方法、経費の考え方、会社にバレない方法まで、副業の税金について網羅的に解説します。
            </p>
          </header>

          <div className="space-y-8">
            {/* TOC */}
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#shotoku-shurui" className="hover:underline">副業の所得の種類（給与所得・事業所得・雑所得）</a></li>
                <li><a href="#kakutei-shinkoku-jouken" className="hover:underline">副業で確定申告が必要になる条件</a></li>
                <li><a href="#zeikin-keisan" className="hover:underline">副業の所得税・住民税の計算方法</a></li>
                <li><a href="#kakutei-shinkoku-tejun" className="hover:underline">確定申告の手順</a></li>
                <li><a href="#barenai-houhou" className="hover:underline">副業が会社にバレない方法</a></li>
                <li><a href="#keihi-ichiran" className="hover:underline">副業の経費として認められるもの</a></li>
                <li><a href="#simulation" className="hover:underline">副業の年収別シミュレーション</a></li>
              </ol>
            </nav>

            {/* Section 1 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shotoku-shurui">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 副業の所得の種類（給与所得・事業所得・雑所得）</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  副業で得た収入は、その性質によって<strong>所得の種類</strong>が異なります。所得の種類によって確定申告の方法や経費の扱いが変わるため、まず自分の副業がどれに該当するか把握することが重要です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">所得の種類</th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">該当する副業の例</th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">特徴</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">給与所得</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">アルバイト・パート</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">給与所得控除が適用。源泉徴収あり</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">事業所得</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">フリーランス・個人事業（開業届あり）</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">青色申告で最大65万円控除。損益通算可能</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">雑所得</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">メルカリ転売・クラウドソーシング・アフィリエイト</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">青色申告不可。損益通算不可</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>給与所得</strong>は、アルバイトなど雇用されて働く場合に該当します。給与として受け取るため、給与所得控除が自動的に適用され、勤務先で源泉徴収が行われます。
                </p>
                <p>
                  <strong>事業所得</strong>は、継続的に事業として行っている場合に該当します。開業届を出して青色申告承認申請をすれば、最大65万円の青色申告特別控除を受けられるほか、赤字が出た場合に本業の給与所得と<strong>損益通算</strong>（相殺）できるメリットがあります。
                </p>
                <p>
                  <strong>雑所得</strong>は、上記のいずれにも当てはまらない副業収入です。2022年の所得税基本通達改正により、年間収入300万円以下で帳簿を付けていない副業は原則として雑所得に分類されるようになりました。雑所得は損益通算ができず、青色申告も使えない点に注意が必要です。
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kakutei-shinkoku-jouken">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 副業で確定申告が必要になる条件</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  会社員が副業で確定申告が必要になる基本的なルールは、<strong>副業の所得が年間20万円を超えた場合</strong>です。これがいわゆる「20万円ルール」です。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <p className="font-semibold text-slate-700">確定申告が必要なケース</p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>副業の<strong>所得</strong>（収入 &minus; 経費）が年間20万円を超える場合</li>
                    <li>副業先で給与をもらっている場合（2か所以上から給与を受けている場合）</li>
                    <li>年収2,000万円を超える場合（副業の有無に関わらず）</li>
                    <li>医療費控除やふるさと納税（6自治体超）の申告をする場合</li>
                  </ul>
                </div>
                <p>
                  ここで重要なのは、20万円ルールで判定するのは「<strong>収入</strong>」ではなく「<strong>所得</strong>」（収入から経費を引いた金額）だという点です。たとえば副業の収入が30万円でも、経費が15万円あれば所得は15万円となり、確定申告は不要です。
                </p>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <p className="font-semibold text-amber-800 mb-1">住民税の申告は別ルール</p>
                  <p className="text-amber-700">
                    20万円ルールはあくまで<strong>所得税（国税）</strong>の話です。<strong>住民税（地方税）</strong>には20万円ルールの適用がなく、副業所得が1円でも発生したら住民税の申告が必要です。確定申告をすれば住民税の申告は不要ですが、確定申告をしない場合はお住まいの市区町村に住民税の申告を別途行う必要があります。
                  </p>
                </div>
                <p>
                  なお、副業がアルバイトなどの「給与所得」の場合は、20万円ルールの判定基準が異なります。副業の給与収入（額面）が年間20万円を超えるかどうかで判断します。給与所得の場合は経費を引くことはできません。
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="zeikin-keisan">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 副業の所得税・住民税の計算方法</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  副業の税金は、本業の所得と<strong>合算</strong>して計算されます。日本の所得税は累進課税なので、本業の所得が高い人ほど、副業の所得にも高い税率が適用される点に注意が必要です。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-1 font-mono text-sm">
                  <p>1. 本業の給与所得 + 副業の所得 = 合計所得</p>
                  <p>2. 合計所得 &minus; 各種所得控除 = 課税所得</p>
                  <p>3. 課税所得 &times; 所得税率 &minus; 控除額 = 所得税</p>
                  <p>4. 課税所得 &times; 10% = 住民税（一律）</p>
                </div>
                <p>
                  <strong>所得税の累進税率</strong>は以下のとおりです。副業で所得が増えると、増えた分に対して適用される税率が上がる可能性があります。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">課税所得</th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">税率</th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">控除額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">195万円以下</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">5%</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">0円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">195万円超〜330万円以下</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">10%</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">97,500円</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">330万円超〜695万円以下</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">20%</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">427,500円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">695万円超〜900万円以下</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">23%</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">636,000円</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">900万円超〜1,800万円以下</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">33%</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">1,536,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  たとえば本業の課税所得が300万円（税率10%）の人が、副業で50万円の所得を得ると、合計課税所得は350万円になります。330万円を超えた20万円分には20%の税率が適用されるため、副業50万円にかかる所得税は「30万 &times; 10% + 20万 &times; 20% = 7万円」となります。
                </p>
                <p>
                  <strong>住民税</strong>は所得に関わらず一律10%（都道府県民税4% + 市区町村民税6%）です。副業所得50万円の場合、住民税は約5万円増えます。復興特別所得税（所得税額の2.1%）も加わるため、実質的な税負担は所得税 + 住民税 + 復興税の合計となります。
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kakutei-shinkoku-tejun">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 確定申告の手順</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  副業の確定申告は、毎年<strong>2月16日〜3月15日</strong>の期間に行います。近年はe-Taxを利用したオンライン申告が主流で、自宅から完結できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <p className="font-semibold text-slate-700">必要書類チェックリスト</p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li><strong>源泉徴収票</strong>：本業の勤務先から12月〜1月に交付</li>
                    <li><strong>支払調書</strong>：副業先から発行（フリーランスの場合）</li>
                    <li><strong>経費の領収書・レシート</strong>：1年分を整理して保管</li>
                    <li><strong>マイナンバーカード</strong>：e-Tax申告に必要</li>
                    <li><strong>銀行口座情報</strong>：還付金の振込先</li>
                    <li><strong>収支内訳書</strong>：事業所得・雑所得の場合に作成</li>
                  </ul>
                </div>
                <p className="font-semibold text-slate-700">確定申告の流れ（e-Taxの場合）</p>
                <div className="bg-slate-50 rounded-xl p-4 space-y-2">
                  <p><strong>Step 1：</strong>国税庁の「確定申告書等作成コーナー」にアクセス</p>
                  <p><strong>Step 2：</strong>マイナンバーカードでログイン（マイナポータル連携推奨）</p>
                  <p><strong>Step 3：</strong>本業の源泉徴収票の内容を入力</p>
                  <p><strong>Step 4：</strong>副業の所得（収入・経費）を入力</p>
                  <p><strong>Step 5：</strong>各種控除を入力（生命保険料控除、ふるさと納税など）</p>
                  <p><strong>Step 6：</strong>住民税の徴収方法を「自分で納付（普通徴収）」に選択</p>
                  <p><strong>Step 7：</strong>内容を確認して送信・提出</p>
                </div>
                <p>
                  申告期限を過ぎると<strong>無申告加算税</strong>（原則15〜20%）や<strong>延滞税</strong>が課されます。期限内に申告できない場合でも、期限後申告は早めに行うことで加算税が軽減されることがあります。
                </p>
                <p>
                  なお、副業が<strong>事業所得</strong>の場合は「青色申告」を選択することで、最大65万円の特別控除（e-Tax申告の場合）を受けられます。青色申告を利用するには、事前に「青色申告承認申請書」を税務署に提出しておく必要があります。
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="barenai-houhou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 副業が会社にバレない方法</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  副業が会社にバレる最大の原因は<strong>住民税</strong>です。通常、会社員の住民税は給与から天引き（特別徴収）されますが、副業で所得が増えると住民税額が上がり、会社の経理担当者に「他の社員より住民税が多い」と気づかれることがあります。
                </p>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="font-semibold text-blue-800 mb-2">住民税の普通徴収を選択する</p>
                  <p className="text-blue-700">
                    確定申告書の「住民税に関する事項」欄で、副業分の住民税の徴収方法を<strong>「自分で納付（普通徴収）」</strong>にチェックを入れます。これにより、副業分の住民税は自宅に届く納付書で自分で支払うことになり、会社には本業分の住民税のみが通知されます。
                  </p>
                </div>
                <p>
                  ただし、以下の点に注意が必要です。
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li><strong>給与所得の副業</strong>（アルバイトなど）は普通徴収にできない自治体が多い。副業先でも特別徴収が行われ、本業の会社に住民税の通知が届く可能性がある</li>
                  <li>自治体によっては普通徴収の希望が反映されないことがあるため、申告後に市区町村の税務課に確認の電話をすると確実</li>
                  <li>社会保険（健康保険・厚生年金）は副業先でも加入要件を満たすと二重加入となり、会社に通知が届く場合がある</li>
                  <li>マイナンバーの導入により副業が発覚するという噂があるが、マイナンバーから会社に副業情報が通知される仕組みはない</li>
                </ul>
                <p>
                  最も安全なのは、副業をアルバイトではなく<strong>業務委託（事業所得・雑所得）</strong>の形態で行うことです。業務委託であれば住民税の普通徴収が確実に選択でき、社会保険の二重加入も発生しません。
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="keihi-ichiran">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. 副業の経費として認められるもの</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  副業の所得を計算する際、収入から差し引ける<strong>経費</strong>を正しく計上することで、税金を適正に抑えることができます。経費として認められるのは、副業の収入を得るために<strong>直接必要な支出</strong>です。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">経費の種類</th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">具体例</th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">注意点</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">通信費</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">インターネット回線、スマホ代</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">私用と按分が必要（例：業務50%）</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">消耗品費</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">パソコン（10万円未満）、文房具</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">10万円以上は減価償却が必要</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">交通費</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">打ち合わせへの電車代、タクシー代</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">業務に直接関連するもののみ</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">書籍・教材費</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">業務関連の書籍、オンライン講座</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">副業に直接関係するもの</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">ソフトウェア代</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">Adobe、会計ソフト、サーバー代</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">月額サブスクも経費にできる</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">家賃（按分）</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">自宅の一部を仕事場として使用</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">面積割合や使用時間で按分</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">水道光熱費（按分）</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">電気代の一部</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">業務使用割合を合理的に算出</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">外注費</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">デザイン発注、記事執筆の外注</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">支払調書の保管が望ましい</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  経費計上のポイントは、<strong>領収書やレシートを必ず保管する</strong>ことです。クレジットカードの明細でも代用できますが、何の支出かメモしておくと税務調査の際にスムーズです。按分（あんぶん）する場合は、按分割合の根拠を説明できるようにしておきましょう。
                </p>
                <p>
                  なお、プライベートの食事代や趣味の書籍など、業務に関係のない支出を経費に計上すると、税務調査で否認され追徴課税を受ける可能性があります。経費にできるのは、あくまで<strong>副業に直接関連する支出</strong>のみです。
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="simulation">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">7. 副業の年収別シミュレーション</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  本業の年収400万円（課税所得約170万円）の会社員が副業した場合、副業所得に対してどのくらいの税金がかかるかシミュレーションしてみましょう。経費は考慮済みの「所得」で計算します。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">項目</th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">副業所得20万円</th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">副業所得50万円</th>
                        <th className="bg-slate-100 px-3 py-2 text-left font-medium text-slate-700 border border-slate-200">副業所得100万円</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">合計課税所得</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約190万円</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約220万円</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約270万円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">副業分の所得税（税率）</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約10,000円（5%）</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約27,500円（5〜10%）</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約72,500円（10%）</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">副業分の住民税</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約20,000円</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約50,000円</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約100,000円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">復興特別所得税</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約210円</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約577円</td>
                        <td className="px-3 py-2 border border-slate-200 text-slate-600">約1,522円</td>
                      </tr>
                      <tr className="font-semibold">
                        <td className="px-3 py-2 border border-slate-200 text-slate-700">税金合計</td>
                        <td className="px-3 py-2 border border-slate-200 text-emerald-600">約30,210円</td>
                        <td className="px-3 py-2 border border-slate-200 text-emerald-600">約78,077円</td>
                        <td className="px-3 py-2 border border-slate-200 text-emerald-600">約174,022円</td>
                      </tr>
                      <tr className="font-semibold">
                        <td className="px-3 py-2 border border-slate-200 text-slate-700">手取り増加額</td>
                        <td className="px-3 py-2 border border-slate-200 text-emerald-600">約169,790円</td>
                        <td className="px-3 py-2 border border-slate-200 text-emerald-600">約421,923円</td>
                        <td className="px-3 py-2 border border-slate-200 text-emerald-600">約825,978円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  副業所得20万円の場合、税金は約3万円で手取りは約17万円増えます。副業所得100万円の場合は約17.4万円の税金がかかり、手取りは約82.6万円増加します。
                </p>
                <p>
                  副業の所得が増えると所得税の税率区分が上がる「ブラケットクリープ」が起きることがあります。上記の例では、副業所得50万円のケースで課税所得が195万円を超え、超えた分に10%の税率が適用されています。
                </p>
                <p>
                  なお、副業が雑所得ではなく<strong>事業所得</strong>として認められ、青色申告を行えば最大65万円の控除が受けられるため、副業所得100万円の場合でも課税所得は35万円に圧縮でき、税負担を大幅に軽減できます。
                </p>
                <p className="text-xs text-slate-400">
                  ※ 上記は概算値です。実際の税額は各種控除の適用状況によって異なります。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    給与所得者で確定申告が必要な人
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
                <li>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1500.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    雑所得
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
                <li>
                  <a href="https://www.nta.go.jp/taxes/shiraberu/shinkoku/tokushu/index.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    確定申告特集
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">副業込みの手取り額を計算してみる</h2>
              <p className="text-sm text-slate-600 mb-4">
                本業と副業を合わせた手取り額を、所得税・住民税・社会保険料込みで即座に計算できます。
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
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連記事</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
                </Link>
                <Link href="/guide/juuminzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">住民税の計算方法</p>
                </Link>
                <Link href="/guide/nenmatsu-chousei" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年末調整の仕組み</p>
                </Link>
                <Link href="/guide/tedori-shikumi" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">手取り額の仕組み</p>
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
