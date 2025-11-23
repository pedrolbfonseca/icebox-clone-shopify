import { Flame, Clock, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ScarcityBanner = () => {
  return (
    <section className="relative py-20 border-y border-primary/30 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/98a79af7-4c77-4531-84ba-52a7d144317e.png"
          alt="Luxury jewelry background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl">
              LIMITED EDITION <span className="text-primary drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]">COLLECTION</span>
            </h2>
            <Flame className="h-8 w-8 text-primary animate-pulse" />
          </div>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Exclusive drops with limited quantities. Each piece is numbered and authenticated for your collection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">97%</p>
              <p className="text-sm text-white/70">Sold Out Rate</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">24-48h</p>
              <p className="text-sm text-white/70">Average Sellout Time</p>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-6 rounded-xl border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:scale-105">
              <Flame className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">Limited</p>
              <p className="text-sm text-white/70">Units per Drop</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/category/bracelets">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg">
                Shop Exclusive Collection
              </Button>
            </Link>
            <p className="text-sm text-white/80 font-semibold">
              ⚡ New drops every Friday at 12PM EST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScarcityBanner;
