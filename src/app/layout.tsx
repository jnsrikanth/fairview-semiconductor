import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `FairView Semi — Gallium HBM4 & Stallion GPU`,
    template: `%s · FairView Semi`,
  },
  description:
    "FairView Semiconductor is redefining the frontier of compute and memory — unifying Gallium HBM4 and Stallion GPU architectures into a single silicon package.",
  keywords: [
    "FairView Semiconductor",
    "FairView Semi",
    "Gallium HBM4",
    "Stallion GPU",
    "HBM4 Chipset",
    "Blade Servers",
    "AI Acceleration",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
    title: `FairView Semi — Gallium HBM4 & Stallion GPU`,
    description: COMPANY.tagline,
    images: [{ url: "/images/hero-gpu-die.jpg", width: 1920, height: 1080, alt: "FairView Semiconductor AI Die" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `FairView Semi — Gallium HBM4 & Stallion GPU`,
    description: COMPANY.tagline,
    images: ["/images/hero-gpu-die.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
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
