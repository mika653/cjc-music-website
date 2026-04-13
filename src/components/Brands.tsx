const brands = [
  "Bose", "JBL", "Yamaha", "Sennheiser",
  "Audio-Technica", "Rode", "Nord", "Fender",
  "Pioneer", "Allen & Heath", "Soundcraft", "Alto",
  "Focusrite", "Alesis", "Shure", "AKG",
  "Pearl", "Zildjian", "Midas", "Novation",
  "Roland", "Boss", "KRK", "Zoom",
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 sm:py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold text-gold tracking-[0.2em] uppercase">
            Authorized Dealer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display text-white">
            Brands We Carry
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-lg mx-auto">
            Only genuine, branded products from the world&apos;s most respected
            names in professional audio, lighting, and musical instruments.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center h-20 bg-charcoal/40 rounded-2xl group hover:bg-gold/5 transition-all duration-300"
            >
              <span className="text-xs font-semibold text-gray-500 group-hover:text-gold transition-colors text-center px-2">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-5">
          And many more premium brands. Contact us for specific product inquiries.
        </p>
      </div>
    </section>
  );
}
