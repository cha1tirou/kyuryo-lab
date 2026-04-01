# kyuryo-lab Week 1 タスクリスト

## 進行ルール
- タスクを完了したら [ ] を [x] に変更する
- 実装で気づいたことはメモとして末尾に追加する
- エラーが起きたらエラー内容と対処をメモする

---

## Phase 0: セットアップ（人間側タスク）

> Claude Codeを使い始める前に手動で行う

- [ ] `kyuryo-lab.com`（または類似）ドメインを取得
  - 候補: お名前.com / Cloudflare Registrar
  - 年額 1,000〜2,000円程度
- [ ] Vercelで新規プロジェクト作成
  - GitHubリポジトリを先に作成してから連携
  - Framework: Next.js を選択
- [ ] `npx create-next-app@latest kyuryo-lab --typescript --tailwind --eslint --app` を実行
- [ ] GitHubに push してVercelに自動デプロイされることを確認
- [ ] VercelのProject SettingsでカスタムドメインをDNS設定

---

## Phase 1: 基盤実装（Claude Codeに依頼）

### 1-1. プロジェクト初期設定
- [x] `app/layout.tsx` にInter + Noto Sans JPフォントを設定（next/font）
- [x] `tailwind.config.ts` にカスタムカラーとフォントを追加
- [x] `lib/constants.ts` を作成（税率・保険料率の定数）
- [x] `lib/utils.ts` を作成（`formatCurrency`, `formatHours` ユーティリティ）

### 1-2. 共通UIコンポーネント
- [x] `components/ui/input-field.tsx`
  - props: label, value, onChange, unit, min, max, tooltip?
  - モバイル対応: inputmode="decimal"
  - スライダーとテキスト入力を組み合わせたUI
- [x] `components/ui/result-card.tsx`
  - props: label, value, unit, highlight?（大きい数字用）
  - highlight=trueのとき: text-4xl text-emerald-600
- [x] `components/ui/tooltip.tsx`
  - ？マークアイコンをhoverでpopover表示
- [x] `components/layout/header.tsx`
  - サイト名（kyuryo-lab）+ ナビリンク（残業代計算・手取り計算）
  - モバイル: ハンバーガーメニューは不要、シンプルな水平リスト
- [x] `components/layout/footer.tsx`
  - コピーライト + 計算概算の免責事項

### 1-3. 計算ロジック
- [x] `lib/calc/overtime.ts`
  - `calcOvertime(inputs: OvertimeInputs): OvertimeResult` を実装
  - CLAUDE.mdの計算式仕様通りに実装
  - 全て純粋関数（副作用なし）
  - 型定義も同ファイルに含める
- [x] `lib/calc/takehome.ts`
  - `calcTakehome(inputs: TakehomeInputs): TakehomeResult` を実装
  - CLAUDE.mdの計算式仕様通りに実装
  - 令和6年度の税率・保険料率を使用

---

## Phase 2: ページ実装（Claude Codeに依頼）

### 2-1. トップページ / 残業代計算
- [x] `app/page.tsx` を実装（Server Component、メタデータ含む）
- [x] `components/calculators/overtime-calculator.tsx` を実装
  - 入力: 月給・月所定労働時間・残業時間・深夜残業・休日出勤
  - リアルタイム計算（onChange）
  - 結果表示: 残業代合計を大きく、内訳を小さく
  - スライダーUI: 月給と残業時間にスライダーを追加
- [x] PC 2カラムレイアウト（左: 入力、右: 結果）
- [x] SP 1カラムレイアウト（上: 入力、下: 結果）
- [x] 計算方法の解説セクション（SEO用テキスト）
  - h2: 残業代の計算方法
  - 各割増率の説明テキスト（約400字）
- [x] 関連ツールへのカードリンク
- [x] Q&Aセクション（FAQ）
  - Q: 深夜残業と通常残業が重なった場合は？
  - Q: 月60時間超の残業は？
  - など3〜5問

### 2-2. 給与手取り計算ページ
- [x] `app/kyuryo/tetsuke/page.tsx` を実装（メタデータ含む）
- [x] `components/calculators/takehome-calculator.tsx` を実装
  - 入力: 月収・扶養人数・年齢
  - 社会保険区分のセレクト（会社員・自営業）
  - リアルタイム計算
  - 結果: 手取り額を大きく、控除内訳をリスト表示
- [x] 計算方法の解説セクション

---

## Phase 3: SEO・仕上げ

### 3-1. SEO基本設定
- [ ] 各ページのメタデータ（title・description・OGP）を設定
- [ ] `app/sitemap.ts` を作成（自動サイトマップ生成）
- [ ] `app/robots.ts` を作成
- [ ] `/public/og-image.png` を作成（1200×630px）

### 3-2. パフォーマンス
- [ ] Lighthouse スコア確認（Mobile 90点以上を目標）
- [ ] 画像最適化（next/image）
- [ ] フォントのdisplay: swap設定確認

---

## Week 1 完了条件

以下がすべて達成されていること:

1. `https://kyuryo-lab.com/` で残業代計算ツールが動いている
2. `https://kyuryo-lab.com/kyuryo/tetsuke` で手取り計算ツールが動いている
3. スマホで両ページが快適に操作できる
4. 計算結果が正確である（手計算で確認）
5. Lighthouse モバイルスコア 85点以上

---

## メモ・気づき

（実装しながら随時追記）

---

## Week 2 予告（次のスコープ）

- 時給換算計算ページ追加
- 営業日計算ページ追加
- guideページ 5本 AI生成・投稿
- AdSense申請
- Google Search Console 設定
