"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * HeroHeadline — a calm, premium rise. Lines fade and lift together, and
 * the accent word gets a soft highlight sweep behind it.
 */
export default function HeroHeadline() {
  const reduce = useReducedMotion();
  return (
    <h1 className="font-display text-display-xl font-extrabold text-ink">
      <motion.span
        className="block"
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        Brands, built
      </motion.span>
      <motion.span
        className="relative mt-1 block w-fit"
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
      >
        <motion.span
          className="absolute inset-x-[-4px] bottom-[0.12em] -z-10 h-[0.4em] origin-left rounded-sm bg-accent-soft/45"
          initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        />
        <span className="text-accent-deep">to endure</span>.
      </motion.span>
    </h1>
  );
}
