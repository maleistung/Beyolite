import { cn } from "@/lib/cn";

/**
 * LogoMark — Beyolite's brand mark: a faceted gem, a nod to the mineral
 * "-lite" name and to lasting value. Geometric, crisp at favicon size.
 */
export default function LogoMark({
  className,
  rounded = 22,
}: {
  className?: string;
  rounded?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("block", className)}
    >
      <rect width="100" height="100" rx={rounded} fill="#24201B" />
      <polygon points="50,24 77,49 50,80 23,49" fill="#BE5A38" />
      <line x1="23" y1="49" x2="77" y2="49" stroke="#FBF7F1" strokeWidth="3" strokeOpacity="0.9" />
      <line x1="50" y1="24" x2="50" y2="80" stroke="#FBF7F1" strokeWidth="3" strokeOpacity="0.55" />
    </svg>
  );
}
