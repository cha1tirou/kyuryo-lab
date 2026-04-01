import {
  RATES,
  INCOME_TAX_BRACKETS,
  SALARY_DEDUCTION_BRACKETS,
  BASIC_DEDUCTION,
  DEPENDENT_DEDUCTION,
  RECONSTRUCTION_TAX_RATE,
} from "../constants";

export interface TakehomeInputs {
  monthlyIncome: number; // 月収（税込）
  dependents: number; // 扶養人数
  insuranceType: "company" | "self"; // 社会保険区分
  age: number; // 年齢
}

export interface TakehomeResult {
  takeHome: number; // 手取り額
  healthInsurancePay: number; // 健康保険料
  nursingCarePay: number; // 介護保険料
  pensionPay: number; // 厚生年金
  employmentPay: number; // 雇用保険
  socialInsuranceTotal: number; // 社会保険料合計
  monthlyIncomeTax: number; // 所得税（月額）
  residentTax: number; // 住民税（月額）
  totalDeduction: number; // 税・社会保険合計
}

export function calcTakehome(inputs: TakehomeInputs): TakehomeResult {
  const { monthlyIncome, dependents, age } = inputs;

  // 標準報酬月額（簡易：月収をそのまま使用）
  const standardMonthly = monthlyIncome;

  // 社会保険料
  const healthInsurancePay = Math.floor(
    standardMonthly * (RATES.healthInsurance / 2)
  );
  const nursingCarePay =
    age >= 40 ? Math.floor(standardMonthly * (RATES.nursingCare / 2)) : 0;
  const pensionPay = Math.floor(standardMonthly * (RATES.pension / 2));
  const employmentPay = Math.floor(monthlyIncome * RATES.employmentInsurance);

  const socialInsuranceTotal =
    healthInsurancePay + nursingCarePay + pensionPay + employmentPay;

  // 所得税（簡易計算）
  const annualIncome = monthlyIncome * 12;

  // 給与所得控除
  let salaryDeduction = 0;
  for (const bracket of SALARY_DEDUCTION_BRACKETS) {
    if (annualIncome <= bracket.limit) {
      salaryDeduction = bracket.calc(annualIncome);
      break;
    }
  }

  const dependentDeduction = dependents * DEPENDENT_DEDUCTION;
  const annualSocialInsurance = socialInsuranceTotal * 12;
  const taxableIncome = Math.max(
    0,
    annualIncome -
      salaryDeduction -
      BASIC_DEDUCTION -
      dependentDeduction -
      annualSocialInsurance
  );

  // 所得税率（速算表）
  let incomeTax = 0;
  for (const bracket of INCOME_TAX_BRACKETS) {
    if (taxableIncome <= bracket.limit) {
      incomeTax = taxableIncome * bracket.rate - bracket.deduction;
      break;
    }
  }
  const monthlyIncomeTax = Math.floor(
    (Math.max(0, incomeTax) * RECONSTRUCTION_TAX_RATE) / 12
  );

  // 住民税（前年度所得基準の簡易推定）
  const residentTax = Math.floor((taxableIncome * RATES.residentTax) / 12);

  // 税・社会保険合計
  const totalDeduction = socialInsuranceTotal + monthlyIncomeTax + residentTax;

  // 手取り
  const takeHome = monthlyIncome - totalDeduction;

  return {
    takeHome,
    healthInsurancePay,
    nursingCarePay,
    pensionPay,
    employmentPay,
    socialInsuranceTotal,
    monthlyIncomeTax,
    residentTax,
    totalDeduction,
  };
}
