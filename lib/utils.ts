/** 数値を日本円表記にフォーマット（例: 250,000円） */
export function formatCurrency(n: number): string {
  return `${Math.floor(n).toLocaleString("ja-JP")}円`;
}

/** 数値を時間表記にフォーマット（例: 20時間） */
export function formatHours(n: number): string {
  return `${n}時間`;
}
