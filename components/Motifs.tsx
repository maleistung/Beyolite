/**
 * Minimal, intentional graphics that fill the visual panels so nothing
 * reads as an empty box. Geometric line-art on soft tints — no stock art.
 */

export function CraftArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 240" className={className} aria-hidden="true">
      <rect x="90" y="50" width="140" height="140" rx="18" fill="none" stroke="#1D1D1F" strokeOpacity="0.16" strokeWidth="2" />
      <rect x="112" y="72" width="96" height="96" rx="14" fill="none" stroke="#1D1D1F" strokeOpacity="0.24" strokeWidth="2" />
      <rect x="134" y="94" width="52" height="52" rx="10" fill="#0071E3" />
      <circle cx="160" cy="120" r="6" fill="#FFFFFF" />
    </svg>
  );
}

export function BrandArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="52" fill="#FFFFFF" fillOpacity="0.7" />
      <path d="M60 66 h40 a6 6 0 0 1 6 6 v28 a6 6 0 0 1 -6 6 h-40 a6 6 0 0 1 -6 -6 v-28 a6 6 0 0 1 6 -6 z" fill="none" stroke="#1D1D1F" strokeWidth="3" />
      <path d="M70 66 v-6 a10 10 0 0 1 20 0 v6" fill="none" stroke="#0071E3" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function RetailArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="52" fill="#FFFFFF" fillOpacity="0.7" />
      <rect x="52" y="60" width="56" height="42" rx="5" fill="none" stroke="#1D1D1F" strokeWidth="3" />
      <line x1="52" y1="72" x2="108" y2="72" stroke="#1D1D1F" strokeWidth="3" />
      <circle cx="66" cy="112" r="5" fill="#0071E3" />
      <circle cx="96" cy="112" r="5" fill="#0071E3" />
    </svg>
  );
}

export function SupplyArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="52" fill="#FFFFFF" fillOpacity="0.7" />
      <circle cx="58" cy="66" r="7" fill="#1D1D1F" />
      <circle cx="104" cy="66" r="7" fill="#1D1D1F" />
      <circle cx="80" cy="104" r="7" fill="#0071E3" />
      <path d="M58 66 h46 M58 66 L80 104 M104 66 L80 104" fill="none" stroke="#1D1D1F" strokeOpacity="0.4" strokeWidth="2.5" />
    </svg>
  );
}
