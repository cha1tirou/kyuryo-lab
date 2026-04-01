// 日本の祝日（2024-2026年）
const JAPANESE_HOLIDAYS: string[] = [
  // 2024
  "2024-01-01", "2024-01-08", "2024-02-11", "2024-02-12", "2024-02-23",
  "2024-03-20", "2024-04-29", "2024-05-03", "2024-05-04", "2024-05-05",
  "2024-05-06", "2024-07-15", "2024-08-11", "2024-08-12", "2024-09-16",
  "2024-09-22", "2024-09-23", "2024-10-14", "2024-11-03", "2024-11-04",
  "2024-11-23", "2024-12-23",
  // 2025
  "2025-01-01", "2025-01-13", "2025-02-11", "2025-02-23", "2025-02-24",
  "2025-03-20", "2025-04-29", "2025-05-03", "2025-05-04", "2025-05-05",
  "2025-05-06", "2025-07-21", "2025-08-11", "2025-09-15", "2025-09-23",
  "2025-10-13", "2025-11-03", "2025-11-23", "2025-11-24",
  // 2026
  "2026-01-01", "2026-01-12", "2026-02-11", "2026-02-23", "2026-03-20",
  "2026-04-29", "2026-05-03", "2026-05-04", "2026-05-05", "2026-05-06",
  "2026-07-20", "2026-08-11", "2026-09-21", "2026-09-22", "2026-09-23",
  "2026-10-12", "2026-11-03", "2026-11-23",
];

const holidaySet = new Set(JAPANESE_HOLIDAYS);

function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function isHoliday(date: Date): boolean {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return holidaySet.has(`${yyyy}-${mm}-${dd}`);
}

export interface EigyobiInputs {
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  includeHolidays: boolean; // 祝日を休みに含むか
}

export interface EigyobiResult {
  totalDays: number; // 期間の総日数
  businessDays: number; // 営業日数
  weekendDays: number; // 土日数
  holidayDays: number; // 祝日数（土日と重複しない）
  workHours: number; // 営業日 × 8時間
}

export function calcEigyobi(inputs: EigyobiInputs): EigyobiResult {
  const { startDate, endDate, includeHolidays } = inputs;

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
    return { totalDays: 0, businessDays: 0, weekendDays: 0, holidayDays: 0, workHours: 0 };
  }

  let totalDays = 0;
  let weekendDays = 0;
  let holidayDays = 0;
  let businessDays = 0;

  const current = new Date(start);
  while (current <= end) {
    totalDays++;
    const weekend = isWeekend(current);
    const holiday = !weekend && includeHolidays && isHoliday(current);

    if (weekend) {
      weekendDays++;
    } else if (holiday) {
      holidayDays++;
    } else {
      businessDays++;
    }

    current.setDate(current.getDate() + 1);
  }

  return {
    totalDays,
    businessDays,
    weekendDays,
    holidayDays,
    workHours: businessDays * 8,
  };
}
