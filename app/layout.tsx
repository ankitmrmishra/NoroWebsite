import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noro.work"),
  title: {
    default:
      "Noro | Web Design & Development Agency | Modern Digital Experiences",
    template: "%s | Noro.Work Web Agency",
  },
  description:
    "Professional web design and development agency specializing in striking design, modern development, and razor-sharp branding to create unforgettable digital experiences.",
  keywords: [
    "web design",
    "web development",
    "branding",
    "digital experiences",
    "website design",
    "modern websites",
    "professional web agency",
    "custom websites",
  ],
  authors: [{ name: "Ankit" }],
  creator: "Ankit",
  publisher: "Ankit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noro.work",
    title: "Noro | We Build Websites That Look Great and Work Even Better",
    description:
      "We blend striking design, modern development, and razor-sharp branding to turn wild ideas into unforgettable digital experiences.",
    siteName: "noro",
    images: [
      {
        url: "https://noro.work/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noro.Work Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noro.Work | Web Design & Development Agency",
    description:
      "We blend striking design, modern development, and razor-sharp branding to turn wild ideas into unforgettable digital experiences.",
    images: ["https://noro.work/twitter-image.png"],
    creator: "@noro.work",
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
  alternates: {
    canonical: "https://noro.work",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar />
        <main>{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "noro",
              url: "https://noro.work",
              logo: "https://noro.work/logo.svg",
              description:
                "We blend striking design, modern development, and razor-sharp branding to turn wild ideas into unforgettable digital experiences.",
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-17:00",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              sameAs: [
                "https://twitter.com/noro.work",
                "https://instagram.com/norowork",
                "https://linkedin.com/company/norowork",
              ],
              offers: {
                "@type": "Offer",
                name: "Web Design & Development Services",
                description:
                  "Professional website design and development services",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
