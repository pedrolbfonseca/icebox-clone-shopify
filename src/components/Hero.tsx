import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-dark"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 min-h-[80vh] items-center">
          
          {/* Men's Section */}
          <Link to="/category/men" className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div className="aspect-[4/5] relative overflow-hidden bg-slate-800">
              <img 
                src="/lovable-uploads/98a79af7-4c77-4531-84ba-52a7d144317e.png"
                alt="Men's Collection - Premium Chains and Pendants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                onLoad={() => console.log('Mens collection image loaded successfully')}
                onError={(e) => {
                  console.error('Error loading mens collection image:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10"></div>
              
              {/* Text Content */}
              <div className="absolute inset-0 flex items-end justify-center z-20">
                <div className="p-8 text-center transform group-hover:scale-105 transition-transform duration-300">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    MEN'S
                    <span className="block text-primary">COLLECTION</span>
                  </h2>
                  <p className="text-white/90 mb-6 text-lg drop-shadow-lg">
                    Exclusive jewelry for sophisticated men
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg drop-shadow-lg"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>

          {/* 2025 Collection Section */}
          <Link to="/category/women" className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div className="aspect-[4/5] relative overflow-hidden bg-slate-800">
              <img 
                src="/lovable-uploads/4dd4a104-2517-453a-badd-9d7eb466bd40.png"
                alt="2025 Collection - Personalized Diamond Jewelry"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
                onLoad={() => console.log('2025 collection image loaded successfully')}
                onError={(e) => {
                  console.error('Error loading 2025 collection image:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10"></div>
              
              {/* Text Content */}
              <div className="absolute inset-0 flex items-end justify-center z-20">
                <div className="p-8 text-center transform group-hover:scale-105 transition-transform duration-300">
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    2025
                    <span className="block text-primary">COLLECTION</span>
                  </h2>
                  <p className="text-white/90 mb-6 text-lg drop-shadow-lg">
                    Elegance and beauty in every detail
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg drop-shadow-lg"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;