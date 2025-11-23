import { Shield, Package, Sparkles, Palette, Gift, Ruler } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Solid Construction",
    description: "Built with premium materials for lasting durability"
  },
  {
    icon: Sparkles,
    title: "Full Ice Out",
    description: "Completely covered with high-quality diamonds"
  },
  {
    icon: Package,
    title: "Bust Down Locker",
    description: "Secure clasp with premium finishing"
  },
  {
    icon: Palette,
    title: "Multiple Colors",
    description: "Available in Gold, Silver, Rose Gold finishes"
  },
  {
    icon: Ruler,
    title: "Various Sizes",
    description: "Multiple sizes and widths to fit perfectly"
  },
  {
    icon: Gift,
    title: "Luxury Gift Box",
    description: "Premium packaging included with every purchase"
  }
];

const ProductBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            WHY CHOOSE <span className="text-primary">HYPE CO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium craftsmanship meets luxury design in every piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
