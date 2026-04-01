# kyuryo-lab — Claude Code Project Instructions

## プロジェクト概要

給与・残業代計算ツール群のWebサービス。  
日本の労働基準法に基づく計算をモバイルファーストのモダンUIで提供し、
Google AdSenseとプレミアムサブスク（後日実装）で収益化する。

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript（strict mode）
- **Styling**: Tailwind CSS v3
- **Deploy**: Vercel
- **Font**: Inter（英数）+ Noto Sans JP（日本語）
- **Analytics**: Google Analytics 4（後日）
- **Ads**: Google AdSense（後日）

## ディレクトリ構成

```
kyuryo-lab/
├── app/
│   ├── layout.tsx              # ルートレイアウト（フォント・meta）
│   ├── page.tsx                # トップ = 残業代計算
│   ├── kyuryo/
│   │   └── tetsuke/
│   │       └── page.tsx        # 給与手取り計算
│   ├── kyuryo/
│   │   └── jikyu/
│   │       └── page.tsx        # 時給換算計算（Week2）
│   ├── eigyobi/
│   │   └── page.tsx            # 営業日計算（Week2）
│   └── guide/                  # SEOコンテンツ（Week2）
├── components/
│   ├── ui/
│   │   ├── input-field.tsx     # ラベル付きinput（共通）
│   │   ├── result-card.tsx     # 計算結果表示カード
│   │   ├── tooltip.tsx         # ツールチップ
│   │   └── copy-button.tsx     # コピーボタン
│   ├── calculators/
│   │   ├── overtime-calculator.tsx    # 残業代計算フォーム
│   │   └── takehome-calculator.tsx    # 手取り計算フォーム
│   └── layout/
│       ├── header.tsx
│       ├── footer.tsx
│       └── nav.tsx
├── lib/
│   ├── calc/
│   │   ├── overtime.ts         # 残業代計算ロジック
│   │   ├── takehome.ts         # 手取り計算ロジック
│   │   └── jikyu.ts            # 時給換算ロジック（Week2）
│   └── constants.ts            # 税率・保険料率定数
└── public/
    └── og-image.png            # OGP画像
```

## デザインシステム

### カラーパレット

```
プライマリ:    slate-700 (#334155)  — ボタン・強調
アクセント:    blue-600  (#2563eb)  — リンク・アクティブ
背景:          slate-50  (#f8fafc)  — ページ背景
カード背景:    white     (#ffffff)  — カード
ボーダー:      slate-200 (#e2e8f0)  — ライン
成功/結果:     emerald-600 (#059669) — 計算結果の金額
警告:          amber-500  (#f59e0b)
```

### タイポグラフィ

```
見出し h1:   text-3xl (30px) font-bold    — ページタイトル
見出し h2:   text-xl (20px) font-semibold — セクション
本文:        text-base (16px) text-slate-700
補足:        text-sm (14px) text-slate-500
計算結果:    text-4xl (36px) font-bold text-emerald-600 — 金額表示
ラベル:      text-sm font-medium text-slate-600
```

### コンポーネント規約

- カード: `bg-white rounded-2xl border border-slate-200 p-6 shadow-sm`
- 入力フィールド: `w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent`
- プライマリボタン: `bg-slate-800 text-white rounded-xl px-6 py-3 font-medium hover:bg-slate-700 transition-colors`
- ツールチップ: hover時にグレーのpopoverで補足説明

## 計算ロジック仕様

### 1. 残業代計算（`lib/calc/overtime.ts`）

#### 入力値

| 変数名 | 説明 | 単位 | デフォルト |
|--------|------|------|---------|
| monthlySalary | 基本月給 | 円 | 250000 |
| monthlyWorkHours | 月所定労働時間 | 時間 | 160 |
| overtimeHours | 残業時間（時間外労働） | 時間 | 0 |
| lateNightHours | 深夜残業時間（22〜5時） | 時間 | 0 |
| holidayHours | 法定休日出勤時間 | 時間 | 0 |

#### 計算式

```typescript
// 1. 基礎時給を算出
const hourlyRate = monthlySalary / monthlyWorkHours

// 2. 残業代（時間外労働 25%増）
// ※ 月60時間超は50%増（中小企業含む 2023年4月〜）
const overtimePay = overtimeHours <= 60
  ? hourlyRate * 1.25 * overtimeHours
  : hourlyRate * 1.25 * 60 + hourlyRate * 1.50 * (overtimeHours - 60)

// 3. 深夜割増（深夜残業は残業25% + 深夜25% = 50%増）
// ただし深夜残業でない深夜労働は25%増
const lateNightPay = hourlyRate * 0.25 * lateNightHours
// ※ 深夜残業の場合は overtimeHours に含めてユーザーに入力させ、
//    さらに深夜割増0.25を加算する設計

// 4. 法定休日出勤（35%増）
const holidayPay = hourlyRate * 1.35 * holidayHours

// 5. 合計
const totalOvertimePay = overtimePay + lateNightPay + holidayPay
const totalMonthlyPay = monthlySalary + totalOvertimePay
```

#### 表示する計算結果

1. 基礎時給
2. 残業代合計
3. 深夜割増額
4. 休日出勤手当
5. 今月の給与合計（基本給 + 残業代）

### 2. 給与手取り計算（`lib/calc/takehome.ts`）

#### 入力値

| 変数名 | 説明 | デフォルト |
|--------|------|---------|
| monthlyIncome | 月収（税込）| 300000 |
| dependents | 扶養人数 | 0 |
| insuranceType | 社会保険区分 | 'company'（会社員） |
| age | 年齢（40歳以上は介護保険料） | 30 |

