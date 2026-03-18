import { redirect } from "next/navigation";

import { LoginForm } from "@/components/login-form";
import { getSessionFromCookie } from "@/lib/session";

export default async function LoginPage() {
  const session = await getSessionFromCookie();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,var(--background)_0%,#fff7a8_100%)] px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-2xl flex-col items-center justify-center gap-6">
        <section className="space-y-4 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
              Acceso privado con JWT
            </h1>

          </div>
        </section>

        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
