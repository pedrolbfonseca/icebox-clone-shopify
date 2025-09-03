const categories = [
  {
    name: "ANÉIS",
    description: "Anéis exclusivos em ouro e diamantes",
    icon: "💍"
  },
  {
    name: "CORRENTES",
    description: "Correntes premium em ouro 18k",
    icon: "🔗"
  },
  {
    name: "RELÓGIOS",
    description: "Relógios de luxo suíços",
    icon: "⌚"
  },
  {
    name: "BRINCOS",
    description: "Brincos sofisticados com pedras preciosas",
    icon: "✨"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            NOSSAS <span className="text-primary">CATEGORIAS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção completa de joias de luxo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-yellow text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;