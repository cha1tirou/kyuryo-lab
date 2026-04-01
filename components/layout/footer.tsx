export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 mt-auto">
      <div className="mx-auto max-w-4xl px-4 text-center text-sm text-slate-400">
        <p className="mb-1">
          計算結果はあくまで概算です。正確な金額は勤務先・税務署等にご確認ください。
        </p>
        <p>&copy; {new Date().getFullYear()} 給料ラボ</p>
        {/* AdSense slot */}
      </div>
    </footer>
  );
}
