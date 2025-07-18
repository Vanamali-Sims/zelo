import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-ibm-plex-sans" });

export const metadata: Metadata = {
  title: "Zelo - AI Tools for Your Business",
  description: "Simple AI tools to automate your grind — one agent at a time. Personal, affordable, and reliable solutions built specifically for your business.",
  keywords: "AI, artificial intelligence, automation, business tools, custom AI, AI agents, small business, startup",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Zelo - AI Tools for Your Business",
    description: "Simple AI tools to automate your grind — one agent at a time. Personal, affordable, and reliable solutions built specifically for your business.",
    url: "https://zelo.com/",
    siteName: "Zelo",
    type: "website",
    images: [
      {
        url: '/zelo-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zelo - AI Tools for Your Business',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zelo - AI Tools for Your Business",
    description: "Simple AI tools to automate your grind — one agent at a time. Personal, affordable, and reliable solutions built specifically for your business.",
    images: ['/zelo-og-image.png'],
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
        <meta name="theme-color" content="#0d9488" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; connect-src 'self' https://api.emailjs.com https://*.emailjs.com; img-src *; media-src *; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${ibmPlexSans.variable} antialiased font-sans bg-[#0D1B2A] text-[#E0E1DD] min-h-screen tracking-wide`}>
        {children}
      </body>
    </html>
  );
}
