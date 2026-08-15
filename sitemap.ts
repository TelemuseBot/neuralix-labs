import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { caseStudies } from '@/data/caseStudies';
import { insights } from '@/data/insights';

const siteUrl = 'https://neuralixlabs.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/products`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/services`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/solutions`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/work`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/insights`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/careers`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/contact`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${siteUrl}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${siteUrl}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${siteUrl}/products/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const workRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${siteUrl}/work/${c.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${siteUrl}/insights/${i.slug}`,
    lastModified: new Date(i.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...workRoutes, ...insightRoutes];
}
