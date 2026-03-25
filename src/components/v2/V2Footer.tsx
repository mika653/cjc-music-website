export default function V2Footer() {
  return (
    <footer className="border-t border-[#333333] px-5 sm:px-8 py-10">
      <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#C4853A]">CJC</span>
      <p className="mt-4 text-[11px] text-[#666666] leading-[1.7] font-[family-name:var(--font-ibm-plex-mono)]">
        Your #1 source for premium professional<br />audio &amp; AV equipment in the Philippines.
      </p>
      <div className="flex flex-col gap-1.5 mt-6 font-[family-name:var(--font-ibm-plex-mono)]">
        <a href="tel:09224457975" aria-label="Call CJC Music" className="text-[11px] font-semibold text-[#999999] hover:text-[#C4853A] transition-colors cursor-pointer">0922-4457975</a>
        <a href="https://facebook.com/cjcmusicph" target="_blank" rel="noopener noreferrer" aria-label="CJC Music Facebook page" className="text-[11px] font-semibold tracking-[1px] text-[#999999] hover:text-[#C4853A] transition-colors cursor-pointer">FB: @CJCMUSICPH</a>
      </div>
      <p className="mt-8 text-[9px] font-semibold tracking-[1px] text-[#555555] font-[family-name:var(--font-ibm-plex-mono)]">
        &copy; 2026 CJC MUSIC. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
