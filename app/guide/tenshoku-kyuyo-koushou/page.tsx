import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import AffiliateSection from "../../../components/affiliates/affiliate-section";
import { TETSUKE_AFFILIATES } from "../../../lib/affiliates";
import Link from "next/link";
import Breadcrumb from "../../../components/ui/breadcrumb";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "転職の給与交渉を成功させるコツと例文【2026年版】 | 給料ラボ",
  description:
    "転職時の給与交渉のタイミング・伝え方・例文を徹底解説。希望年収の決め方、業界別の年収相場、交渉でやってはいけないNG行動まで、年収アップに必要な知識をまとめました。",
  keywords:
    "転職,給与交渉,年収交渉,希望年収,オファー面談,年収アップ",
  alternates: { canonical: "/guide/tenshoku-kyuyo-koushou" },
  openGraph: {
    title: "転職の給与交渉を成功させるコツと例文【2026年版】",
    description:
      "転職時の給与交渉のタイミング・伝え方・例文を徹底解説。希望年収の決め方から業界別相場まで。",
    type: "article",
  },
};

export default function TenshokuKyuyoKoushouPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="転職の給与交渉を成功させるコツと例文【2026年版】"
        description="転職時の給与交渉のタイミング・伝え方・例文を徹底解説。希望年収の決め方、業界別の年収相場、交渉でやってはいけないNG行動まで解説。"
        url="https://kyuryo-lab.com/guide/tenshoku-kyuyo-koushou"
        datePublished="2026-04-05"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          {
            name: "転職の給与交渉を成功させるコツと例文",
            url: "https://kyuryo-lab.com/guide/tenshoku-kyuyo-koushou",
          },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb
          items={[
            { name: "ホーム", url: "/" },
            { name: "給与ガイド", url: "/guide" },
            {
              name: "転職の給与交渉を成功させるコツと例文",
              href: "/guide/tenshoku-kyuyo-koushou",
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
              転職の給与交渉を成功させるコツと例文【2026年版】
            </h1>
            <p className="text-slate-500">
              転職は年収を大きく上げるチャンスですが、給与交渉をしないまま入社すると数十万円〜数百万円の損になることも。この記事では、交渉のベストタイミングから具体的な伝え方、業界別の年収相場まで、転職時の給与交渉に必要な知識を網羅的に解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li>
                  <a href="#reason" className="hover:underline">
                    転職時に給与交渉すべき理由
                  </a>
                </li>
                <li>
                  <a href="#timing" className="hover:underline">
                    給与交渉のベストなタイミング
                  </a>
                </li>
                <li>
                  <a href="#kibou-nenshu" className="hover:underline">
                    希望年収の決め方
                  </a>
                </li>
                <li>
                  <a href="#tsutaekata" className="hover:underline">
                    給与交渉の具体的な伝え方・例文
                  </a>
                </li>
                <li>
                  <a href="#nenshu-igai" className="hover:underline">
                    年収以外に交渉すべき条件
                  </a>
                </li>
                <li>
                  <a href="#ng" className="hover:underline">
                    給与交渉でやってはいけないNG行動
                  </a>
                </li>
                <li>
                  <a href="#souba" className="hover:underline">
                    業界・職種別の年収相場
                  </a>
                </li>
              </ol>
            </nav>

            {/* 1. 転職時に給与交渉すべき理由 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="reason"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                1. 転職時に給与交渉すべき理由
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  「提示された年収をそのまま受け入れる」という人は少なくありませんが、実は転職時の給与交渉は企業側も想定していることが多いです。交渉しないことで本来得られるはずだった年収を逃してしまう可能性があります。
                </p>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <p className="text-center">
                    <span className="text-sm text-slate-500">
                      給与交渉による年収アップの目安
                    </span>
                    <br />
                    <span className="text-4xl font-bold text-emerald-600">
                      3〜10%
                    </span>
                    <br />
                    <span className="text-sm text-slate-500">
                      （年収500万円なら15万〜50万円アップ）
                    </span>
                  </p>
                </div>
                <p>
                  厚生労働省の「雇用動向調査」によると、転職者のうち約37%が「賃金が増加した」と回答しています。さらに、転職エージェント各社の調査では、給与交渉を行った人の約60〜70%が何らかの条件改善を勝ち取っているというデータもあります。
                </p>
                <p>
                  企業が提示する初回オファーには、交渉を見越した「余白」が含まれていることが一般的です。特に即戦力として評価されている場合や、複数社からオファーを受けている場合は、企業側も柔軟に対応してくれる可能性が高まります。
                </p>
                <p>
                  また、入社時の年収は<strong className="text-slate-800">その後の昇給のベースライン</strong>になります。例えば毎年3%の昇給がある場合、入社時に30万円の差があると、5年後には約35万円、10年後には約40万円へと差が広がっていきます。最初の交渉を怠ると、生涯年収で数百万円の差になる可能性があるのです。
                </p>
                <p>
                  「交渉すると印象が悪くなるのでは」と心配する方もいますが、丁寧かつ根拠のある交渉であれば、むしろ「自分の価値を理解している」「ビジネス感覚がある」とポジティブに評価されることもあります。
                </p>
              </div>
            </section>

            {/* 2. 給与交渉のベストなタイミング */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="timing"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                2. 給与交渉のベストなタイミング
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  給与交渉の成否は「いつ切り出すか」で大きく左右されます。早すぎても遅すぎても逆効果になるため、適切なタイミングを見極めることが重要です。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  ベストタイミング：内定後のオファー面談
                </h3>
                <p>
                  最も効果的なのは、<strong className="text-slate-800">内定通知を受けた後のオファー面談（条件面談）</strong>です。この段階では企業が「この人を採用したい」と決めているため、交渉の余地が最も大きくなります。オファー面談は企業側が条件を説明し、入社の意思を確認する場であり、まさに交渉のために設けられた場面です。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  避けるべきタイミング
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong className="text-slate-700">一次面接：</strong>
                    まだ評価が定まっていない段階で年収の話をすると、「お金のことしか考えていない」という印象を与えかねません。
                  </li>
                  <li>
                    <strong className="text-slate-700">最終面接中：</strong>
                    面接の場は自分をアピールする場であり、条件交渉の場ではありません。ただし、企業側から希望年収を聞かれた場合は、率直に答えて問題ありません。
                  </li>
                  <li>
                    <strong className="text-slate-700">入社後：</strong>
                    入社してから「年収を上げてほしい」と言っても、試用期間中は特に難しく、最低でも半年〜1年の実績を積む必要があります。
                  </li>
                </ul>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  面接中に希望年収を聞かれた場合
                </h3>
                <p>
                  面接で「希望年収はいくらですか？」と聞かれることは珍しくありません。この場合は具体的な数字を伝えつつ、「御社の規定や評価に合わせて柔軟に考えたい」と添えるのがバランスの取れた回答です。ここで極端に低い数字を言ってしまうと、オファー面談でもその金額がベースになってしまうため注意が必要です。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  転職エージェント経由の場合
                </h3>
                <p>
                  転職エージェントを利用している場合は、エージェントに希望年収を伝えておけば、交渉を代行してくれます。エージェントは年収が高いほど報酬が増える仕組みのため、交渉に積極的です。自分で交渉するのが苦手な方はエージェント経由での交渉を活用しましょう。
                </p>
              </div>
            </section>

            {/* 3. 希望年収の決め方 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="kibou-nenshu"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                3. 希望年収の決め方
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  交渉を成功させるには、「なんとなくこれくらいほしい」ではなく、<strong className="text-slate-800">根拠のある希望年収</strong>を設定することが重要です。以下の3つのステップで考えましょう。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  ステップ1：現年収を正確に把握する
                </h3>
                <p>
                  まず自分の現在の年収を正確に把握しましょう。「年収」には基本給だけでなく、残業代、賞与（ボーナス）、各種手当（住宅手当、通勤手当など）が含まれます。源泉徴収票の「支払金額」欄が年収（額面）にあたります。
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>基本給 x 12か月</li>
                  <li>賞与（夏・冬）の実績額</li>
                  <li>残業代（月平均 x 12か月）</li>
                  <li>各種手当（住宅手当、役職手当など）</li>
                </ul>
                <p>
                  特に注意すべきなのは<strong className="text-slate-700">残業代の扱い</strong>です。現職で月30時間の残業代が含まれた年収500万円の場合、転職先がみなし残業（固定残業代）を含む年収500万円を提示してきたら、実質的に手取りが減る可能性があります。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  ステップ2：市場相場を調べる
                </h3>
                <p>
                  自分の職種・業界・経験年数での市場価値（相場）を調べましょう。以下の方法が有効です。
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>転職サイトの求人情報で同職種の年収レンジを確認する</li>
                  <li>転職エージェントに市場価値の診断を依頼する</li>
                  <li>口コミサイト（OpenWork、転職会議など）で企業の年収情報を確認する</li>
                  <li>厚生労働省の賃金構造基本統計調査を参照する</li>
                </ul>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  ステップ3：時給換算で考える
                </h3>
                <p>
                  年収だけでなく、<strong className="text-slate-700">時給に換算して比較する</strong>ことで、実質的な待遇の良し悪しが見えてきます。例えば年収600万円でも月の残業が40時間ある場合と、年収550万円で残業がほぼゼロの場合では、時給換算すると後者のほうが高くなることがあります。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-700">時給の計算式：</strong>
                    <br />
                    年収 ÷ （月の労働時間 x 12か月） = 時給
                    <br />
                    例）年収600万円 ÷ （200時間 x 12） = 2,500円/時
                    <br />
                    例）年収550万円 ÷ （160時間 x 12） = 2,865円/時
                  </p>
                </div>
                <p>
                  当サイトの<Link href="/kyuryo/jikyu" className="text-blue-600 hover:underline">時給換算計算ツール</Link>を使えば、年収や月給から簡単に時給を算出できます。転職先のオファーを比較する際にぜひ活用してください。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  希望年収の設定のコツ
                </h3>
                <p>
                  希望年収を伝える際は、「最低ライン」と「理想ライン」の2つを自分の中で設定しておくのがおすすめです。交渉の場では理想ラインを伝え、最終的に最低ライン以上で着地できれば成功と考えましょう。一般的には、現年収の5〜15%アップを目安にするケースが多いです。
                </p>
              </div>
            </section>

            {/* 4. 給与交渉の具体的な伝え方・例文 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="tsutaekata"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                4. 給与交渉の具体的な伝え方・例文
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  給与交渉では、伝え方ひとつで結果が大きく変わります。大切なのは「要求」ではなく「相談」の姿勢で伝えること。以下に、状況別の例文を3パターン紹介します。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  パターン1：現年収をベースに交渉する場合
                </h3>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    「このたびは内定をいただきありがとうございます。御社で働けることを大変嬉しく思っております。条件面について一点ご相談させていただきたいのですが、現職での年収が520万円（基本給＋賞与＋残業代）となっております。今回の転職では業務範囲が広がることもあり、<strong>年収550万円〜570万円程度</strong>でご検討いただけないでしょうか。もちろん、入社後の実績で評価いただけることは理解しておりますので、柔軟にご相談できればと考えております。」
                  </p>
                </div>
                <p>
                  ポイントは、現年収を具体的に示すことで交渉の根拠を明確にしている点です。「年収ダウンを避けたい」という最低限の主張ではなく、スキルや業務範囲の拡大を理由にアップを提案しています。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  パターン2：市場価値を根拠に交渉する場合
                </h3>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    「ご提示いただいた条件について、一点ご相談があります。同業界・同職種の求人を複数拝見したところ、私の経験年数（8年）とスキルセットでは<strong>年収600万円〜650万円</strong>が相場となっているようです。御社の事業に貢献できる自信がありますので、この水準に近い条件をご検討いただくことは可能でしょうか。」
                  </p>
                </div>
                <p>
                  市場データを根拠にすることで、主観的な「もっとほしい」ではなく、客観的な交渉になります。ただし、データの出典を聞かれたときに答えられるよう、事前に調査しておくことが大切です。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  パターン3：他社オファーがある場合
                </h3>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    「正直に申し上げますと、現在もう1社から内定をいただいており、そちらは<strong>年収580万円</strong>の条件をご提示いただいております。ただ、私としては御社の事業内容やチームに強く惹かれており、御社で働きたいという気持ちが第一です。もし年収面で同等以上のご検討をいただけるようでしたら、すぐにでもお返事したいと考えております。」
                  </p>
                </div>
                <p>
                  他社オファーを交渉材料にする方法は効果的ですが、嘘は絶対にNGです。実際にオファーがある場合のみ使いましょう。また、「御社が第一志望である」という姿勢を示すことで、脅しではなく誠実な相談として受け取ってもらえます。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  交渉時の基本姿勢
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>「相談」の姿勢で切り出す（「ご検討いただけないでしょうか」）</li>
                  <li>具体的な金額を示す（「もう少し上げてほしい」はNG）</li>
                  <li>根拠を添える（現年収、市場相場、スキル、他社オファーなど）</li>
                  <li>感謝を伝えてから本題に入る</li>
                  <li>書面（メール）でやり取りし、記録を残す</li>
                </ul>
              </div>
            </section>

            {/* 5. 年収以外に交渉すべき条件 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="nenshu-igai"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                5. 年収以外に交渉すべき条件
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  年収の交渉が難しい場合や、年収だけでなく総合的な待遇を改善したい場合は、以下の項目も交渉の対象になります。年収が同じでも、これらの条件次第で実質的な手取りや働きやすさが大きく変わります。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  賞与（ボーナス）
                </h3>
                <p>
                  年俸制の場合、賞与の有無と月数は年収に大きく影響します。「基本給30万円 x 12か月 + 賞与4か月分 = 年収480万円」と「月給40万円 x 12か月 = 年収480万円」では、社会保険料の算定基準が異なるため手取りが変わります。また、賞与は業績連動の場合もあるため、最低保証があるかを確認しましょう。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  残業代の扱い
                </h3>
                <p>
                  みなし残業（固定残業代）が含まれる場合、何時間分がみなしに含まれるかを必ず確認しましょう。「月40時間分のみなし残業代込み」と「みなし残業なしで残業代は全額支給」では、同じ年収でも実質的な時給が大きく異なります。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  リモートワーク・フレックス制度
                </h3>
                <p>
                  通勤時間の削減は金銭的にも時間的にも大きなメリットです。例えば片道1時間の通勤がなくなれば、1日2時間、月に約40時間の自由時間が生まれます。これを時給換算すると、年収で数十万円分の価値に相当します。フルリモート、週2〜3日のリモート、コアタイムなしのフレックスなど、具体的な条件を確認・交渉しましょう。
                </p>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  福利厚生
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong className="text-slate-700">住宅手当・家賃補助：</strong>
                    月2〜5万円の住宅手当があれば年間24〜60万円の実質年収アップ。
                  </li>
                  <li>
                    <strong className="text-slate-700">退職金制度：</strong>
                    企業型DC（確定拠出年金）の有無や、退職金の計算方法を確認。長期的な資産形成に影響します。
                  </li>
                  <li>
                    <strong className="text-slate-700">有給休暇の日数：</strong>
                    法定は入社半年後に10日ですが、企業によっては入社初日から付与されるケースもあります。
                  </li>
                  <li>
                    <strong className="text-slate-700">研修・スキルアップ支援：</strong>
                    資格取得支援や外部研修の費用負担があると、キャリアアップにつながります。
                  </li>
                  <li>
                    <strong className="text-slate-700">入社時期の調整：</strong>
                    現職の賞与支給日（6月・12月など）の後に退職できるよう、入社日を調整してもらうことも交渉材料になります。
                  </li>
                </ul>

                <h3 className="text-base font-semibold text-slate-700 mt-4">
                  試用期間中の条件
                </h3>
                <p>
                  試用期間中に給与が低く設定される企業もあります（本採用時の80〜90%など）。試用期間の長さと給与条件、本採用への移行基準を事前に確認しておきましょう。
                </p>
              </div>
            </section>

            {/* 6. 給与交渉でやってはいけないNG行動 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="ng"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                6. 給与交渉でやってはいけないNG行動
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  給与交渉は有効な手段ですが、やり方を間違えると内定取り消しや入社後の人間関係に悪影響を及ぼすことがあります。以下のNG行動は必ず避けましょう。
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-700">
                          NG行動
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-700">
                          理由・リスク
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          ng: "現年収を水増しして伝える",
                          reason:
                            "源泉徴収票の提出を求められた場合にバレる。信頼を完全に失い、内定取り消しの可能性もある。",
                        },
                        {
                          ng: "他社オファーを捏造する",
                          reason:
                            "具体的な内容を聞かれた際に矛盾が生じやすい。業界内の情報ネットワークで発覚するリスクもある。",
                        },
                        {
                          ng: "根拠なく高額を要求する",
                          reason:
                            "「とりあえず高い金額を言う」は逆効果。相場からかけ離れた金額は交渉を打ち切られる原因になる。",
                        },
                        {
                          ng: "一次面接で年収の話を持ち出す",
                          reason:
                            "選考中に金銭面を前面に出すと「仕事内容より待遇重視」と見なされる。",
                        },
                        {
                          ng: "内定承諾後に追加交渉する",
                          reason:
                            "承諾書にサインした後の交渉はマナー違反とみなされる。内定取り消しのリスクがある。",
                        },
                        {
                          ng: "感情的になる・威圧的な態度をとる",
                          reason:
                            "「他社に行きます」と脅すような言い方は関係を悪化させるだけ。入社後の人間関係にも影響する。",
                        },
                        {
                          ng: "曖昧な表現で交渉する",
                          reason:
                            "「もう少しだけ上げてほしい」では企業側も判断できない。具体的な希望額を提示すること。",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 1 ? "bg-slate-50" : ""}
                        >
                          <td className="border border-slate-200 px-3 py-2 font-medium text-red-600">
                            {row.ng}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-slate-600">
                            {row.reason}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p>
                  また、交渉が不成立になった場合の対応も重要です。希望額に届かなかった場合でも、「ご検討いただきありがとうございます。提示いただいた条件で前向きに考えさせていただきます」と丁寧に対応しましょう。入社してから実績を積み、昇給・昇進で年収アップを目指す道もあります。
                </p>
                <p>
                  交渉が決裂した場合は、その企業とは縁がなかったと割り切ることも大切です。無理に交渉を続けて不満を抱えたまま入社しても、長続きしない可能性があります。
                </p>
              </div>
            </section>

            {/* 7. 業界・職種別の年収相場 */}
            <section
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
              id="souba"
            >
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                7. 業界・職種別の年収相場テーブル
              </h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  給与交渉の際に参考になる、主要な業界・職種別の年収相場を紹介します。以下は正社員（中途採用）の一般的なレンジです。
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-700">
                          業界・職種
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-700">
                          若手（3〜5年目）
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-700">
                          中堅（6〜10年目）
                        </th>
                        <th className="border border-slate-200 px-3 py-2 text-left font-medium text-slate-700">
                          管理職
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          type: "IT（Webエンジニア）",
                          junior: "400〜550万円",
                          mid: "550〜750万円",
                          senior: "750〜1200万円",
                        },
                        {
                          type: "IT（インフラ・SIer）",
                          junior: "350〜480万円",
                          mid: "480〜650万円",
                          senior: "650〜900万円",
                        },
                        {
                          type: "営業（法人・IT）",
                          junior: "380〜500万円",
                          mid: "500〜700万円",
                          senior: "700〜1000万円",
                        },
                        {
                          type: "営業（個人・金融）",
                          junior: "350〜500万円",
                          mid: "500〜800万円",
                          senior: "800〜1500万円",
                        },
                        {
                          type: "事務・管理部門",
                          junior: "300〜400万円",
                          mid: "400〜550万円",
                          senior: "550〜750万円",
                        },
                        {
                          type: "経理・財務",
                          junior: "350〜450万円",
                          mid: "450〜600万円",
                          senior: "600〜900万円",
                        },
                        {
                          type: "人事・総務",
                          junior: "330〜430万円",
                          mid: "430〜580万円",
                          senior: "580〜800万円",
                        },
                        {
                          type: "マーケティング",
                          junior: "380〜500万円",
                          mid: "500〜700万円",
                          senior: "700〜1000万円",
                        },
                        {
                          type: "コンサルティング",
                          junior: "450〜600万円",
                          mid: "600〜900万円",
                          senior: "900〜1500万円",
                        },
                        {
                          type: "製造・メーカー",
                          junior: "350〜450万円",
                          mid: "450〜600万円",
                          senior: "600〜850万円",
                        },
                        {
                          type: "医療（看護師）",
                          junior: "350〜420万円",
                          mid: "420〜500万円",
                          senior: "500〜650万円",
                        },
                        {
                          type: "建設・不動産",
                          junior: "350〜480万円",
                          mid: "480〜650万円",
                          senior: "650〜900万円",
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 1 ? "bg-slate-50" : ""}
                        >
                          <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                            {row.type}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-slate-600">
                            {row.junior}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 text-slate-600">
                            {row.mid}
                          </td>
                          <td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-600">
                            {row.senior}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-400">
                  ※ 各種転職サイト・エージェントの公開データおよび厚生労働省「賃金構造基本統計調査」を参考に作成。地域・企業規模により変動します。
                </p>
                <p>
                  IT業界やコンサルティング業界は経験年数とスキルに応じた年収レンジが広く、交渉の余地が大きい傾向にあります。一方、公務員や医療系は給与テーブルが明確に決まっているケースが多く、交渉で大きく変動させることは難しい場合があります。
                </p>
                <p>
                  自分の経験年数と職種に照らし合わせ、提示された年収が相場の範囲内かどうかを確認した上で交渉に臨みましょう。相場の下限付近であれば交渉の余地は十分にあり、中央値〜上限であれば妥当な提示と判断できます。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
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
                    href="https://www.nta.go.jp/publication/statistics/kokuzeicho/minkan/gaiyou/2023.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    令和5年分 民間給与実態統計調査
                  </a>
                  <span className="text-slate-400 ml-1">（国税庁）</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">
                あなたの時給を計算してみよう
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                年収や月給から時給を換算して、転職先のオファーを比較しましょう。残業時間を含めた実質時給がわかります。
              </p>
              <Link
                href="/kyuryo/jikyu"
                className="inline-block bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors"
              >
                時給換算計算ツールを使う
              </Link>
            </section>

            {/* 関連記事 */}
            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                関連記事
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/guide/nenshuu-heikin"
                  className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors"
                >
                  <p className="font-medium text-slate-700 text-sm">
                    平均年収まとめ
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
                    年収別手取り早見表
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

        <AffiliateSection heading="給与・手取りをもっと増やしたい方へ" items={TETSUKE_AFFILIATES} />
      </main>
      <Footer />
    </>
  );
}
