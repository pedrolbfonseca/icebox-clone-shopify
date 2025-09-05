import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/hooks/useWishlist";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const products = [
  {
    id: 13,
    name: "Solid Silver Ice Out Cuban Link Chain",
    price: "From CAD$ 165.00",
    originalPrice: null,
    image: "/lovable-uploads/66a48e10-05ee-408d-aec4-877f2c471f1d.png",
    images: [
      "/lovable-uploads/66a48e10-05ee-408d-aec4-877f2c471f1d.png",
      "/lovable-uploads/390621c5-3371-4bde-96e1-a473c29eefa5.png",
      "/lovable-uploads/e03c11d5-67a6-4ac0-845c-3ac4386d1d5d.png",
      "/lovable-uploads/04cf6ff5-c2d7-4c9b-be00-a10e45200d6f.png",
      "/lovable-uploads/09ee7ef8-2221-4d72-85ec-438569a1f543.png",
      "/lovable-uploads/762901f9-e813-492c-a058-5d111ebfc67f.png"
    ],
    category: "Chains",
    description: "Premium solid silver ice out Cuban link chain with full crystal setting. Features precision-crafted links with maximum brilliance and luxury finish. Available in multiple lengths for perfect fit.",
    features: ["Solid Silver Construction", "Full Ice Out Design", "Premium Crystal Setting", "Multiple Lengths Available"],
    rating: 4.9,
    reviews: 142,
    customizable: true,
    pricingOptions: [
      { size: "16 inch", price: "CAD$ 165.00", value: 165.00 },
      { size: "18 inch", price: "CAD$ 200.00", value: 200.00 },
      { size: "20 inch", price: "CAD$ 235.00", value: 235.00 },
      { size: "22 inch", price: "CAD$ 270.00", value: 270.00 }
    ]
  },
  {
    id: 12,
    name: "Solid Silver Ice Out Cuban Link Bracelet",
    price: "From CAD$ 97.30",
    originalPrice: null,
    image: "/lovable-uploads/e09b9a1b-639f-47b7-b9fa-6e64a5bf82a9.png",
    images: [
      "/lovable-uploads/e09b9a1b-639f-47b7-b9fa-6e64a5bf82a9.png",
      "/lovable-uploads/6ff1b99b-0309-470c-856d-a475e0f4c084.png",
      "/lovable-uploads/ff31b6a2-6ced-49f2-98a0-727f38feafcb.png",
      "/lovable-uploads/193d97c9-6b10-4005-9502-0aa61a4abd68.png"
    ],
    category: "Bracelets",
    description: "Premium solid silver ice out Cuban link bracelet with full crystal setting. Features precision-crafted links with maximum brilliance and luxury finish. Available in multiple sizes for perfect fit.",
    features: ["Solid Silver Construction", "Full Ice Out Design", "Premium Crystal Setting", "Multiple Sizes Available"],
    rating: 4.9,
    reviews: 156,
    customizable: true,
    pricingOptions: [
      { size: "7 inch", price: "CAD$ 97.30", value: 97.30 },
      { size: "8 inch", price: "CAD$ 104.00", value: 104.00 }
    ]
  },
  {
    id: 11,
    name: "Custom Letter and Numbers Pendant",
    price: "From CAD$ 75.00",
    originalPrice: null,
    image: "/lovable-uploads/f021de8d-3d13-4394-a972-d6357eb03ca0.png",
    images: [
      "/lovable-uploads/f021de8d-3d13-4394-a972-d6357eb03ca0.png"
    ],
    category: "Pendants",
    description: "Personalize your style with our custom letter and number pendant. Choose from 1 to 6 letters or numbers to create your unique piece. Perfect for names, initials, or meaningful dates.",
    features: ["Custom Personalization", "14K Gold Plated", "Premium Quality", "Fast Processing"],
    rating: 4.9,
    reviews: 234,
    customizable: true,
    pricingOptions: [
      { letters: 1, price: "CAD$ 75.00", value: 75 },
      { letters: 2, price: "CAD$ 150.00", value: 150 },
      { letters: 3, price: "CAD$ 180.00", value: 180 },
      { letters: 4, price: "CAD$ 220.00", value: 220 },
      { letters: 5, price: "CAD$ 240.00", value: 240 },
      { letters: 6, price: "CAD$ 260.00", value: 260 }
    ]
  },
  {
    id: 9,
    name: "Chrome Hearts Cross Bracelet",
    price: "CAD$ 63.00",
    originalPrice: null,
    image: "/lovable-uploads/5a4ea2ea-8a67-498a-b4cb-cf901f3c34b5.png",
    images: [
      "/lovable-uploads/5a4ea2ea-8a67-498a-b4cb-cf901f3c34b5.png",
      "/lovable-uploads/ef2d481a-5bf3-4de6-a379-4b6e6c562ed2.png",
      "/lovable-uploads/655181b7-fe89-4177-bfbb-d5d8e49905e9.png"
    ],
    category: "Bracelets",
    description: "Luxury Chrome Hearts inspired cross link bracelet crafted with precision and style. Features iconic cross motifs with premium 14K gold plating for lasting shine and durability. Perfect statement piece for streetwear and luxury fashion enthusiasts.",
    features: ["14K Gold Plated", "Cross Link Design", "HypeCo Guarantee", "Fast Shipping 4-7 Days"],
    rating: 4.9,
    reviews: 187
  },
  {
    id: 10,
    name: "Infinity Four Clover Bracelet",
    price: "CAD$ 97.00",
    originalPrice: null,
    image: "/lovable-uploads/c35a4ea4-7563-4030-9a2e-6d6bac497874.png",
    images: [
      "/lovable-uploads/c35a4ea4-7563-4030-9a2e-6d6bac497874.png",
      "/lovable-uploads/cf7ef13f-50c0-4696-8255-dfed0efe5fb1.png",
      "/lovable-uploads/5df4f604-f9cb-46d4-beeb-6ddd7148c090.png",
      "/lovable-uploads/15d81795-f0d9-4522-9fb2-23c756194c84.png",
      "/lovable-uploads/5d75a19e-9b0c-4b7d-a6f0-beecf78ae16b.png"
    ],
    category: "Bracelets",
    description: "Luxury Chrome Hearts inspired cross link bracelet featuring intricate four-clover motifs with premium micro-paved crystal setting. Available in multiple stunning colorways including classic silver, vibrant purple, and multicolor designs. Crafted with precision engineering for exceptional brilliance and lasting elegance.",
    features: ["Premium Crystal Setting", "Multiple Color Options", "Adjustable Size", "Luxury Gift Box"],
    rating: 4.8,
    reviews: 142
  }
];

const ProductGrid = () => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success("Product added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = async (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast.error("Please sign in to use wishlist");
      return;
    }

    const productId = product.id.toString();
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
    } else {
      await addToWishlist(productId);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            FEATURED <span className="text-primary">PRODUCTS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive selection of premium jewelry, 
            carefully curated for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <div className="aspect-square bg-muted flex items-center justify-center relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.fallback-placeholder') as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div className="hidden fallback-placeholder absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 items-center justify-center">
                      <span className="text-4xl font-bold text-primary/50">
                        {product.category.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="bg-primary hover:bg-primary/90"
                        onClick={(e) => handleAddToCart(product, e)}
                      >
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="secondary"
                        onClick={(e) => handleWishlistToggle(product, e)}
                        className={user && isInWishlist(product.id.toString()) ? "bg-red-500 hover:bg-red-600" : ""}
                      >
                        <Heart className={`h-4 w-4 ${user && isInWishlist(product.id.toString()) ? 'fill-white text-white' : ''}`} />
                      </Button>
                    </div>
                  </div>

                  {/* Sale badge */}
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      SALE
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">
                    {product.category}
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-1 text-ellipsis overflow-hidden whitespace-nowrap">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-foreground">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/category/rings">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;