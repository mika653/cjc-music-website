import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Phone, ArrowLeft, Shield, Truck, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) return { title: "Product Not Found" };
    return {
      title: `${product.name} - ${product.brand}`,
      description: product.description,
      alternates: {
        canonical: `/products/${slug}`,
      },
      openGraph: {
        title: `${product.name} - ${product.brand} | CJC Music Philippines`,
        description: product.description,
        images: [
          {
            url: product.image,
            alt: product.name,
          },
        ],
      },
    };
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  // Get related products (same category, exclude current)
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    description: product.description,
    image: `https://cjcmusicphilippines.com${product.image}`,
    url: `https://cjcmusicphilippines.com/products/${product.slug}`,
    offers: {
      "@type": "Offer",
      price: product.salePrice || product.price,
      priceCurrency: "PHP",
      availability:
        product.availability === "In Stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      seller: {
        "@type": "Organization",
        name: "CJC Music Philippines",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cjcmusicphilippines.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://cjcmusicphilippines.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
      },
    ],
  };

  return (
    <div className="min-h-dvh bg-[#111111] text-white" style={{ fontFamily: "var(--font-poppins)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-display text-xl text-gold-gradient tracking-wide">
              CJC MUSIC
            </Link>
            <div className="flex items-center gap-3">
              <a href="https://m.me/cjcmusicph" target="_blank" rel="noopener noreferrer" aria-label="Message on Facebook" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:text-[#C4853A] transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="tel:09224457975" aria-label="Call CJC Music" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:text-[#C4853A] transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/products" className="hover:text-[#C4853A] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Catalogue
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-[#C4853A] transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-400">{product.name}</span>
        </div>

        {/* Product layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/50">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.featured && (
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold bg-[#C4853A]/10 text-[#C4853A] border border-[#C4853A]/20 px-3 py-1 rounded-md backdrop-blur-sm">
                  Featured Product
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-[#C4853A] tracking-[0.15em] uppercase">{product.brand}</span>
              <span className="text-gray-600">|</span>
              <span className="text-xs text-gray-500">{product.category}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl text-white leading-tight mb-4">
              {product.name}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {product.salePrice ? (
                <>
                  <span className="text-2xl font-bold text-red-400">₱{product.salePrice.toLocaleString()}</span>
                  <span className="text-lg text-gray-600 line-through">₱{product.price.toLocaleString()}</span>
                  <span className="text-xs font-bold bg-red-500/90 text-white px-2.5 py-1 rounded-md">
                    SALE — SAVE ₱{(product.price - product.salePrice).toLocaleString()}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-[#C4853A]">₱{product.price.toLocaleString()}</span>
              )}
              <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${product.availability === "In Stock" ? "bg-emerald-500/10 text-emerald-400" : product.availability === "Pre-order" ? "bg-amber-500/10 text-amber-400" : "bg-white/10 text-gray-400"}`}>
                {product.availability}
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Inquiry CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={`https://m.me/cjcmusicph?text=${encodeURIComponent(`Hi! I'm interested in the ${product.name}. Is this available?`)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C4853A] hover:bg-[#A06B2A] text-black font-semibold px-6 py-3.5 rounded-lg transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5" /> Inquire on Messenger
              </a>
              <a href="tel:09224457975"
                className="flex-1 inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[#C4853A]/50 text-white font-medium px-6 py-3.5 rounded-lg transition-all cursor-pointer">
                <Phone className="w-5 h-5" /> Call 0922-4457975
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex gap-4 mb-8 pb-8 border-b border-white/5">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Shield className="w-4 h-4 text-[#C4853A]" /> 100% Authentic
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Truck className="w-4 h-4 text-[#C4853A]" /> Nationwide Delivery
              </div>
            </div>

            {/* Specs table */}
            <div>
              <h2 className="text-sm font-semibold text-white mb-4">Specifications</h2>
              <div className="grid gap-px bg-white/5 rounded-xl overflow-hidden">
                {product.specs.map((spec) => (
                  <div key={spec.key} className="flex items-center bg-[#111111] px-4 py-3">
                    <span className="w-1/3 text-xs text-gray-500 font-medium">{spec.key}</span>
                    <span className="flex-1 text-sm text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-2xl text-white">Related Products</h2>
              <Link href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs text-[#C4853A] hover:text-[#D4A574] font-medium transition-colors">
                View all &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`}
                  className="group bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden hover:border-[#C4853A]/20 transition-all">
                  <div className="relative aspect-square bg-black/50 overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{p.brand}</p>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[#C4853A] transition-colors mt-0.5 line-clamp-1">{p.name}</h3>
                    <p className="text-xs text-[#C4853A] font-semibold mt-1">{p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/5 py-8 text-center">
        <p className="text-xs text-gray-600">&copy; 2026 CJC Music. All rights reserved.</p>
      </footer>
    </div>
  );
}
