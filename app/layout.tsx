import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Beyolite LLC — Brands, Built to Endure",
  description:
    "Beyolite LLC builds and operates consumer brands and commerce ventures with a focus on quality and longevity. Registered in Sheridan, Wyoming, United States.",
  metadataBase: new URL("https://beyolite.com"),
  openGraph: {
    title: "Beyolite LLC",
    description:
      "We build and operate consumer brands and commerce ventures with a focus on quality and longevity.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
