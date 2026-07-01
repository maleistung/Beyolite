import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

const bento = [
  { title: "Brand building", body: "Identity, product, and the details that earn trust — from first idea to first sale.", span: "md:col-span-2", tone: "light" },
  { title: "Quality first", body: "Fewer things, done exceptionally.", span: "", tone: "dark" },
  { title: "Commerce operations", body: "Sourcing, merchandising, fulfilment, and care — run end to end.", span: "", tone: "blue" },
  { title: "Built to last", body: "We invest in reputation and quality that compound over time.", span: "md:col-span-2", tone: "light" },
];

const stats = [
  { figure: "2023", label: "Founded in Wyoming" },
  { figure: "3", label: "Areas of focus" },
  { figure: "Global", label: "Markets served" },
  { figure: "Long-term", label: "Our horizon" },
];

const sectors = [
  { name: "Consumer Brands", body: "Own-brand products designed for everyday quality and repeat loyalty.", grad: "linear-gradient(135deg,#EAF1FB,#D6E4F7)" },
  { name: "Online Retail", body: "Direct and marketplace commerce, operated with care from cart to doorstep.", grad: "linear-gradient(135deg,#F3EEFB,#E4D9F7)" },
  { name: "Sourcing & Supply", body: "Reliable sourcing and distribution that keep quality consistent at scale.", grad: "linear-gradient(135deg,#EAF7F1,#D6F0E4)" },
];

const principles = [
  { no: "01", title: "Quality first", body: "We would rather do fewer things exceptionally well than many things adequately." },
  { no: "02", title: "Own the details", body: "The difference between good and great lives in the details — so we sweat them." },
  { no: "03", title: "Build for trust", body: "Reputation is the asset. Every decision protects the customer relationship." },
  { no: "04", title: "Think in decades", body: "We measure success in longevity, not the speed of the next exit." },
];

const ventures = [
  { name: "Consumer brand", tag: "Direct-to-consumer" },
  { name: "Commerce venture", tag: "Online retail" },
  { name: "Sourcing line", tag: "Supply & distribution" },
  { name: "In development", tag: "Coming soon" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── STATEMENT (dark full-bleed) ── */}
      <section className="bg-black">
        <div className="mx-auto max-w-shell px-6 py-28 text-center md:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-display-xl font-bold text-white">
              We don&rsquo;t chase trends.
              <br />
              <span className="text-ink-mute">We build things meant to last.</span>
            </h2>
            <Link href="/#approach" className="mt-8 inline-block font-sans text-[1.05rem] text-blue-link">
              How we work &rsaquo;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── BENTO GRID ── */}
      <section className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 font-display text-display-lg font-bold text-ink">
            One team, the full stack of building a brand.
          </h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {bento.map((b, i) => {
            const tone =
              b.tone === "dark"
                ? "bg-graphite text-white"
                : b.tone === "blue"
                ? "text-white"
                : "bg-smoke text-ink";
            return (
              <Reveal key={b.title} delay={i * 0.06} className={b.span}>
                <div
                  className={`flex h-full min-h-[15rem] flex-col justify-between rounded-4xl p-8 ${tone}`}
                  style={b.tone === "blue" ? { background: "linear-gradient(135deg,#0071E3,#39A0FF)" } : undefined}
                >
                  <h3 className="font-display text-display-md font-semibold">{b.title}</h3>
                  <p className={`mt-4 font-sans text-[0.95rem] leading-relaxed ${b.tone === "light" ? "text-ink-mute" : "text-white/75"}`}>
                    {b.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── FEATURE SPLIT ── */}
      <section className="bg-smoke">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow">Our craft</p>
            <h2 className="mt-3 font-display text-display-lg font-bold text-ink">
              Every detail, considered.
            </h2>
            <p className="mt-5 max-w-md font-sans text-lg leading-relaxed text-ink-mute">
              From the first sketch to the last mile of delivery, we obsess over
              the details that turn a product into a brand people return to.
            </p>
            <Link href="/about" className="mt-6 inline-block font-sans text-[1.05rem] link-chevron">
              About the company
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="aspect-[4/3] w-full rounded-4xl border border-line/70"
              style={{ background: "linear-gradient(135deg,#EAF1FB,#DDE9F8 50%,#E9E2FB)" }}
            />
          </Reveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-28">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center">
              <p className="font-display text-display-lg font-bold text-ink">{s.figure}</p>
              <p className="mt-2 font-sans text-sm text-ink-mute">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section id="sectors" className="bg-smoke">
        <div className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Where we operate</p>
            <h2 className="mt-3 font-display text-display-lg font-bold text-ink">Areas we know intimately.</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07}>
                <div className="flex h-full flex-col overflow-hidden rounded-4xl bg-white">
                  <div className="aspect-[16/10] w-full" style={{ background: s.grad }} />
                  <div className="p-8">
                    <h3 className="font-display text-display-md font-semibold text-ink">{s.name}</h3>
                    <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section id="approach" className="bg-black">
        <div className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">How we work</p>
            <h2 className="mt-3 font-display text-display-lg font-bold text-white">
              Four principles we don&rsquo;t compromise.
            </h2>
          </Reveal>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.06}>
                <div className="flex gap-6 border-t border-line-dark pt-6">
                  <span className="font-display text-sm font-semibold tabular-nums text-blue-link">{p.no}</span>
                  <div>
                    <h3 className="font-display text-[1.5rem] font-semibold text-white">{p.title}</h3>
                    <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-white/60">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTURES ── */}
      <section className="mx-auto max-w-wide px-6 py-24 md:px-10 md:py-32">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow">The group</p>
          <h2 className="mt-3 font-display text-display-lg font-bold text-ink">A growing family of ventures.</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ventures.map((v, i) => (
            <Reveal key={v.name + i} delay={i * 0.06}>
              <div className="flex h-full min-h-[11rem] flex-col justify-between rounded-4xl bg-smoke p-7">
                <div className="h-9 w-9 rounded-xl" style={{ background: "linear-gradient(135deg,#0071E3,#39A0FF)" }} />
                <div>
                  <h3 className="font-display text-[1.2rem] font-semibold text-ink">{v.name}</h3>
                  <p className="mt-1 font-sans text-xs text-ink-mute">{v.tag}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section id="contact" className="bg-smoke">
        <div className="mx-auto max-w-shell px-6 py-28 text-center md:py-36">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-display-xl font-bold text-ink">
              Let&rsquo;s build something lasting.
            </h2>
            <p className="mx-auto mt-5 max-w-md font-sans text-lg leading-relaxed text-ink-mute">
              Tell us what you&rsquo;re working on. We read every message and reply personally.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:info@beyolite.com" className="rounded-full bg-blue px-7 py-3 font-sans text-[0.95rem] font-medium text-white transition-colors hover:bg-blue-hover">
                info@beyolite.com
              </a>
              <a href="tel:+13072047310" className="rounded-full border border-line bg-white px-7 py-3 font-sans text-[0.95rem] font-medium text-ink transition-colors hover:bg-smoke-2">
                +1 (307) 204-7310
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
