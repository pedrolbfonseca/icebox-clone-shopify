import { ShoppingBag, Search, User, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useState } from "react";
import CartDropdown from "./CartDropdown";
import LogoProcessor from "./LogoProcessor";

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Logout successful!");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    scrollToTop();
  };

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <div className="hidden md:block flex-1 overflow-hidden">
            <div className="whitespace-nowrap animate-scroll">
              <span className="inline-block px-8">
                • Free shipping on orders over CAD$ 500 US & CA • Free shipping on orders over CAD$ 500 US & CA • Free shipping on orders over CAD$ 500 US & CA • Free shipping on orders over CAD$ 500 US & CA
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-shrink-0">
            <span>Contact: +1 (437) 473-5348</span>
            <span>•</span>
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Logo - centered on mobile, left on desktop */}
          <div className="flex items-center lg:mr-8 xl:mr-12 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none">
            <Link to="/" onClick={handleLinkClick}>
              <LogoProcessor
                logoUrl="/lovable-uploads/92dbd2e5-4a51-4e7b-8507-43765ba5081c.png"
                alt="HYPECO Logo"
                className="h-16 lg:h-20 w-auto object-contain filter brightness-100 contrast-125"
                loading="eager"
                draggable={false}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/category/bracelets" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors">Bracelets</Link>
            <Link to="/category/rings" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors">Rings</Link>
            <Link to="/category/chains" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors">Chains</Link>
            <Link to="/category/watches" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors">Watches</Link>
            <Link to="/category/pendants" onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors">Pendants</Link>
            <a href="#outlet" className="text-foreground hover:text-primary transition-colors">Outlet</a>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center relative flex-1 max-w-md mx-8">
            <Input 
              placeholder="Search products..." 
              className="pr-10 bg-muted border-border"
            />
            <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {user ? (
              <div className="hidden lg:flex items-center space-x-2">
                <span className="text-sm text-muted-foreground hidden md:inline">
                  Hello, {user.email?.split("@")[0]}
                </span>
                <Button variant="ghost" size="icon" onClick={handleSignOut}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Link to="/auth" className="hidden lg:block" onClick={scrollToTop}>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <CartDropdown />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <Input 
                    placeholder="Search products..." 
                    className="pr-10 bg-muted border-border"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-3">
                <Link 
                  to="/" 
                  onClick={handleLinkClick}
                  className="block py-2 text-foreground hover:text-primary transition-colors border-b border-border"
                >
                  Home
                </Link>
                <Link 
                  to="/category/bracelets" 
                  onClick={handleLinkClick}
                  className="block py-2 text-foreground hover:text-primary transition-colors border-b border-border"
                >
                  Bracelets
                </Link>
                <Link 
                  to="/category/rings" 
                  onClick={handleLinkClick}
                  className="block py-2 text-foreground hover:text-primary transition-colors border-b border-border"
                >
                  Rings
                </Link>
                <Link 
                  to="/category/chains" 
                  onClick={handleLinkClick}
                  className="block py-2 text-foreground hover:text-primary transition-colors border-b border-border"
                >
                  Chains
                </Link>
                <Link 
                  to="/category/watches" 
                  onClick={handleLinkClick}
                  className="block py-2 text-foreground hover:text-primary transition-colors border-b border-border"
                >
                  Watches
                </Link>
                <Link 
                  to="/category/pendants" 
                  onClick={handleLinkClick}
                  className="block py-2 text-foreground hover:text-primary transition-colors border-b border-border"
                >
                  Pendants
                </Link>
                <a 
                  href="#outlet" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-foreground hover:text-primary transition-colors border-b border-border"
                >
                  Outlet
                </a>
              </nav>

              {/* Mobile User Actions */}
              <div className="mt-4 pt-4 border-t border-border">
                {user ? (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Hello, {user.email?.split("@")[0]}
                    </span>
                    <Button variant="ghost" size="sm" onClick={handleSignOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Link to="/auth" onClick={handleLinkClick}>
                    <Button variant="outline" size="sm" className="w-full">
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;