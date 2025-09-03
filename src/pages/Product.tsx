import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingBag, Heart, Share2, ArrowLeft, Truck, Shield, RefreshCw, Award } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";

// Declare ShopifyBuy types
declare global {
  interface Window {
    ShopifyBuy: {
      buildClient: (config: { domain: string; storefrontAccessToken: string }) => any;
      UI: {
        onReady: (client: any) => Promise<any>;
      };
    };
  }
}

const products = [
  {
    id: 1,
    name: "18k Gold Ring",
    price: "CAD$ 3,250",
    originalPrice: "CAD$ 4,160",
    image: "placeholder",
    category: "Rings",
    description: "Exquisite 18k gold ring with premium craftsmanship and timeless design. This stunning piece combines traditional elegance with modern sophistication, making it perfect for any occasion.",
    features: ["18k Gold", "Premium Quality", "Lifetime Warranty", "Gift Box Included"],
    rating: 4.8,
    reviews: 156,
    inStock: true,
    specifications: {
      "Material": "18k Gold",
      "Size": "Adjustable 6-10",
      "Origin": "Canada",
      "Warranty": "Lifetime"
    }
  },
  {
    id: 2,
    name: "Premium Cuban Chain",
    price: "CAD$ 6,240",
    originalPrice: null,
    image: "placeholder", 
    category: "Chains",
    description: "Heavy-duty premium Cuban chain made from the finest materials. Built to last with superior craftsmanship and attention to detail.",
    features: ["Premium Material", "Water Resistant", "Adjustable Length", "Certificate Included"],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    specifications: {
      "Material": "Stainless Steel",
      "Length": "20-24 inches",
      "Width": "8mm",
      "Clasp": "Lobster Claw"
    }
  },
  {
    id: 3,
    name: "Diamond Watch",
    price: "CAD$ 15,600",
    originalPrice: "CAD$ 19,500",
    image: "placeholder",
    category: "Watches",
    description: "Luxury diamond-encrusted timepiece with Swiss movement. A masterpiece of horological engineering with stunning visual appeal.",
    features: ["Swiss Movement", "Real Diamonds", "Water Proof", "2 Year Warranty"],
    rating: 5.0,
    reviews: 89,
    inStock: true,
    specifications: {
      "Movement": "Swiss Quartz",
      "Case": "Stainless Steel",
      "Diamonds": "Natural, 1.2ct",
      "Water Resistance": "100m",
      "Warranty": "2 Years"
    }
  },
  {
    id: 4,
    name: "Emerald Earrings",
    price: "CAD$ 8,450",
    originalPrice: null,
    image: "placeholder",
    category: "Earrings",
    description: "Stunning emerald earrings with brilliant cut stones. These elegant pieces showcase the natural beauty of emeralds in a sophisticated setting.",
    features: ["Natural Emerald", "Sterling Silver", "Hypoallergenic", "Elegant Design"],
    rating: 4.7,
    reviews: 124,
    inStock: true,
    specifications: {
      "Stone": "Natural Emerald",
      "Setting": "Sterling Silver",
      "Carat": "3.5ct total",
      "Cut": "Oval",
      "Backing": "Secure Push-Back"
    }
  },
  {
    id: 5,
    name: "Tennis Bracelet",
    price: "CAD$ 10,660",
    originalPrice: "CAD$ 12,740",
    image: "placeholder",
    category: "Bracelets",
    description: "Classic tennis bracelet with brilliant diamonds. This timeless piece features perfectly matched stones in a flexible setting.",
    features: ["Diamond Stones", "Flexible Design", "Secure Clasp", "Luxury Box"],
    rating: 4.8,
    reviews: 178,
    inStock: true,
    specifications: {
      "Diamonds": "5.0ct total",
      "Quality": "VS1 Clarity",
      "Color": "G-H",
      "Length": "7 inches",
      "Clasp": "Hidden Safety"
    }
  },
  {
    id: 6,
    name: "Pearl Necklace",
    price: "CAD$ 4,940",
    originalPrice: null,
    image: "placeholder",
    category: "Necklaces",
    description: "Elegant freshwater pearl necklace with gold clasp. Each pearl is hand-selected for its lustrous beauty and perfect round shape.",
    features: ["Freshwater Pearls", "Gold Clasp", "Multiple Lengths", "Velvet Case"],
    rating: 4.6,
    reviews: 97,
    inStock: true,
    specifications: {
      "Pearl Type": "Freshwater",
      "Size": "8-9mm",
      "Length": "18 inches",
      "Clasp": "14k Gold",
      "Luster": "High"
    }
  },
  {
    id: 7,
    name: "Sapphire Ring",
    price: "CAD$ 7,800",
    originalPrice: "CAD$ 9,100",
    image: "placeholder",
    category: "Rings",
    description: "Royal blue sapphire ring with white gold setting. This magnificent piece features a center stone surrounded by brilliant diamonds.",
    features: ["Natural Sapphire", "White Gold", "Expert Cut", "Certificate"],
    rating: 4.9,
    reviews: 145,
    inStock: true,
    specifications: {
      "Center Stone": "Natural Sapphire",
      "Carat Weight": "2.1ct",
      "Setting": "14k White Gold",
      "Accent Stones": "Diamond",
      "Size": "6 (Resizable)"
    }
  },
  {
    id: 8,
    name: "Gold Pendant",
    price: "CAD$ 3,900",
    originalPrice: null,
    image: "placeholder",
    category: "Necklaces",
    description: "Minimalist gold pendant perfect for everyday wear. Clean lines and superior craftsmanship make this piece versatile and timeless.",
    features: ["14k Gold", "Minimalist Design", "Durable Chain", "Gift Ready"],
    rating: 4.5,
    reviews: 76,
    inStock: true,
    specifications: {
      "Material": "14k Gold",
      "Pendant Size": "15mm x 20mm",
      "Chain Length": "18 inches",
      "Finish": "Polished"
    }
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
    description: "Luxury Chrome Hearts inspired cross link bracelet featuring iconic gothic cross motifs in premium 14K gold plating. This statement piece combines edgy streetwear aesthetics with refined craftsmanship, making it perfect for both casual and elevated looks. Each cross link is meticulously detailed with intricate patterns that catch and reflect light beautifully. The secure clasp mechanism ensures comfortable wear while maintaining the bracelet's striking visual impact. Designed for those who appreciate bold, distinctive jewelry that makes a statement.",
    features: ["14K Gold Plated Finish", "Iconic Cross Link Design", "Secure Clasp System", "HypeCo Lifetime Guarantee"],
    rating: 4.9,
    reviews: 187,
    inStock: true,
    specifications: {
      "Material": "14K Gold Plated Stainless Steel",
      "Length": "8.5 inches (Adjustable)",
      "Width": "12mm",
      "Clasp": "Hidden Safety Lock",
      "Shipping": "4-7 Business Days - Discreet & Fast",
      "Warranty": "HypeCo Guarantee Included"
    }
  }
];

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("7");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product) return;
    
    const productWithSize = {
      ...product,
      selectedSize: product.category === "Rings" ? selectedSize : undefined
    };
    
    addToCart(productWithSize, quantity, product.category === "Rings" ? selectedSize : undefined);
    
    toast.success("Adicionado ao carrinho!", {
      description: `${product.name} foi adicionado ao seu carrinho.`,
    });
  };

  const handleAddToWishlist = () => {
    if (!product) return;
    
    toast.success("Adicionado à lista de desejos!", {
      description: `${product.name} foi salvo na sua lista de desejos.`,
    });
  };

  useEffect(() => {
    console.log('Product loaded:', { 
      productId: product?.id, 
      isProduct9: product?.id === 9,
      elementExists: !!document.getElementById('product-component-1756914985987')
    });

    if (product?.id === 9) {
      // Wait for element to be rendered
      setTimeout(() => {
        const element = document.getElementById('product-component-1756914985987');
        console.log('Widget element found:', !!element);
        
        if (element) {
          loadShopifyWidget();
        }
      }, 100);
    }
  }, [product]);

  const loadShopifyWidget = () => {
    console.log('Loading Shopify widget...');
    
    const script = document.createElement('script');
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.async = true;
    script.onload = () => {
      console.log('Shopify script loaded');
      initShopifyWidget();
    };
    document.head.appendChild(script);
  };

  const initShopifyWidget = () => {
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      console.log('Initializing Shopify widget...');
      
      const client = window.ShopifyBuy.buildClient({
        domain: '2jxw06-70.myshopify.com',
        storefrontAccessToken: 'e74939e8f38608461f2f49b8bc31f90f',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        console.log('Creating Shopify component...');
        
        ui.createComponent('product', {
          id: '9844223770910',
          node: document.getElementById('product-component-1756914985987'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  'max-width': '100%',
                  'margin-left': '0px',
                  'margin-bottom': '0px',
                  'width': '100%',
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px',
                    'width': '100%'
                  }
                },
                button: {
                  'font-family': 'Arial, sans-serif',
                  color: '#000000',
                  'font-weight': 'bold',
                  ':hover': {
                    color: '#000000',
                    'background-color': '#65b3cc'
                  },
                  'background-color': '#70c7e3',
                  ':focus': {
                    'background-color': '#65b3cc'
                  }
                }
              },
              contents: {
                img: false,
                title: false,
                price: false
              },
              text: {
                button: 'Add to cart'
              },
              buttonStyles: {
                'font-weight': 'bold'
              }
            },
            cart: {
              styles: {
                button: {
                  'font-family': 'Arial, sans-serif',
                  color: '#000000',
                  ':hover': {
                    color: '#000000',
                    'background-color': '#65b3cc'
                  },
                  'background-color': '#70c7e3',
                  ':focus': {
                    'background-color': '#65b3cc'
                  }
                }
              },
              text: {
                total: 'Subtotal',
                button: 'Checkout'
              },
              popup: false
            },
            toggle: {
              styles: {
                toggle: {
                  'font-family': 'Arial, sans-serif',
                  'background-color': '#70c7e3',
                  ':hover': {
                    'background-color': '#65b3cc'
                  },
                  ':focus': {
                    'background-color': '#65b3cc'
                  }
                },
                count: {
                  color: '#000000',
                  ':hover': {
                    color: '#000000'
                  }
                },
                iconPath: {
                  fill: '#000000'
                }
              }
            }
          }
        });
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
              {product.id === 9 && product.images ? (
                <img 
                  src={product.images[selectedImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.fallback-placeholder') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className={`${product.id === 9 ? 'hidden fallback-placeholder' : 'flex fallback-placeholder'} w-full h-full items-center justify-center`}>
                <span className="text-8xl font-bold text-primary/30">
                  {product.category.charAt(0)}
                </span>
              </div>
            </Card>
            
            {/* Thumbnail Images */}
            {product.id === 9 && product.images && (
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <Card 
                    key={index}
                    className={`aspect-square cursor-pointer overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index ? 'border-primary' : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-foreground">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">
                    Save {Math.round(((parseFloat(product.originalPrice.replace(/[^0-9.]/g, '')) - parseFloat(product.price.replace(/[^0-9.]/g, ''))) / parseFloat(product.originalPrice.replace(/[^0-9.]/g, ''))) * 100)}%
                  </Badge>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-primary mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection (for rings) */}
            {product.category === "Rings" && (
              <div>
                <h3 className="font-semibold text-foreground mb-3">Ring Size</h3>
                <div className="flex space-x-2">
                  {["6", "7", "8", "9", "10"].map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart for Chrome Hearts */}
            {product.id === 9 ? (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
                  <div className="flex items-center space-x-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="text-lg font-semibold px-4">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div>
                  <div id='product-component-1756914985987'></div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold px-4">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            )}

            {/* Action Buttons - Only for non-Chrome Hearts products */}
            {product.id !== 9 && (
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleAddToWishlist}
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                
                <Button size="lg" className="w-full" variant="secondary">
                  Buy Now - Fast Checkout
                </Button>
              </div>
            )}

            {/* Wishlist and Share for Chrome Hearts */}
            {product.id === 9 && (
              <div className="flex space-x-4">
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Save to Wishlist
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Product
                </Button>
              </div>
            )}

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over CAD$500</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Secure Payment</p>
                <p className="text-xs text-muted-foreground">256-bit encryption</p>
              </div>
              <div className="text-center">
                <RefreshCw className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">Money back guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-muted-foreground">{key}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{product.rating}/5</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Based on {product.reviews} reviews
                  </span>
                </div>
                <Separator />
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground mb-1">"Absolutely stunning piece! The quality exceeded my expectations."</p>
                    <p className="text-xs text-muted-foreground">- Sarah M.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-sm text-muted-foreground mb-1">"Perfect for special occasions. Received many compliments!"</p>
                    <p className="text-xs text-muted-foreground">- Michael R.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Product;