import Image from "next/image";

// To show a logo for a brand, drop an SVG/PNG into public/images/brands/ and
// set its filename here. Brands without a `logo` fall back to styled text, so
// the grid always looks complete even before every logo is sourced.
//
// `scale` optically balances logos: bounding-box size alone doesn't read as
// "equal" to the eye — thin wordmarks look lighter than compact marks. Nudge
// long wordmarks down (~0.85) and minimal marks up (>1) until they feel even.
const brands: { name: string; logo?: string; scale?: number }[] = [
  { name: "Bose", logo: "bose.svg", scale: 1.3 },
  { name: "JBL", logo: "jbl.svg", scale: 0.95 },
  { name: "Yamaha", logo: "yamaha.svg", scale: 1 },
  { name: "Sennheiser", logo: "sennheiser.svg", scale: 0.85 },
  { name: "Audio-Technica", logo: "audiotechnica.svg", scale: 0.9 },
  { name: "Rode" },
  { name: "Nord" },
  { name: "Fender" },
  { name: "Pioneer", logo: "pioneerdj.svg", scale: 0.9 },
  { name: "Allen & Heath" },
  { name: "Soundcraft" },
  { name: "Alto" },
  { name: "Focusrite" },
  { name: "Alesis" },
  { name: "Shure" },
  { name: "AKG" },
  { name: "Pearl" },
  { name: "Zildjian" },
  { name: "Midas" },
  { name: "Novation" },
  { name: "Roland" },
  { name: "Boss" },
  { name: "KRK" },
  { name: "Zoom", logo: "zoom.svg", scale: 1 },
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 sm:py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold text-gold tracking-[0.2em] uppercase">
            Authorized Dealer
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display text-white">
            Brands We Carry
          </h2>
          <p className="mt-3 text-sm text-gray-400 max-w-lg mx-auto">
            Only genuine, branded products from the world&apos;s most respected
            names in professional audio, lighting, and musical instruments.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-20 px-4 bg-charcoal/25 rounded-2xl group hover:bg-gold/5 transition-all duration-300"
            >
              {brand.logo ? (
                <Image
                  src={`/images/brands/${brand.logo}`}
                  alt={`${brand.name} logo`}
                  width={96}
                  height={32}
                  style={{ transform: `scale(${brand.scale ?? 1})` }}
                  className="max-h-8 max-w-[78%] w-auto object-contain opacity-55 brightness-0 invert group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <span className="text-xs font-semibold text-gray-500 group-hover:text-gold transition-colors text-center">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-5">
          And many more premium brands. Contact us for specific product inquiries.
        </p>
      </div>
    </section>
  );
}
