import chainSizeGuideImage from "@/assets/chain-size-guide.jpg";

const ChainSizeGuide = () => {
  const chainSizes = [
    {
      length: "16\"",
      description: "Choker Style",
      details: "Sits at the base of the neck, perfect for a classic choker look"
    },
    {
      length: "18\"",
      description: "Princess Length",
      details: "Most popular length, sits at the collarbone for everyday wear"
    },
    {
      length: "20\"",
      description: "Matinee Length", 
      details: "Falls below the collarbone, great for layering or standalone"
    },
    {
      length: "22\"",
      description: "Opera Length",
      details: "Longer style that sits at the upper chest, elegant and versatile"
    }
  ];

  return (
    <section className="py-16 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chain Length Guide
          </h2>
          <p className="text-muted-foreground text-lg">
            Find your perfect fit with our visual sizing guide
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mannequin Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={chainSizeGuideImage}
                alt="Chain length sizing guide on mannequin"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Size Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Choose Your Perfect Length
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Each chain length creates a different look and feel. Use this guide to 
                visualize how each size will sit on your neck and choose the perfect 
                length for your style.
              </p>
            </div>
            
            <div className="space-y-4">
              {chainSizes.map((size, index) => (
                <div 
                  key={size.length}
                  className="p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {size.length}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {size.description}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {size.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground">
                <strong>Pro Tip:</strong> If you're between sizes, we recommend going with 
                the longer length for more versatility and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChainSizeGuide;