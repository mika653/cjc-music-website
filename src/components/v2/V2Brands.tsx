const brands = [
  "Bose", "JBL", "Yamaha", "Shure",
  "Sennheiser", "Audio-Technica", "Pioneer DJ", "QSC",
  "Behringer", "Mackie", "Allen & Heath", "Chauvet DJ",
];

export default function V2Brands() {
  return (
    <section id="brands" className="px-5 sm:px-8 py-12 border-b border-[#333333]">
      <div className="mb-8">
        <span className="block text-xs font-semibold tracking-[2px] text-[#C4853A] mb-3 font-[family-name:var(--font-ibm-plex-mono)]">03</span>
        <h2 className="text-[28px] sm:text-4xl font-bold text-white leading-[1] tracking-[-1px] font-[family-name:var(--font-space-grotesk)]">
          TRUSTED<br />BRANDS
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#333333]">
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center h-20 sm:h-24 bg-[#0A0A0A] group"
          >
            <span className="text-xs sm:text-sm font-semibold text-[#666666] group-hover:text-[#C4853A] transition-colors tracking-[1px] font-[family-name:var(--font-space-grotesk)]">
              {brand.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-[10px] text-[#666666] mt-6 tracking-[1px] font-[family-name:var(--font-ibm-plex-mono)]">
        AND MANY MORE PREMIUM BRANDS
      </p>
    </section>
  );
}
