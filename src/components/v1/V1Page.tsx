import Header from "../Header";
import Hero from "../Hero";
import BrandMarquee from "../BrandMarquee";
import ProductCategories from "../ProductCategories";
import Spotlight from "../Spotlight";
import Brands from "../Brands";
import About from "../About";
import CTABanner from "../CTABanner";
import Contact from "../Contact";
import Footer from "../Footer";

export default function V1Page() {
  return (
    <div className="bg-black text-white" style={{ fontFamily: "var(--font-poppins)" }}>
      <Header />
      <main id="main-content">
        <Hero />
        <BrandMarquee />
        <ProductCategories />
        <div className="section-divider" />
        <Spotlight />
        <div className="section-divider" />
        <Brands />
        <div className="section-divider" />
        <About />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
