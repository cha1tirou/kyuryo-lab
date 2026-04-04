import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kyuryo-lab.com'
  return [
    // Calculator tools
    { url: base, lastModified: '2025-04-04', changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/kyuryo/tetsuke`, lastModified: '2025-04-04', changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/kyuryo/jikyu`, lastModified: '2025-04-04', changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/eigyobi`, lastModified: '2025-04-04', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/koji`, lastModified: '2025-04-04', changeFrequency: 'weekly', priority: 0.8 },
    // Guide index
    { url: `${base}/guide`, lastModified: '2025-04-04', changeFrequency: 'weekly', priority: 0.7 },
    // Guide articles (Week 2)
    { url: `${base}/guide/zangyoudai-keisan-houhou`, lastModified: '2025-01-15', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/tedori-shikumi`, lastModified: '2025-01-15', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/shakaihokenryou-guide`, lastModified: '2025-01-15', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/zangyou-60jikan-rule`, lastModified: '2025-01-15', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/nenshu-tedori-hayamihyou`, lastModified: '2025-01-15', changeFrequency: 'monthly', priority: 0.7 },
    // Guide articles (Tier 1)
    { url: `${base}/guide/shotokuzei-keisan`, lastModified: '2025-04-04', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/juuminzei-keisan`, lastModified: '2025-04-04', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/kyuyo-meisai-mikata`, lastModified: '2025-04-04', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/saitei-chingin`, lastModified: '2025-04-04', changeFrequency: 'monthly', priority: 0.7 },
    // Guide articles (Tier 2)
    { url: `${base}/guide/nenmatsu-chousei`, lastModified: '2025-04-04', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/bonus-zeikin`, lastModified: '2025-04-04', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/taishokukin-zeikin`, lastModified: '2025-04-04', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/fuyou-kojo-guide`, lastModified: '2025-04-04', changeFrequency: 'monthly', priority: 0.7 },
  ]
}
