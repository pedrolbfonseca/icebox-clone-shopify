import { Shield, Truck, RefreshCw, Award, Clock, Phone } from "lucide-react";

const TrustSignals = () => {
  return (
    <section className="py-8 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="flex flex-col items-center text-center p-3 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/5 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-xs mb-1">Secure Payment</h3>
            <p className="text-[10px] text-muted-foreground">SSL Encrypted</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-3 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/5 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <Truck className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-xs mb-1">Free Shipping</h3>
            <p className="text-[10px] text-muted-foreground">Orders $500+</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-3 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/5 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <RefreshCw className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-xs mb-1">30-Day Returns</h3>
            <p className="text-[10px] text-muted-foreground">Money Back</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-3 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/5 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-xs mb-1">Authentic</h3>
            <p className="text-[10px] text-muted-foreground">Certified Jewelry</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-3 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/5 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-xs mb-1">24/7 Support</h3>
            <p className="text-[10px] text-muted-foreground">Always Here</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-3 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="bg-primary/5 w-10 h-10 rounded-full flex items-center justify-center mb-2">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-xs mb-1">Contact Us</h3>
            <p className="text-[10px] text-muted-foreground">Quick Response</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;