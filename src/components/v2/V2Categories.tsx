const categories = [
  { num: "01", title: "PROFESSIONAL AUDIO" },
  { num: "02", title: "MUSICAL INSTRUMENTS" },
  { num: "03", title: "EVENT LIGHTING" },
  { num: "04", title: "STUDIO RECORDING" },
  { num: "05", title: "LED WALL & AV" },
  { num: "06", title: "DJ EQUIPMENT" },
];

export default function V2Categories() {
  return (
    <section id="products" className="px-5 sm:px-8 py-12">
      <div className="mb-8">
        <span className="block text-xs font-semibold tracking-[2px] text-[#C4853A] mb-3 font-[family-name:var(--font-ibm-plex-mono)]">02</span>
        <h2 className="text-[28px] sm:text-4xl font-bold text-white leading-[1] tracking-[-1px] font-[family-name:var(--font-space-grotesk)]">
          PRODUCT<br />CATEGORIES
        </h2>
      </div>
      <div className="flex flex-col">
        {categories.map((cat) => (
          <a
            key={cat.num}
            href="#contact"
            aria-label={`Inquire about ${cat.title.toLowerCase()}`}
            className="flex items-center gap-4 py-5 border-b border-[#333333] group cursor-pointer"
          >
            <span className="text-[11px] font-semibold text-[#666666] font-[family-name:var(--font-ibm-plex-mono)]">{cat.num}</span>
            <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#C4853A] transition-colors font-[family-name:var(--font-space-grotesk)]">{cat.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
