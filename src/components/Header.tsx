import { ShoppingBag, Search, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import CartDropdown from "./CartDropdown";
import LogoProcessor from "./LogoProcessor";

const Header = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logout successful!");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

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
              <LogoProcessor
                logoUrl="/lovable-uploads/00dc269d-705c-478b-8102-d7baf43834e0.png"
                alt="Hype Company Logo"
                className="h-20 w-auto object-contain filter brightness-100 contrast-125"
                loading="eager"
                draggable={false}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/category/bracelets" className="text-foreground hover:text-primary transition-colors">Bracelets</Link>
            <Link to="/category/rings" className="text-foreground hover:text-primary transition-colors">Rings</Link>
            <Link to="/category/chains" className="text-foreground hover:text-primary transition-colors">Chains</Link>
            <Link to="/category/watches" className="text-foreground hover:text-primary transition-colors">Watches</Link>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
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
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground hidden md:inline">
                  Hello, {user.email?.split("@")[0]}
                </span>
                <Button variant="ghost" size="icon" onClick={handleSignOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <CartDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;