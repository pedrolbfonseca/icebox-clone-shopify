import { Shield, Award, Users, Sparkles } from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Every piece comes with our lifetime quality guarantee and authenticity certificate."
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "We use only the finest 14K-18K gold, genuine diamonds, and premium stainless steel."
    },
    {
      icon: Users,
      title: "Expert Craftsmanship",
      description: "Our master jewelers have decades of experience creating exceptional pieces."
    },
    {
      icon: Sparkles,
      title: "Exclusive Designs",
      description: "Unique, trendsetting designs that reflect modern luxury and timeless elegance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Hype Company</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are passionate artisans dedicated to creating extraordinary jewelry that tells your unique story. 
              Since our founding, we've been committed to excellence, authenticity, and creating pieces that 
              transcend trends to become treasured heirlooms.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded with a vision to democratize luxury, Hype Company emerged from a simple belief: 
                  exceptional jewelry should be accessible to everyone who appreciates fine craftsmanship.
                </p>
                <p className="text-lg leading-relaxed">
                  Our journey began with a small workshop in Toronto, where our founder started creating 
                  custom pieces for friends and family. Word spread about our unique designs and impeccable 
                  quality, and soon we were serving customers across Canada and beyond.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to be one of Canada's most trusted jewelry brands, known for our 
                  commitment to quality, authenticity, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💎</div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">Since 2020</h4>
                  <p className="text-muted-foreground">Crafting Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit group-hover:bg-primary/20 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-muted-foreground">Customer Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">Authentic Pieces</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;