import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-dark"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 min-h-[80vh] items-center">
          
          {/* Men's Section */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <div className="aspect-[4/5] bg-muted flex items-end justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted opacity-20"></div>
              
              <div className="relative z-20 p-8 text-center transform group-hover:scale-105 transition-transform duration-300">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  MEN'S
                  <span className="block text-primary">COLLECTION</span>
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Exclusive jewelry for sophisticated men
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-yellow group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Women's Section */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <div className="aspect-[4/5] bg-muted flex items-end justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted opacity-20"></div>
              
              <div className="relative z-20 p-8 text-center transform group-hover:scale-105 transition-transform duration-300">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  WOMEN'S
                  <span className="block text-primary">COLLECTION</span>
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  Elegance and beauty in every detail
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-yellow group"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

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