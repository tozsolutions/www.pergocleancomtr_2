import { siteConfig } from "./site";

const BASE_URL = siteConfig.url;

// ─── Slug Normalization ────────────────────────────────────────────────────────
export function normalizeSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ─── Canonical URL ─────────────────────────────────────────────────────────────
export function canonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}

// ─── Breadcrumb Generator ──────────────────────────────────────────────────────
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbs(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_URL },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };
}

// ─── FAQ Schema Builder ────────────────────────────────────────────────────────
export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

// ─── Organization Schema Builder ──────────────────────────────────────────────
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PergoClean",
    "url": BASE_URL,
    "logo": `${BASE_URL}/assets/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phonePrimary,
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "sameAs": siteConfig.socials.map(s => s.href)
  };
}

// ─── Service Schema Builder ───────────────────────────────────────────────────
export function buildServiceSchema(opts: {
  name: string;
  description: string;
  url: string;
  providerName?: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": opts.name,
    "description": opts.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": opts.providerName || "PergoClean",
      "image": `${BASE_URL}/assets/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ankara",
        "addressCountry": "TR"
      }
    },
    "areaServed": (opts.areaServed || ["Ankara"]).map(area => ({
      "@type": "City",
      "name": area
    })),
    "url": opts.url
  };
}

// ─── Service Page Metadata Template ───────────────────────────────────────────
export function serviceMetadata(opts: {
  serviceName: string;
  description: string;
  slug: string;
  district?: string;
}) {
  const { serviceName, description, slug, district } = opts;
  const title = district
    ? `${district} ${serviceName} | PergoClean`
    : `${serviceName} | PergoClean`;
  const canonical = district
    ? canonicalUrl(`/ankara/${normalizeSlug(district)}-${slug}`)
    : canonicalUrl(`/hizmetler/${slug}`);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "PergoClean",
      locale: "tr_TR",
      type: "website" as const,
      images: [{ url: "/assets/logo.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ["/assets/logo.png"],
    },
    robots: { index: true, follow: true },
  };
}

// ─── District Page Metadata Template ──────────────────────────────────────────
export function districtMetadata(opts: {
  district: string;
  service: string;
  slug: string;
  description?: string;
}) {
  const { district, service, slug, description } = opts;
  const title = `${district} ${service} | PergoClean Ankara`;
  const desc =
    description ??
    `${district} bölgesinde ${service} için PergoClean'in profesyonel yerinde temizlik hizmeti. Söküm gerektirmez, aynı gün hizmet.`;
  const canonical = canonicalUrl(`/ankara/${slug}`);

  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title,
      description: desc,
      url: canonical,
      siteName: "PergoClean",
      locale: "tr_TR",
      type: "website" as const,
      images: [{ url: "/assets/logo.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: desc,
    },
    robots: { index: true, follow: true },
  };
}
