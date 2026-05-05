import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/theme';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const docPaths = [
    '/docs',
    '/docs/builders',
    '/docs/operators',
    '/docs/protocol',
  ];
  return [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    ...docPaths.map((p) => ({
      url: `${SITE.url}${p}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: p === '/docs' ? 0.9 : 0.7,
    })),
  ];
}
