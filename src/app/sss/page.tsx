import { Metadata } from "next";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | PergoClean",
  description: "Pergola, zip perde, BioClimatic temizliği ve bakımı hakkında sıkça sorulan sorular ve cevapları.",
};

export default function SssPage() {
  return (
    <>
      <div className="container mx-auto px-4 pt-28 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">SSS</div>
          <h1 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Sıkça Sorulan Sorular</h1>
          <p className="mt-4 text-muted-foreground">Dış mekân bakım ve restorasyon hizmetlerimiz hakkında merak edilenler.</p>
        </div>
      </div>
      <Faq />
    </>
  );
}
