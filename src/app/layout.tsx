import type { Metadata } from "next";
import "./globals.css";
import { PreferencesProvider } from "@/lib/preferences";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { DisplayControls } from "@/components/DisplayControls";
import { site } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "profile",
    url: site.url,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.description }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-motion="full" data-contrast="default" data-backgrounds="visible">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <PreferencesProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:text-ink"
          >
            Skip to main content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <DisplayControls />
        </PreferencesProvider>
      </body>
    </html>
  );
}
