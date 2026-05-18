import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Bubbles } from "@/components/site/Bubbles";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { References } from "@/components/sections/References";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PergoClean — Premium Pergola Temizliği ve Restorasyonu | Ankara · Antalya" },
      { name: "description", content: "PergoClean: pergola, BioClimatic, RollingRoof, Wintent ve dış mekan sistemlerinde 19+ yıl tecrübeyle profesyonel temizlik, bakım ve restorasyon hizmeti. Ankara ve Antalya." },
      { property: "og:title", content: "PergoClean — Profesyonel Pergola Restorasyonu" },
      { property: "og:description", content: "Temizlik değil, profesyonel restorasyon. Kumaşı değiştirmeden ilk günkü premium görünüm." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pergoclean.com.tr/" },
      { name: "twitter:card", content: "summary_large_image" },
      { rel: "canonical", href: "https://www.pergoclean.com.tr/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://www.pergoclean.com.tr/#business",
              name: "PergoClean",
              image: "https://www.pergoclean.com.tr/og.jpg",
              url: "https://www.pergoclean.com.tr/",
              telephone: "+90 536 773 14 04",
              email: "pergoclean@tozyapi.com.tr",
              priceRange: "₺₺₺",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Timko İş Merkezi, Macun Mah. 177. Cad. V8 Kat 1",
                addressLocality: "Yenimahalle",
                addressRegion: "Ankara",
                addressCountry: "TR",
              },
              areaServed: [
                { "@type": "City", name: "Ankara" },
                { "@type": "City", name: "Antalya" },
              ],
              sameAs: [
                "https://www.instagram.com/pergoclean.tr",
                "https://www.youtube.com/@PergoClean",
                "https://www.tiktok.com/@pergoclean.tr",
                "https://x.com/PergoClean",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "412",
              },
            },
            {
              "@type": "Organization",
              name: "PergoClean",
              url: "https://www.pergoclean.com.tr/",
              logo: "https://www.pergoclean.com.tr/logo.png",
            },
            {
              "@type": "Review",
              itemReviewed: { "@id": "https://www.pergoclean.com.tr/#business" },
              author: { "@type": "Person", name: "M. Altan" },
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              reviewBody: "BioClimatic pergolamızı ilk günkü gibi yaptılar. Premium iş.",
            },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Bubbles />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <PriceCalculator />
        <BeforeAfter />
        <References />
        <Process />
        <Testimonials />
        <BlogPreview />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
