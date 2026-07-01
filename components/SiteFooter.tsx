import Link from "next/link";
import Wordmark from "@/components/Wordmark";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-shell px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div className="max-w-xs">
            <Wordmark />
            <p className="mt-5 font-sans text-sm leading-relaxed text-ink-mute">
              We build and operate consumer brands and commerce ventures with a
              focus on quality and longevity.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Company</p>
            <ul className="space-y-3 font-sans text-sm text-ink-mute">
              <li><Link href="/about" className="transition-colors hover:text-ink">About</Link></li>
              <li><Link href="/#contact" className="transition-colors hover:text-ink">Contact</Link></li>
              <li><a href="mailto:info@beyolite.com" className="transition-colors hover:text-ink">info@beyolite.com</a></li>
              <li><a href="tel:+13072047310" className="transition-colors hover:text-ink">+1 (307) 204-7310</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Registered Office</p>
            <address className="not-italic font-sans text-sm leading-relaxed text-ink-mute">
              <span className="text-ink">Beyolite LLC</span>
              <br />1309 Coffeen Avenue, STE 1200
              <br />Sheridan, Wyoming 82801
              <br />United States
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 font-sans text-xs text-ink-mute md:flex-row md:items-center md:justify-between">
          <span>&copy; {year} Beyolite LLC. All rights reserved.</span>
          <span>Registered in the State of Wyoming, USA</span>
        </div>
      </div>
    </footer>
  );
}
