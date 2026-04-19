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
  title: "社会保険料の計算方法 | 健康保険・厚生年金・雇用保険 | 給料ラボ",
  description:
    "会社員が負担する社会保険料の種類と計算方法を、令和6年度の最新料率で解説。標準報酬月額の仕組みや、手取りへの影響を具体例つきで紹介。",
  keywords: "社会保険料,健康保険,厚生年金,雇用保険,標準報酬月額,介護保険",
  alternates: { canonical: "/guide/shakaihokenryou-guide" },
  openGraph: {
    title: "社会保険料の計算方法 | 健康保険・厚生年金・雇用保険",
    description: "社会保険料の種類と計算方法を令和6年度の料率で解説。",
    type: "article",
  },
};

export default function ShakaiHokenPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="社会保険料の計算方法 | 健康保険・厚生年金・雇用保険"
        description="会社員が負担する社会保険料の種類と計算方法を、令和6年度の最新料率で解説。"
        url="https://kyuryo-lab.com/guide/shakaihokenryou-guide"
        datePublished="2025-01-15"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "社会保険料の計算方法", url: "https://kyuryo-lab.com/guide/shakaihokenryou-guide" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Breadcrumb items={[
          { name: "ホーム", href: "/" },
          { name: "給与ガイド", href: "/guide" },
          { name: "社会保険料の計算方法", href: "/guide/shakaihokenryou-guide" },
        ]} />
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              社会保険料の計算方法 | 健康保険・厚生年金・雇用保険
            </h1>
            <p className="text-slate-500">
              毎月の給与から天引きされる社会保険料。その種類と計算方法を令和6年度の最新料率に基づいて解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#gaiyou" className="hover:underline">社会保険料とは</a></li>
                <li><a href="#hyoujun" className="hover:underline">標準報酬月額の仕組み</a></li>
                <li><a href="#kenkou" className="hover:underline">健康保険料の計算</a></li>
                <li><a href="#kousei" className="hover:underline">厚生年金の計算</a></li>
                <li><a href="#koyou" className="hover:underline">雇用保険の計算</a></li>
                <li><a href="#kaigo" className="hover:underline">介護保険の計算</a></li>
              </ol>
            </nav>


            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="gaiyou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 社会保険料とは</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  社会保険料は、病気・老後・失業などのリスクに備えるための公的保険制度への掛け金です。会社員の場合、毎月の給与から天引きされ、会社も同額（または一定割合）を負担する<strong>労使折半</strong>の仕組みです。
                </p>
                <p>
                  社会保険料は給与の<strong>約15%</strong>（本人負担分）を占め、手取り額に大きく影響します。内訳は健康保険・厚生年金・雇用保険の3つ（40歳以上は介護保険を加えた4つ）です。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="hyoujun">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 標準報酬月額の仕組み</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  健康保険と厚生年金の保険料は、実際の月給ではなく<strong>標準報酬月額</strong>をベースに計算されます。標準報酬月額は、毎年4月〜6月の報酬（給与+残業代+通勤手当）の平均値を等級表に当てはめて決定されます。
                </p>
                <p>
                  健康保険は第1級（58,000円）から第50級（1,390,000円）までの50等級、厚生年金は第1級（88,000円）から第32級（650,000円）までの32等級に分かれています。
                </p>
                <p>
                  4月〜6月に残業が多いと標準報酬月額が上がり、1年間の保険料が高くなるため、「4〜6月は残業を控えた方がいい」という話がよく聞かれます。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kenkou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 健康保険料の計算</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  健康保険は、病気やケガの際の医療費を3割負担にする制度です。会社員は主に「協会けんぽ」か「健康保険組合」に加入します。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  健康保険料（本人負担）= 標準報酬月額 &times; 保険料率 &divide; 2
                </div>
                <p>
                  令和6年度の協会けんぽ（東京）の保険料率は<strong>9.98%</strong>です。労使折半なので、本人負担は<strong>4.99%</strong>。
                </p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm"><strong>計算例：</strong>標準報酬月額30万円の場合</p>
                  <p className="text-sm">300,000 &times; 9.98% &divide; 2 = <strong className="text-emerald-600">14,970円</strong></p>
                </div>
                <p>
                  なお、保険料率は都道府県ごとに異なります。最も高い佐賀県は10.42%、最も低い新潟県は9.35%（令和6年度）です。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kousei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 厚生年金の計算</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  厚生年金は、老後の年金受給のための積立制度です。2017年以降、保険料率は<strong>18.3%で固定</strong>されており、今後変更される予定はありません。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  厚生年金（本人負担）= 標準報酬月額 &times; 18.3% &divide; 2
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm"><strong>計算例：</strong>標準報酬月額30万円の場合</p>
                  <p className="text-sm">300,000 &times; 18.3% &divide; 2 = <strong className="text-emerald-600">27,450円</strong></p>
                </div>
                <p>
                  厚生年金は社会保険料の中で最も負担が大きく、月給30万円の場合は月27,450円（年間329,400円）に達します。ただし、多く払った分だけ将来の年金受給額も増えます。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="koyou">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 雇用保険の計算</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  雇用保険は、失業時の給付や育児休業給付の財源です。他の社会保険と異なり、<strong>標準報酬月額ではなく実際の月給</strong>に料率を掛けて計算します。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  雇用保険料（本人負担）= 月給 &times; 0.6%
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm"><strong>計算例：</strong>月給30万円の場合</p>
                  <p className="text-sm">300,000 &times; 0.6% = <strong className="text-emerald-600">1,800円</strong></p>
                </div>
                <p>
                  金額は比較的小さいですが、失業した場合の基本手当（失業保険）や、教育訓練給付金など、重要な給付の財源となっています。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kaigo">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. 介護保険の計算</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  介護保険は<strong>40歳以上65歳未満</strong>の方（第2号被保険者）が対象です。健康保険料に上乗せして徴収されます。
                </p>
                <div className="bg-slate-50 rounded-xl p-4 font-mono text-base text-slate-800">
                  介護保険料（本人負担）= 標準報酬月額 &times; 1.82% &divide; 2
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm"><strong>計算例：</strong>標準報酬月額30万円（45歳）の場合</p>
                  <p className="text-sm">300,000 &times; 1.82% &divide; 2 = <strong className="text-emerald-600">2,730円</strong></p>
                </div>
                <p>
                  40歳の誕生日を迎えた月から徴収が始まるため、40歳になると手取りが少し減ります。
                </p>
              </div>
            </section>

            {/* 参考資料 */}
            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">参考資料</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.kyoukaikenpo.or.jp/g7/cat330/sb3150/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    保険料額表
                  </a>
                  <span className="text-slate-400 ml-1">（全国健康保険協会）</span>
                </li>
                <li>
                  <a href="https://www.nenkin.go.jp/service/kounen/hokenryo/ryogaku/ryogakuhyo/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    厚生年金保険料額表
                  </a>
                  <span className="text-slate-400 ml-1">（日本年金機構）</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">手取り額を計算してみる</h2>
              <p className="text-sm text-slate-600 mb-4">
                社会保険料・税金を含めた手取り額を即座に計算できます。
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
                <Link href="/guide/tedori-shikumi" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">手取り額の仕組み</p>
                </Link>
                <Link href="/guide/nenshu-tedori-hayamihyou" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">年収別の手取り早見表</p>
                </Link>
                <Link href="/guide/kyuyo-meisai-mikata" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">給与明細の見方</p>
                </Link>
                <Link href="/guide/bonus-zeikin" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">ボーナスの手取りと税金</p>
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
