export default function V2CTA() {
  return (
    <section id="contact" className="bg-[#C4853A] px-5 sm:px-8 py-16 text-center">
      <span className="block text-xs font-semibold tracking-[2px] text-[#0A0A0A66] mb-4 font-[family-name:var(--font-ibm-plex-mono)]">04</span>
      <h2 className="text-[28px] sm:text-4xl font-bold text-[#0A0A0A] leading-[1] tracking-[-1px] mb-5 font-[family-name:var(--font-space-grotesk)]">
        READY TO<br />UPGRADE<br />YOUR SOUND?
      </h2>
      <p className="text-xs sm:text-sm text-[#0A0A0A99] leading-[1.7] mb-8 max-w-xs mx-auto font-[family-name:var(--font-ibm-plex-mono)]">
        Free consultation with our audio experts. No obligations.
      </p>
      <div className="flex flex-col gap-3 max-w-md mx-auto">
        <a href="https://m.me/cjcmusicph" target="_blank" rel="noopener noreferrer" aria-label="Message CJC Music on Facebook" className="flex items-center justify-center h-[52px] bg-[#0A0A0A] text-[#C4853A] text-xs font-semibold tracking-[1px] cursor-pointer font-[family-name:var(--font-ibm-plex-mono)]">
          MESSAGE ON FACEBOOK
        </a>
        <a href="tel:09224457975" aria-label="Call CJC Music at 0922-4457975" className="flex items-center justify-center h-[52px] border-2 border-[#0A0A0A] text-[#0A0A0A] text-xs font-semibold tracking-[1px] cursor-pointer font-[family-name:var(--font-ibm-plex-mono)]">
          CALL 0922-4457975
        </a>
      </div>
    </section>
  );
}
