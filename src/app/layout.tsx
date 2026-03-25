import type { Metadata } from "next";
import { Poppins, Righteous, Space_Grotesk, Playfair_Display, IBM_Plex_Mono, Fraunces, DM_Sans } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CJC Music | Premium Professional Audio & Musical Instruments in the Philippines",
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
  ],
  openGraph: {
    title: "CJC Music | Premium Professional Audio & Musical Instruments",
    description:
      "Home of Branded & Premium Professional Audio System, Musical Instruments, Event Lighting, Studio Recording Gears, LED Wall & AV Equipment in the Philippines.",
    type: "website",
    locale: "en_PH",
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
      className={`${poppins.variable} ${righteous.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${ibmPlexMono.variable} ${fraunces.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
