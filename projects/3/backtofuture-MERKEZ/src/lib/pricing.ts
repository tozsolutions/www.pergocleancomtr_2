export type Service =
  | "pergola"
  | "bioclimatic"
  | "zip"
  | "kepenk"
  | "panel"
  | "mekanik"
  | "led";

export const services: { id: Service; label: string }[] = [
  { id: "pergola", label: "Pergola / Tente Kumaş Temizliği" },
  { id: "bioclimatic", label: "BioClimatic / RollingRoof Temizliği" },
  { id: "zip", label: "Wintent — Zip Perde Temizliği" },
  { id: "kepenk", label: "Kepenk — Panjur Temizliği" },
  { id: "panel", label: "Güneş Panel Temizliği" },
  { id: "mekanik", label: "Mekanik Sistem Bakımı" },
  { id: "led", label: "LED Arıza ve Renk Değişimi" },
];

export type Soil = "hafif" | "agir";
export type Access = "kolay" | "orta" | "zor";

export interface QuoteInput {
  service: Service;
  m2: number;
  soil: Soil;
  access: Access;
}

export interface QuoteResult {
  price: number | null;
  duration: string;
  note?: string;
  manual?: boolean;
}

export function calculateQuote({ service, m2, soil, access }: QuoteInput): QuoteResult {
  const accessMultiplier = access === "kolay" ? 1 : 1.25;

  if (service === "pergola" || service === "bioclimatic") {
    const rate = soil === "hafif" ? 350 : 450;
    const min = soil === "hafif" ? 5000 : 7000;
    let price = m2 > 0 ? Math.max(m2 * rate, min) : min;
    if (m2 > 15) price = m2 * rate;
    price = Math.round(price * accessMultiplier);
    const duration =
      m2 <= 50 ? "6–8 saat" : m2 <= 100 ? "12–16 saat" : "16+ saat";
    return { price, duration };
  }

  if (service === "zip" || service === "kepenk") {
    const base = m2 <= 50 ? 5000 : 10000;
    const duration = m2 <= 50 ? "2–4 saat" : "4–8 saat";
    return { price: Math.round(base * accessMultiplier), duration };
  }

  if (service === "panel") {
    const price = Math.round((m2 || 1) * 750 * accessMultiplier);
    return { price, duration: m2 <= 50 ? "3–5 saat" : "6–10 saat" };
  }

  if (service === "mekanik") {
    return { price: null, duration: "Yerinde keşif", manual: true, note: "Mekanik bakım için yerinde keşif sonrası fiyat verilmektedir." };
  }

  if (service === "led") {
    return {
      price: null,
      duration: "Servis randevusu",
      manual: true,
      note: "Arıza tespiti için fiyat alınız. Samsung LED + plastik kasa renk değişimi: 200 TL/adet.",
    };
  }

  return { price: null, duration: "—", manual: true };
}

export const formatTRY = (n: number) =>
  new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(n);
