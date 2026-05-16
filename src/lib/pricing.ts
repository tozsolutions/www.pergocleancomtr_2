export type Service =
  | "pergola"
  | "bioclimatic"
  | "zip"
  | "kepenk"
  | "panel"
  | "mekanik"
  | "led";

export const services: { id: Service; label: string; desc: string }[] = [
  {
    id: "pergola",
    label: "Pergola / Tente Kumaş Temizliği",
    desc: "Kumaşı değiştirmeden ilk günkü premium görünüm",
  },
  {
    id: "bioclimatic",
    label: "BioClimatic / RollingRoof Temizliği",
    desc: "Mekanik aksamdahil baştan ayağa restorasyon",
  },
  {
    id: "zip",
    label: "Wintent — Zip Perde Temizliği",
    desc: "Fermuar, ray ve motor sistemi dahil",
  },
  {
    id: "kepenk",
    label: "Kepenk — Panjur Temizliği",
    desc: "Profesyonel yüzey ve mekanik bakım",
  },
  {
    id: "panel",
    label: "Güneş Panel Temizliği",
    desc: "Verimlilik artışı için özel solüsyon",
  },
  {
    id: "mekanik",
    label: "Mekanik Sistem Bakımı",
    desc: "Motor, redüktör ve sensör kontrolü",
  },
  {
    id: "led",
    label: "LED Arıza ve Renk Değişimi",
    desc: "Samsung LED + plastik kasa: 200 ₺/adet",
  },
];

export type Soil = "hafif" | "agir";
export type Access = "kolay" | "orta" | "zor";
export type Region = "ankara" | "antalya";
export type Shift = "gunduz" | "gece";

export interface QuoteInput {
  service: Service;
  m2: number;
  soil: Soil;
  access: Access;
  region: Region;
  shift: Shift;
}

export interface QuoteResult {
  price: number | null;
  duration: string;
  note?: string;
  manual?: boolean;
  serviceLabel: string;
}

export function calculateQuote({ service, m2, soil, access, region }: QuoteInput): QuoteResult {
  const regionMultiplier = region === "antalya" ? 1.4 : 1;
  const accessMultiplier = access === "kolay" ? 1 : access === "orta" ? 1.25 : 1.25;
  const label = services.find((s) => s.id === service)?.label ?? "";

  if (service === "pergola" || service === "bioclimatic") {
    const rate = soil === "hafif" ? 350 : 450;
    const min = soil === "hafif" ? 5000 : 7000;
    let price = m2 > 0 ? Math.max(m2 * rate, min) : min;
    if (m2 > 15) price = m2 * rate;
    price = Math.round(price * accessMultiplier * regionMultiplier);
    const duration = m2 <= 50 ? "6–8 saat" : m2 <= 100 ? "12–16 saat" : "16+ saat";
    return { price, duration, serviceLabel: label };
  }

  if (service === "zip" || service === "kepenk") {
    const base = m2 <= 50 ? 5000 : 10000;
    const duration = m2 <= 50 ? "2–4 saat" : "4–8 saat";
    return { price: Math.round(base * accessMultiplier * regionMultiplier), duration, serviceLabel: label };
  }

  if (service === "panel") {
    const price = Math.round((m2 || 1) * 750 * accessMultiplier * regionMultiplier);
    return { price, duration: m2 <= 50 ? "3–5 saat" : "6–10 saat", serviceLabel: label };
  }

  if (service === "mekanik") {
    return { price: null, duration: "Yerinde keşif", manual: true, note: "Mekanik bakım için yerinde keşif sonrası fiyat verilmektedir.", serviceLabel: label };
  }

  if (service === "led") {
    return { price: null, duration: "Servis randevusu", manual: true, note: "Arıza tespiti için fiyat alınız. Samsung LED + plastik kasa renk değişimi: 200 ₺/adet.", serviceLabel: label };
  }

  return { price: null, duration: "—", manual: true, serviceLabel: label };
}

export const formatTRY = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(n);