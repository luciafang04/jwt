import { NextResponse } from "next/server";

import { SESSION_COOKIE_NAME } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ message: "Sesion cerrada" });

  response.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: "",
    expires: new Date(0),
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
