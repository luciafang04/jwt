import { redirect } from "next/navigation";

import { getSessionFromCookie } from "@/lib/session";

export default async function Home() {
  const session = await getSessionFromCookie();

  redirect(session ? "/dashboard" : "/login");
}
