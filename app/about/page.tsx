import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Beyolite LLC",
  description:
    "Beyolite LLC builds and operates consumer brands and commerce ventures with a focus on quality and longevity. Registered in Sheridan, Wyoming.",
};

const columns = [
  { label: "Who We Are", body: "Beyolite is a company that builds and operates consumer brands and commerce ventures. We work hands-on, with an eye for quality and the patience to build things that last." },
  { label: "Mission", body: "To create brands and businesses worth keeping — connecting good products with the people who value them, and holding them for the long term." },
  { label: "How We Think", body: "Quality over quantity, details over shortcuts. We measure ourselves by the durability of what we build, not the speed of the next move." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-shell px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="mt-6 max-w-3xl font-display text-display-xl font-extrabold text-ink">
              Built to <span className="text-accent-deep">endure</span>.
            </h1>
            <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-ink-mute md:text-lg">
              We started Beyolite to build brands and businesses the patient
              way — with care, quality, and a long horizon.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-shell gap-x-10 gap-y-14 px-6 py-20 md:grid-cols-3 md:px-10 md:py-28">
          {columns.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="h-1.5 w-10 rounded-full bg-accent" />
              <p className="eyebrow mt-6">{c.label}</p>
              <p className="mt-4 font-display text-display-md font-semibold leading-snug text-ink">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
