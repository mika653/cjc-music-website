import {
  Speaker,
  Guitar,
  Lightbulb,
  Mic,
  Monitor,
  Music,
} from "lucide-react";

const categories = [
  {
    icon: Speaker,
    title: "Professional Audio Systems",
    description:
      "Premium speakers, amplifiers, mixers & PA systems from world-class brands. Perfect for events, venues, and installations.",
    tags: ["Speakers", "Amplifiers", "Mixers", "PA Systems"],
  },
  {
    icon: Guitar,
    title: "Musical Instruments",
    description:
      "Guitars, keyboards, drums, and more — curated for musicians who demand quality and performance.",
    tags: ["Guitars", "Keyboards", "Drums", "Accessories"],
  },
  {
    icon: Lightbulb,
    title: "Event Lighting Systems",
    description:
      "Stage lighting, moving heads, LED par cans, and intelligent lighting for unforgettable events and productions.",
    tags: ["Stage Lights", "Moving Heads", "LED Pars", "Controllers"],
  },
  {
    icon: Mic,
    title: "Studio Recording Gear",
    description:
      "Microphones, audio interfaces, monitors, and everything you need to build a professional recording studio.",
    tags: ["Microphones", "Interfaces", "Monitors", "Headphones"],
  },
  {
    icon: Monitor,
    title: "LED Wall & AV Equipment",
    description:
      "High-resolution LED walls, projectors, video processors, and visual display solutions for any scale.",
    tags: ["LED Walls", "Projectors", "Processors", "Displays"],
  },
  {
    icon: Music,
    title: "DJ Equipment",
    description:
      "Turntables, controllers, DJ mixers, and accessories for DJs — from bedroom setups to main stage performances.",
    tags: ["Turntables", "Controllers", "DJ Mixers", "Software"],
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-gold tracking-[0.2em] uppercase">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display text-white">
            Product Categories
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Everything you need for professional audio, live events, studio
            production, and visual installations — all from one trusted source.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#contact"
              aria-label={`Inquire about ${cat.title}`}
              className="group relative bg-charcoal/50 border border-white/5 rounded-xl p-6 sm:p-8 hover:border-gold/30 transition-all duration-300 hover:bg-charcoal/80 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gold/10 text-gold mb-5 group-hover:bg-gold/20 transition-colors">
                <cat.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {cat.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/5 text-gray-500 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
