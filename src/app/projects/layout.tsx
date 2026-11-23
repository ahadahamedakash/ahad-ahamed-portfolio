import { ReactNode } from "react";
import { Metadata } from "next";

/**
 * SEO-optimized metadata for the Projects page
 * Following Open Graph and Twitter Card standards
 */
export const metadata: Metadata = {
  title: "Projects - Ahad Ahamed Akash | Full-Stack Software Engineer",
  description:
    "Explore full-stack products built by Ahad Ahamed Akash — e-commerce platforms like TechStore, stock management systems like Alishan, AI health assistants like MedAI, and more. Built with React, Next.js, Node.js, and modern technologies.",
  keywords: [
    "Ahad Ahamed Akash",
    "Full-Stack Developer",
    "Full-Stack Software Engineer",
    "Software Engineer",
    "React projects",
    "Next.js projects",
    "MERN stack",
    "e-commerce",
    "stock management",
    "AI healthcare",
    "web development portfolio",
    "TechStore",
    "Alishan",
    "MedAI Assistant",
    "Bangladesh developer",
  ],
  authors: [
    { name: "Ahad Ahamed Akash", url: "https://github.com/ahadahamedakash" },
  ],
  creator: "Ahad Ahamed Akash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/projects",
    title: "Projects - Ahad Ahamed Akash | Full-Stack Software Engineer",
    description:
      "Full-stack products built by Ahad Ahamed Akash - ecommerce platforms, stock management systems, AI health assistants, and more.",
    siteName: "Ahad Ahamed Akash Portfolio",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Ahad Ahamed Akash Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Ahad Ahamed Akash | Full-Stack Software Engineer",
    description:
      "Explore full-stack products built with React, Next.js, Node.js, Nest.js, FastAPI and modern technologies.",
    creator: "@ah1033ad",
    images: ["/og-projects.jpg"],
  },
  alternates: {
    canonical: "/projects",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
