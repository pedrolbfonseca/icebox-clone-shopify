import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Star, ShoppingBag, Heart, Share2, ArrowLeft, Truck, Shield, RefreshCw, Award, Loader2 } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCartStore } from "@/stores/cartStore";
import { useWishlist } from "@/hooks/useWishlist";
import { useAuth } from "@/contexts/AuthContext";
import { ShopifyProduct, storefrontApiRequest } from "@/lib/shopify";

const PRODUCT_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

const Product = () => {
  const { handle } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  
  const addItem = useCartStore(state => state.addItem);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return;
      
      try {
        setLoading(true);
        const data = await storefrontApiRequest(PRODUCT_QUERY, { handle });
        
        if (data?.data?.productByHandle) {
          const productData = {
            node: data.data.productByHandle
          };
          setProduct(productData as ShopifyProduct);
          
          // Initialize selected options
          const initialOptions: Record<string, string> = {};
          data.data.productByHandle.options?.forEach((option: any) => {
            if (option.values?.[0]) {
              initialOptions[option.name] = option.values[0];
            }
          });
          setSelectedOptions(initialOptions);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  useEffect(() => {
    if (!product) return;
    
    // Find matching variant based on selected options
    const matchingVariant = product.node.variants.edges.findIndex(({ node: variant }) => {
      return variant.selectedOptions.every(option => 
        selectedOptions[option.name] === option.value
      );
    });
    
    if (matchingVariant !== -1) {
      setSelectedVariantIndex(matchingVariant);
    }
  }, [selectedOptions, product]);

  const handleAddToCart = () => {
    if (!product) return;
    
    const selectedVariant = product.node.variants.edges[selectedVariantIndex]?.node;
    if (!selectedVariant) {
      toast.error("Please select a variant");
      return;
    }

    const cartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions
    };

    addItem(cartItem);
    toast.success("Added to cart!", {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = async () => {
    if (!product) return;
    
    if (!user) {
      toast.error("Please sign in to use wishlist");
      return;
    }

    const productId = product.node.id;
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
    } else {
      await addToWishlist(productId);
    }
  };

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionName]: value
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const selectedVariant = product.node.variants.edges[selectedVariantIndex]?.node;
  const currentPrice = selectedVariant?.price || product.node.priceRange.minVariantPrice;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              {product.node.images.edges[selectedImageIndex]?.node ? (
                <img
                  src={product.node.images.edges[selectedImageIndex].node.url}
                  alt={product.node.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10">
                  <span className="text-6xl font-bold text-primary/50">
                    {product.node.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.node.images.edges.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.node.images.edges.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index 
                        ? 'border-primary' 
                        : 'border-transparent hover:border-muted-foreground/30'
                    }`}
                  >
                    <img
                      src={image.node.url}
                      alt={`${product.node.title} - View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {product.node.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl font-bold text-primary">
                  {currentPrice.currencyCode} ${parseFloat(currentPrice.amount).toFixed(2)}
                </div>
                {selectedVariant?.availableForSale ? (
                  <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">
                    Out of Stock
                  </Badge>
                )}
              </div>
            </div>

            <Separator />

            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>{product.node.description}</p>
            </div>

            <Separator />

            {/* Product Options */}
            {product.node.options.map((option) => (
              <div key={option.name} className="space-y-2">
                <Label>{option.name}</Label>
                <Select
                  value={selectedOptions[option.name]}
                  onValueChange={(value) => handleOptionChange(option.name, value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {option.values.map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}

            {/* Quantity Selector */}
            <div className="space-y-2">
              <Label>Quantity</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWishlistToggle}
                className={user && isInWishlist(product.node.id) ? "bg-red-500/10 border-red-500/20" : ""}
              >
                <Heart className={`w-5 h-5 ${user && isInWishlist(product.node.id) ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>

            {/* Trust Signals */}
            <Card className="bg-muted/50 border-border">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-foreground">Fast Shipping</p>
                      <p className="text-xs text-muted-foreground">4-7 Business Days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-foreground">Secure Payment</p>
                      <p className="text-xs text-muted-foreground">100% Protected</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-foreground">Easy Returns</p>
                      <p className="text-xs text-muted-foreground">30-Day Policy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm text-foreground">Quality Guarantee</p>
                      <p className="text-xs text-muted-foreground">Premium Materials</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