#### 計算式（令和6年度版）

```typescript
const RATES = {
  // 協会けんぽ（東京）令和6年度
  healthInsurance: 0.0998,     // 健康保険料率 9.98%（労使折半 → 本人4.99%）
  nursingCare: 0.0182,         // 介護保険料率 1.82%（40歳以上、労使折半→本人0.91%）
  pension: 0.183,              // 厚生年金 18.3%（労使折半→本人9.15%）
  employmentInsurance: 0.006,  // 雇用保険 0.6%（一般労働者）
  residentTax: 0.10,           // 住民税 約10%
}

// 標準報酬月額（簡易計算：月収をそのまま使用）
const standardMonthly = monthlyIncome

// 社会保険料
const healthInsurancePay = Math.floor(standardMonthly * (RATES.healthInsurance / 2))
const nursingCarePay = age >= 40 
  ? Math.floor(standardMonthly * (RATES.nursingCare / 2)) 
  : 0
const pensionPay = Math.floor(standardMonthly * (RATES.pension / 2))
const employmentPay = Math.floor(monthlyIncome * RATES.employmentInsurance)

const socialInsuranceTotal = healthInsurancePay + nursingCarePay + pensionPay + employmentPay

// 所得税（簡易計算）
// 給与所得控除後の金額 → 基礎控除(48万/12=4万/月) → 扶養控除 → 課税所得
const annualIncome = monthlyIncome * 12
const salaryDeduction = annualIncome <= 1_625_000 ? 550_000
  : annualIncome <= 1_800_000 ? annualIncome * 0.4 - 100_000
  : annualIncome <= 3_600_000 ? annualIncome * 0.3 + 80_000
  : annualIncome <= 6_600_000 ? annualIncome * 0.2 + 440_000
  : annualIncome * 0.1 + 1_100_000
const basicDeduction = 480_000
const dependentDeduction = dependents * 380_000
const annualSocialInsurance = socialInsuranceTotal * 12
const taxableIncome = Math.max(0, annualIncome - salaryDeduction - basicDeduction - dependentDeduction - annualSocialInsurance)

// 所得税率（速算表）
const incomeTax = taxableIncome <= 1_950_000 ? taxableIncome * 0.05
  : taxableIncome <= 3_300_000 ? taxableIncome * 0.10 - 97_500
  : taxableIncome <= 6_950_000 ? taxableIncome * 0.20 - 427_500
  : taxableIncome * 0.23 - 636_000  // 簡易版
const monthlyIncomeTax = Math.floor((incomeTax * 1.021) / 12) // 復興特別税込

// 住民税（前年度所得基準の簡易推定）
const residentTax = Math.floor(taxableIncome * 0.10 / 12)

// 手取り
const takeHome = monthlyIncome - socialInsuranceTotal - monthlyIncomeTax - residentTax
```

#### 表示する計算結果

1. 手取り額（大きく表示）
2. 健康保険料
3. 厚生年金
4. 雇用保険
5. 所得税（概算）
6. 住民税（概算）
7. 社会保険料合計
8. 税・社会保険合計

## SEO要件

### メタデータ

```typescript
// app/page.tsx
export const metadata = {
  title: '残業代計算 | 無料で即計算・スマホ対応',
  description: '残業時間・深夜・休日出勤の残業代を無料で即計算。スマホで使いやすいシンプルなUIで、時間外・深夜・法定休日の割増賃金を正確に算出します。',
  keywords: '残業代計算,残業代,計算,割増賃金,時間外労働',
  openGraph: {
    title: '残業代計算 | 無料で即計算・スマホ対応',
    description: '...',
    type: 'website',
  },
}
```

### 構造化データ（schema.org）

各ページに `WebApplication` タイプの構造化データを追加する。

## UI/UX 要件（重要）

### モバイルファーストのレイアウト原則

1. **入力フォーム → 結果** の順番で縦に並べる（スクロール不要）
2. 数値入力は `inputmode="decimal"` を指定しスマホのテンキーを出す
3. 入力のたびにリアルタイム計算（`onChange`で即時更新）
4. 計算結果は **36〜40px の大きな数字** で表示
5. スライダー（`<input type="range">`）を数値入力と併用

### ページ構成（トップ / 残業代計算）

```
[ヘッダー: サイト名 + ナビ]
[hero: キャッチコピー + 入力フォーム（SP: 縦1列、PC: 左入力・右結果の2カラム）]
[補足説明セクション: 計算方法の解説テキスト]
[関連ツールのカード列: 手取り計算・時給換算へのリンク]
[Q&Aセクション: よくある質問]
[フッター]
```

### アニメーション

- 計算結果の数字が変わるとき: `transition-all duration-200` でふわっと更新
- ホバー時: `hover:bg-slate-50 transition-colors duration-150`
- それ以外のアニメーションは最小限に

## コーディング規約

- コンポーネントは必ずClient Component（`'use client'`）で計算フォームを実装
- 計算ロジックは `lib/calc/` に純粋関数として分離（UIに混在させない）
- `formatCurrency(n: number): string` ユーティリティを作成（円表示の統一）
- 数値は必ず `Math.floor()` で小数点以下を切り捨て（お金の計算）
- 入力値のバリデーション: 0以下は0として扱い、エラーは出さない

## Week 1 タスク

todo.mdを参照。Week1スコープのみ実装する。

## 注意事項

- 税率・保険料率は `lib/constants.ts` に集中管理し、変更しやすくする
- 計算結果はあくまで「概算」であることを小さく表示する
- AdSenseの広告スペースは `<!-- AdSense slot -->` コメントとして場所を確保しておく（後日差し込み）
- `console.log` は本番コードに残さない
