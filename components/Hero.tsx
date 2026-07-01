"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: [0.28, 0.11, 0.32, 1] as const, delay },
  });

  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft ambient gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #DCEBFF, transparent)" }}
      />
      <div className="relative mx-auto max-w-shell px-6 pb-24 pt-24 text-center md:pb-28 md:pt-32">
        <motion.p {...fade(0)} className="eyebrow">
          Beyolite LLC
        </motion.p>
        <motion.h1
          {...fade(0.08)}
          className="mx-auto mt-4 max-w-4xl font-display text-hero font-bold text-ink"
        >
          Brands, built{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(120deg, #0071E3, #38B6FF 55%, #7C4DFF)" }}
          >
            to endure
          </span>
          .
        </motion.h1>
        <motion.p
          {...fade(0.16)}
          className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-ink-mute md:text-xl"
        >
          We design, build, and operate consumer brands and commerce ventures —
          with a focus on quality, care, and the long term.
        </motion.p>
        <motion.div
          {...fade(0.24)}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 font-sans text-[1.05rem]"
        >
          <Link href="/#sectors" className="link-chevron">
            See what we do
          </Link>
          <Link href="/#contact" className="link-chevron">
            Get in touch
          </Link>
        </motion.div>

        {/* floating product-style tile */}
        <motion.div
          {...fade(0.34)}
          className="mx-auto mt-16 aspect-[16/8] w-full max-w-3xl overflow-hidden rounded-4xl border border-line/70"
          style={{ background: "linear-gradient(135deg, #F5F7FA 0%, #E8EEF7 40%, #DCE7F5 100%)" }}
        >
          <div className="flex h-full items-center justify-center">
            <svg viewBox="0 0 220 220" className="w-40 md:w-52" aria-hidden="true">
              <polygon points="110,34 176,90 110,186 44,90" fill="#0071E3" />
              <polygon points="110,34 176,90 110,90 44,90" fill="#38B6FF" />
              <line x1="44" y1="90" x2="176" y2="90" stroke="#FFFFFF" strokeWidth="2.5" />
              <line x1="110" y1="34" x2="110" y2="186" stroke="#FFFFFF" strokeWidth="2.5" strokeOpacity="0.6" />
              <line x1="77" y1="90" x2="110" y2="186" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.5" />
              <line x1="143" y1="90" x2="110" y2="186" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.5" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
