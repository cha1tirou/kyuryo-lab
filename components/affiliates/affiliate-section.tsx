import AffiliateCard from "./affiliate-card";

interface AffiliateItem {
  icon: string;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  note?: string;
}

interface AffiliateSectionProps {
  heading?: string;
  items: AffiliateItem[];
}

export default function AffiliateSection({
  heading = "あわせてチェック",
  items,
}: AffiliateSectionProps) {
  if (items.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <AffiliateCard key={item.href} {...item} />
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-400">
        ※ 上記リンクはアフィリエイト広告を含む場合があります
      </p>
    </section>
  );
}
