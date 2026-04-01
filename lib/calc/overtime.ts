import { OVERTIME_RATES } from "../constants";

export interface OvertimeInputs {
  monthlySalary: number; // 基本月給（円）
  monthlyWorkHours: number; // 月所定労働時間
  overtimeHours: number; // 残業時間（時間外労働）
  lateNightHours: number; // 深夜残業時間（22〜5時）
  holidayHours: number; // 法定休日出勤時間
}

export interface OvertimeResult {
  hourlyRate: number; // 基礎時給
  overtimePay: number; // 残業代（時間外）
  lateNightPay: number; // 深夜割増額
  holidayPay: number; // 休日出勤手当
  totalOvertimePay: number; // 残業代合計
  totalMonthlyPay: number; // 今月の給与合計
}

export function calcOvertime(inputs: OvertimeInputs): OvertimeResult {
  const {
    monthlySalary,
    monthlyWorkHours,
    overtimeHours,
    lateNightHours,
    holidayHours,
  } = inputs;

  // 0除算防止
  const safeWorkHours = monthlyWorkHours > 0 ? monthlyWorkHours : 1;

  // 1. 基礎時給
  const hourlyRate = monthlySalary / safeWorkHours;

  // 2. 残業代（月60時間以下: 25%増、60時間超: 50%増）
  const overtimePay =
    overtimeHours <= OVERTIME_RATES.threshold60h
      ? Math.floor(hourlyRate * OVERTIME_RATES.normal * overtimeHours)
      : Math.floor(
          hourlyRate * OVERTIME_RATES.normal * OVERTIME_RATES.threshold60h +
            hourlyRate *
              OVERTIME_RATES.over60h *
              (overtimeHours - OVERTIME_RATES.threshold60h)
        );

  // 3. 深夜割増（深夜25%分を加算）
  const lateNightPay = Math.floor(
    hourlyRate * OVERTIME_RATES.lateNight * lateNightHours
  );

  // 4. 法定休日出勤（35%増）
  const holidayPay = Math.floor(
    hourlyRate * OVERTIME_RATES.holiday * holidayHours
  );

  // 5. 合計
  const totalOvertimePay = overtimePay + lateNightPay + holidayPay;
  const totalMonthlyPay = monthlySalary + totalOvertimePay;

  return {
    hourlyRate: Math.floor(hourlyRate),
    overtimePay,
    lateNightPay,
    holidayPay,
    totalOvertimePay,
    totalMonthlyPay,
  };
}
