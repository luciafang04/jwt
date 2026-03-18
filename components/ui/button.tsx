import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "ghost";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition disabled:pointer-events-none disabled:opacity-60",
        variant === "default" &&
          "bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)]",
        variant === "secondary" &&
          "border border-[var(--border)] bg-white text-[var(--foreground)] hover:bg-[#f3f4f6]",
        variant === "ghost" && "text-[var(--foreground)] hover:bg-[#f3f4f6]",
        className,
      )}
      {...props}
    />
  );
}
