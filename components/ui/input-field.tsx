"use client";

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  tooltip?: string;
  showSlider?: boolean;
}

export default function InputField({
  label,
  value,
  onChange,
  unit,
  min = 0,
  max,
  step = 1,
  tooltip,
  showSlider = false,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-1 text-sm font-medium text-slate-600">
        {label}
        {tooltip && <TooltipIcon text={tooltip} />}
      </label>
      <div className="flex items-center gap-2">
        <div className="flex w-full items-center rounded-xl border border-slate-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-shadow">
          <button
            type="button"
            aria-label={`${label}を減らす`}
            onClick={() => {
              const next = value - step;
              onChange(next < min ? min : next);
            }}
            className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-l-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 active:bg-slate-200 transition-colors select-none"
          >
            −
          </button>
          <input
            type="text"
            inputMode="decimal"
            aria-label={label}
            value={value}
            onChange={(e) => {
              const v = parseFloat(e.target.value);
              const clamped = isNaN(v) || v < min ? min : max !== undefined && v > max ? max : v;
              onChange(clamped);
            }}
            className="w-full min-w-0 border-x border-slate-300 px-3 py-3 text-center text-base outline-none"
          />
          <button
            type="button"
            aria-label={`${label}を増やす`}
            onClick={() => {
              const next = value + step;
              onChange(max !== undefined && next > max ? max : next);
            }}
            className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-r-xl text-lg font-semibold text-slate-500 hover:bg-slate-100 active:bg-slate-200 transition-colors select-none"
          >
            +
          </button>
        </div>
        {unit && (
          <span className="shrink-0 text-sm text-slate-500">{unit}</span>
        )}
      </div>
      {showSlider && max !== undefined && (
        <input
          type="range"
          aria-label={`${label}スライダー`}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full accent-slate-700"
        />
      )}
    </div>
  );
}

function TooltipIcon({ text }: { text: string }) {
  return (
    <span className="group relative cursor-help">
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-500">
        ?
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-700 px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {text}
      </span>
    </span>
  );
}
