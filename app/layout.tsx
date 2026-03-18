import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JWT Garden",
  description: "Login con JWT, panel privado y despliegue listo para Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
