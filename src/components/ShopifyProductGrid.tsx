import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Star, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "@/stores/cartStore";
import { useWishlist } from "@/hooks/useWishlist";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { ShopifyProduct, storefrontApiRequest, STOREFRONT_QUERY } from "@/lib/shopify";

const ShopifyProductGrid = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_QUERY, { first: 20 });
        if (data?.data?.products?.edges) {
          setProducts(data.data.products.edges);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const firstVariant = product.node.variants.edges[0]?.node;
    if (!firstVariant) {
      toast.error("Product variant not available");
      return;
    }

    const cartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions
    };

    addItem(cartItem);
    toast.success("Added to cart!", {
      description: `${product.node.title} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = async (product: ShopifyProduct, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
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

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              FEATURED <span className="text-primary">PRODUCTS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No products found. Create products to get started!
            </p>
          </div>
        </div>
      </section>
    );
  }

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

        <div className="flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 snap-x snap-mandatory md:snap-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 scrollbar-hide">
          {products.map((product) => (
            <Link 
              key={product.node.id}
              to={`/product/${product.node.handle}`}
              className="flex-shrink-0 w-[280px] md:w-auto snap-start"
            >
              <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <div className="aspect-square bg-muted flex items-center justify-center relative">
                    {product.node.images.edges[0]?.node ? (
                      <img 
                        src={product.node.images.edges[0].node.url} 
                        alt={product.node.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary/50">
                          {product.node.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  
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
                        className={user && isInWishlist(product.node.id) ? "bg-red-500 hover:bg-red-600" : ""}
                      >
                        <Heart className={`h-4 w-4 ${user && isInWishlist(product.node.id) ? 'fill-white text-white' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {product.node.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-foreground">
                      {product.node.priceRange.minVariantPrice.currencyCode} ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)}
                    </span>
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

export default ShopifyProductGrid;
