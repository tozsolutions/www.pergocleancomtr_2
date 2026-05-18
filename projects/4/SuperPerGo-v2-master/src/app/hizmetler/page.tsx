import { Metadata } from "next";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Hizmetler | PergoClean",
  description: "Pergola, BioClimatic, RollingRoof, zip perde, kepenk, güneş paneli temizliği, LED arıza onarımı ve mekanik bakım hizmetleri.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="container mx-auto px-4 pt-28 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Hizmetler</div>
          <h1 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Profesyonel Dış Mekân Bakım ve Restorasyon</h1>
          <p className="mt-4 text-muted-foreground">Pergola, tente, BioClimatic, RollingRoof, zip perde, kepenk, güneş paneli ve LED sistemlerinde uzman çözümler.</p>
        </div>
      </div>
      <Services />
    </>
  );
}
