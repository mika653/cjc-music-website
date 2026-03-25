const stats = [
  { value: "10+", label: "YEARS" },
  { value: "500+", label: "CLIENTS" },
  { value: "50+", label: "BRANDS" },
];

export default function V2Stats() {
  return (
    <section className="flex items-center justify-between px-5 sm:px-8 py-6 border-y border-[#333333]">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-0.5">
          <span className="text-[24px] sm:text-[32px] font-bold text-[#C4853A] font-[family-name:var(--font-space-grotesk)]">{s.value}</span>
          <span className="text-[9px] font-semibold tracking-[2px] text-[#666666] font-[family-name:var(--font-ibm-plex-mono)]">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
