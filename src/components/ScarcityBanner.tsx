import { Flame, Clock, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ScarcityBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-y border-primary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flame className="h-8 w-8 text-primary animate-pulse" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              LIMITED EDITION <span className="text-primary">COLLECTION</span>
            </h2>
            <Flame className="h-8 w-8 text-primary animate-pulse" />
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Exclusive drops with limited quantities. Each piece is numbered and authenticated for your collection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">97%</p>
              <p className="text-sm text-muted-foreground">Sold Out Rate</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">24-48h</p>
              <p className="text-sm text-muted-foreground">Average Sellout Time</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
              <Flame className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">Limited</p>
              <p className="text-sm text-muted-foreground">Units per Drop</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/category/bracelets">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg">
                Shop Exclusive Collection
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              ⚡ New drops every Friday at 12PM EST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScarcityBanner;
