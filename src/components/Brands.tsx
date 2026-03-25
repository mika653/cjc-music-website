const brands = [
  "Bose",
  "JBL",
  "Yamaha",
  "Shure",
  "Sennheiser",
  "Audio-Technica",
  "Pioneer DJ",
  "QSC",
  "Behringer",
  "Mackie",
  "Allen & Heath",
  "Chauvet DJ",
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 sm:py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-gold tracking-[0.2em] uppercase">
            Authorized Dealer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display text-white">
            Trusted Brands
          </h2>
          <p className="mt-3 text-gray-400 max-w-lg mx-auto">
            We carry only genuine, branded products from the world&apos;s most
            respected names in professional audio and lighting.
          </p>
        </div>

        {/* Brand marquee — logos represented as styled text since we don't have logo files */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center h-20 sm:h-24 bg-charcoal/30 border border-white/5 rounded-xl hover:border-gold/20 transition-all duration-300 group"
            >
              <span className="text-sm sm:text-base font-semibold text-gray-500 group-hover:text-gold transition-colors tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          And many more premium brands. Contact us for specific product
          inquiries.
        </p>
      </div>
    </section>
  );
}
