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
    <section id="products" className="px-5 py-12">
      <div className="mb-8">
        <span className="block text-xs font-semibold tracking-[2px] text-[#C9A962] mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>02</span>
        <h2 className="text-4xl font-bold text-white leading-[1] tracking-[-1px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          PRODUCT<br />CATEGORIES
        </h2>
      </div>
      <div className="flex flex-col">
        {categories.map((cat) => (
          <a
            key={cat.num}
            href="#contact"
            className="flex items-center gap-4 py-5 border-b border-[#333333] group cursor-pointer"
          >
            <span className="text-[11px] font-semibold text-[#444444]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{cat.num}</span>
            <span className="text-base font-semibold text-white group-hover:text-[#C9A962] transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{cat.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
