import { MetadataRoute } from "next";
import { allDistricts } from "@/lib/locations";

const posts = [
  "blackout-pergola-kumasi-neden-kararir",
  "bioclimatic-rollingroof-teknik-bakim",
  "zip-perde-temizligi-cam-temizligi-degildir",
  "pergola-tente-kumas-uv-korumasi",
  "wintent-zip-perde-motor-bakimi",
  "gunes-paneli-verim-temizlik-iliskisi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.pergoclean.com.tr";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/hakkimizda`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/kvkk`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${base}/gizlilik`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${base}/hizmetler`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/iletisim`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/referanslar`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/sss`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    ...allDistricts.map((d) => ({ url: `${base}/bolge/${d.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...posts.map((s) => ({ url: `${base}/blog/${s}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
