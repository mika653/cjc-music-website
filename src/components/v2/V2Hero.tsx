import Image from "next/image";

export default function V2Hero() {
  return (
    <section id="home" className="relative min-h-dvh flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-v2.jpg"
          alt="Professional audio equipment and speakers in a dramatic dark studio setting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0ACC] to-[#0A0A0A33]" />
      </div>

      {/* Gold accent bar */}
      <div className="absolute left-5 top-0 w-1 h-full bg-[#C4853A]" />

      <div className="relative z-10 w-full px-5 sm:px-8 pl-9 pb-12 pt-24">
        <span className="block text-xs font-semibold tracking-[2px] text-[#C4853A] mb-4 font-[family-name:var(--font-ibm-plex-mono)]">01</span>
        <h1 className="text-[28px] sm:text-[46px] font-bold text-white leading-[1] tracking-[-1px] font-[family-name:var(--font-space-grotesk)]">
          PREMIUM<br />PROFESSIONAL<br />AUDIO
        </h1>
        <p className="mt-5 text-xs sm:text-sm text-[#999999] leading-[1.7] max-w-xs font-[family-name:var(--font-ibm-plex-mono)]">
          Home of branded sound systems, musical instruments &amp; AV equipment in the Philippines.
        </p>
        <div className="flex gap-3 mt-8">
          <a href="/products" className="flex-1 flex items-center justify-center h-12 bg-[#C4853A] text-[#0A0A0A] text-xs font-semibold tracking-[1px] cursor-pointer font-[family-name:var(--font-ibm-plex-mono)]">
            EXPLORE
          </a>
          <a href="#contact" className="flex-1 flex items-center justify-center h-12 border border-[#555555] text-white text-xs font-semibold tracking-[1px] cursor-pointer font-[family-name:var(--font-ibm-plex-mono)]">
            CONTACT
          </a>
        </div>
      </div>
    </section>
  );
}
