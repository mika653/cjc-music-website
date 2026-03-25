import Image from "next/image";

export default function V2About() {
  return (
    <section id="about" className="px-5 sm:px-8 py-12 border-b border-[#333333]">
      <div className="mb-8">
        <span className="block text-xs font-semibold tracking-[2px] text-[#C4853A] mb-3 font-[family-name:var(--font-ibm-plex-mono)]">05</span>
        <h2 className="text-[28px] sm:text-4xl font-bold text-white leading-[1] tracking-[-1px] font-[family-name:var(--font-space-grotesk)]">
          ABOUT<br />CJC MUSIC
        </h2>
      </div>

      {/* Logo */}
      <div className="relative w-40 h-40 mb-8">
        <Image
          src="/images/cjc-logo.jpg"
          alt="CJC Music — gold vinyl record logo surrounded by musical instrument silhouettes"
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>

      <p className="text-sm text-[#999999] leading-[1.8] mb-8 max-w-md font-[family-name:var(--font-ibm-plex-mono)]">
        Your #1 source for branded &amp; premium professional audio systems, musical instruments, and AV equipment in the Philippines. Serving musicians, event organizers, churches, studios, and DJs for over 10 years.
      </p>

      <div className="grid grid-cols-2 gap-px bg-[#333333]">
        <div className="bg-[#0A0A0A] p-5">
          <span className="block text-xs font-semibold tracking-[1px] text-[#C4853A] font-[family-name:var(--font-ibm-plex-mono)]">100%</span>
          <span className="block text-[11px] text-[#666666] mt-1 font-[family-name:var(--font-ibm-plex-mono)]">AUTHENTIC PRODUCTS</span>
        </div>
        <div className="bg-[#0A0A0A] p-5">
          <span className="block text-xs font-semibold tracking-[1px] text-[#C4853A] font-[family-name:var(--font-ibm-plex-mono)]">PH-WIDE</span>
          <span className="block text-[11px] text-[#666666] mt-1 font-[family-name:var(--font-ibm-plex-mono)]">NATIONWIDE DELIVERY</span>
        </div>
        <div className="bg-[#0A0A0A] p-5">
          <span className="block text-xs font-semibold tracking-[1px] text-[#C4853A] font-[family-name:var(--font-ibm-plex-mono)]">FREE</span>
          <span className="block text-[11px] text-[#666666] mt-1 font-[family-name:var(--font-ibm-plex-mono)]">EXPERT CONSULTATION</span>
        </div>
        <div className="bg-[#0A0A0A] p-5">
          <span className="block text-xs font-semibold tracking-[1px] text-[#C4853A] font-[family-name:var(--font-ibm-plex-mono)]">BEST</span>
          <span className="block text-[11px] text-[#666666] mt-1 font-[family-name:var(--font-ibm-plex-mono)]">PRICE GUARANTEE</span>
        </div>
      </div>
    </section>
  );
}
