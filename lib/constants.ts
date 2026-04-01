// 令和6年度 税率・保険料率
export const RATES = {
  // 協会けんぽ（東京）令和6年度
  healthInsurance: 0.0998, // 健康保険料率 9.98%（労使折半 → 本人4.99%）
  nursingCare: 0.0182, // 介護保険料率 1.82%（40歳以上、労使折半→本人0.91%）
  pension: 0.183, // 厚生年金 18.3%（労使折半→本人9.15%）
  employmentInsurance: 0.006, // 雇用保険 0.6%（一般労働者）
  residentTax: 0.1, // 住民税 約10%
} as const;

// 残業割増率
export const OVERTIME_RATES = {
  normal: 1.25, // 時間外労働 25%増
  over60h: 1.5, // 月60時間超 50%増
  lateNight: 0.25, // 深夜割増 25%
  holiday: 1.35, // 法定休日出勤 35%増
  threshold60h: 60, // 60時間の閾値
} as const;

// 所得税速算表
export const INCOME_TAX_BRACKETS = [
  { limit: 1_950_000, rate: 0.05, deduction: 0 },
  { limit: 3_300_000, rate: 0.1, deduction: 97_500 },
  { limit: 6_950_000, rate: 0.2, deduction: 427_500 },
  { limit: Infinity, rate: 0.23, deduction: 636_000 },
] as const;

// 給与所得控除
export const SALARY_DEDUCTION_BRACKETS = [
  { limit: 1_625_000, calc: () => 550_000 },
  { limit: 1_800_000, calc: (income: number) => income * 0.4 - 100_000 },
  { limit: 3_600_000, calc: (income: number) => income * 0.3 + 80_000 },
  { limit: 6_600_000, calc: (income: number) => income * 0.2 + 440_000 },
  { limit: Infinity, calc: (income: number) => income * 0.1 + 1_100_000 },
] as const;

// 基礎控除（年額）
export const BASIC_DEDUCTION = 480_000;

// 扶養控除（1人あたり年額）
export const DEPENDENT_DEDUCTION = 380_000;

// 復興特別所得税率
export const RECONSTRUCTION_TAX_RATE = 1.021;
