import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

// The password should be at least 32 characters long.
const sessionPassword = process.env.ADMIN_SESSION_SECRET || "pergoclean-super-secret-complex-password-1234567890";

export interface SessionData {
  isAdmin: boolean;
}

export const sessionOptions = {
  password: sessionPassword,
  cookieName: "pergoclean_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  return session;
}
