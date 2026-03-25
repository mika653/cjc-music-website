import Image from "next/image";
import { Shield, Truck, Headphones, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "100% Authentic",
    description: "We only carry genuine, branded products with manufacturer warranty.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast and secure shipping anywhere in the Philippines.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our team of audio professionals is here to guide your purchase.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description: "Competitive pricing on all premium audio and music equipment.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / visual side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/352398883_755610973237574_2558701208069413354_n.jpg"
                alt="CJC Music logo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* Content side */}
          <div>
            <span className="text-xs font-semibold text-gold tracking-[0.2em] uppercase">
              About CJC Music
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display text-white leading-tight">
              The Philippines&apos; Trusted Source for Professional Audio
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed">
              CJC Music has been serving musicians, event organizers, churches,
              studios, and DJs across the Philippines with premium, branded
              audio equipment, musical instruments, and professional AV
              solutions.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              From small setups to large-scale events and installations, we
              provide expert advice, competitive pricing, and genuine products
              backed by manufacturer warranties. Whether you need a portable
              Bose speaker system or a full LED wall installation, CJC Music
              has you covered.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex gap-3 p-4 bg-charcoal/30 border border-white/5 rounded-xl"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
