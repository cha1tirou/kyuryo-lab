"use client";

interface AffiliateCardProps {
  icon: string;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  note?: string;
}

// GA4にアフィリエイトクリックを送信
function trackAffiliateClick(href: string, title: string) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (!w.gtag) return;
  w.gtag("event", "affiliate_click", {
    affiliate_name: title,
    affiliate_url: href,
    page_path: window.location.pathname,
    event_category: "affiliate",
    event_label: title,
  });
}

export default function AffiliateCard({
  icon, label, title, description, ctaText, href, note,
}: AffiliateCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      onClick={() => trackAffiliateClick(href, title)}
      className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:bg-slate-50"
    >
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
          {label}
        </span>
      </div>
      <div>
        <p className="font-semibold text-slate-800 leading-snug">{title}</p>
        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto">
        <span className="inline-block rounded-xl bg-slate-800 px-4 py-2 text-sm font-medium text-white">
          {ctaText} →
        </span>
        {note && <p className="mt-2 text-xs text-slate-400">{note}</p>}
      </div>
    </a>
  );
}
