import V2Header from "./V2Header";
import V2Hero from "./V2Hero";
import V2Stats from "./V2Stats";
import V2Categories from "./V2Categories";
import V2CTA from "./V2CTA";
import V2Footer from "./V2Footer";

export default function V2Page() {
  return (
    <div className="bg-[#0A0A0A] text-white font-[family-name:var(--font-space-grotesk)]">
      <V2Header />
      <main>
        <V2Hero />
        <V2Stats />
        <V2Categories />
        <V2CTA />
      </main>
      <V2Footer />
    </div>
  );
}
