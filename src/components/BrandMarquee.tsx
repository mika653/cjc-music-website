import Image from "next/image";

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
            className="mx-8 sm:mx-12 flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity"
          >
            {brand.logo ? (
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={32}
                className="h-7 sm:h-8 w-auto object-contain"
                unoptimized
              />
            ) : (
              <span className="text-sm sm:text-base font-semibold text-gray-500 tracking-wider select-none">
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
