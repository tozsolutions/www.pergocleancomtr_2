import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findDistrict, allDistricts } from "@/lib/locations";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/bolge/$slug")({
  loader: ({ params }) => {
    const district = findDistrict(params.slug);
    if (!district) throw notFound();
    return { district };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const d = loaderData.district;
    const title = `${d.name} Pergola Temizliği & Restorasyonu — PergoClean ${d.cityName}`;
    const desc = `${d.cityName} ${d.name} bölgesinde profesyonel pergola, BioClimatic, RollingRoof, Wintent zip perde ve tente kumaş temizliği. 19+ yıl tecrübe, premium restorasyon, hızlı keşif.`;
    const url = `https://www.pergoclean.com.tr/bolge/${d.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "geo.region", content: d.city === "ankara" ? "TR-06" : "TR-07" },
        { name: "geo.placename", content: `${d.name}, ${d.cityName}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { rel: "canonical", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": `${url}#business`,
                name: `PergoClean — ${d.name}`,
                image: "https://www.pergoclean.com.tr/og.jpg",
                url,
                telephone: "+90 536 773 14 04",
                priceRange: "₺₺₺",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: d.name,
                  addressRegion: d.cityName,
                  addressCountry: "TR",
                },
                areaServed: { "@type": "Place", name: `${d.name}, ${d.cityName}` },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "187",
                },
              },
              {
                "@type": "Service",
                serviceType: "Pergola Kumaş Temizliği ve Restorasyonu",
                provider: { "@id": `${url}#business` },
                areaServed: `${d.name}, ${d.cityName}`,
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.pergoclean.com.tr/" },
                  { "@type": "ListItem", position: 2, name: d.cityName, item: `https://www.pergoclean.com.tr/?city=${d.city}` },
                  { "@type": "ListItem", position: 3, name: d.name, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: DistrictPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background p-8 text-center">
      <div>
        <h1 className="text-3xl font-bold">Bölge bulunamadı</h1>
        <Link to="/" className="mt-4 inline-block text-[color:var(--aqua)] underline">Ana sayfa</Link>
      </div>
    </div>
  ),
});

function DistrictPage() {
  const { district: d } = Route.useLoaderData();
  const sameCity = allDistricts.filter((x) => x.city === d.city && x.slug !== d.slug).slice(0, 12);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main className="relative z-10">
        <section className="relative overflow-hidden bg-hero py-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--champagne)_22%,transparent),transparent_55%)]" />
          <div className="container relative mx-auto px-4">
            <nav className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
              <Link to="/" className="hover:text-[color:var(--champagne)]">Ana Sayfa</Link>
              <span className="mx-2">/</span>
              <span>{d.cityName}</span>
              <span className="mx-2">/</span>
              <span className="text-[color:var(--champagne)]">{d.name}</span>
            </nav>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-bold leading-tight md:text-6xl">
              {d.name} <span className="text-[color:var(--champagne)]">Pergola Temizliği</span> & Restorasyonu
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              {d.cityName} {d.name} bölgesinde villa, rezidans, cafe ve restoranlara özel pergola, BioClimatic, RollingRoof,
              Wintent zip perde, tente ve güneş paneli temizlik & restorasyon hizmeti.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+905367731404" className="rounded-full bg-aqua-grad px-6 py-3 text-sm font-semibold text-white shadow-glow">
                Hemen Ara
              </a>
              <a
                href={`https://wa.me/905367731404?text=${encodeURIComponent(`${d.name} bölgesi için pergola temizlik teklifi almak istiyorum.`)}`}
                target="_blank" rel="noreferrer"
                className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur"
              >
                WhatsApp ile Keşif
              </a>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-3">
            {[
              { t: "Lokal Hız", d: `${d.name} ve çevresine 24 saat içinde keşif ekibi yönlendiriyoruz.` },
              { t: "Premium Sonuç", d: "Kumaş değişimine gerek kalmadan ilk günkü görünümü geri kazandırıyoruz." },
              { t: "Tam Sistem Bakımı", d: "Sadece kumaş değil; profil, mekanizma, motor ve LED dahil." },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl border border-border bg-card p-7 shadow-premium">
                <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">
                  {d.name}
                </div>
                <h3 className="mt-2 text-xl font-bold">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <PriceCalculator />
        <Faq />
        <Contact />

        <section className="border-t border-border bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">
              {d.cityName} hizmet bölgeleri
            </div>
            <h2 className="mt-2 text-2xl font-bold">Yakındaki diğer bölgeler</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {sameCity.map((x) => (
                <Link
                  key={x.slug}
                  to="/bolge/$slug"
                  params={{ slug: x.slug }}
                  className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-[color:var(--aqua)] hover:text-foreground"
                >
                  {x.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}