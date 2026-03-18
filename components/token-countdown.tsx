"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type TokenCountdownProps = {
  initialSeconds: number;
};

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function TokenCountdown({ initialSeconds }: TokenCountdownProps) {
  const router = useRouter();
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((currentSeconds) => {
        if (currentSeconds <= 1) {
          window.clearInterval(interval);
          router.refresh();
          return 0;
        }

        return currentSeconds - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [router]);

  return (
    <div>
      <p className="text-sm text-[var(--muted-foreground)]">Vida del token</p>
      <p className="mt-2 font-medium text-[var(--foreground)]">{formatTime(secondsLeft)}</p>
    </div>
  );
}
