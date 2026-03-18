import { redirect } from "next/navigation";

import { LoginForm } from "@/components/login-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSessionFromCookie } from "@/lib/session";

export default async function LoginPage() {
  const session = await getSessionFromCookie();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-10">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-5xl items-center gap-8 lg:grid-cols-2">
        <section className="space-y-6">
          <span className="inline-flex rounded-md border border-[var(--border)] bg-white px-3 py-1 text-sm font-medium text-[var(--foreground)]">
            Practica de autenticacion con JWT
          </span>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              Acceso privado con JWT, rutas protegidas y UI lista para entregar.
            </h1>
            <p className="max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
              Esta demo valida credenciales en el servidor, firma el token, lo guarda en cookie segura y protege la entrada al panel privado.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-[var(--border)] bg-white">
              <CardHeader>
                <CardTitle>Usuario de prueba</CardTitle>
                <CardDescription>Credenciales fijas para la correccion.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <p>
                  <span className="font-medium text-[var(--foreground)]">Email:</span> admin@tomates.com
                </p>
                <p>
                  <span className="font-medium text-[var(--foreground)]">Password:</span> 1234
                </p>
              </CardContent>
            </Card>
            <Card className="border-[var(--border)] bg-[var(--card-strong)] text-white">
              <CardHeader>
                <CardTitle>Que cubre</CardTitle>
                <CardDescription className="text-white/85">
                  Login, JWT, dashboard privado y logout.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-white/90">
                <p>Rutas `app/` de Next.js</p>
                <p>Formulario en React con feedback</p>
                <p>Proteccion con `proxy.ts`</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <LoginForm />
      </div>
    </main>
  );
}
