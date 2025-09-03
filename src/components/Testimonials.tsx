import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Toronto, ON",
    rating: 5,
    comment: "Absolutely stunning quality! The diamond earrings I purchased exceeded my expectations. Fast shipping and amazing customer service.",
    product: "Diamond Earrings"
  },
  {
    name: "Michael Chen",
    location: "Vancouver, BC",
    rating: 5,
    comment: "The watch I bought for my anniversary was perfect. My wife loves it and the craftsmanship is exceptional. Highly recommend!",
    product: "Diamond Watch"
  },
  {
    name: "Emily Rodriguez", 
    location: "Montreal, QC",
    rating: 5,
    comment: "Best jewelry shopping experience I've ever had. The gold ring is beautiful and exactly as described. Will definitely shop here again!",
    product: "18k Gold Ring"
  },
  {
    name: "David Thompson",
    location: "Calgary, AB", 
    rating: 5,
    comment: "Outstanding customer service and premium quality jewelry. The Cuban chain I ordered is heavy, solid, and looks amazing. Worth every penny!",
    product: "Premium Cuban Chain"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            WHAT OUR <span className="text-primary">CUSTOMERS SAY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across Canada have to say about their Hype Company experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-card-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-primary mt-1">Purchased: {testimonial.product}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-8 text-muted-foreground">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">4.9/5</p>
              <p className="text-sm">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">2,500+</p>
              <p className="text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">99%</p>
              <p className="text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;