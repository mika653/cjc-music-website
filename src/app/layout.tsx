import type { Metadata } from "next";
import { Poppins, Righteous } from "next/font/google";
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
      className={`${poppins.variable} ${righteous.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
