import { redirect } from "next/navigation";

import { LogoutButton } from "@/components/logout-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SESSION_MAX_AGE } from "@/lib/auth";
import { getSessionFromCookie } from "@/lib/session";

const htmlTags = [
  "html",
  "head",
  "body",
  "header",
  "main",
  "section",
  "article",
  "nav",
  "footer",
  "h1",
  "p",
  "a",
  "img",
  "form",
  "button",
];

const courseFunctions = [
  "useState",
  "useEffect",
  "fetch",
  "map",
  "filter",
  "find",
  "reduce",
  "JSON.parse",
  "JSON.stringify",
  "preventDefault",
  "redirect",
  "cookies",
];

export default async function DashboardPage() {
  const session = await getSessionFromCookie();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,var(--background)_0%,#fff7a8_100%)] px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <section>
          <Card className="border-[var(--foreground)] bg-white shadow-sm">
            <CardHeader className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[var(--accent)]">
                    Zona VIP súper exclusiva
                  </p>
                  <CardTitle className="text-3xl text-[var(--foreground)]">
                    Bienvenido, {session.name}
                  </CardTitle>
                  <CardDescription className="max-w-2xl text-base">
                  </CardDescription>
                </div>
                <LogoutButton />
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              <div className="rounded-md border border-[var(--secondary)] bg-[var(--surface-soft)] p-4">
                <p className="text-sm text-[var(--muted-foreground)]">Email</p>
                <p className="mt-2 font-medium text-[var(--foreground)]">{session.email}</p>
              </div>
              <div className="rounded-md border border-[var(--secondary)] bg-[var(--surface-soft)] p-4">
                <p className="text-sm text-[var(--muted-foreground)]">Rol</p>
                <p className="mt-2 font-medium text-[var(--foreground)]">{session.role}</p>
              </div>
              <div className="rounded-md border border-[var(--secondary)] bg-[var(--surface-soft)] p-4">
                <p className="text-sm text-[var(--muted-foreground)]">Vida del token</p>
                <p className="mt-2 font-medium text-[var(--foreground)]">{SESSION_MAX_AGE / 60} minutos</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-[var(--foreground)] bg-white">
            <CardHeader>
              <CardTitle className="text-[var(--secondary)]">Etiquetas HTML</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {htmlTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[var(--accent)] bg-[var(--accent)] px-3 py-1 font-mono text-sm text-white"
                >
                  {`<${tag}>`}
                </span>
              ))}
            </CardContent>
          </Card>

          <Card className="border-[var(--foreground)] bg-white">
            <CardHeader>
              <CardTitle className="text-[var(--secondary)]">Funciones</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {courseFunctions.map((fn) => (
                <div
                  key={fn}
                  className="rounded-md border border-[var(--secondary)] bg-[var(--surface-soft)] px-4 py-3 text-sm font-medium text-[var(--foreground)]"
                >
                  {fn}()
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
