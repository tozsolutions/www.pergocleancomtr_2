import crypto from "crypto";

export interface StandardLeadPayload {
  leadType: "quote" | "contact" | "appointment" | "photo";
  fullName: string;
  phone: string;
  email?: string;
  message?: string;
  selectedSystem?: string;
  selectedPackage?: string;
  squareMeters?: string | number;
  calculatedPrice?: string;
  sourcePage: string;
  userAgent: string;
  ipHash: string;
  createdAt: string;
  [key: string]: any; // Allow other specific fields like 'tarih', 'saat' etc.
}

export function hashIp(ip: string): string {
  if (!ip || ip === "unknown") return "unknown";
  return crypto.createHash("sha256").update(ip).digest("hex").substring(0, 16);
}

export function buildStandardPayload(
  type: StandardLeadPayload["leadType"],
  data: any,
  request: Request,
  ip: string
): StandardLeadPayload {
  const userAgent = request.headers.get("user-agent") || "unknown";

  return {
    leadType: type,
    fullName: data.adSoyad || "Belirtilmedi",
    phone: data.telefon || "Belirtilmedi",
    email: data.email || "",
    message: data.mesaj || data.detay || "",
    selectedSystem: data.sistemTipi || "",
    selectedPackage: data.paketTipi || "",
    squareMeters: data.metrekare || "",
    calculatedPrice: data.hesaplananFiyat || "",
    sourcePage: request.headers.get("referer") || "Direct",
    userAgent,
    ipHash: hashIp(ip),
    createdAt: new Date().toISOString(),
    ...data // Spread the rest of the sanitized data
  };
}
