"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { calculateQuote, formatTRY, services, type Access, type Service, type Soil } from "@/lib/pricing";
import { SectionHeader } from "@/components/motion/SectionHeader";
import { TextScramble } from "@/components/ui/text-scramble";

const fields =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-[color:var(--aqua)] focus:ring-2 focus:ring-[color:var(--aqua)]/30";

export function PriceCalculator() {
  const [service, setService] = useState<Service>("pergola");
  const [m2, setM2] = useState<number>(40);
  const [soil, setSoil] = useState<Soil>("hafif");
  const [access, setAccess] = useState<Access>("kolay");
  const [region, setRegion] = useState("Ankara");
  const [shift, setShift] = useState("Gündüz Çalışma");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const quote = useMemo(() => calculateQuote({ 
    service, 
    m2, 
    soil, 
    access, 
    region: region.toLowerCase().includes("ankara") ? "ankara" : "antalya",
    shift: shift.toLowerCase().includes("gündüz") ? "gunduz" : "gece"
  }), [service, m2, soil, access, region, shift]);
  const serviceLabel = services.find((s) => s.id === service)?.label ?? "";

  const wa = useMemo(() => {
    const lines = [
      "Merhaba PergoClean,",
      `Hizmet: ${serviceLabel}`,
      `m²: ${m2}`,
      `Kirlilik: ${soil === "hafif" ? "Hafif" : "Ağır"}`,
      `Erişim: ${access}`,
      `Bölge: ${region}`,
      `Zaman: ${shift}`,
      quote.price ? `Tahmini fiyat: ${formatTRY(quote.price)}` : "Fiyat: yerinde keşif",
      `Tahmini süre: ${quote.duration}`,
      name && `Ad Soyad: ${name}`,
      phone && `Telefon: ${phone}`,
      note && `Not: ${note}`,
    ].filter(Boolean);
    return `https://wa.me/905367731404?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [serviceLabel, m2, soil, access, region, shift, name, phone, note, quote]);

  return (
    <section id="fiyat" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Anında Fiyat"
          title="3 Saniyede Tahmini Bütçenizi Öğrenin"
          description="Hizmet tipine göre gerçek zamanlı hesaplama. Detaylı keşif sonrası net fiyat WhatsApp üzerinden iletilir."
          size="md"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-premium md:p-9">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Hizmet Tipi">
                <select className={fields} value={service} onChange={(e) => setService(e.target.value as Service)}>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </Field>
              <Field label="Metrekare (m²)">
                <input type="number" min={0} className={fields} value={m2} onChange={(e) => setM2(Number(e.target.value) || 0)} />
              </Field>
              <Field label="Kirlilik Seviyesi">
                <div className="flex gap-2">
                  {(["hafif", "agir"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setSoil(v)}
                      className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                        soil === v ? "border-[color:var(--aqua)] bg-aqua-grad text-white" : "border-border bg-background text-foreground"
                      }`}
                    >
                      {v === "hafif" ? "Hafif Kir" : "Ağır Kir"}
                    </button>
                  ))}
                </div>
              </Field>
              <Field label="Yükseklik / Erişim">
                <select className={fields} value={access} onChange={(e) => setAccess(e.target.value as Access)}>
                  <option value="kolay">Zemin / Kolay Erişim</option>
                  <option value="orta">3,5 m üzeri (+%25)</option>
                  <option value="zor">Teras / 5 m+ (+%25)</option>
                </select>
              </Field>
              <Field label="Bölge">
                <select className={fields} value={region} onChange={(e) => setRegion(e.target.value)}>
                  <option>Ankara ve ilçeleri</option>
                  <option>Antalya ve ilçeleri</option>
                </select>
              </Field>
              <Field label="Çalışma Zamanı">
                <select className={fields} value={shift} onChange={(e) => setShift(e.target.value)}>
                  <option>Gündüz Çalışma</option>
                  <option>Gece Çalışma</option>
                </select>
              </Field>
              <Field label="Ad Soyad">
                <input className={fields} value={name} onChange={(e) => setName(e.target.value)} placeholder="Adınız" />
              </Field>
              <Field label="Telefon">
                <input className={fields} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+90" />
              </Field>
              <div className="md:col-span-2">
                <Field label="Ek Not">
                  <textarea rows={3} className={fields} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Adres, kat, fotoğraf bilgisi..." />
                </Field>
              </div>
            </div>
          </div>

          <motion.aside
            key={`${service}-${m2}-${soil}-${access}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl bg-hero p-7 text-white shadow-premium md:p-9"
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[color:var(--aqua)] opacity-30 blur-3xl" />
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Tahmini Bütçe</div>
            <div className="mt-3 text-5xl font-bold">
              {quote.price ? formatTRY(quote.price) : "Yerinde Keşif"}
            </div>
            <div className="mt-2 text-sm text-white/80">{serviceLabel}</div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Stat k="Tahmini Süre" v={quote.duration} />
              <Stat k="Bölge" v={region} />
              <Stat k="Erişim" v={access === "kolay" ? "Kolay" : access === "orta" ? "Orta" : "Zor"} />
              <Stat k="Zaman" v={shift.replace(" Çalışma", "")} />
            </div>

            {quote.note && <p className="mt-6 rounded-xl bg-white/10 p-3 text-xs text-white/80">{quote.note}</p>}

            <div className="mt-8 flex flex-col gap-3">
              <a href={wa} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[color:var(--deep)] transition hover:scale-[1.02]">
                WhatsApp ile Teklif Al
              </a>
              <a href="https://www.instagram.com/pergoclean.tr" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Instagram’dan Yaz
              </a>
            </div>
            <p className="mt-4 text-[11px] text-white/60">
              * Fiyatlar tahmini olup, son fiyat keşif sonrası belirlenir. KDV hariçtir.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      {children}
    </label>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
      <div className="text-[10px] uppercase tracking-wider text-white/65">{k}</div>
      <div className="mt-1 text-sm font-semibold text-white">{v}</div>
    </div>
  );
}
