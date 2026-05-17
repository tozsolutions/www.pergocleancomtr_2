import { NextResponse } from "next/server";
import { z } from "zod";

// Rate Limit: In-memory map (IP -> timestamp array)
// Note: In a serverless environment (like Vercel functions), this map resets per cold start.
// For production with strictly distributed limits, Redis (Upstash) is recommended.
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  let requestTimestamps = rateLimitMap.get(ip) || [];
  requestTimestamps = requestTimestamps.filter((ts) => ts > windowStart);

  if (requestTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  requestTimestamps.push(now);
  rateLimitMap.set(ip, requestTimestamps);
  return true;
}

// Sanitization: Strips basic HTML tags and trims strings
export function sanitizeString(str: string): string {
  if (!str) return str;
  return str.replace(/<[^>]*>?/gm, "").trim();
}

export function sanitizePayload<T extends Record<string, any>>(payload: T): T {
  const sanitized = { ...payload };
  for (const key in sanitized) {
    if (typeof sanitized[key] === "string") {
      sanitized[key] = sanitizeString(sanitized[key]) as any;
    }
  }
  return sanitized;
}

// Honeypot validation
export function checkHoneypot(body: Record<string, any>): boolean {
  // We will use "_honey" as the honeypot field name
  if (body._honey && body._honey.trim() !== "") {
    return false; // Honeypot filled, likely a bot
  }
  return true;
}

// Request Logger
export function logRequest(endpoint: string, payload: any, ip: string = "unknown") {
  const safePayload = { ...payload };
  // Mask sensitive info before logging if needed
  if (safePayload.telefon) safePayload.telefon = safePayload.telefon.replace(/.(?=.{4})/g, '*');
  if (safePayload.email) safePayload.email = safePayload.email.replace(/(.{2})(.*)(?=@)/, '$1***');
  
  console.log(`[API_REQUEST] [${new Date().toISOString()}] ${endpoint} - IP: ${ip} - Data: ${JSON.stringify(safePayload)}`);
}

// Base Zod Schema that can be extended
export const baseFormSchema = z.object({
  adSoyad: z.string().trim().min(2, "Ad Soyad en az 2 karakter olmalıdır.").max(100),
  telefon: z.string().trim().min(10, "Geçerli bir telefon numarası giriniz.").max(20),
  email: z.string().trim().email("Geçerli bir e-posta adresi giriniz.").optional().or(z.literal("")),
  _honey: z.string().optional()
});
