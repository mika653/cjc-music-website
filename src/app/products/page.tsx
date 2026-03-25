"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, SlidersHorizontal, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { products, categories, type Category } from "@/data/products";

const PRODUCTS_PER_PAGE = 24;

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [activeBrand, setActiveBrand] = useState<string | "All">("All");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // Get brands for current category
  const availableBrands = useMemo(() => {
    const filtered = activeCategory === "All" ? products : products.filter(p => p.category === activeCategory);
    return [...new Set(filtered.map(p => p.brand))].sort();
  }, [activeCategory]);

  // Filter + search
  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }
    if (activeBrand !== "All") {
      result = result.filter(p => p.brand === activeBrand);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        Object.values(p.specs).some(v => v.toLowerCase().includes(q))
      );
    }

    return result;
  }, [search, activeCategory, activeBrand]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  // Reset page when filters change
  const handleCategoryChange = (cat: Category | "All") => {
    setActiveCategory(cat);
    setActiveBrand("All");
    setPage(1);
  };

  return (
    <div className="min-h-dvh bg-[#111111] text-white" style={{ fontFamily: "var(--font-poppins)" }}>
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
        {/* Page title */}
        <div className="mb-8">
          <Link href="/" className="text-xs text-gray-500 hover:text-[#C4853A] transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl text-white mt-3">
            Product Catalogue
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}{activeCategory !== "All" ? ` in ${activeCategory}` : ""}{activeBrand !== "All" ? ` by ${activeBrand}` : ""}
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search products, brands, specs..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C4853A]/50 focus:ring-1 focus:ring-[#C4853A]/20 transition-colors"
          />
          {search && (
            <button onClick={() => { setSearch(""); setPage(1); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white cursor-pointer" aria-label="Clear search">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          <button onClick={() => handleCategoryChange("All")}
            className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${activeCategory === "All" ? "bg-[#C4853A] text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`}>
            All
          </button>
          {categories.map((cat) => (
            <button key={cat} onClick={() => handleCategoryChange(cat)}
              className={`flex-shrink-0 px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeCategory === cat ? "bg-[#C4853A] text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Brand filter */}
        <div className="flex items-center gap-2 mb-8">
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors cursor-pointer">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter by brand
          </button>
          {activeBrand !== "All" && (
            <button onClick={() => { setActiveBrand("All"); setPage(1); }} className="flex items-center gap-1 text-xs bg-[#C4853A]/10 text-[#C4853A] px-2.5 py-1 rounded-md cursor-pointer">
              {activeBrand} <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-white/5">
            {availableBrands.map((brand) => (
              <button key={brand} onClick={() => { setActiveBrand(brand === activeBrand ? "All" : brand); setPage(1); }}
                className={`px-3 py-1.5 text-xs rounded-lg transition-all cursor-pointer ${activeBrand === brand ? "bg-[#C4853A] text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}>
                {brand}
              </button>
            ))}
          </div>
        )}

        {/* Product grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {paginated.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden hover:border-[#C4853A]/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square bg-black/50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${product.availability === "In Stock" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : product.availability === "Pre-order" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : "bg-white/10 text-gray-400 border border-white/10"}`}>
                      {product.availability}
                    </span>
                  </div>
                  {product.featured && (
                    <div className="absolute top-2 right-2">
                      <span className="text-[10px] font-semibold bg-[#C4853A]/10 text-[#C4853A] border border-[#C4853A]/20 px-2 py-0.5 rounded-md">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-3 sm:p-4">
                  <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{product.brand}</p>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#C4853A] transition-colors mt-0.5 line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-[#C4853A] font-semibold mt-2">{product.price}</p>
                  <div className="flex items-center gap-1 mt-2 text-[10px] text-gray-500 group-hover:text-[#C4853A] transition-colors">
                    View details <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-2">No products found.</p>
            <button onClick={() => { setSearch(""); setActiveCategory("All"); setActiveBrand("All"); setPage(1); }}
              className="text-sm text-[#C4853A] hover:text-[#D4A574] font-medium cursor-pointer">
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button key={p} onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`w-10 h-10 flex items-center justify-center text-sm rounded-lg transition-all cursor-pointer ${page === p ? "bg-[#C4853A] text-black font-semibold" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}>
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center border-t border-white/5 pt-12 pb-8">
          <h2 className="font-display text-2xl text-white mb-3">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
            We carry many more products than what&apos;s listed here. Send us a message and we&apos;ll find it for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://m.me/cjcmusicph" target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C4853A] hover:bg-[#A06B2A] text-black font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <MessageCircle className="w-4 h-4" /> Message Us
            </a>
            <a href="tel:09224457975"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 hover:border-[#C4853A]/50 text-white font-medium px-6 py-3 rounded-lg transition-all cursor-pointer">
              <Phone className="w-4 h-4" /> Call 0922-4457975
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
