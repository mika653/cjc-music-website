export default function V2Footer() {
  return (
    <footer className="border-t border-[#333333] px-5 py-10">
      <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#C9A962]">CJC</span>
      <p className="mt-4 text-[11px] text-[#444444] leading-[1.7]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
        Your #1 source for premium professional<br />audio &amp; AV equipment in the Philippines.
      </p>
      <div className="flex flex-col gap-1.5 mt-6" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
        <a href="tel:09224457975" className="text-[11px] font-semibold text-[#777777] hover:text-[#C9A962] transition-colors cursor-pointer">0922-4457975</a>
        <a href="https://facebook.com/cjcmusicph" target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold tracking-[1px] text-[#777777] hover:text-[#C9A962] transition-colors cursor-pointer">FB: @CJCMUSICPH</a>
      </div>
      <p className="mt-8 text-[9px] font-semibold tracking-[1px] text-[#333333]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
        &copy; 2026 CJC MUSIC. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
