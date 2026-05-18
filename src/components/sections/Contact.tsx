"use client";

import { useState } from "react";
import { BlurFade } from "@/components/motion/BlurFade";
import { ShinyButton } from "@/components/ui/shiny-button";

const HONEYPOT_NAME = "__hp";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", message: "" });

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot || submitting) return;

    setSubmitting(true);
    try {
      const response = await fetch('/api/lead/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, _honey: honeypot }),
      });
      if (response.ok) {
        setSent(true);
      } else {
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu.");
    } finally {
      setSubmitting(false);
    }
  };

  const fields = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--aqua)] focus:ring-2 focus:ring-[color:var(--aqua)]/30";

  return (
    <section id="iletisim" className="py-24">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} duration={0.6}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">İletişim</div>
            <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Randevu İçin Bize Ulaşın</h2>
          </div>
        </BlurFade>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <BlurFade delay={0.2} duration={0.6}>
            <div className="rounded-3xl bg-hero p-8 text-white shadow-premium">
              <h3 className="text-xl font-semibold">PergoClean</h3>
              <p className="mt-2 text-sm text-white/80">Timko İş Merkezi, Macun Mah. 177. Cad. V8 Kat 1, Yenimahalle / Ankara</p>
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
                  <a key={s.l} href={s.h} target="_blank" rel="noreferrer" className="rounded-xl bg-white/10 px-3 py-2 backdrop-blur transition hover:bg-white/20">{s.l}</a>
                ))}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} duration={0.6}>
            <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 shadow-premium">
              <input type="text" name={HONEYPOT_NAME} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid gap-4 md:grid-cols-2">
                <input className={fields} placeholder="Ad Soyad" required value={form.name} onChange={(e) => update("name", e.target.value)} />
                <input className={fields} placeholder="Telefon" required value={form.phone} onChange={(e) => update("phone", e.target.value)} type="tel" />
                <input className={fields + " md:col-span-2"} placeholder="E-posta" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
                <input className={fields + " md:col-span-2"} placeholder="Adres / Bölge" value={form.address} onChange={(e) => update("address", e.target.value)} />
                <textarea rows={5} className={fields + " md:col-span-2"} placeholder="Talebinizi kısaca açıklayın..." value={form.message} onChange={(e) => update("message", e.target.value)} />
              </div>
              <ShinyButton className="mt-5 w-full" onClick={handleSubmit} disabled={sent || submitting}>
                {sent ? "Talebiniz alındı, en kısa sürede dönüş yapacağız." : (submitting ? "Gönderiliyor..." : "Randevu Talebi Gönder")}
              </ShinyButton>
            </form>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}