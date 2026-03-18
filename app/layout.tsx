import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JWT",
  description: "Login con JWT",
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
