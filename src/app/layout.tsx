import type { Metadata } from "next";
import { Poppins, Righteous } from "next/font/google";
import FloatingMessenger from "@/components/FloatingMessenger";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cjcmusicphilippines.com"),
  title: {
    default:
      "CJC Music Philippines | Premium Professional Audio & Musical Instruments",
    template: "%s | CJC Music Philippines",
  },
  description:
    "Your #1 source for branded & premium professional audio systems, musical instruments, event lighting, studio recording gear, LED walls & AV equipment in the Philippines.",
  keywords: [
    "professional audio Philippines",
    "musical instruments Manila",
    "Bose Philippines",
    "event lighting system",
    "studio recording gear",
    "LED wall Philippines",
    "AV equipment",
    "CJC Music",
    "audio equipment Cavite",
    "Bose dealer Philippines",
    "JBL authorized dealer",
    "musical instruments Philippines",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CJC Music Philippines | Premium Professional Audio & Musical Instruments",
    description:
      "Home of Branded & Premium Professional Audio System, Musical Instruments, Event Lighting, Studio Recording Gears, LED Wall & AV Equipment in the Philippines.",
    type: "website",
    locale: "en_PH",
    url: "https://cjcmusicphilippines.com",
    siteName: "CJC Music Philippines",
    images: [
      {
        url: "/images/cjc-logo.jpg",
        width: 400,
        height: 400,
        alt: "CJC Music Philippines",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@cjcmusicph",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/cjc-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${righteous.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MusicStore", "LocalBusiness"],
              name: "CJC Music Philippines",
              description:
                "Your #1 source for branded & premium professional audio systems, musical instruments, event lighting, studio recording gear in the Philippines.",
              url: "https://cjcmusicphilippines.com",
              telephone: "+639224457975",
              logo: "https://cjcmusicphilippines.com/images/cjc-logo.jpg",
              image: "https://cjcmusicphilippines.com/images/cjc-logo.jpg",
              sameAs: [
                "https://facebook.com/cjcmusicph",
                "https://m.me/cjcmusicph",
              ],
              priceRange: "\u20B1\u20B1-\u20B1\u20B1\u20B1\u20B1",
              currenciesAccepted: "PHP",
              paymentAccepted: "Cash, Bank Transfer, GCash",
              areaServed: {
                "@type": "Country",
                name: "Philippines",
              },
            }),
          }}
        />
        {children}
        <FloatingMessenger />
      </body>
    </html>
  );
}
