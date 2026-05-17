import { NextResponse } from "next/server";
import { checkRateLimit, sanitizePayload, checkHoneypot, baseFormSchema } from "@/lib/api-security";
import { z } from "zod";
import { sendWebhookWithRetry } from "@/lib/webhook-client";
import { buildStandardPayload } from "@/lib/payload-utils";
import { logEvent } from "@/lib/monitoring";
import { sendEmail, buildEmailHTML } from "@/lib/email-sender";

const quoteSchema = baseFormSchema.extend({
  sistemTipi: z.string().min(1, "Sistem tipi seçilmelidir."),
  paketTipi: z.string().optional(),
  metrekare: z.union([z.string(), z.number()]).optional(),
  sehir: z.string().optional(),
  geceCalismasi: z.string().optional(),
  hesaplananFiyat: z.string().optional()
});

export async function POST(request: Request) {
  if (request.headers.get("content-type") !== "application/json") {
    return NextResponse.json({ message: "Geçersiz istek tipi." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for") || "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ message: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin." }, { status: 429 });
  }

  try {
    const rawBody = await request.json();

    if (!checkHoneypot(rawBody)) {
      return NextResponse.json({ success: true, message: "Talebiniz alındı." }, { status: 200 });
    }

    const parsedBody = quoteSchema.safeParse(rawBody);
    if (!parsedBody.success) {
      const errorMessage = parsedBody.error.issues.map(e => e.message).join(", ");
      logEvent("validationFailed", { endpoint: "/api/lead/quote", error: errorMessage, ip });
      return NextResponse.json({ message: errorMessage }, { status: 400 });
    }

    const cleanBody = sanitizePayload(parsedBody.data);
    const payload = buildStandardPayload("quote", cleanBody, request, ip);

    logEvent("leadSubmitted", { endpoint: "/api/lead/quote", payloadType: "quote" });

    // Send webhook (n8n)
    await sendWebhookWithRetry(process.env.N8N_WEBHOOK_QUOTE_URL, payload);

    // Send email
    const emailHTML = buildEmailHTML(cleanBody, 'quote');
    await sendEmail('pergoclean@tozyapi.com.tr', '🏛️ Yeni Fiyat Teklifi Talebi', emailHTML);

    return NextResponse.json({
      success: true,
      message: "Teklif talebiniz kaydedildi."
    });
  } catch (error) {
    logEvent("webhookFailed", { endpoint: "/api/lead/quote", reason: "Sunucu hatası", error: String(error) });
    return NextResponse.json(
      { message: "İşlem sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
