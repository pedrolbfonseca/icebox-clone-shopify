import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopifyProductGrid from "@/components/ShopifyProductGrid";
import Categories from "@/components/Categories";
import TrustSignals from "@/components/TrustSignals";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import ChainSizeGuide from "@/components/ChainSizeGuide";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustSignals />
      <Categories />
      <ShopifyProductGrid />
      <ChainSizeGuide />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
