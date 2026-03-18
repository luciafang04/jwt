import { jwtVerify, SignJWT } from "jose";

export const SESSION_COOKIE_NAME = "jwt-session";
export const SESSION_MAX_AGE = 60;

export const DEMO_USER = {
  id: "1",
  email: "admin@gazpacho.com",
  name: "Admin Gazpacho",
  role: "Administrador",
} as const;

export type SessionUser = typeof DEMO_USER;

function getJwtSecret() {
  return new TextEncoder().encode(process.env.JWT_SECRET ?? "dev-secret-change-me-in-vercel");
}

export function validateCredentials(email: string, password: string) {
  return email === DEMO_USER.email && password === "1234";
}

export async function createSessionToken(user: SessionUser) {
  return await new SignJWT({
    sub: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(getJwtSecret());
}

export async function verifySessionToken(token: string) {
  const { payload } = await jwtVerify(token, getJwtSecret());

  return {
    id: String(payload.sub ?? ""),
    email: String(payload.email ?? ""),
    name: String(payload.name ?? ""),
    role: String(payload.role ?? ""),
  };
}
