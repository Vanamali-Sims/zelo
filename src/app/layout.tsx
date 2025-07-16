import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ibm-plex-sans" });

export const metadata: Metadata = {
  title: "Zelo.ai — Agentic AI Systems",
  description: "Zelo builds AI agents that help you work smarter — from daily tasks to marketing to full custom systems.",
  keywords: "AI, artificial intelligence, agentic AI, productivity, automation, consulting, business, custom AI, AI packs",
  openGraph: {
    title: "Zelo.ai — Agentic AI Systems",
    description: "Zelo builds AI agents that help you work smarter — from daily tasks to marketing to full custom systems.",
    url: "https://zelo.ai/",
    siteName: "Zelo.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelo.ai — Agentic AI Systems",
    description: "Zelo builds AI agents that help you work smarter — from daily tasks to marketing to full custom systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0D1B2A" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; connect-src 'self' https://api.emailjs.com https://*.emailjs.com; img-src *; media-src *; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" />
      </head>
      <body className={`${inter.variable} ${ibmPlexSans.variable} antialiased font-sans bg-[#0D1B2A] text-[#E0E1DD] min-h-screen tracking-wide`}>
        {children}
      </body>
    </html>
  );
}
