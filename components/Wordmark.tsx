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
      aria-label="Beyolite — Home"
      className={cn("inline-flex items-center gap-2 select-none", className)}
    >
      <LogoMark className="h-6 w-6" rounded={7} />
      <span
        className={cn(
          "font-display text-[1.15rem] font-semibold leading-none tracking-[-0.02em]",
          inverted ? "text-white" : "text-ink"
        )}
      >
        Beyolite
      </span>
    </Link>
  );
}
