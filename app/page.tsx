import Link from "next/link";
import HeroHeadline from "@/components/HeroHeadline";
import GemMotif from "@/components/GemMotif";
import Reveal from "@/components/Reveal";

const stats = [
  { figure: "2023", label: "Founded in Wyoming" },
  { figure: "3", label: "Areas of focus" },
  { figure: "Global", label: "Markets served" },
  { figure: "Built to last", label: "Our standard" },
];

const capabilities = [
  { title: "Brand Building", body: "We create consumer brands with a point of view — identity, product, and the details that earn trust." },
  { title: "Commerce Operations", body: "We run online retail end to end, from sourcing and merchandising to fulfilment and care." },
  { title: "Lasting Value", body: "We build to keep, investing in quality and reputation that compound over the long term." },
];

const principles = [
  { no: "01", title: "Quality first", body: "We would rather do fewer things exceptionally well than many things adequately." },
  { no: "02", title: "Own the details", body: "The difference between good and great lives in the details — so we sweat them." },
  { no: "03", title: "Build for trust", body: "Reputation is the asset. Every decision protects the relationship with the customer." },
  { no: "04", title: "Think in decades", body: "We measure success in longevity, not in the speed of the next exit." },
];

const sectors = [
  { name: "Consumer Brands", body: "Own-brand products designed for everyday quality and repeat loyalty." },
  { name: "Online Retail", body: "Direct and marketplace commerce, operated with care from cart to doorstep." },
  { name: "Sourcing & Supply", body: "Reliable sourcing and distribution that keep quality consistent at scale." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-shell items-center gap-12 px-6 pb-20 pt-20 md:grid-cols-[1.4fr_1fr] md:px-10 md:pb-28 md:pt-28">
          <div>
            <p className="eyebrow">Sheridan, Wyoming &middot; United States</p>
            <div className="mt-7">
              <HeroHeadline />
            </div>
            <Reveal delay={0.9} className="mt-8 max-w-lg">
              <p className="font-sans text-base leading-relaxed text-ink-mute md:text-lg">
                Beyolite builds and operates consumer brands and commerce
                ventures — with a focus on quality, care, and longevity.
              </p>
            </Reveal>
            <Reveal delay={1} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-sans text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
              >
                Get in touch
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/about" className="inline-flex items-center font-sans text-sm font-medium text-ink transition-colors hover:text-accent-deep">
                About the company
              </Link>
            </Reveal>
          </div>
          <div className="hidden justify-self-end md:block">
            <GemMotif className="w-64" />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-b border-line bg-sand">
        <div className="mx-auto grid max-w-shell grid-cols-2 md:grid-cols-4 px-6 md:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="border-line px-2 py-10 md:py-14 [&:not(:last-child)]:md:border-r">
              <p className="font-display text-display-md font-extrabold text-accent-deep">{s.figure}</p>
              <p className="mt-2 font-sans text-sm text-ink-mute">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-5 max-w-2xl font-display text-display-lg font-extrabold text-ink">
            Brands worth keeping, built with care.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-line bg-sand/50 p-8 transition-colors hover:border-accent/40">
                <span className="font-display text-2xl font-extrabold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-display-md font-bold text-ink">{c.title}</h3>
                <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PRINCIPLES (dark) ── */}
      <section className="bg-ink">
        <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow !text-accent-soft">How we work</p>
            <h2 className="mt-5 max-w-2xl font-display text-display-lg font-extrabold text-paper">
              Four principles we don&rsquo;t compromise.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.06}>
                <div className="flex gap-6 border-t border-paper/15 pt-6">
                  <span className="font-display text-sm font-bold tabular-nums text-accent-soft">{p.no}</span>
                  <div>
                    <h3 className="font-display text-[1.4rem] font-bold text-paper">{p.title}</h3>
                    <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-paper/60">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="border-b border-line bg-sand">
        <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow">Where we operate</p>
            <h2 className="mt-5 max-w-2xl font-display text-display-lg font-extrabold text-ink">
              Areas we know intimately.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-line bg-paper p-8 transition-colors hover:border-accent/50">
                  <div className="h-1.5 w-10 rounded-full bg-accent" />
                  <h3 className="mt-6 font-display text-display-md font-bold text-ink">{s.name}</h3>
                  <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-ink">
        <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow !text-accent-soft">Get in touch</p>
            <h2 className="mt-5 max-w-2xl font-display text-display-lg font-extrabold text-paper">
              Let&rsquo;s build something lasting.
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-paper/60">
              Tell us what you&rsquo;re working on. We read every message and
              reply personally.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@beyolite.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-sans text-sm font-semibold text-paper transition-colors hover:bg-accent-deep"
              >
                info@beyolite.com
                <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="tel:+13072047310"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3 font-sans text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
              >
                +1 (307) 204-7310
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
