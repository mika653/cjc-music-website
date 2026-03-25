import Image from "next/image";
import { Shield, Truck, Headphones, Award } from "lucide-react";

const values = [
  { icon: Shield, label: "100% Authentic" },
  { icon: Truck, label: "Nationwide Delivery" },
  { icon: Headphones, label: "Expert Support" },
  { icon: Award, label: "Best Prices" },
];

export default function V3About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="text-center mb-6">
        <span className="text-xs font-semibold text-[#8A8A90]">About us</span>
        <h2 className="font-[family-name:var(--font-fraunces)] text-[28px] font-semibold text-[#FAFAF9] tracking-[-0.5px] mt-2">
          Why CJC Music?
        </h2>
      </div>

      {/* Logo image */}
      <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden mb-6">
        <Image
          src="/images/cjc-logo.jpg"
          alt="CJC Music — gold vinyl record logo surrounded by musical instrument silhouettes"
          fill
          className="object-contain"
          sizes="192px"
        />
      </div>

      <p className="text-sm text-[#8A8A90] leading-[1.7] text-center mb-8 max-w-sm mx-auto">
        CJC Music has been serving musicians, event organizers, churches, studios, and DJs across the Philippines with premium, branded audio equipment and professional AV solutions.
      </p>

      {/* Value props */}
      <div className="grid grid-cols-2 gap-2.5">
        {values.map((v) => (
          <div key={v.label} className="flex items-center gap-3 p-4 bg-[#16161A] rounded-2xl">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C4853A]/10">
              <v.icon className="w-5 h-5 text-[#C4853A]" />
            </div>
            <span className="text-sm font-medium text-[#FAFAF9]">{v.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
