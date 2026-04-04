import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kyuryo-lab.com'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/kyuryo/tetsuke`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/kyuryo/jikyu`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/eigyobi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/koji`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/guide`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/guide/zangyoudai-keisan-houhou`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/tedori-shikumi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/shakaihokenryou-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/zangyou-60jikan-rule`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/nenshu-tedori-hayamihyou`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/shotokuzei-keisan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/juuminzei-keisan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/kyuyo-meisai-mikata`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/guide/saitei-chingin`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
