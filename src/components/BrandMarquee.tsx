type Brand = {
  name: string;
  logo?: string;
};

const brands: Brand[] = [
  { name: "Bose", logo: "/images/brands/bose.svg" },
  { name: "JBL", logo: "/images/brands/jbl.svg" },
  { name: "Yamaha" },
  { name: "Sennheiser", logo: "/images/brands/sennheiser.svg" },
  { name: "Audio-Technica" },
  { name: "Rode" },
  { name: "Nord" },
  { name: "Fender" },
  { name: "Pioneer DJ", logo: "/images/brands/pioneerdj.svg" },
  { name: "Allen & Heath" },
  { name: "Soundcraft" },
  { name: "Alto" },
  { name: "Focusrite" },
  { name: "Alesis" },
  { name: "AKG" },
  { name: "Shure" },
  { name: "Pearl" },
  { name: "Zildjian" },
  { name: "Midas" },
  { name: "Novation" },
  { name: "Roland" },
  { name: "Boss" },
  { name: "KRK" },
  { name: "Zoom" },
];

export default function BrandMarquee() {
  return (
    <div className="py-8 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="mx-8 sm:mx-12 flex items-center justify-center h-12"
          >
            {brand.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 sm:h-12 w-auto"
                style={{ width: "48px", height: "48px" }}
              />
            ) : (
              <span className="text-base sm:text-lg font-semibold text-gray-400 tracking-wider select-none">
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
