import { Shield, Truck, RefreshCw, Award, Clock, Phone } from "lucide-react";

const TrustSignals = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-secondary/20 to-background border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            TRUSTED BY <span className="text-primary">THOUSANDS</span>
          </h2>
          <p className="text-muted-foreground">Your satisfaction is our guarantee</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Secure Payment</h3>
            <p className="text-xs text-muted-foreground">SSL Encrypted</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Truck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Free Shipping</h3>
            <p className="text-xs text-muted-foreground">Orders $500+</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <RefreshCw className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">30-Day Returns</h3>
            <p className="text-xs text-muted-foreground">Money Back</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Authentic</h3>
            <p className="text-xs text-muted-foreground">Certified Jewelry</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">24/7 Support</h3>
            <p className="text-xs text-muted-foreground">Always Here</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Contact Us</h3>
            <p className="text-xs text-muted-foreground">Quick Response</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;