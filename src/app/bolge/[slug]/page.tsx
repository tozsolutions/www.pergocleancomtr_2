import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ankaraDistricts, antalyaDistricts, allDistricts, findDistrict } from "@/lib/locations";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return allDistricts.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const district = findDistrict(slug);
  if (!district) return {};
  return {
    title: `${district.name} ${district.cityName} | PergoClean Hizmet Bölgesi`,
    description: `${district.name} bölgesinde pergola, tente, zip perde temizliği ve bakım hizmeti. ${district.cityName} ${district.name}'da profesyonel dış mekân restorasyonu.`,
  };
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const district = findDistrict(slug);
  if (!district) notFound();

  const districts = district.city === "ankara" ? ankaraDistricts : antalyaDistricts;
  const others = districts.filter((d) => d.slug !== slug);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Hizmet Bölgesi</div>
        <h1 className="mt-3 text-balance text-4xl font-bold md:text-5xl">{district.name}, {district.cityName}</h1>
        <p className="mt-4 text-base text-muted-foreground">
          {district.cityName} {district.name} bölgesinde pergola, tente, BioClimatic, zip perde ve güneş paneli temizliği hizmeti.
          {district.premium && " Premium bölge — öncelikli servis."}
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: "🏛️", title: "Pergola Kumaş Temizliği", desc: "Akrilik, blackout ve teknik kumaşlarda profesyonel derin temizlik." },
          { icon: "🌿", title: "BioClimatic / RollingRoof", desc: "Mekanik aksamdahil baştan ayağa bakım ve restorasyon." },
          { icon: "🪟", title: "Wintent — Zip Perde", desc: "Fermuar, ray ve motor sistemi dahil komple temizlik." },
          { icon: "🔒", title: "Kepenk — Panjur Bakımı", desc: "Lameller arası tortu temizliği ve sessizleştirme." },
          { icon: "☀️", title: "Güneş Panel Temizliği", desc: "Verim artışı için iyonize su uygulaması." },
          { icon: "⚙️", title: "Mekanik Sistem Bakımı", desc: "Motor, redüktör ve sensör kontrolleri." },
        ].map((s) => (
          <div key={s.title} className="rounded-3xl border border-border bg-card p-7 shadow-premium">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-center text-2xl font-bold">Diğer {district.cityName} Bölgeleri</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {others.map((d) => (
            <a key={d.slug} href={`/bolge/${d.slug}`} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-[color:var(--aqua)] hover:text-[color:var(--aqua)]">
              {d.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-xl rounded-3xl bg-hero p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Hemen Teklif Alın</h2>
        <p className="mt-2 text-sm text-white/80">Bölgenizde en kısa sürede ücretsiz keşif için bizimle iletişime geçin.</p>
        <a href="https://wa.me/905367731404" target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--deep)] shadow-glow transition hover:scale-105">
          WhatsApp ile Ulaşın
        </a>
      </div>
    </div>
  );
}