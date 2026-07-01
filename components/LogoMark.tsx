import { cn } from "@/lib/cn";

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
      <rect width="100" height="100" rx={rounded} fill="#1D1D1F" />
      <polygon points="50,24 77,49 50,80 23,49" fill="#0071E3" />
      <line x1="23" y1="49" x2="77" y2="49" stroke="#FFFFFF" strokeWidth="3" strokeOpacity="0.92" />
      <line x1="50" y1="24" x2="50" y2="80" stroke="#FFFFFF" strokeWidth="3" strokeOpacity="0.55" />
    </svg>
  );
}
