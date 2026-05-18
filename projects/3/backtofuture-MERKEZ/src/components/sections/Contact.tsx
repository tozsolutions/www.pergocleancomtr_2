import { useState } from "react";
import { SectionHeader } from "./Services";

const fields = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--aqua)] focus:ring-2 focus:ring-[color:var(--aqua)]/30";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="iletisim" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="İletişim" title="Randevu için bize ulaşın" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl bg-hero p-8 text-white shadow-premium">
            <h3 className="text-xl font-semibold">PergoClean</h3>
            <p className="mt-2 text-sm text-white/80">
              Timko İş Merkezi, Macun Mah. 177. Cad. V8 Kat 1, Yenimahalle / Ankara
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+905367731404" className="block text-white hover:text-[color:var(--champagne)]">+90 536 773 14 04</a>
              <a href="tel:+905309550028" className="block text-white hover:text-[color:var(--champagne)]">+90 530 955 00 28</a>
              <a href="mailto:pergoclean@tozyapi.com.tr" className="block text-white hover:text-[color:var(--champagne)]">pergoclean@tozyapi.com.tr</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs">
              {[
                { l: "Instagram", h: "https://www.instagram.com/pergoclean.tr" },
                { l: "YouTube", h: "https://www.youtube.com/@PergoClean" },
                { l: "TikTok", h: "https://www.tiktok.com/@pergoclean.tr" },
                { l: "X", h: "https://x.com/PergoClean" },
                { l: "Pinterest", h: "https://tr.pinterest.com/pergocleantr" },
                { l: "LinkedIn", h: "http://linkedin.com/in/pergo-clean-33356a402" },
              ].map((s) => (
                <a key={s.l} href={s.h} target="_blank" rel="noreferrer" className="rounded-xl bg-white/10 px-3 py-2 backdrop-blur transition hover:bg-white/20">
                  {s.l}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-card p-8 shadow-premium"
          >
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4 md:grid-cols-2">
              <input className={fields} placeholder="Ad Soyad" required />
              <input className={fields} placeholder="Telefon" required />
              <input className={fields + " md:col-span-2"} placeholder="E-posta" type="email" />
              <input className={fields + " md:col-span-2"} placeholder="Adres / Bölge" />
              <textarea rows={5} className={fields + " md:col-span-2"} placeholder="Talebinizi kısaca açıklayın..." />
            </div>
            <button className="mt-5 w-full rounded-full bg-aqua-grad px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01]">
              {sent ? "Talebiniz alındı, en kısa sürede dönüş yapacağız." : "Randevu Talebi Gönder"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
