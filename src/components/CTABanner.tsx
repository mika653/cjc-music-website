import { MessageCircle, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight">
          Need Help Choosing the{" "}
          <span className="text-gold-gradient">Right Equipment?</span>
        </h2>
        <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          Our team of audio professionals will help you find the perfect setup
          for your needs and budget. Free consultation — no obligations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="https://m.me/cjcmusicph"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-4 rounded-lg transition-colors cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            Message Us on Facebook
          </a>
          <a
            href="tel:09224457975"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-gold/50 text-white hover:text-gold font-medium px-8 py-4 rounded-lg transition-all cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            Call 0922-4457975
          </a>
        </div>
      </div>
    </section>
  );
}
