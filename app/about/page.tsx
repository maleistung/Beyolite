import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Beyolite",
  description:
    "Beyolite LLC designs, builds, and operates consumer brands and commerce ventures with a focus on quality and longevity. Registered in Sheridan, Wyoming.",
};

const columns = [
  { label: "Who we are", body: "Beyolite designs, builds, and operates consumer brands and commerce ventures. We work hands-on, with an eye for quality and the patience to build things that last." },
  { label: "Our mission", body: "To create brands and businesses worth keeping — connecting good products with the people who value them, and holding them for the long term." },
  { label: "How we think", body: "Quality over quantity, details over shortcuts. We measure ourselves by the durability of what we build, not the speed of the next move." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-shell px-6 pb-16 pt-24 text-center md:pb-20 md:pt-32">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="mx-auto mt-4 max-w-3xl font-display text-hero font-bold text-ink">
              Built to{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg,#0071E3,#38B6FF 55%,#7C4DFF)" }}>
                endure
              </span>
              .
            </h1>
            <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-mute md:text-xl">
              We started Beyolite to build brands and businesses the patient way —
              with care, quality, and a long horizon.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-smoke">
        <div className="mx-auto grid max-w-wide gap-6 px-6 py-20 md:grid-cols-3 md:px-10 md:py-28">
          {columns.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="h-full rounded-4xl bg-white p-8">
                <p className="eyebrow">{c.label}</p>
                <p className="mt-4 font-display text-display-md font-medium leading-snug text-ink">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
