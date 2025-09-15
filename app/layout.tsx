import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PEARL Labs - AI V&V for Aerospace | Automated Safety Validation",
  description: "PEARL Labs provides third-party verification and validation for autonomous aerospace systems. Physics-informed adversarial testing, formal verification, and automated safety validation for NASA, DoD, and commercial space missions.",
  keywords: [
    "aerospace verification",
    "AI validation",
    "formal verification", 
    "autonomous systems",
    "NASA V&V",
    "DoD aerospace",
    "physics-informed testing",
    "adversarial testing",
    "space systems validation",
    "flight software verification"
  ],
  authors: [{ name: "PEARL Labs Team" }],
  creator: "PEARL Labs",
  publisher: "PEARL Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pearl-labs.com",
    title: "PEARL Labs - Physics Evaluation for AI Reliability & Logic",
    description: "Automated verification and validation for autonomous aerospace systems. Reducing V&V costs by 10x while increasing coverage 3x through physics-informed adversarial testing.",
    siteName: "PEARL Labs",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PEARL Labs - AI V&V for Aerospace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PEARL Labs - AI V&V for Aerospace",
    description: "Physics-informed verification and validation for autonomous aerospace systems. Automated safety validation for NASA, DoD, and commercial space missions.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://pearl-labs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PEARL Labs",
              "description": "Physics Evaluation for AI Reliability & Logic - Verification and validation for autonomous aerospace systems",
              "url": "https://pearl-labs.com",
              "logo": "https://pearl-labs.com/logo.png",
              "foundingDate": "2025",
              "industry": "Aerospace Software Verification",
              "areaServed": "Global",
              "service": [
                {
                  "@type": "Service",
                  "name": "Adversarial Testing",
                  "description": "AI-driven edge case discovery for autonomous systems"
                },
                {
                  "@type": "Service", 
                  "name": "Physics-Constrained Validation",
                  "description": "Realistic scenario generation respecting natural laws"
                },
                {
                  "@type": "Service",
                  "name": "Formal Verification",
                  "description": "Mathematical safety proofs for autonomous aerospace systems"
                }
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}