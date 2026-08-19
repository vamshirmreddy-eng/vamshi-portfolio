import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

// Only one real route exists (/) — not listing paths like /classic or /projects/[slug] here
// since those don't correspond to actual pages.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
