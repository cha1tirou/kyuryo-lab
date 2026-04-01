export interface JikyuInputs {
  salaryType: "monthly" | "annual";
  salary: number; // 月給 or 年収（円）
  monthlyWorkHours: number; // 月所定労働時間
  workDaysPerMonth: number; // 月所定労働日数
}

export interface JikyuResult {
  hourlyRate: number; // 時給
  dailyRate: number; // 日給
  monthlySalary: number; // 月給
  annualSalary: number; // 年収
  workHoursPerDay: number; // 1日の所定労働時間
}

export function calcJikyu(inputs: JikyuInputs): JikyuResult {
  const { salaryType, salary, monthlyWorkHours, workDaysPerMonth } = inputs;

  const safeWorkDays = workDaysPerMonth > 0 ? workDaysPerMonth : 1;
  const safeWorkHours = monthlyWorkHours > 0 ? monthlyWorkHours : 1;

  const monthlySalary = salaryType === "annual" ? Math.floor(salary / 12) : salary;
  const annualSalary = salaryType === "monthly" ? salary * 12 : salary;

  const hourlyRate = Math.floor(monthlySalary / safeWorkHours);
  const dailyRate = Math.floor(monthlySalary / safeWorkDays);
  const workHoursPerDay = Math.round((monthlyWorkHours / safeWorkDays) * 10) / 10;

  return {
    hourlyRate,
    dailyRate,
    monthlySalary,
    annualSalary,
    workHoursPerDay,
  };
}
