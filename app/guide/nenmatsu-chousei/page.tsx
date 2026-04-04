import type { Metadata } from "next";
import Header from "../../../components/layout/header";
import Footer from "../../../components/layout/footer";
import Link from "next/link";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "../../../components/seo/json-ld";

export const metadata: Metadata = {
  title: "年末調整の仕組みと書き方 | 控除・還付をわかりやすく解説 | 給料ラボ",
  description:
    "年末調整の仕組みを初心者向けにわかりやすく解説。必要な書類、受けられる控除、還付金の目安まで、会社員が知っておくべきポイントを紹介。",
  keywords: "年末調整,書き方,控除,還付金,わかりやすく,会社員",
  alternates: { canonical: "/guide/nenmatsu-chousei" },
  openGraph: {
    title: "年末調整の仕組みと書き方 | 控除・還付をわかりやすく解説",
    description: "年末調整の仕組みと受けられる控除を初心者向けに解説。",
    type: "article",
  },
};

export default function NenmatsuChouseiPage() {
  return (
    <>
      <Header />
      <ArticleJsonLd
        headline="年末調整の仕組みと書き方 | 控除・還付をわかりやすく解説"
        description="年末調整の仕組み、必要書類、受けられる控除、還付金の目安を解説。"
        url="https://kyuryo-lab.com/guide/nenmatsu-chousei"
        datePublished="2025-04-04"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://kyuryo-lab.com/" },
          { name: "給与ガイド", url: "https://kyuryo-lab.com/guide" },
          { name: "年末調整の仕組み", url: "https://kyuryo-lab.com/guide/nenmatsu-chousei" },
        ]}
      />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <article>
          <header className="mb-8">
            <p className="text-sm text-blue-600 mb-2">
              <Link href="/guide" className="hover:underline">給与ガイド</Link>
            </p>
            <h1 className="text-3xl font-bold text-slate-800 mb-3">
              年末調整の仕組みと書き方 | 控除・還付をわかりやすく解説
            </h1>
            <p className="text-slate-500">
              毎年11〜12月に行われる年末調整。何のためにやるのか、どの書類を出せばいいのか、会社員が知っておくべきポイントを解説します。
            </p>
          </header>

          <div className="space-y-8">
            <nav className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-800 mb-3">目次</h2>
              <ol className="space-y-1 text-sm text-blue-600 list-decimal list-inside">
                <li><a href="#shikumi" className="hover:underline">年末調整とは</a></li>
                <li><a href="#shorui" className="hover:underline">必要な書類と書き方</a></li>
                <li><a href="#kojo" className="hover:underline">年末調整で受けられる控除</a></li>
                <li><a href="#kanpu" className="hover:underline">還付金の目安</a></li>
                <li><a href="#kakutei" className="hover:underline">確定申告が必要なケース</a></li>
              </ol>
            </nav>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shikumi">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. 年末調整とは</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  年末調整は、毎月の給与から天引きされた所得税（源泉徴収税額）と、1年間の正確な所得税額の<strong>差額を精算</strong>する手続きです。
                </p>
                <p>
                  毎月の源泉徴収は「月額表」に基づく概算のため、生命保険料控除や扶養の変動が反映されていません。年末に正確な控除を適用して再計算し、多く払いすぎた分は<strong>還付</strong>、不足分は<strong>追加徴収</strong>されます。
                </p>
                <p>
                  多くの会社員は年末調整で還付を受けられます。12月か翌年1月の給与に上乗せされるのが一般的です。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="shorui">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. 必要な書類と書き方</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>年末調整では主に以下の書類を会社に提出します。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">書類名</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">記入内容</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">対象者</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">扶養控除等申告書</td>
                        <td className="border border-slate-200 px-4 py-2">配偶者・扶養親族の情報</td>
                        <td className="border border-slate-200 px-4 py-2">全員必須</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">基礎控除申告書 兼 配偶者控除等申告書</td>
                        <td className="border border-slate-200 px-4 py-2">本人の合計所得見積額、配偶者の所得</td>
                        <td className="border border-slate-200 px-4 py-2">全員必須</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">保険料控除申告書</td>
                        <td className="border border-slate-200 px-4 py-2">生命保険・地震保険・iDeCoの掛金</td>
                        <td className="border border-slate-200 px-4 py-2">保険加入者</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">住宅借入金等特別控除申告書</td>
                        <td className="border border-slate-200 px-4 py-2">住宅ローンの残高</td>
                        <td className="border border-slate-200 px-4 py-2">2年目以降の住宅ローン控除者</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  保険会社から届く「控除証明書」を添付するのを忘れないようにしましょう。10月頃から届き始めます。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kojo">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. 年末調整で受けられる控除</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">控除の種類</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">最大控除額</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">節税効果（税率10%の場合）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">生命保険料控除</td>
                        <td className="border border-slate-200 px-4 py-2">最大12万円</td>
                        <td className="border border-slate-200 px-4 py-2">約12,000円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">地震保険料控除</td>
                        <td className="border border-slate-200 px-4 py-2">最大5万円</td>
                        <td className="border border-slate-200 px-4 py-2">約5,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">iDeCo（小規模企業共済等掛金控除）</td>
                        <td className="border border-slate-200 px-4 py-2">年27.6万円（会社員上限）</td>
                        <td className="border border-slate-200 px-4 py-2">約27,600円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">配偶者控除</td>
                        <td className="border border-slate-200 px-4 py-2">最大38万円</td>
                        <td className="border border-slate-200 px-4 py-2">約38,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">住宅ローン控除</td>
                        <td className="border border-slate-200 px-4 py-2">最大21万円/年（税額控除）</td>
                        <td className="border border-slate-200 px-4 py-2">直接減額</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kanpu">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. 還付金の目安</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>年末調整の還付金は個人の状況によって大きく変わりますが、目安は以下のとおりです。</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">ケース</th>
                        <th className="border border-slate-200 px-4 py-2 text-left font-semibold">還付金の目安</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">独身・保険料控除のみ</td>
                        <td className="border border-slate-200 px-4 py-2">5,000〜15,000円</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-200 px-4 py-2">iDeCo + 保険料控除</td>
                        <td className="border border-slate-200 px-4 py-2">20,000〜40,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-2">住宅ローン控除あり</td>
                        <td className="border border-slate-200 px-4 py-2">100,000〜200,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  住宅ローン控除は「税額控除」のため、所得税額から直接差し引かれ、効果が大きくなります。
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm" id="kakutei">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. 確定申告が必要なケース</h2>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>以下のケースでは年末調整だけでは完結せず、確定申告が必要です。</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li><strong>医療費控除</strong>：年間の医療費が10万円超（または所得の5%超）</li>
                  <li><strong>ふるさと納税</strong>：6自治体以上に寄付した場合</li>
                  <li><strong>住宅ローン控除の初年度</strong>：1年目は確定申告が必要</li>
                  <li><strong>副業の所得</strong>：給与以外の所得が20万円超</li>
                  <li><strong>年収2,000万円超</strong>：年末調整の対象外</li>
                </ul>
                <p>
                  ふるさと納税が5自治体以内であれば「ワンストップ特例」で確定申告不要です。
                </p>
              </div>
            </section>

            <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6 text-center">
              <h2 className="font-semibold text-slate-800 mb-2">手取り額を計算してみる</h2>
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

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">関連記事</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link href="/guide/shotokuzei-keisan" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">所得税の計算方法</p>
                </Link>
                <Link href="/guide/fuyou-kojo-guide" className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition-colors">
                  <p className="font-medium text-slate-700 text-sm">扶養控除と103万円の壁</p>
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
