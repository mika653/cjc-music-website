import Image from "next/image";

export default function V2Hero() {
  return (
    <section id="home" className="relative min-h-dvh flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/655964496_1577453444386652_3070640010238116173_n.jpg"
          alt="CJC Music professional audio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0ACC] to-[#0A0A0A33]" />
      </div>

      {/* Gold accent bar */}
      <div className="absolute left-5 top-0 w-1 h-full bg-[#C9A962]" />

      <div className="relative z-10 w-full px-5 pl-9 pb-12 pt-24">
        <span className="block text-xs font-semibold tracking-[2px] text-[#C9A962] mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>01</span>
        <h1 className="text-[46px] font-bold text-white leading-[1] tracking-[-1px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          PREMIUM<br />PROFESSIONAL<br />AUDIO
        </h1>
        <p className="mt-5 text-xs text-[#777777] leading-[1.7] max-w-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
          Home of branded sound systems, musical instruments &amp; AV equipment in the Philippines.
        </p>
        <div className="flex gap-3 mt-8">
          <a href="#products" className="flex-1 flex items-center justify-center h-12 bg-[#C9A962] text-[#0A0A0A] text-xs font-semibold tracking-[1px] cursor-pointer" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            EXPLORE
          </a>
          <a href="#contact" className="flex-1 flex items-center justify-center h-12 border border-[#333333] text-white text-xs font-semibold tracking-[1px] cursor-pointer" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            CONTACT
          </a>
        </div>
      </div>
    </section>
  );
}
