/**
 * アフィリエイトリンク設定
 * A8.net審査通過後、href を A8トラッキングURLに差し替えるだけで全ページ反映。
 */

export const AFFILIATE_LINKS = {
  bennaviBengoshi: {
    href: "https://bexy.jp/",  // TODO: A8トラッキングURLに差し替え
    icon: "⚖️",
    label: "PR・無料相談あり",
    title: "残業代が払われていないかも？弁護士に無料相談",
    description: "未払いの残業代は3年間さかのぼって請求できます。専門の弁護士への相談は無料です。",
    ctaText: "無料で相談してみる",
    note: "相談料0円・全国対応",
  },
  doda: {
    href: "https://doda.jp/",  // TODO: A8トラッキングURLに差し替え
    icon: "💼",
    label: "PR・転職エージェント",
    title: "残業が多い・給料が低いなら転職も選択肢に",
    description: "dodaは求人数・サポートともに国内最大級。無料登録で非公開求人もチェックできます。",
    ctaText: "無料で転職相談",
    note: "登録無料・エージェントサポートあり",
  },
  dodaJikyu: {
    href: "https://doda.jp/",  // TODO: A8トラッキングURLに差し替え
    icon: "📈",
    label: "PR・転職エージェント",
    title: "時給換算したら思ったより低かった？",
    description: "時給1,500円以下なら市場価値を確かめるチャンスです。dodaで同職種の給与相場を無料確認。",
    ctaText: "給与相場を調べてみる",
    note: "登録無料",
  },
  mynavi: {
    href: "https://tenshoku.mynavi.jp/",  // TODO: A8トラッキングURLに差し替え
    icon: "🔍",
    label: "PR・転職サイト",
    title: "手取りを増やすなら年収アップ転職",
    description: "マイナビ転職は20〜30代に人気。スカウト機能で企業からオファーが届くことも。",
    ctaText: "マイナビ転職を見てみる",
    note: "登録・利用無料",
  },
  freeeKyuyo: {
    href: "https://www.freee.co.jp/payroll/",  // TODO: A8トラッキングURLに差し替え
    icon: "🧮",
    label: "PR・給与計算ソフト",
    title: "給与計算を自動化したい方へ｜freee給与",
    description: "社保計算・年末調整・賞与計算まで自動化。営業日カレンダーも連携して締め作業を大幅削減。",
    ctaText: "30日間無料で試す",
    note: "中小企業・個人事業主向け",
  },
  mfKyuyo: {
    href: "https://biz.moneyforward.com/payroll/",  // TODO: A8トラッキングURLに差し替え
    icon: "📊",
    label: "PR・給与計算ソフト",
    title: "マネーフォワード クラウド給与",
    description: "社労士も推薦するクラウド給与システム。営業日・勤怠・給与計算を一括管理できます。",
    ctaText: "無料トライアルを始める",
    note: "法人向け・1ヶ月無料",
  },
} as const;

export const ZANGYODAI_AFFILIATES = [
  AFFILIATE_LINKS.bennaviBengoshi,
  AFFILIATE_LINKS.doda,
];

export const TETSUKE_AFFILIATES = [
  AFFILIATE_LINKS.mynavi,
  AFFILIATE_LINKS.freeeKyuyo,
];

export const JIKYU_AFFILIATES = [
  AFFILIATE_LINKS.dodaJikyu,
  AFFILIATE_LINKS.mynavi,
];

export const EIGYOBI_AFFILIATES = [
  AFFILIATE_LINKS.freeeKyuyo,
  AFFILIATE_LINKS.mfKyuyo,
];
