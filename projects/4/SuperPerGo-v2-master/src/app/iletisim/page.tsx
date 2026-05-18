import { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "İletişim | PergoClean",
  description: "PergoClean iletişim bilgileri: telefon, e-posta ve adres. Ankara ve Antalya'da hizmet vermekteyiz.",
};

export default function ContactPage() {
  return (
    <>
      <div className="container mx-auto px-4 pt-28 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">İletişim</div>
          <h1 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Bizimle İletişime Geçin</h1>
          <p className="mt-4 text-muted-foreground">+90 536 773 14 04 | pergoclean@tozyapi.com.tr | Ankara & Antalya</p>
        </div>
      </div>
      <Contact />
    </>
  );
}
