import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Anel de Ouro 18k",
    price: "R$ 2.500",
    originalPrice: "R$ 3.200",
    image: "placeholder",
    category: "Anéis"
  },
  {
    id: 2,
    name: "Corrente Cubana Premium",
    price: "R$ 4.800",
    originalPrice: null,
    image: "placeholder", 
    category: "Correntes"
  },
  {
    id: 3,
    name: "Relógio Diamante",
    price: "R$ 12.000",
    originalPrice: "R$ 15.000",
    image: "placeholder",
    category: "Relógios"
  },
  {
    id: 4,
    name: "Brincos de Esmeralda",
    price: "R$ 6.500",
    originalPrice: null,
    image: "placeholder",
    category: "Brincos"
  },
  {
    id: 5,
    name: "Pulseira Tennis",
    price: "R$ 8.200",
    originalPrice: "R$ 9.800",
    image: "placeholder",
    category: "Pulseiras"
  },
  {
    id: 6,
    name: "Colar de Pérolas",
    price: "R$ 3.800",
    originalPrice: null,
    image: "placeholder",
    category: "Colares"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            PRODUTOS EM <span className="text-primary">DESTAQUE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção exclusiva de joias premium, 
            cuidadosamente curadas para você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-muted/10"></div>
                  <span className="text-4xl font-bold text-primary/50">
                    {product.category.charAt(0)}
                  </span>
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
                    PROMOÇÃO
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;