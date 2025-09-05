import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BuyButton = () => {
  const handleBuyNow = () => {
    toast.success("Redirecting to shop...");
    // Aqui você pode adicionar a lógica para redirecionar para a loja ou abrir um modal de compra
    window.open('https://hypecompany.myshopify.com/', '_blank');
  };

  return (
    <Button 
      onClick={handleBuyNow}
      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 shadow-lg"
    >
      <ShoppingBag className="h-4 w-4 mr-2" />
      Buy Now
    </Button>
  );
};

export default BuyButton;