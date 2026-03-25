import DesignSwitcher from "@/components/DesignSwitcher";
import V1Page from "@/components/v1/V1Page";
import V2Page from "@/components/v2/V2Page";
import V3Page from "@/components/v3/V3Page";

export default function Home() {
  return (
    <DesignSwitcher
      labels={["V1 — Gold Standard", "V2 — Bold Editorial", "V3 — Minimal Luxury"]}
      descriptions={[
        "Warm, product-focused design with rich imagery and trust signals. Best for showcasing the full product range.",
        "Commanding editorial layout with brutalist typography and bold structure. Best for brand authority.",
        "Apple-inspired minimal luxury with generous whitespace and soft gradients. Best for premium positioning.",
      ]}
    >
      <V1Page />
      <V2Page />
      <V3Page />
    </DesignSwitcher>
  );
}
