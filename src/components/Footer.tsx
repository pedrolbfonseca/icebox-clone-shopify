import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import LogoProcessor from "./LogoProcessor";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border">
      {/* CTA Section */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              READY TO ELEVATE YOUR <span className="text-primary">STYLE?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of satisfied customers who trust HYPE CO for premium luxury jewelry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/category/bracelets">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Shop Now
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold px-8">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <LogoProcessor
              logoUrl="/lovable-uploads/92dbd2e5-4a51-4e7b-8507-43765ba5081c.png"
              alt="HYPECO Logo"
              className="h-24 w-auto object-contain filter brightness-100 contrast-125"
              loading="eager"
              draggable={false}
            />
            <p className="text-muted-foreground mb-4">
              Your premium jewelry store with the finest pieces in the market.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Rings</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chains</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Watches</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Earrings</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="group-hover:text-primary transition-colors">contact@hypecompany.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="group-hover:text-primary transition-colors">+1 (437) 473-5348</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="group-hover:text-primary transition-colors">Toronto, Canada</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                  <Clock className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="group-hover:text-primary transition-colors">Mon-Fri: 9am-6pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Hype Company. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;