import { Speaker, Guitar, Lightbulb, Mic, Monitor, Music, ChevronRight } from "lucide-react";

const categories = [
  { icon: Speaker, title: "Professional Audio", desc: "Speakers, amplifiers, PA systems", featured: true },
  { icon: Guitar, title: "Musical Instruments", desc: "Guitars, keyboards, drums" },
  { icon: Lightbulb, title: "Event Lighting", desc: "Stage lights, moving heads, LEDs" },
  { icon: Mic, title: "Studio Recording", desc: "Mics, interfaces, monitors" },
  { icon: Monitor, title: "LED Wall & AV", desc: "LED walls, projectors, displays" },
  { icon: Music, title: "DJ Equipment", desc: "Turntables, controllers, mixers" },
];

export default function V3Categories() {
  return (
    <section id="products" className="py-12 px-6">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold text-[#8A8A90]">What we offer</span>
        <h2 className="font-[family-name:var(--font-fraunces)] text-[28px] font-semibold text-[#FAFAF9] tracking-[-0.5px] mt-2">
          Six categories,<br />one destination.
        </h2>
      </div>

      <div className="flex flex-col gap-2.5">
        {categories.map((cat) => (
          <a
            key={cat.title}
            href="#contact"
            aria-label={`Inquire about ${cat.title}`}
            className="flex items-center gap-3.5 p-4 bg-[#16161A] rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.15)] group cursor-pointer"
          >
            <div className={`w-11 h-11 flex items-center justify-center rounded-xl ${cat.featured ? "bg-gradient-to-br from-[#D4A574] to-[#C4853A]" : "bg-[#16161A] border border-[#2A2A2E]"}`}>
              <cat.icon className={`w-5 h-5 ${cat.featured ? "text-white" : "text-[#C4853A]"}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-fraunces)] text-base font-semibold text-[#FAFAF9] group-hover:text-[#C4853A] transition-colors">{cat.title}</h3>
              <p className="text-xs text-[#8A8A90]">{cat.desc}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#4A4A50]" />
          </a>
        ))}
      </div>
    </section>
  );
}
