const brands = [
  "Bose", "JBL", "Yamaha", "Sennheiser", "Audio-Technica", "Rode",
  "Nord", "Fender", "Pioneer", "Allen & Heath", "Soundcraft", "Alto",
  "Focusrite", "Alesis", "AKG", "Pearl", "Zildjian", "Midas",
  "Novation", "Roland", "Boss", "KRK", "Zoom", "Shure",
];

export default function BrandMarquee() {
  return (
    <div className="py-8 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="mx-8 sm:mx-12 text-sm sm:text-base font-semibold text-gray-600 hover:text-gold transition-colors cursor-default select-none"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
