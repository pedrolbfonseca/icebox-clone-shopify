import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart, Star, Filter, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "18k Gold Ring",
    price: "CAD$ 3,250",
    originalPrice: "CAD$ 4,160",
    image: "placeholder",
    category: "Rings",
    description: "Exquisite 18k gold ring with premium craftsmanship and timeless design.",
    features: ["18k Gold", "Premium Quality", "Lifetime Warranty", "Gift Box Included"],
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "Premium Cuban Chain",
    price: "CAD$ 6,240",
    originalPrice: null,
    image: "placeholder", 
    category: "Chains",
    description: "Heavy-duty premium Cuban chain made from the finest materials.",
    features: ["Premium Material", "Water Resistant", "Adjustable Length", "Certificate Included"],
    rating: 4.9,
    reviews: 203
  },
  {
    id: 3,
    name: "Diamond Watch",
    price: "CAD$ 15,600",
    originalPrice: "CAD$ 19,500",
    image: "placeholder",
    category: "Watches",
    description: "Luxury diamond-encrusted timepiece with Swiss movement.",
    features: ["Swiss Movement", "Real Diamonds", "Water Proof", "2 Year Warranty"],
    rating: 5.0,
    reviews: 89
  },
  {
    id: 4,
    name: "Emerald Earrings",
    price: "CAD$ 8,450",
    originalPrice: null,
    image: "placeholder",
    category: "Earrings",
    description: "Stunning emerald earrings with brilliant cut stones.",
    features: ["Natural Emerald", "Sterling Silver", "Hypoallergenic", "Elegant Design"],
    rating: 4.7,
    reviews: 124
  },
  {
    id: 5,
    name: "Tennis Bracelet",
    price: "CAD$ 10,660",
    originalPrice: "CAD$ 12,740",
    image: "placeholder",
    category: "Bracelets",
    description: "Classic tennis bracelet with brilliant diamonds.",
    features: ["Diamond Stones", "Flexible Design", "Secure Clasp", "Luxury Box"],
    rating: 4.8,
    reviews: 178
  },
  {
    id: 6,
    name: "Pearl Necklace",
    price: "CAD$ 4,940",
    originalPrice: null,
    image: "placeholder",
    category: "Necklaces",
    description: "Elegant freshwater pearl necklace with gold clasp.",
    features: ["Freshwater Pearls", "Gold Clasp", "Multiple Lengths", "Velvet Case"],
    rating: 4.6,
    reviews: 97
  },
  {
    id: 7,
    name: "Sapphire Ring",
    price: "CAD$ 7,800",
    originalPrice: "CAD$ 9,100",
    image: "placeholder",
    category: "Rings",
    description: "Royal blue sapphire ring with white gold setting.",
    features: ["Natural Sapphire", "White Gold", "Expert Cut", "Certificate"],
    rating: 4.9,
    reviews: 145
  },
  {
    id: 8,
    name: "Gold Pendant",
    price: "CAD$ 3,900",
    originalPrice: null,
    image: "placeholder",
    category: "Necklaces",
    description: "Minimalist gold pendant perfect for everyday wear.",
    features: ["14k Gold", "Minimalist Design", "Durable Chain", "Gift Ready"],
    rating: 4.5,
    reviews: 76
  },
  {
    id: 9,
    name: "Chrome Hearts Inspired 14K Gold Plated Cross Link Bracelet",
    price: "CAD$ 63",
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
  }
};

const Category = () => {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState("featured");
  
  const categoryData = categories[category?.toLowerCase() || ""];

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
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-muted flex items-center justify-center relative">
                      {product.id === 9 ? (
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
                      <div className={`${product.id === 9 ? 'hidden fallback-placeholder' : 'flex fallback-placeholder'} absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 items-center justify-center`}>
                        <span className="text-4xl font-bold text-primary/50">
                          {product.category.charAt(0)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Button size="icon" variant="secondary" className="bg-primary hover:bg-primary/90">
                          <ShoppingBag className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="secondary">
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
                    <h3 className="font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
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