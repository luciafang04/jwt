"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@tomates.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        setError(data?.message ?? "No se pudo iniciar sesion.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Error de red. Vuelve a intentarlo.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="border-[var(--border)] shadow-sm">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl">Iniciar sesion</CardTitle>
        <CardDescription>
          Accede al panel privado con el usuario de prueba o modifica el formulario para comprobar la validacion.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email o usuario</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@tomates.com"
              autoComplete="username"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contrasena</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="1234"
              autoComplete="current-password"
              required
            />
          </div>
          {error ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}
          <Button className="w-full" disabled={isLoading} type="submit">
            {isLoading ? "Validando..." : "Entrar al panel"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-sm text-[var(--muted-foreground)]">
        El token se guarda en una cookie `httpOnly` con expiracion corta para reducir riesgos.
      </CardFooter>
    </Card>
  );
}
