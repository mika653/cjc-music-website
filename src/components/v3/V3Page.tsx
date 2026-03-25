import V3Header from "./V3Header";
import V3Hero from "./V3Hero";
import V3Categories from "./V3Categories";
import V3Brands from "./V3Brands";
import V3About from "./V3About";
import V3CTA from "./V3CTA";
import V3Footer from "./V3Footer";

export default function V3Page() {
  return (
    <div className="bg-[#0B0B0E] text-white font-[family-name:var(--font-dm-sans)]">
      <V3Header />
      <main id="main-content">
        <V3Hero />
        <V3Categories />
        <V3Brands />
        <V3About />
        <V3CTA />
      </main>
      <V3Footer />
    </div>
  );
}
