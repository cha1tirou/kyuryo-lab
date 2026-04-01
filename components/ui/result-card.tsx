interface ResultCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

export default function ResultCard({
  label,
  value,
  highlight = false,
}: ResultCardProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-slate-500">{label}</span>
      <span
        className={
          highlight
            ? "text-4xl font-bold text-emerald-600 transition-all duration-200"
            : "text-base font-semibold text-slate-800 transition-all duration-200"
        }
      >
        {value}
      </span>
    </div>
  );
}
