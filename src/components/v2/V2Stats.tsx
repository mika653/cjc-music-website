const stats = [
  { value: "10+", label: "YEARS" },
  { value: "500+", label: "CLIENTS" },
  { value: "50+", label: "BRANDS" },
];

export default function V2Stats() {
  return (
    <section className="flex items-center justify-between px-5 py-6 border-y border-[#333333]">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-0.5">
          <span className="text-[32px] font-bold text-[#C9A962]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</span>
          <span className="text-[9px] font-semibold tracking-[2px] text-[#444444]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{s.label}</span>
        </div>
      ))}
    </section>
  );
}
