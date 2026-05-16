import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/sections/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "PergoClean | Pergola ve Dış Mekân Bakım, Temizlik, Restorasyon",
  description: "Ankara ve Antalya'da pergola, tente, zip perde, kepenk, güneş paneli temizliği ve mekanik bakım. Kumaşı değiştirmeden profesyonel restorasyon. 19+ yıllık tecrübe.",
  keywords: "pergola temizliği, tente bakım, zip perde temizliği, kepenk temizliği, güneş paneli temizliği, BioClimatic bakım, Ankara pergola, Antalya pergola",
  authors: [{ name: "PergoClean" }],
  openGraph: {
    title: "PergoClean | Profesyonel Pergola Restorasyon",
    description: "Ankara ve Antalya'da dış mekân sistemlerinin profesyonel bakım ve restorasyonu.",
    url: "https://www.pergoclean.com.tr",
    siteName: "PergoClean",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
  verification: { google: "YOUR_GOOGLE_VERIFICATION_CODE" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.pergoclean.com.tr/#business",
  name: "PergoClean",
  alternateName: "TOZ Yapı PergoClean",
  description: "19+ yıllık üretim ve montaj tecrübesiyle pergola, tente, BioClimatic, zip perde, kepenk, güneş paneli temizliği ve mekanik bakım.",
  url: "https://www.pergoclean.com.tr",
  telephone: "+905367731404",
  email: "pergoclean@tozyapi.com.tr",
  image: "https://www.pergoclean.com.tr/logo.webp",
  logo: { "@type": "ImageObject", url: "https://www.pergoclean.com.tr/logo.webp" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Macun Mah. 177. Cad. V8 Kat 1",
    addressLocality: "Yenimahalle",
    addressRegion: "Ankara",
    postalCode: "06370",
    addressCountry: "TR",
  },
  geo: { "@type": "GeoCoordinates", latitude: "39.9567", longitude: "32.5812" },
  areaServed: [
    { "@type": "City", name: "Ankara" },
    { "@type": "AdministrativeArea", name: "Ankara Bölgesi" },
    { "@type": "City", name: "Antalya" },
    { "@type": "AdministrativeArea", name: "Antalya Bölgesi" },
  ],
  priceRange: "₺₺₺",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "19:00" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "412",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/pergoclean.tr",
    "https://www.youtube.com/@PergoClean",
    "https://www.tiktok.com/@pergoclean.tr",
    "https://x.com/PergoClean",
    "https://www.linkedin.com/in/pergo-clean-33356a402",
    "https://tr.pinterest.com/pergocleantr",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.pergoclean.com.tr/#organization",
  name: "TOZ Yapı / PergoClean",
  url: "https://www.pergoclean.com.tr",
  logo: "https://www.pergoclean.com.tr/logo.webp",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+905367731404",
      contactType: "customer service",
      availableLanguage: ["Turkish"],
      areaServed: "TR",
    },
    {
      "@type": "ContactPoint",
      telephone: "+905309550028",
      contactType: "sales",
      availableLanguage: ["Turkish"],
      areaServed: "TR",
    },
  ],
};

const serviceSchemas = [
  { name: "Pergola / Tente Kumaş Temizliği", desc: "Blackout, akrilik ve teknik kumaşlarda kapsamlı leke giderme ve UV koruma." },
  { name: "BioClimatic / RollingRoof Temizliği", desc: "Kanat içleri, su olukları ve mekanizmalarda komple bakım ve hijyen." },
  { name: "Wintent — Zip Perde Temizliği", desc: "Fermuar, ray ve motor sistemi dahil komple temizlik." },
  { name: "Kepenk — Panjur Temizliği", desc: "Lameller arası tortu, oksit ve nem temizliği; yağlama ve sessizleştirme." },
  { name: "Güneş Panel Temizliği", desc: "Verimlilik artışı için iyonize su uygulaması." },
  { name: "Mekanik Sistem Bakımı", desc: "Motor, redüktör ve sensör kontrolleri." },
  { name: "LED Arıza ve Renk Değişimi", desc: "Samsung LED + plastik kasa modüllerinde arıza tespiti ve renk değişimi." },
].map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `PergoClean ${s.name}`,
  description: s.desc,
  provider: { "@id": "https://www.pergoclean.com.tr/#organization" },
  areaServed: [
    { "@type": "City", name: "Ankara" },
    { "@type": "City", name: "Antalya" },
  ],
  serviceType: s.name,
}));

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "412",
  bestRating: "5",
  worstRating: "1",
  itemReviewed: {
    "@type": "LocalBusiness",
    name: "PergoClean",
    address: "Timko İş Merkezi, Macun Mah. 177. Cad. V8 Kat 1, Yenimahalle/Ankara",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Pergola kumaşı değiştirilmeden temizlenebilir mi?", acceptedAnswer: { "@type": "Answer", text: "Evet. PergoClean yerinde yıkama yöntemiyle kumaşı sökmeden profesyonel temizlik ve restorasyon yapmaktadır." } },
    { "@type": "Question", name: "BioClimatic pergola temizliği ne kadar sürer?", acceptedAnswer: { "@type": "Answer", text: "Ortalama 50 m² bir BioClimatic sistem için temizlik ve bakım işlemi 6-8 saat sürmektedir." } },
    { "@type": "Question", name: "Hangi bölgelere hizmet veriyorsunuz?", acceptedAnswer: { "@type": "Answer", text: "Ankara (23 ilçe) ve Antalya (21 ilçe) olmak üzere toplam 44 ilçede hizmet vermekteyiz." } },
    { "@type": "Question", name: "Zip perde temizliği cam temizliği ile aynı mıdır?", acceptedAnswer: { "@type": "Answer", text: "Hayır. Zip perdeler fermuar, ray ve özel kumaş yapısı nedeniyle profesyonel bakım gerektirir. Klasik cam temizliği yöntemleri zip perdelere zarar verebilir." } },
    { "@type": "Question", name: "Gece çalışma yapıyor musunuz?", acceptedAnswer: { "@type": "Answer", text: "Evet, işletmeler için gece çalışma seçeneğimiz mevcuttur." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.pergoclean.com.tr/" },
    { "@type": "ListItem", position: 2, name: "Hizmetler", item: "https://www.pergoclean.com.tr/#hizmetler" },
    { "@type": "ListItem", position: 3, name: "Blog", item: "https://www.pergoclean.com.tr/blog" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {serviceSchemas.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}