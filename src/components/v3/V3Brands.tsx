const brands = [
  "Bose", "JBL", "Yamaha", "Shure",
  "Sennheiser", "Audio-Technica", "Pioneer DJ", "QSC",
  "Behringer", "Mackie", "Allen & Heath", "Chauvet DJ",
];

export default function V3Brands() {
  return (
    <section id="brands" className="py-12 px-6">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold text-[#8A8A90]">Authorized dealer</span>
        <h2 className="font-[family-name:var(--font-fraunces)] text-[28px] font-semibold text-[#FAFAF9] tracking-[-0.5px] mt-2">
          Brands we carry.
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {brands.map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center h-20 bg-[#16161A] rounded-2xl group"
          >
            <span className="text-xs font-semibold text-[#8A8A90] group-hover:text-[#C4853A] transition-colors text-center px-2">
              {brand}
            </span>
          </div>
        ))}
      </div>

      <p className="text-center text-[11px] text-[#4A4A50] mt-4">
        And many more premium brands.
      </p>
    </section>
  );
}
