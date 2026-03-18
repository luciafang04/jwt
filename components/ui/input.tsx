import * as React from "react";

import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-sm outline-none transition placeholder:text-[var(--muted-foreground)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(37,99,235,0.15)]",
        className,
      )}
      {...props}
    />
  );
}
