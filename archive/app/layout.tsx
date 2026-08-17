import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { COMPANY } from "@/content/specs";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: COMPANY.name,
      url: SITE_URL,
      email: COMPANY.email,
      slogan: COMPANY.tagline,
    },
    {
      "@type": "WebSite",
      name: COMPANY.name,
      url: SITE_URL,
    },
  ],
};

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} — Gallium HBM4 & Stallion GPU`,
    template: `%s · ${COMPANY.short}`,
  },
  description:
    "FairView Semiconductor designs the Gallium HBM4 memory chipset and the Stallion GPU series. Bandwidth is compiled from public JEDEC facts. UCIe is not HBM.",
  keywords: [
    "FairView Semiconductor",
    "Gallium HBM4",
    "Stallion GPU",
    "HBM4 chipset",
    "JESD270-4",
    "SPHBM4",
    "AI accelerator",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
    title: `${COMPANY.name} — Gallium HBM4 & Stallion GPU`,
    description: COMPANY.tagline,
    images: [{ url: "/images/hero-package.jpg", width: 1920, height: 1080, alt: "FairView package render" }],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.tagline,
    images: ["/images/hero-package.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
