import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
    title: "Professional Audio",
    description:
      "Premium speakers, amplifiers, mixers & PA systems from world-class brands.",
    tags: [
      { label: "Speakers", category: "Speakers" },
      { label: "Amplifiers", category: "Amplifiers" },
      { label: "Mixers", category: "Mixers" },
      { label: "Power Amps", category: "Power Amplifiers" },
    ],
    mainCategory: "Speakers",
  },
  {
    icon: Guitar,
    title: "Musical Instruments",
    description:
      "Guitars, keyboards, drums, and more — curated for musicians who demand quality.",
    tags: [
      { label: "Guitars", category: "Guitars" },
      { label: "Keyboards", category: "Keyboards & MIDI" },
      { label: "Drums", category: "Drums & Percussion" },
      { label: "Accessories", category: "Accessories" },
    ],
    mainCategory: "Keyboards & MIDI",
  },
  {
    icon: Lightbulb,
    title: "Event Lighting",
    description:
      "Stage lighting, LED pars, and intelligent lighting for unforgettable events.",
    tags: [
      { label: "Stage Lights", category: "Lighting" },
      { label: "LED Pars", category: "Lighting" },
      { label: "Controllers", category: "Lighting" },
    ],
    mainCategory: "Lighting",
  },
  {
    icon: Mic,
    title: "Studio & Recording",
    description:
      "Microphones, audio interfaces, monitors, and everything for a professional studio.",
    tags: [
      { label: "Microphones", category: "Microphones" },
      { label: "Interfaces", category: "Audio Interfaces" },
      { label: "Monitors", category: "Studio Monitors" },
      { label: "Headphones", category: "Headphones & Wireless" },
    ],
    mainCategory: "Microphones",
  },
  {
    icon: Monitor,
    title: "AV Equipment",
    description:
      "LED walls, projectors, displays, and visual solutions for any scale.",
    tags: [
      { label: "Displays", category: "Others" },
      { label: "Effects", category: "Effects & Processors" },
    ],
    mainCategory: "Others",
  },
  {
    icon: Music,
    title: "DJ Equipment",
    description:
      "Controllers, turntables, DJ mixers, and accessories for every level.",
    tags: [
      { label: "Controllers", category: "Keyboards & MIDI" },
      { label: "DJ Mixers", category: "Mixers" },
      { label: "Speakers", category: "Speakers" },
    ],
    mainCategory: "Keyboards & MIDI",
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
            <div
              key={cat.title}
              className="group relative bg-charcoal/50 border border-white/5 rounded-xl p-6 sm:p-8 hover:border-gold/30 transition-all duration-300 hover:bg-charcoal/80"
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

              {/* Tags — each links to filtered catalogue */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cat.tags.map((tag) => (
                  <Link
                    key={tag.label}
                    href={`/products?category=${encodeURIComponent(tag.category)}`}
                    className="text-xs bg-white/5 text-gray-500 hover:bg-gold/10 hover:text-gold px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                  >
                    {tag.label}
                  </Link>
                ))}
              </div>

              {/* Browse all link */}
              <Link
                href={`/products?category=${encodeURIComponent(cat.mainCategory)}`}
                className="inline-flex items-center gap-1 text-xs text-gold hover:text-gold-light font-medium transition-colors"
              >
                Browse all <ChevronRight className="w-3 h-3" />
              </Link>

              {/* Hover accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
