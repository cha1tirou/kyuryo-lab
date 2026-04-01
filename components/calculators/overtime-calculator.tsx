"use client";

import { useState } from "react";
import InputField from "../ui/input-field";
import ResultCard from "../ui/result-card";
import { calcOvertime } from "../../lib/calc/overtime";
import { formatCurrency } from "../../lib/utils";

export default function OvertimeCalculator() {
  const [monthlySalary, setMonthlySalary] = useState(250000);
  const [monthlyWorkHours, setMonthlyWorkHours] = useState(160);
  const [overtimeHours, setOvertimeHours] = useState(20);
  const [lateNightHours, setLateNightHours] = useState(0);
  const [holidayHours, setHolidayHours] = useState(0);

  const result = calcOvertime({
    monthlySalary,
    monthlyWorkHours,
    overtimeHours,
    lateNightHours,
    holidayHours,
  });

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* 入力フォーム */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          条件を入力
        </h2>
        <div className="space-y-5">
          <InputField
            label="基本月給"
            value={monthlySalary}
            onChange={setMonthlySalary}
            unit="円"
            min={0}
            max={1000000}
            step={10000}
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
            label="残業時間（時間外労働）"
            value={overtimeHours}
            onChange={setOvertimeHours}
            unit="時間"
            min={0}
            max={100}
            step={1}
            showSlider
            tooltip="法定労働時間（1日8時間・週40時間）を超えた時間"
          />
          <InputField
            label="深夜残業時間（22時〜5時）"
            value={lateNightHours}
            onChange={setLateNightHours}
            unit="時間"
            min={0}
            max={100}
            tooltip="残業時間のうち22時〜5時に該当する時間"
          />
          <InputField
            label="法定休日出勤時間"
            value={holidayHours}
            onChange={setHolidayHours}
            unit="時間"
            min={0}
            max={100}
            tooltip="法定休日（週1日の休日）に出勤した時間"
          />
        </div>
      </div>

      {/* 計算結果 */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          計算結果
        </h2>
        <div className="mb-6 text-center">
          <p className="text-sm text-slate-500 mb-1">残業代合計</p>
          <p className="text-4xl font-bold text-emerald-600 transition-all duration-200">
            {formatCurrency(result.totalOvertimePay)}
          </p>
        </div>
        <div className="border-t border-slate-100 pt-4 space-y-1">
          <ResultCard label="基礎時給" value={formatCurrency(result.hourlyRate)} />
          <ResultCard label="時間外手当" value={formatCurrency(result.overtimePay)} />
          <ResultCard label="深夜割増額" value={formatCurrency(result.lateNightPay)} />
          <ResultCard label="休日出勤手当" value={formatCurrency(result.holidayPay)} />
        </div>
        <div className="mt-6 border-t border-slate-200 pt-4">
          <ResultCard
            label="今月の給与合計（基本給＋残業代）"
            value={formatCurrency(result.totalMonthlyPay)}
            highlight
          />
        </div>
        <p className="mt-4 text-xs text-slate-400">
          ※ 計算結果は概算です。実際の金額とは異なる場合があります。
        </p>
      </div>
    </div>
  );
}
