import { Phone } from "lucide-react";
import { FacebookIcon } from "../icons";

export default function V3Footer() {
  return (
    <footer className="border-t border-[#2A2A2E] px-6 py-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C4853A]" />
        <span style={{ fontFamily: "'Fraunces', serif" }} className="text-base font-semibold text-[#FAFAF9]">CJC Music</span>
      </div>
      <p className="text-xs text-[#4A4A50] leading-[1.5] mb-4">
        Premium professional audio &amp; AV equipment<br />in the Philippines.
      </p>
      <div className="flex items-center justify-center gap-2.5 mb-6">
        <a href="https://facebook.com/cjcmusicph" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#16161A] text-[#6B6B70] hover:text-[#C4853A] transition-colors cursor-pointer"
          aria-label="Facebook">
          <FacebookIcon className="w-4 h-4" />
        </a>
        <a href="tel:09224457975"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#16161A] text-[#6B6B70] hover:text-[#C4853A] transition-colors cursor-pointer"
          aria-label="Phone">
          <Phone className="w-4 h-4" />
        </a>
      </div>
      <p className="text-[11px] text-[#4A4A50]">&copy; 2026 CJC Music. All rights reserved.</p>
    </footer>
  );
}
