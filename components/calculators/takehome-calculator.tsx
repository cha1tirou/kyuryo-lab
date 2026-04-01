"use client";

import { useState } from "react";
import InputField from "../ui/input-field";
import ResultCard from "../ui/result-card";
import { calcTakehome } from "../../lib/calc/takehome";
import { formatCurrency } from "../../lib/utils";

export default function TakehomeCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(300000);
  const [dependents, setDependents] = useState(0);
  const [age, setAge] = useState(30);
  const [insuranceType, setInsuranceType] = useState<"company" | "self">(
    "company"
  );

  const result = calcTakehome({
    monthlyIncome,
    dependents,
    insuranceType,
    age,
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
            label="月収（税込）"
            value={monthlyIncome}
            onChange={setMonthlyIncome}
            unit="円"
            min={0}
            max={2000000}
            step={10000}
            showSlider
          />
          <InputField
            label="年齢"
            value={age}
            onChange={setAge}
            unit="歳"
            min={18}
            max={70}
            tooltip="40歳以上は介護保険料が加算されます"
          />
          <InputField
            label="扶養人数"
            value={dependents}
            onChange={setDependents}
            unit="人"
            min={0}
            max={10}
            tooltip="配偶者控除・扶養控除の対象人数"
          />
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-600">
              社会保険区分
            </label>
            <select
              value={insuranceType}
              onChange={(e) =>
                setInsuranceType(e.target.value as "company" | "self")
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow bg-white"
            >
              <option value="company">会社員（協会けんぽ）</option>
              <option value="self">自営業（国民健康保険）</option>
            </select>
          </div>
        </div>
      </div>

      {/* 計算結果 */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          計算結果
        </h2>
        <div className="mb-6 text-center">
          <p className="text-sm text-slate-500 mb-1">手取り額</p>
          <p className="text-4xl font-bold text-emerald-600 transition-all duration-200">
            {formatCurrency(result.takeHome)}
          </p>
        </div>

        <div className="border-t border-slate-100 pt-4 space-y-1">
          <h3 className="text-sm font-semibold text-slate-500 mb-2">
            社会保険料
          </h3>
          <ResultCard
            label="健康保険料"
            value={formatCurrency(result.healthInsurancePay)}
          />
          {result.nursingCarePay > 0 && (
            <ResultCard
              label="介護保険料"
              value={formatCurrency(result.nursingCarePay)}
            />
          )}
          <ResultCard
            label="厚生年金"
            value={formatCurrency(result.pensionPay)}
          />
          <ResultCard
            label="雇用保険"
            value={formatCurrency(result.employmentPay)}
          />
          <div className="border-t border-slate-100 pt-2 mt-2">
            <ResultCard
              label="社会保険料合計"
              value={formatCurrency(result.socialInsuranceTotal)}
            />
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4 mt-4 space-y-1">
          <h3 className="text-sm font-semibold text-slate-500 mb-2">税金</h3>
          <ResultCard
            label="所得税（概算）"
            value={formatCurrency(result.monthlyIncomeTax)}
          />
          <ResultCard
            label="住民税（概算）"
            value={formatCurrency(result.residentTax)}
          />
        </div>

        <div className="mt-6 border-t border-slate-200 pt-4">
          <ResultCard
            label="控除合計（税・社会保険）"
            value={formatCurrency(result.totalDeduction)}
          />
        </div>

        <p className="mt-4 text-xs text-slate-400">
          ※
          計算結果は概算です。標準報酬月額の等級や自治体による差異は考慮していません。
        </p>
      </div>
    </div>
  );
}
