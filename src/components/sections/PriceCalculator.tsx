"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BlurFade } from "@/components/motion/BlurFade";
import { BeforeAfterSlider } from "./BeforeAfter";
import { calculateQuote, formatTRY, type Service, type Soil, type Access, type Region, type Shift } from "@/lib/pricing";
import { beforeAfter } from "@/assets";

const beforeAfterPairs = [
  { ...beforeAfter.cankaya },
  { ...beforeAfter.cayyolu },
  { ...beforeAfter.etimesgut },
  { ...beforeAfter.pursaklar },
  { ...beforeAfter.sincan },
  { ...beforeAfter.test },
  { ...beforeAfter.yenimahalle },
];

export function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="once-sonra" className="relative py-24">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} duration={0.6}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Önce / Sonra</div>
            <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl">Restorasyon sonuçları</h2>
            <p className="mt-4 text-base text-muted-foreground">Her projemiz belgelenir. Değiştirmeden dönüşüm garantisi.</p>
          </div>
        </BlurFade>

        <div className="mt-14">
          <BeforeAfterSlider
            before={beforeAfterPairs[activeIndex].before}
            after={beforeAfterPairs[activeIndex].after}
          />
          <div className="mt-4 text-center text-sm text-muted-foreground">{beforeAfterPairs[activeIndex].label}</div>
          <div className="mt-6 flex justify-center gap-3">
            {beforeAfterPairs.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all ${i === activeIndex ? "w-8 bg-[var(--champagne)]" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const HONEYPOT_NAME = "__hp";

const leadSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz").regex(/^[+\d\s()-]+$/, "Yalnızca rakam ve + işareti"),
  note: z.string().optional(),
});

type LeadForm = z.infer<typeof leadSchema>;

