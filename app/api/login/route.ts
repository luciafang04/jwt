import { NextResponse } from "next/server";

import { createSessionToken, DEMO_USER, SESSION_COOKIE_NAME, SESSION_MAX_AGE, validateCredentials } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email : "";
  const password = typeof body?.password === "string" ? body.password : "";

  if (!validateCredentials(email, password)) {
    return NextResponse.json(
      { message: "Credenciales incorrectas" },
      { status: 401 },
    );
  }

  const token = await createSessionToken(DEMO_USER);
  const response = NextResponse.json({
    message: "Login correcto",
    token,
    user: DEMO_USER,
  });

  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: token,
    httpOnly: true,
    maxAge: SESSION_MAX_AGE,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
