import { Shield, Truck, RefreshCw, Award, Clock, Phone } from "lucide-react";

const TrustSignals = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="text-center">
            <Truck className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">Free Shipping</h3>
            <p className="text-xs text-muted-foreground">Orders over CAD$ 500</p>
          </div>
          
          <div className="text-center">
            <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">Secure Payment</h3>
            <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
          </div>
          
          <div className="text-center">
            <RefreshCw className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">30-Day Returns</h3>
            <p className="text-xs text-muted-foreground">Money back guarantee</p>
          </div>
          
          <div className="text-center">
            <Award className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">Lifetime Warranty</h3>
            <p className="text-xs text-muted-foreground">On premium pieces</p>
          </div>
          
          <div className="text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">Fast Processing</h3>
            <p className="text-xs text-muted-foreground">Same day shipping</p>
          </div>
          
          <div className="text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">Expert Support</h3>
            <p className="text-xs text-muted-foreground">Jewelry specialists</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;