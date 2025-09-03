import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <div className="hidden md:block">
            Free shipping on orders over CAD$ 500
          </div>
          <div className="flex items-center space-x-4">
            <span>Contact: +1 (437) 473-5348</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                HYPE COMPANY
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/category/men" className="text-foreground hover:text-primary transition-colors">Men</Link>
            <Link to="/category/women" className="text-foreground hover:text-primary transition-colors">Women</Link>
            <Link to="/category/rings" className="text-foreground hover:text-primary transition-colors">Rings</Link>
            <Link to="/category/chains" className="text-foreground hover:text-primary transition-colors">Chains</Link>
            <Link to="/category/watches" className="text-foreground hover:text-primary transition-colors">Watches</Link>
            <a href="#outlet" className="text-foreground hover:text-primary transition-colors">Outlet</a>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
            <Input 
              placeholder="Search products..." 
              className="pr-10 bg-muted border-border"
            />
            <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full text-xs h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;