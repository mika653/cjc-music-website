import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue",
  description:
    "Browse 200+ professional audio equipment, musical instruments, mixers, speakers, microphones, and more. All authentic, all branded. Nationwide delivery across the Philippines.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Product Catalogue | CJC Music Philippines",
    description:
      "Browse 200+ professional audio equipment, speakers, mixers, microphones and more.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
