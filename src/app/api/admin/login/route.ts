import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { checkRateLimit } from "@/lib/api-security";

export async function POST(request: Request) {
  // CSRF / Bot protection basics
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ message: "Çok fazla istek gönderdiniz. Daha sonra tekrar deneyin." }, { status: 429 });
  }

  try {
    const { password } = await request.json();
    
    const adminPassword = process.env.ADMIN_PASSWORD || "pergoclean-admin-2024";

    if (password === adminPassword) {
      const session = await getSession();
      session.destroy(); // Prevent session fixation
      session.isAdmin = true;
      await session.save();

      return NextResponse.json({ success: true, message: "Giriş başarılı." });
    }

    return NextResponse.json({ message: "Hatalı şifre." }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ message: "Sunucu hatası." }, { status: 500 });
  }
}
