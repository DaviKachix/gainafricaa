import "./globals.css";
import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ConvexClientProvider } from "@/components/convex-client-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://gain.tz"),

  title: {
    default: "GAiN Tanzania 2026 | Global Adventist Internet Network Conference",
    template: "%s | GAiN Tanzania 2026",
  },

  description:
    "GAiN Tanzania 2026 Conference – Integrated for Mission. A gathering of digital missionaries, media leaders, IT professionals, and communication teams advancing the gospel through technology.",

  keywords: [
    "GAiN Tanzania",
    "GAiN Africa",
    "GAiN Conference 2026",
    "Adventist Media Conference",
    "Digital Mission",
    "Hope Channel",
    "SDA Communication",
    "Technology for Mission",
    "Adventist IT",
    "Christian Media Conference",
    "Digital Evangelism",
    "Arusha Tanzania Conference",
  ],

  authors: [{ name: "GAiN Tanzania" }],

  creator: "GAiN Tanzania",
  publisher: "GAiN Tanzania",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "GAiN Tanzania 2026 – Integrated for Mission",
    description:
      "Join GAiN Tanzania 2026 to explore digital mission, media innovation, and technology for evangelism across Africa.",
    url: "https://gain.tz",
    siteName: "GAiN Tanzania 2026",
    images: [
      {
        url: "/icon.jpg",
        width: 1200,
        height: 630,
        alt: "GAiN Tanzania 2026 Conference",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GAiN Tanzania 2026 – Integrated for Mission",
    description:
      "Digital mission and media innovation conference bringing together Adventist communicators and technologists.",
    images: ["/icon.jpg"],
  },

  icons: {
    icon: [
      { url: "/icon.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/icon.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/icon.jpg",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  appleWebApp: {
    capable: true,
    title: "GAiN Tanzania 2026",
    statusBarStyle: "default",
  },

  alternates: {
    canonical: "https://gain.tz",
  },

  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-x-hidden relative">
        {/* Sidebar <SiteAside />*/}
        
        {/* Header */}
        <div className="relative z-40 sm:pr-20 lg:pr-24">
          <SiteHeader />
        </div>

        {/* Page Content */}
        <main className="relative z-10 min-h-screen sm:pr-20 lg:pr-24 transition-all duration-300">
          {children}
        </main>
        {/* Footer */}
        <SiteFooter />

        
      </body>
    </html>
  );
}

