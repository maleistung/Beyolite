import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { cn } from "@/lib/cn";

export default function Wordmark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Beyolite LLC — Home"
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
    >
      <LogoMark className="h-7 w-7" rounded={8} />
      <span className="inline-flex items-baseline gap-1.5">
        <span
          className={cn(
            "font-display text-[1.3rem] font-bold leading-none tracking-[-0.02em]",
            inverted ? "text-paper" : "text-ink"
          )}
        >
          Beyolite
        </span>
        <span
          className={cn(
            "font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em]",
            inverted ? "text-paper/50" : "text-ink-mute"
          )}
        >
          LLC
        </span>
      </span>
    </Link>
  );
}
