import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Categories from "@/components/Categories";
import TrustSignals from "@/components/TrustSignals";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustSignals />
      <Categories />
      <ProductGrid />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
