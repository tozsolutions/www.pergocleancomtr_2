import { MetadataRoute } from 'next';
import { blogs } from '@/lib/blogs';
import { allDistricts } from '@/lib/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pergoclean.com.tr';

  // Ana sayfalar
  const staticPages = [
    '',
    '/hizmetler',
    '/hakkimizda',
    '/iletisim',
    '/blog',
    '/referanslar',
    '/sss',
    '/gizlilik',
    '/kvkk',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog sayfaları (100 adet)
  const blogPages = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Bölge sayfaları (50 adet)
  const districtPages = allDistricts.map((district) => ({
    url: `${baseUrl}/bolge/${district.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...districtPages];
}
