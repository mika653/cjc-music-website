import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function V3Hero() {
  return (
    <>
      <section id="home" className="pt-[100px] pb-14 px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#16161A] rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#32D583]" />
          <span className="text-[11px] font-medium text-[#6B6B70]">Now serving all of Philippines</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Fraunces', serif" }} className="text-[40px] font-medium text-[#FAFAF9] leading-[1.15] tracking-[-0.8px] mb-6">
          Sound that<br />moves people.
        </h1>

        {/* Subheadline */}
        <p className="text-[15px] text-[#6B6B70] leading-[1.6] max-w-xs mx-auto mb-8">
          Premium professional audio, musical instruments, and AV equipment — curated for performers, studios, and events.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-2.5">
          <a href="#products" className="flex items-center justify-center gap-2 h-[52px] bg-gradient-to-r from-[#D4A574] to-[#C4853A] text-white font-semibold text-[15px] rounded-2xl shadow-[0_8px_24px_rgba(196,133,58,0.2)] cursor-pointer">
            Explore Products
            <ArrowRight className="w-[18px] h-[18px]" />
          </a>
          <a href="#contact" className="flex items-center justify-center h-[52px] bg-[#16161A] text-[#FAFAF9] font-medium text-[15px] rounded-2xl cursor-pointer">
            Send us a message
          </a>
        </div>
      </section>

      {/* Hero image */}
      <div className="relative w-full h-[280px]">
        <Image
          src="/images/657270971_1577453624386634_1384315655729934529_n.jpg"
          alt="Premium audio equipment"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] via-transparent to-[#0B0B0E]/30" />
      </div>
    </>
  );
}
