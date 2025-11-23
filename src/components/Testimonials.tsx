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
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            WHAT OUR <span className="text-primary">CLIENTS</span> SAY
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Real experiences from our satisfied customers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
              <p className="text-4xl font-bold text-primary mb-2">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
              <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">★</span>
                ))}
              </div>
              <p className="text-foreground mb-6 text-lg leading-relaxed">"{testimonial.comment}"</p>
              <div className="border-t border-border pt-6">
                <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground mb-2">{testimonial.location}</p>
                <p className="text-xs text-primary font-semibold bg-primary/10 inline-block px-3 py-1 rounded-full">
                  ✓ Verified Purchase: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;