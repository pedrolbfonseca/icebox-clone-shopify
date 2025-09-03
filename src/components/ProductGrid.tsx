import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "18k Gold Ring",
    price: "CAD$ 3,250.00",
    originalPrice: "CAD$ 4,160.00",
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
    price: "CAD$ 6,240.00",
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
    price: "CAD$ 15,600.00",
    originalPrice: "CAD$ 19,500.00",
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
    price: "CAD$ 8,450.00",
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
    name: "Diamond Tennis Bracelet",
    price: "CAD$ 10,660.00",
    originalPrice: "CAD$ 12,740.00",
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
    price: "CAD$ 4,940.00",
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
    price: "CAD$ 7,800.00",
    originalPrice: "CAD$ 9,100.00",
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
    price: "CAD$ 3,900.00",
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

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success("Produto adicionado ao carrinho!", {
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  const handleAddToWishlist = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success("Adicionado à lista de desejos!", {
      description: `${product.name} foi salvo na sua lista de desejos.`,
    });
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
                    {(product.id === 9 || product.id === 10) ? (
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
                    <div className={`${(product.id === 9 || product.id === 10) ? 'hidden fallback-placeholder' : 'flex fallback-placeholder'} absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 items-center justify-center`}>
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