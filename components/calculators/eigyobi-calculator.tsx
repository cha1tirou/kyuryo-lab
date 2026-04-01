"use client";

import { useState } from "react";
import ResultCard from "../ui/result-card";
import { calcEigyobi } from "../../lib/calc/eigyobi";

function getDefaultStartDate(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  return `${yyyy}-${mm}-01`;
}

function getDefaultEndDate(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = now.getMonth() + 1;
  const lastDay = new Date(yyyy, mm, 0).getDate();
  return `${yyyy}-${String(mm).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
}

export default function EigyobiCalculator() {
  const [startDate, setStartDate] = useState(getDefaultStartDate);
  const [endDate, setEndDate] = useState(getDefaultEndDate);
  const [includeHolidays, setIncludeHolidays] = useState(true);

  const result = calcEigyobi({ startDate, endDate, includeHolidays });

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
              開始日
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow bg-white"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-600">
              終了日
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow bg-white"
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="includeHolidays"
              checked={includeHolidays}
              onChange={(e) => setIncludeHolidays(e.target.checked)}
              className="h-5 w-5 rounded border-slate-300 text-slate-700 focus:ring-blue-500"
            />
            <label htmlFor="includeHolidays" className="text-sm font-medium text-slate-600">
              祝日を休業日に含める
            </label>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          計算結果
        </h2>
        <div className="mb-6 text-center">
          <p className="text-sm text-slate-500 mb-1">営業日数</p>
          <p className="text-4xl font-bold text-emerald-600 transition-all duration-200">
            {result.businessDays}日
          </p>
        </div>
        <div className="border-t border-slate-100 pt-4 space-y-1">
          <ResultCard label="期間の総日数" value={`${result.totalDays}日`} />
          <ResultCard label="土日の日数" value={`${result.weekendDays}日`} />
          {includeHolidays && (
            <ResultCard label="祝日の日数（土日除く）" value={`${result.holidayDays}日`} />
          )}
          <ResultCard label="営業日の総労働時間（8h/日）" value={`${result.workHours}時間`} />
        </div>
        <p className="mt-4 text-xs text-slate-400">
          ※ 祝日データは2024〜2026年に対応しています。会社独自の休業日は含まれていません。
        </p>
      </div>
    </div>
  );
}
