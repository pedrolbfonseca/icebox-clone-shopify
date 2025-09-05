import { useState } from "react";
import { ShoppingBag, Plus, Minus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, updateQuantity, removeFromCart, getTotalItems, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    
    toast.success("Redirecting to checkout...");
    setIsOpen(false);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared!");
  };

  const formatPrice = (price: number) => {
    return `CAD$ ${price.toFixed(2)}`;
  };

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ShoppingBag className="h-5 w-5" />
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full text-xs h-5 w-5 flex items-center justify-center">
            {getTotalItems()}
          </span>
        )}
      </Button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <Card className="absolute right-0 top-full mt-2 w-80 z-50 bg-background border border-border shadow-lg">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Your Cart</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {items.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.selectedSize || 'default'}`} className="flex items-center space-x-3 p-2 border border-border rounded-lg">
                        <div className="w-12 h-12 bg-muted rounded flex items-center justify-center flex-shrink-0">
                          {item.image !== "placeholder" ? (
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover rounded"
                            />
                          ) : (
                            <span className="text-xs font-bold text-primary/50">
                              {item.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.price}
                            {item.selectedSize && ` • Size ${item.selectedSize}`}
                          </p>
                        </div>

                        <div className="flex items-center space-x-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-destructive hover:text-destructive"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-foreground">Total:</span>
                      <span className="font-bold text-lg text-foreground">
                        {formatPrice(getTotalPrice())}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <Button 
                        onClick={handleCheckout}
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        Checkout
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleClearCart}
                        className="w-full"
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default CartDropdown;