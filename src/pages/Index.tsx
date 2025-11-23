import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopifyProductGrid from "@/components/ShopifyProductGrid";
import TrustSignals from "@/components/TrustSignals";
import ProductBenefits from "@/components/ProductBenefits";
import ScarcityBanner from "@/components/ScarcityBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustSignals />
      <ShopifyProductGrid />
      <ProductBenefits />
      <ScarcityBanner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
