import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kyuryo-lab.com'
  return [
    // Calculator tools
    { url: base, lastModified: '2025-04-05', changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/kyuryo/tetsuke`, lastModified: '2025-04-05', changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/kyuryo/jikyu`, lastModified: '2025-04-05', changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/eigyobi`, lastModified: '2025-04-05', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/koji`, lastModified: '2025-04-05', changeFrequency: 'weekly', priority: 0.8 },
    // Guide index
    { url: `${base}/guide`, lastModified: '2025-04-05', changeFrequency: 'weekly', priority: 0.7 },
    // Guide articles (Week 2 — original)
    { url: `${base}/guide/zangyoudai-keisan-houhou`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/tedori-shikumi`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/shakaihokenryou-guide`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/zangyou-60jikan-rule`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/nenshu-tedori-hayamihyou`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    // Guide articles (Tier 1)
    { url: `${base}/guide/shotokuzei-keisan`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/juuminzei-keisan`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/kyuyo-meisai-mikata`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/saitei-chingin`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    // Guide articles (Tier 2)
    { url: `${base}/guide/nenmatsu-chousei`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/bonus-zeikin`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/taishokukin-zeikin`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/fuyou-kojo-guide`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    // New SEO articles
    { url: `${base}/guide/103man-kabe`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/shakai-hoken-kanyu-jouken`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/yukyu-kyuka-keisan`, lastModified: '2025-04-05', changeFrequency: 'monthly', priority: 0.7 },
    // New SEO articles (Week 3)
    { url: `${base}/guide/nenshuu-heikin`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/zangyou-jikan-joigen`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/fuyou-nai-hatarakikata`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/fukugyou-zeikin`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/tenshoku-kyuyo-koushou`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/shakaihokenryou-setuyaku`, lastModified: '2026-04-05', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/zangyodai-miharai-soudan`, lastModified: '2026-04-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guide/taishoku-daiko-towa`, lastModified: '2026-04-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/guide/taishoku-daikou-ryoukin-souba`, lastModified: '2026-04-17', changeFrequency: 'monthly', priority: 0.8 },
  ]
}
