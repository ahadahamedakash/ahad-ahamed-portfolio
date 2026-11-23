import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import BackToTop from "@/components/ui/BackToTop";
import { StructuredData } from "@/components/ui/StructuredData";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahadahamedakash.com"),
  title: "Ahad Ahamed Akash - Full-Stack Software Engineer & Problem Solver",
  description:
    "Full-Stack Software Engineer from Bangladesh specializing in React, Next.js, and Node.js. Building real products and solving algorithmic problems on Codeforces and LeetCode.",
  keywords: [
    "Ahad Ahamed Akash",
    "Full-Stack Developer",
    "Full-Stack Software Engineer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js",
    "Competitive Programmer",
    "Problem Solver",
  ],
  authors: [{ name: "Ahad Ahamed Akash" }],
  creator: "Ahad Ahamed Akash",
  manifest: "/manifest.json",
  other: {
    "X-DNS-Prefetch-Control": "on",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ahad Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahadahamedakash.com",
    title: "Ahad Ahamed Akash - Full-Stack Software Engineer & Problem Solver",
    description:
      "Full-Stack Software Engineer from Bangladesh. Building real products, solving hard problems.",
    siteName: "Ahad Ahamed Akash Portfolio",
    images: [
      {
        url: "/images/ahad/ahad.webp",
        width: 630,
        height: 630,
        alt: "Ahad Ahamed Akash - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahad Ahamed Akash - Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer from Bangladesh. React, Next.js, Node.js, Competitive Programming.",
    creator: "@ahadahamedakash",
    images: ["/images/ahad/ahad.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  colorScheme: "dark",
  themeColor: "#111110",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="canonical" href="https://ahad-ahamed.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ahad Portfolio" />

        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="preconnect"
          href="https://www.linkedin.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link
          rel="preconnect"
          href="https://github.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://github.com" />

        {/* Structured Data for SEO */}
        <StructuredData type="Person" />
        <StructuredData type="WebSite" />
        <StructuredData type="WebPage" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          defaultTheme="dark"
          enableSystem={false}
          attribute="data-theme"
        >
          <ScrollProgressBar />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