export function PriceCalculator() {
  const [form, setForm] = useState({ service: "pergola" as Service, m2: 0, soil: "hafif" as Soil, access: "kolay" as Access, region: "ankara" as Region, shift: "gunduz" as Shift, name: "", phone: "", note: "" });
  const [honeypot, setHoneypot] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateQuote> | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const { register, handleSubmit: handleFormSubmit, formState: { errors } } = useForm<LeadForm>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", phone: "", note: "" },
  });

  useEffect(() => {
    if (form.m2 > 0) {
      const r = calculateQuote({ service: form.service, m2: form.m2, soil: form.soil, access: form.access, region: form.region, shift: form.shift });
      setResult(r);
    } else {
      setResult(null);
    }
  }, [form]);

  const onSubmit = async (data: LeadForm) => {
    if (honeypot) return;
    setFormError("");
    setSubmitting(true);
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      if (webhookUrl && !webhookUrl.includes("your-n8n-instance")) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, ...data }),
        });
      }
      setSubmitted(true);
    } catch {
      setFormError("Gönderim sırasında bir hata oluştu. Lütfen WhatsApp ile iletişime geçin.");
    }
    setSubmitting(false);
  };

  const buildWhatsApp = () => {
    if (!result) return "#";
    const lines = ["Merhaba PergoClean,", `Hizmet: ${form.service}`, `m²: ${form.m2}`, `Kirlilik: ${form.soil === "hafif" ? "Hafif" : "Ağır"}`, result.price ? `Tahmini fiyat: ${formatTRY(result.price)}` : "Fiyat: yerinde keşif", `Tahmini süre: ${result.duration}`, form.name && `Ad Soyad: ${form.name}`, form.phone && `Telefon: ${form.phone}`].filter(Boolean);
    return `https://wa.me/905367731404?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const update = (key: string, value: unknown) => setForm((p) => ({ ...p, [key]: value }));

  return (
    <section id="fiyat" className="relative py-24">
      <div className="container mx-auto px-4">
        <BlurFade delay={0.1} duration={0.6}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--aqua)]">Anında Fiyat</div>
            <h2 className="mt-3 text-balance text-4xl font-bold md:text-5xl">3 saniyede tahmini bütçenizi öğrenin</h2>
          </div>
        </BlurFade>

        <form onSubmit={handleFormSubmit(onSubmit)} className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]" noValidate>
          <BlurFade delay={0.2} duration={0.6}>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-premium md:p-9">
              <div className="grid gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-muted-foreground">Hizmet Tipi</span>
                  <select className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[color:var(--aqua)]" value={form.service} onChange={(e) => update("service", e.target.value)}>
                    <option value="pergola">Pergola / Tente Kumaş Temizliği</option>
                    <option value="bioclimatic">BioClimatic / RollingRoof</option>
                    <option value="zip">Wintent — Zip Perde</option>
                    <option value="kepenk">Kepenk — Panjur</option>
                    <option value="panel">Güneş Paneli</option>
                    <option value="mekanik">Mekanik Sistem Bakımı</option>
                    <option value="led">LED Arıza ve Renk Değişimi</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-muted-foreground">m²</span>
                  <input type="number" min={0} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[color:var(--aqua)]" value={form.m2 || ""} onChange={(e) => update("m2", Number(e.target.value))} />
                </label>

                <fieldset>
                  <legend className="mb-2 text-sm font-medium text-muted-foreground">Kirlilik Seviyesi</legend>
                  <div className="flex gap-2">
                    {(["hafif", "agir"] as Soil[]).map((v) => (
                      <button type="button" key={v} onClick={() => update("soil", v)} className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${form.soil === v ? "border-[color:var(--aqua)] bg-aqua-grad text-white" : "border-border bg-background"}`}>
                        {v === "hafif" ? "Hafif Kir" : "Ağır Kir"}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="text-sm font-medium text-muted-foreground">Yükseklik / Erişim</span>
                  <select className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[color:var(--aqua)]" value={form.access} onChange={(e) => update("access", e.target.value)}>
                    <option value="kolay">Zemin / Kolay Erişim</option>
                    <option value="orta">3,5 m üzeri (+%25)</option>
                    <option value="zor">Teras / 5 m+ (+%25)</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-muted-foreground">Bölge</span>
                  <select className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[color:var(--aqua)]" value={form.region} onChange={(e) => update("region", e.target.value)}>
                    <option value="ankara">Ankara ve ilçeleri</option>
                    <option value="antalya">Antalya ve ilçeleri</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-muted-foreground">Çalışma Zamanı</span>
                  <select className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[color:var(--aqua)]" value={form.shift} onChange={(e) => update("shift", e.target.value)}>
                    <option value="gunduz">Gündüz Çalışma</option>
                    <option value="gece">Gece Çalışma</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-muted-foreground">Ad Soyad</span>
                  <input {...register("name")} type="text" className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[var(--aqua)]" value={form.name} onChange={(e) => { update("name", e.target.value); register("name").onChange(e); }} placeholder="Adınız" />
                  {errors.name && <span className="mt-1 text-xs text-red-500">{errors.name.message}</span>}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-muted-foreground">Telefon</span>
                  <input {...register("phone")} type="tel" className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[var(--aqua)]" value={form.phone} onChange={(e) => { update("phone", e.target.value); register("phone").onChange(e); }} placeholder="+90" />
                  {errors.phone && <span className="mt-1 text-xs text-red-500">{errors.phone.message}</span>}
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-muted-foreground">Ek Not</span>
                  <textarea {...register("note")} rows={3} className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-[var(--aqua)]" value={form.note} onChange={(e) => { update("note", e.target.value); register("note").onChange(e); }} placeholder="Adres, kat, fotoğraf..." />
                </label>

                <div style={{ position: "absolute", left: "-9999px", visibility: "hidden" }} aria-hidden="true">
                  <input type="text" name={HONEYPOT_NAME} value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
                </div>
                <button type="submit" disabled={submitting || submitted} className="w-full rounded-full bg-aqua-grad px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] disabled:opacity-50">
                  {submitted ? "✓ Gönderildi" : submitting ? "Gönderiliyor..." : "Teklif İste"}
                </button>
                {formError && <p className="text-xs text-red-500 text-center">{formError}</p>}
                {submitted && (
                  <p className="text-xs text-center text-green-600">
                    Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                )}
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.3} duration={0.6}>
            <aside className="relative overflow-hidden rounded-3xl bg-hero p-7 text-white shadow-premium md:p-9">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[color:var(--aqua)] opacity-30 blur-3xl" />
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Tahmini Bütçe</div>
              <div className="mt-3 text-5xl font-bold">
                {result?.price ? formatTRY(result.price) : "Yerinde Keşif"}
              </div>
              {result && (
                <>
                  <div className="mt-2 text-sm text-white/80">{result.serviceLabel}</div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <Stat k="Tahmini Süre" v={result.duration} />
                    <Stat k="Bölge" v={form.region === "ankara" ? "Ankara" : "Antalya"} />
                    <Stat k="Erişim" v={form.access === "kolay" ? "Kolay" : form.access === "orta" ? "Orta" : "Zor"} />
                    <Stat k="Zaman" v={form.shift === "gunduz" ? "Gündüz" : "Gece"} />
                  </div>
                  <div className="mt-8 flex flex-col gap-3">
                    <a href={buildWhatsApp()} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[var(--deep)] transition hover:scale-[1.02]">
                      WhatsApp ile Teklif Al
                    </a>
                    <a href="https://www.instagram.com/pergoclean.tr" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                      Instagram'dan Yaz
                    </a>
                  </div>
                </>
              )}
            </aside>
          </BlurFade>
        </form>
      </div>
    </section>
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