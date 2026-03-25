import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-v1.jpg"
          alt="DJ performing at a bar with professional audio speakers and mixing equipment under warm amber lighting"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-xs font-medium text-gold-light tracking-wider uppercase">
              Your #1 Online Music Store in the Philippines
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight mb-6">
            <span className="text-white">Home of</span>
            <br />
            <span className="text-gold-gradient">Premium Professional</span>
            <br />
            <span className="text-white">Audio Systems</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
            Branded musical instruments, event lighting systems, studio
            recording gear, LED walls & audio visual equipment — trusted by
            professionals across the Philippines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 cursor-pointer text-base"
            >
              Explore Products
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-gold/50 text-white hover:text-gold font-medium px-8 py-4 rounded-lg transition-all duration-200 cursor-pointer text-base"
            >
              <Play className="w-4 h-4" />
              Request a Demo
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-3 gap-6 sm:gap-12">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gold">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                  Years in Business
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gold">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gold">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                  Premium Brands
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
