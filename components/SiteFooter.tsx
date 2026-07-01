import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-smoke text-ink-mute">
      <div className="mx-auto max-w-wide px-6 py-12 md:px-10">
        <div className="grid gap-10 border-b border-line pb-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="mb-3 font-sans text-xs font-semibold text-ink">Company</p>
            <ul className="space-y-2.5 font-sans text-[0.8rem]">
              <li><Link href="/about" className="transition-colors hover:text-ink">About</Link></li>
              <li><Link href="/#sectors" className="transition-colors hover:text-ink">What we do</Link></li>
              <li><Link href="/#approach" className="transition-colors hover:text-ink">How we work</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-sans text-xs font-semibold text-ink">Contact</p>
            <ul className="space-y-2.5 font-sans text-[0.8rem]">
              <li><a href="mailto:info@beyolite.com" className="transition-colors hover:text-ink">info@beyolite.com</a></li>
              <li><a href="tel:+13072047310" className="transition-colors hover:text-ink">+1 (307) 204-7310</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-sans text-xs font-semibold text-ink">Registered Office</p>
            <address className="not-italic font-sans text-[0.8rem] leading-relaxed">
              Beyolite LLC<br />
              1309 Coffeen Avenue, STE 1200<br />
              Sheridan, Wyoming 82801<br />
              United States
            </address>
          </div>
          <div>
            <p className="mb-3 font-sans text-xs font-semibold text-ink">Legal</p>
            <ul className="space-y-2.5 font-sans text-[0.8rem]">
              <li>Registered in Wyoming, USA</li>
              <li>Limited Liability Company</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 font-sans text-[0.72rem] md:flex-row md:items-center md:justify-between">
          <span>Copyright &copy; {year} Beyolite LLC. All rights reserved.</span>
          <span>Sheridan, Wyoming &middot; United States</span>
        </div>
      </div>
    </footer>
  );
}
