import { Metadata } from "next";
import { References } from "@/components/sections/References";

export const metadata: Metadata = {
  title: "Referanslar | PergoClean",
  description: "PergoClean'in Ankara ve Antalya'da tamamladığı 2000+ projeden özenle seçilmiş referans görselleri.",
};

export default function ReferencesPage() {
  return (
    <>
      <div className="container mx-auto px-4 pt-28 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Referanslar</div>
          <h1 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Tamamlanmış Projelerimiz</h1>
          <p className="mt-4 text-muted-foreground">2000+ başarılı projeden özenle seçilmiş örnek çalışmalar.</p>
        </div>
      </div>
      <References />
    </>
  );
}
