import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart, Star, Filter, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
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
    image: "/lovable-uploads/9828ea2d-c1fe-4cd4-acc1-dcb7a8363f32.png",
    images: [
      "/lovable-uploads/9828ea2d-c1fe-4cd4-acc1-dcb7a8363f32.png",
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
    description: "Luxury Chrome Hearts inspired cross link bracelet crafted with precision and style.",
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
    description: "Luxury Chrome Hearts inspired cross link bracelet featuring intricate four-clover motifs with premium micro-paved crystal setting.",
    features: ["Premium Crystal Setting", "Multiple Color Options", "Adjustable Size", "Luxury Gift Box"],
    rating: 4.8,
    reviews: 142
  }
];

const categories = {
  "men": {
    name: "Men's Collection",
    description: "Sophisticated jewelry designed for the modern gentleman",
    products: products.filter(p => ["Chains", "Watches", "Rings"].includes(p.category))
  },
  "women": {
    name: "Women's Collection", 
    description: "Elegant pieces that celebrate feminine beauty",
    products: products.filter(p => ["Earrings", "Necklaces", "Bracelets", "Rings"].includes(p.category))
  },
  "bracelets": {
    name: "Bracelets",
    description: "Stylish bracelets and statement pieces for every occasion",
    products: products.filter(p => p.category === "Bracelets")
  },
  "rings": {
    name: "Rings",
    description: "Exquisite rings for every occasion",
    products: products.filter(p => p.category === "Rings")
  },
  "chains": {
    name: "Chains",
    description: "Premium chains and necklaces",
    products: products.filter(p => ["Chains", "Necklaces"].includes(p.category))
  },
  "watches": {
    name: "Watches",
    description: "Luxury timepieces that make a statement",
    products: products.filter(p => p.category === "Watches")
  },
  "earrings": {
    name: "Earrings",
    description: "Beautiful earrings with precious stones",
    products: products.filter(p => p.category === "Earrings")
  },
  "pendants": {
    name: "Pendants",
    description: "Personalized and statement pendants for every style",
    products: products.filter(p => p.category === "Pendants" || p.category === "Necklaces")
  }
};

const Category = () => {
  const { category } = useParams();
  const { addToCart } = useCart();
  const [sortBy, setSortBy] = useState("featured");
  
  const categoryData = categories[category?.toLowerCase() || ""];

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success("Product added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("Added to wishlist!", {
      description: `${product.name} has been saved to your wishlist.`,
    });
  };

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  let sortedProducts = [...categoryData.products];
  
  if (sortBy === "price-low") {
    sortedProducts.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')));
  } else if (sortBy === "price-high") {
    sortedProducts.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')));
  } else if (sortBy === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{categoryData.name}</h1>
              <p className="text-muted-foreground mb-4">{categoryData.description}</p>
              <Badge variant="secondary">
                {sortedProducts.length} {sortedProducts.length === 1 ? 'Product' : 'Products'}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-background border border-border rounded-md px-3 py-2 text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">Check back soon for new arrivals!</p>
            <Link to="/">
              <Button>Browse All Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-muted flex items-center justify-center relative">
                      {(product.id === 9 || product.id === 10 || product.id === 11 || product.id === 12 || product.id === 13) ? (
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
                      ) : null}
                      <div className={`${(product.id === 9 || product.id === 10 || product.id === 11 || product.id === 12 || product.id === 13) ? 'hidden fallback-placeholder' : 'flex fallback-placeholder'} absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 items-center justify-center`}>
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
                          onClick={(e) => handleAddToWishlist(product, e)}
                        >
                          <Heart className="h-4 w-4" />
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
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-secondary rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our jewelry experts are here to help you find the perfect piece. 
            Contact us for personalized recommendations or custom designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline">
              View All Collections
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Category;