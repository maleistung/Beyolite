"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * GemMotif — the signature element. A large faceted gem that draws its
 * facets and settles on load. Echoes the logo.
 */
export default function GemMotif({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 220 220" aria-hidden="true" className={className}>
      <motion.g
        initial={reduce ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        style={{ transformOrigin: "110px 110px" }}
      >
        <polygon points="110,34 176,90 110,186 44,90" fill="#BE5A38" />
        <polygon points="110,34 176,90 110,90 44,90" fill="#D98A5E" />
        <line x1="44" y1="90" x2="176" y2="90" stroke="#FBF7F1" strokeWidth="2.5" />
        <line x1="110" y1="34" x2="110" y2="186" stroke="#FBF7F1" strokeWidth="2.5" strokeOpacity="0.6" />
        <line x1="77" y1="90" x2="110" y2="186" stroke="#FBF7F1" strokeWidth="2" strokeOpacity="0.5" />
        <line x1="143" y1="90" x2="110" y2="186" stroke="#FBF7F1" strokeWidth="2" strokeOpacity="0.5" />
      </motion.g>
    </svg>
  );
}
