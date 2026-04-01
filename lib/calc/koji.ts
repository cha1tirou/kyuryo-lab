export interface KojiInputs {
  totalHours: number; // 総工数（時間）
  hoursPerDay: number; // 1日の稼働時間
  numberOfPeople: number; // 人数
  unitCost: number; // 1人月単価（円）
}

export interface KojiResult {
  manDays: number; // 人日
  manMonths: number; // 人月（小数1桁）
  daysPerPerson: number; // 1人あたり日数
  hoursPerPerson: number; // 1人あたり時間
  estimatedCost: number; // 概算費用（円）
  durationDays: number; // 所要日数（人数で割った実日数）
}

export function calcKoji(inputs: KojiInputs): KojiResult {
  const { totalHours, hoursPerDay, numberOfPeople, unitCost } = inputs;

  const safeHoursPerDay = hoursPerDay > 0 ? hoursPerDay : 8;
  const safePeople = numberOfPeople > 0 ? numberOfPeople : 1;

  // 人日 = 総工数 ÷ 1日の稼働時間
  const manDays = Math.round((totalHours / safeHoursPerDay) * 10) / 10;

  // 人月 = 人日 ÷ 20（月20営業日として）
  const manMonths = Math.round((manDays / 20) * 100) / 100;

  // 1人あたり
  const daysPerPerson = Math.round((manDays / safePeople) * 10) / 10;
  const hoursPerPerson = Math.round((totalHours / safePeople) * 10) / 10;

  // 所要日数（人数で割った実日数）
  const durationDays = Math.ceil(manDays / safePeople);

  // 概算費用 = 人月 × 単価
  const estimatedCost = Math.floor(manMonths * unitCost);

  return {
    manDays,
    manMonths,
    daysPerPerson,
    hoursPerPerson,
    estimatedCost,
    durationDays,
  };
}
