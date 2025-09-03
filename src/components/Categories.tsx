import { Link } from "react-router-dom";

const categories = [
  {
    name: "BRACELETS",
    description: "Stylish bracelets and statement pieces",
    icon: "✨"
  },
  {
    name: "RINGS",
    description: "Exclusive gold and diamond rings",
    icon: "💍"
  },
  {
    name: "CHAINS",
    description: "Premium 18k gold chains",
    icon: "🔗"
  },
  {
    name: "WATCHES",
    description: "Swiss luxury timepieces",
    icon: "⌚"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            OUR <span className="text-primary">CATEGORIES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our complete collection of luxury jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={`/category/${category.name.toLowerCase()}`}
              className="group cursor-pointer p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-blue text-center"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;