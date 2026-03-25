import Image from "next/image";

const products = [
  {
    name: "Bose F1 812 w/ F1 Sub",
    category: "Professional Audio",
    spec: "2000W Total Flexible Array LoudSpeaker",
    image: "/images/655964496_1577453444386652_3070640010238116173_n.jpg",
  },
  {
    name: "Bose L1 Pro 16",
    category: "Line Array System",
    spec: "1250W RMS Portable Line Array",
    image: "/images/656669060_1577453594386637_5887316866235988318_n.jpg",
  },
  {
    name: "Bose L1 Pro 8",
    category: "Line Array System",
    spec: "320W RMS Portable Line Array",
    image: "/images/657095959_1577453547719975_6922951659663898951_n.jpg",
  },
  {
    name: "Bose S1 Pro+",
    category: "Portable Speaker",
    spec: "150W Portable Bluetooth Speaker",
    image: "/images/657163271_1577453494386647_6294876151811404159_n.jpg",
  },
  {
    name: "Bose L1 Pro 32 w/ Sub 2",
    category: "Line Array System",
    spec: "1480W RMS Portable Line Array",
    image: "/images/657270971_1577453624386634_1384315655729934529_n.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-gold tracking-[0.2em] uppercase">
              Featured
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display text-white">
              Popular Products
            </h2>
            <p className="mt-3 text-gray-400 max-w-lg">
              Top-selling professional audio systems trusted by performers,
              event organizers, and houses of worship across the Philippines.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-6 sm:mt-0 text-sm text-gold hover:text-gold-light font-medium transition-colors cursor-pointer"
          >
            View all products →
          </a>
        </div>

        {/* Product scroll (mobile) / grid (desktop) */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:overflow-visible sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {products.map((product) => (
            <a
              key={product.name}
              href="#contact"
              className="group flex-shrink-0 w-[280px] sm:w-auto snap-start bg-charcoal/30 border border-white/5 rounded-xl overflow-hidden hover:border-gold/20 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-square bg-charcoal/50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold text-gold bg-gold/10 backdrop-blur-sm border border-gold/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-white group-hover:text-gold transition-colors text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{product.spec}</p>
                <span className="inline-block mt-3 text-xs text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Inquire now →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
