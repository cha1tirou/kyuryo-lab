"use client";

import { useState } from "react";
import InputField from "../ui/input-field";
import ResultCard from "../ui/result-card";
import { calcJikyu } from "../../lib/calc/jikyu";
import { formatCurrency } from "../../lib/utils";
import ShareButtons from "../ui/share-buttons";

export default function JikyuCalculator() {
  const [salaryType, setSalaryType] = useState<"monthly" | "annual">("monthly");
  const [salary, setSalary] = useState(250000);
  const [monthlyWorkHours, setMonthlyWorkHours] = useState(160);
  const [workDaysPerMonth, setWorkDaysPerMonth] = useState(20);

  const result = calcJikyu({
    salaryType,
    salary,
    monthlyWorkHours,
    workDaysPerMonth,
  });

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Input Form */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          条件を入力
        </h2>
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-600">
              給与タイプ
            </label>
            <select
              value={salaryType}
              onChange={(e) => {
                const type = e.target.value as "monthly" | "annual";
                setSalaryType(type);
                if (type === "annual" && salary < 100000) {
                  setSalary(3000000);
                } else if (type === "monthly" && salary > 2000000) {
                  setSalary(250000);
                }
              }}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow bg-white"
            >
              <option value="monthly">月給</option>
              <option value="annual">年収</option>
            </select>
          </div>
          <InputField
            label={salaryType === "monthly" ? "月給" : "年収"}
            value={salary}
            onChange={setSalary}
            unit="円"
            min={0}
            max={salaryType === "monthly" ? 2000000 : 24000000}
            step={salaryType === "monthly" ? 10000 : 100000}
            showSlider
          />
          <InputField
            label="月所定労働時間"
            value={monthlyWorkHours}
            onChange={setMonthlyWorkHours}
            unit="時間"
            min={1}
            max={200}
            tooltip="一般的には160時間（8時間×20日）"
          />
          <InputField
            label="月所定労働日数"
            value={workDaysPerMonth}
            onChange={setWorkDaysPerMonth}
            unit="日"
            min={1}
            max={31}
            tooltip="一般的には20日（週5日勤務）"
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          計算結果
        </h2>
        <div className="mb-6 text-center">
          <p className="text-sm text-slate-500 mb-1">時給換算</p>
          <p className="text-4xl font-bold text-emerald-600 transition-all duration-200">
            {formatCurrency(result.hourlyRate)}
          </p>
        </div>
        <div className="border-t border-slate-100 pt-4 space-y-1">
          <ResultCard label="日給換算" value={formatCurrency(result.dailyRate)} />
          <ResultCard label="月給" value={formatCurrency(result.monthlySalary)} />
          <ResultCard label="年収" value={formatCurrency(result.annualSalary)} />
          <ResultCard label="1日の所定労働時間" value={`${result.workHoursPerDay}時間`} />
        </div>
        <p className="mt-4 text-xs text-slate-400">
          ※ 計算結果は概算です。賞与・手当等は含まれていません。
        </p>
        <ShareButtons
          text={`時給換算すると${formatCurrency(result.hourlyRate)}でした（給料ラボで計算）`}
          url="https://kyuryo-lab.com/kyuryo/jikyu"
        />
      </div>
    </div>
  );
}
