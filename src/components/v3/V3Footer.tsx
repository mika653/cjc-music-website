import { Phone } from "lucide-react";
import { FacebookIcon } from "../icons";

export default function V3Footer() {
  return (
    <footer className="border-t border-[#2A2A2E] px-6 py-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4A574] to-[#C4853A]" />
        <span className="font-[family-name:var(--font-fraunces)] text-base font-semibold text-[#FAFAF9]">CJC Music</span>
      </div>
      <p className="text-xs text-[#8A8A90] leading-[1.5] mb-4">
        Premium professional audio &amp; AV equipment<br />in the Philippines.
      </p>
      <div className="flex items-center justify-center gap-2.5 mb-6">
        <a href="https://facebook.com/cjcmusicph" target="_blank" rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-[#16161A] text-[#8A8A90] hover:text-[#C4853A] transition-colors cursor-pointer"
          aria-label="CJC Music Facebook Page">
          <FacebookIcon className="w-4 h-4" />
        </a>
        <a href="tel:09224457975"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-[#16161A] text-[#8A8A90] hover:text-[#C4853A] transition-colors cursor-pointer"
          aria-label="Call CJC Music">
          <Phone className="w-4 h-4" />
        </a>
      </div>
      <p className="text-[11px] text-[#4A4A50]">&copy; 2026 CJC Music. All rights reserved.</p>
    </footer>
  );
}
