import { NextResponse } from "next/server";
import { getSession } from "@/lib/session";

export async function POST() {
  try {
    const session = await getSession();
    session.destroy();
    
    return NextResponse.json({ success: true, message: "Çıkış başarılı." });
  } catch (error) {
    return NextResponse.json({ message: "Sunucu hatası." }, { status: 500 });
  }
}
