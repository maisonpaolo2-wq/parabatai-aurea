import type { MetadataRoute } from 'next'
import { site } from '@/content/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: site.url, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/servicios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/sobre-nosotras`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${site.url}/contacto`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
  ]
}
