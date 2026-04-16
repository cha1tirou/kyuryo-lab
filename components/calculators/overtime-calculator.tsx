"use client";

import { useState } from "react";
import InputField from "../ui/input-field";
import ResultCard from "../ui/result-card";
import { calcOvertime } from "../../lib/calc/overtime";
import { formatCurrency } from "../../lib/utils";
import ShareButtons from "../ui/share-buttons";
import Link from "next/link";

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
        <ShareButtons
          text={`残業代は${formatCurrency(result.totalOvertimePay)}でした（給料ラボで計算）`}
          url="https://kyuryo-lab.com/"
        />

        {/* 動的CTA：計算結果が0円超の場合のみ表示 */}
        {result.totalOvertimePay > 0 && (
          <div className="mt-6 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-800 mb-1">
              💡 この残業代、取り戻せるかもしれません
            </p>
            <p className="text-xs text-amber-700 mb-4 leading-relaxed">
              未払いの残業代は<strong>3年以内</strong>なら請求できます。
              弁護士への相談は無料・完全成功報酬型の事務所が増えています。
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="https://www.abias-law.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex-1 block rounded-xl bg-amber-500 px-4 py-3 text-center text-sm font-bold text-white hover:bg-amber-600 transition-colors"
              >
                ⚖️ 弁護士に無料相談する
              </a>
              <a
                href="https://ck.valuecommerce.ne.jp/servlet/referral?sid=2999025&pid=881512136"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex-1 block rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                🚪 退職代行を見てみる
              </a>
            </div>
            <p className="mt-2 text-center text-xs text-amber-600">PR・相談料0円・全国対応</p>
          </div>
        )}
      </div>
    </div>
  );
}
