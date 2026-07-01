import Link from "next/link";
import Wordmark from "@/components/Wordmark";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-wide items-center justify-between px-6 md:px-10">
        <Wordmark />
        <nav className="flex items-center gap-8">
          <Link href="/about" className="font-sans text-[0.8rem] text-ink/80 transition-colors hover:text-ink">
            About
          </Link>
          <Link href="/#sectors" className="hidden font-sans text-[0.8rem] text-ink/80 transition-colors hover:text-ink sm:block">
            What we do
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-blue px-4 py-1.5 font-sans text-[0.8rem] font-medium text-white transition-colors hover:bg-blue-hover"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
