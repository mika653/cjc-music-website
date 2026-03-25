import { MessageCircle, Phone } from "lucide-react";

export default function V3CTA() {
  return (
    <section id="contact" className="py-14 px-6 text-center">
      {/* Icon */}
      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#D4A574] to-[#C4853A] flex items-center justify-center mb-6 shadow-[0_8px_24px_rgba(196,133,58,0.2)]">
        <MessageCircle className="w-8 h-8 text-white" />
      </div>

      <h2 className="font-[family-name:var(--font-fraunces)] text-[32px] font-medium text-[#FAFAF9] leading-[1.15] tracking-[-0.5px] mb-4">
        Need expert<br />guidance?
      </h2>
      <p className="text-sm text-[#8A8A90] leading-[1.6] max-w-xs mx-auto mb-8">
        Our audio professionals will help you find the perfect setup — free consultation, no obligations.
      </p>

      <div className="flex flex-col gap-2.5">
        <a href="https://m.me/cjcmusicph" target="_blank" rel="noopener noreferrer"
          aria-label="Message CJC Music on Facebook"
          className="flex items-center justify-center gap-2 h-[52px] bg-gradient-to-r from-[#D4A574] to-[#C4853A] text-white font-semibold rounded-2xl shadow-[0_8px_24px_rgba(196,133,58,0.2)] cursor-pointer">
          <MessageCircle className="w-[18px] h-[18px]" />
          Message on Facebook
        </a>
        <a href="tel:09224457975"
          aria-label="Call CJC Music at 0922-4457975"
          className="flex items-center justify-center gap-2 h-[52px] bg-[#16161A] text-[#FAFAF9] font-medium rounded-2xl cursor-pointer">
          <Phone className="w-[18px] h-[18px]" />
          Call 0922-4457975
        </a>
      </div>
    </section>
  );
}
