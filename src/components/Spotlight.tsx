import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import { products } from "@/data/products";

const spotlightProducts = products.filter((p) => p.spotlight);

export default function Spotlight() {
  if (spotlightProducts.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-gold tracking-[0.2em] uppercase">
            Don&apos;t Miss Out
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display text-white">
            Product Spotlight
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-lg mx-auto">
            Hand-picked deals on premium equipment. Limited availability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {spotlightProducts.slice(0, 6).map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group bg-white/[0.03] border border-gold/10 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300"
            >
              <div className="relative aspect-square bg-black/50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-bold bg-gold/90 text-black px-2 py-0.5 rounded-md">
                    SPOTLIGHT
                  </span>
                </div>
                {product.salePrice && (
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] font-bold bg-red-500/90 text-white px-2 py-0.5 rounded-md">
                      SALE
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{product.brand}</p>
                <h3 className="text-xs font-semibold text-white group-hover:text-gold transition-colors mt-0.5 line-clamp-2">{product.name}</h3>
                <div className="mt-2">
                  {product.salePrice ? (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-red-400 font-semibold">₱{product.salePrice.toLocaleString()}</span>
                      <span className="text-[10px] text-gray-600 line-through">₱{product.price.toLocaleString()}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-gold font-semibold">₱{product.price.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light font-medium transition-colors"
          >
            View all products <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
