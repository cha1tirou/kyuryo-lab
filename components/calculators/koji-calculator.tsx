"use client";

import { useState } from "react";
import InputField from "../ui/input-field";
import ResultCard from "../ui/result-card";
import { calcKoji } from "../../lib/calc/koji";
import { formatCurrency } from "../../lib/utils";

export default function KojiCalculator() {
  const [totalHours, setTotalHours] = useState(160);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [unitCost, setUnitCost] = useState(800000);

  const result = calcKoji({
    totalHours,
    hoursPerDay,
    numberOfPeople,
    unitCost,
  });

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Input Form */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          条件を入力
        </h2>
        <div className="space-y-5">
          <InputField
            label="総工数"
            value={totalHours}
            onChange={setTotalHours}
            unit="時間"
            min={0}
            max={10000}
            step={10}
            showSlider
            tooltip="プロジェクト全体の作業時間"
          />
          <InputField
            label="1日の稼働時間"
            value={hoursPerDay}
            onChange={setHoursPerDay}
            unit="時間"
            min={1}
            max={12}
            tooltip="1人が1日に稼働する時間"
          />
          <InputField
            label="人数"
            value={numberOfPeople}
            onChange={setNumberOfPeople}
            unit="人"
            min={1}
            max={100}
          />
          <InputField
            label="1人月単価"
            value={unitCost}
            onChange={setUnitCost}
            unit="円"
            min={0}
            max={3000000}
            step={50000}
            showSlider
            tooltip="エンジニア1人月あたりの単価"
          />
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          計算結果
        </h2>
        <div className="mb-6 text-center">
          <p className="text-sm text-slate-500 mb-1">工数</p>
          <p className="text-4xl font-bold text-emerald-600 transition-all duration-200">
            {result.manMonths}人月
          </p>
        </div>
        <div className="border-t border-slate-100 pt-4 space-y-1">
          <ResultCard label="人日換算" value={`${result.manDays}人日`} />
          <ResultCard label="1人あたり日数" value={`${result.daysPerPerson}日`} />
          <ResultCard label="1人あたり時間" value={`${result.hoursPerPerson}時間`} />
          <ResultCard label="所要日数（実日数）" value={`${result.durationDays}日`} />
        </div>
        <div className="mt-6 border-t border-slate-200 pt-4">
          <ResultCard
            label="概算費用"
            value={formatCurrency(result.estimatedCost)}
            highlight
          />
        </div>
        <p className="mt-4 text-xs text-slate-400">
          ※ 1人月 = 20営業日として計算しています。概算費用は目安です。
        </p>
      </div>
    </div>
  );
}
