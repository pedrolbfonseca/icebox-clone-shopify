import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
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
    id: 13,
    name: "Solid Silver Ice Out Cuban Link Chain",
    price: "From CAD$ 165.00",
    originalPrice: null,
    image: "/lovable-uploads/66a48e10-05ee-408d-aec4-877f2c471f1d.png",
    images: [
      "/lovable-uploads/66a48e10-05ee-408d-aec4-877f2c471f1d.png",
      "/lovable-uploads/390621c5-3371-4bde-96e1-a473c29eefa5.png",
      "/lovable-uploads/e03c11d5-67a6-4ac0-845c-3ac4386d1d5d.png",
      "/lovable-uploads/04cf6ff5-c2d7-4c9b-be00-a10e45200d6f.png",
      "/lovable-uploads/09ee7ef8-2221-4d72-85ec-438569a1f543.png",
      "/lovable-uploads/762901f9-e813-492c-a058-5d111ebfc67f.png"
    ],
    category: "Chains",
    description: "Premium solid silver ice out Cuban link chain with full crystal setting. Features precision-crafted links with maximum brilliance and luxury finish. Available in multiple lengths for perfect fit. This statement piece combines luxurious design with exceptional craftsmanship for the ultimate in sophisticated jewelry.",
    features: ["Solid Silver Construction", "Full Ice Out Design", "Premium Crystal Setting", "Multiple Lengths Available", "Luxury Gift Box", "Tarnish Resistant"],
    rating: 4.9,
    reviews: 142,
    inStock: true,
    customizable: true,
    pricingOptions: [
      { size: "16 inch", price: "CAD$ 165.00", value: 165.00 },
      { size: "18 inch", price: "CAD$ 200.00", value: 200.00 },
      { size: "20 inch", price: "CAD$ 235.00", value: 235.00 },
      { size: "22 inch", price: "CAD$ 270.00", value: 270.00 }
    ],
    specifications: {
      "Material": "Solid Silver with Crystal Setting",
      "Available Lengths": "16, 18, 20, 22 inches",
      "Width": "12mm",
      "Clasp": "Secure Lobster Claw",
      "Processing": "3-5 Business Days",
      "Shipping": "Fast Delivery with Tracking"
    }
  },
  {
    id: 12,
    name: "Solid Silver Ice Out Cuban Link Bracelet",
    price: "From CAD$ 97.30",
    originalPrice: null,
    image: "/lovable-uploads/e09b9a1b-639f-47b7-b9fa-6e64a5bf82a9.png",
    images: [
      "/lovable-uploads/e09b9a1b-639f-47b7-b9fa-6e64a5bf82a9.png",
      "/lovable-uploads/6ff1b99b-0309-470c-856d-a475e0f4c084.png",
      "/lovable-uploads/ff31b6a2-6ced-49f2-98a0-727f38feafcb.png",
      "/lovable-uploads/193d97c9-6b10-4005-9502-0aa61a4abd68.png"
    ],
    category: "Bracelets",
    description: "Premium solid silver ice out Cuban link bracelet with full crystal setting. Features precision-crafted links with maximum brilliance and luxury finish. Available in multiple sizes for perfect fit. This statement piece combines luxurious design with exceptional craftsmanship for the ultimate in sophisticated jewelry.",
    features: ["Solid Silver Construction", "Full Ice Out Design", "Premium Crystal Setting", "Multiple Sizes Available", "Luxury Gift Box", "Tarnish Resistant"],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    customizable: true,
    pricingOptions: [
      { size: "7 inch", price: "CAD$ 97.30", value: 97.30 },
      { size: "8 inch", price: "CAD$ 104.00", value: 104.00 }
    ],
    specifications: {
      "Material": "Solid Silver with Crystal Setting",
      "Available Sizes": "7 inch, 8 inch",
      "Width": "10mm",
      "Clasp": "Secure Lobster Claw",
      "Processing": "3-5 Business Days",
      "Shipping": "Fast Delivery with Tracking"
    }
  },
  {
    id: 11,
    name: "Custom Letter and Numbers Pendant",
    price: "From CAD$ 75.00",
    originalPrice: null,
    image: "/lovable-uploads/9828ea2d-c1fe-4cd4-acc1-dcb7a8363f32.png",
    images: [
      "/lovable-uploads/9828ea2d-c1fe-4cd4-acc1-dcb7a8363f32.png",
      "/lovable-uploads/f021de8d-3d13-4394-a972-d6357eb03ca0.png"
    ],
    category: "Pendants",
    description: "Personalize your style with our custom letter and number pendant. Choose from 1 to 6 letters or numbers to create your unique piece. Perfect for names, initials, or meaningful dates. Each pendant is carefully crafted with premium materials and attention to detail.",
    features: ["Custom Personalization", "14K Gold Plated", "Premium Quality", "Fast Processing", "Gift Box Included"],
    rating: 4.9,
    reviews: 234,
    inStock: true,
    customizable: true,
    pricingOptions: [
      { letters: 1, price: "CAD$ 75.00", value: 75 },
      { letters: 2, price: "CAD$ 150.00", value: 150 },
      { letters: 3, price: "CAD$ 180.00", value: 180 },
      { letters: 4, price: "CAD$ 220.00", value: 220 },
      { letters: 5, price: "CAD$ 240.00", value: 240 },
      { letters: 6, price: "CAD$ 260.00", value: 260 }
    ],
    specifications: {
      "Material": "14K Gold Plated Stainless Steel",
      "Personalization": "1-6 Letters/Numbers",
      "Chain": "Included (18 inches)",
      "Processing": "3-5 Business Days",
      "Shipping": "Fast Delivery"
    }
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
    description: "Luxury Chrome Hearts inspired cross link bracelet featuring intricate four-clover motifs with premium micro-paved crystal setting. Available in multiple stunning colorways including classic silver, vibrant purple, and multicolor designs. Crafted with precision engineering for exceptional brilliance and lasting elegance. This statement piece combines gothic aesthetics with refined craftsmanship, making it perfect for both casual and elevated looks.",
    features: ["Premium Crystal Setting", "Multiple Color Options", "Adjustable Size 6-8 inches", "Luxury Gift Box", "Tarnish Resistant", "Lead & Nickel Free"],
    rating: 4.8,
    reviews: 142,
    sizes: ["One Size (Adjustable)"],
    specifications: {
      "Material": "Premium Stainless Steel with Crystal Setting",
      "Stone Quality": "High-Grade Crystal Pavé",
      "Length": "6-8 inches (Adjustable Chain)",
      "Width": "10mm",
      "Clasp": "Secure Lobster Claw with Extension Chain",
      "Shipping": "5-10 Business Days - Secure Packaging",
      "Care": "Clean with Soft Cloth, Store in Jewelry Box"
    }
  }
];

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("7");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedPricingOption, setSelectedPricingOption] = useState(0);
  
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
    
    let productToAdd: any = { ...product };
    
    // Handle custom pendant pricing
    if (product.customizable && (product as any).pricingOptions) {
      const selectedOption = (product as any).pricingOptions[selectedPricingOption];
      productToAdd.price = selectedOption.price;
      productToAdd.selectedLetters = selectedOption.letters;
    }
    
    // Handle ring sizes
    const selectedSizeForCart = product.category === "Rings" ? selectedSize : undefined;
    
    addToCart(productToAdd, quantity, selectedSizeForCart);
    
    toast.success("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
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
      isProduct10: product?.id === 10,
      isProduct11: product?.id === 11,
      isProduct13: product?.id === 13,
      elementExists: !!document.getElementById('product-component-1756914985987') || !!document.getElementById('product-component-1756918892033') || !!document.getElementById('product-component-1757042940439') || !!document.getElementById('product-component-1757045599932')
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
    } else if (product?.id === 10) {
      // Wait for element to be rendered
      setTimeout(() => {
        const element = document.getElementById('product-component-1756918892033');
        console.log('Widget element found for product 10:', !!element);
        
        if (element) {
          loadShopifyWidget10();
        }
      }, 100);
    } else if (product?.id === 11) {
      // Wait for element to be rendered
      setTimeout(() => {
        const element = document.getElementById('product-component-1757042940439');
        console.log('Widget element found for product 11:', !!element);
        
        if (element) {
          loadShopifyWidget11();
        }
      }, 100);
    } else if (product?.id === 13) {
      // Wait for element to be rendered
      setTimeout(() => {
        const element = document.getElementById('product-component-1757045599932');
        console.log('Widget element found for product 13:', !!element);
        
        if (element) {
          loadShopifyWidget13();
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
                  'margin': '0',
                  'padding': '0',
                  'width': '100%',
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin': '0',
                    'padding': '0',
                    'width': '100%'
                  }
                },
                button: {
                  'font-family': 'Arial, sans-serif',
                  color: '#000000',
                  'font-weight': 'bold',
                  'margin': '0',
                  'padding': '8px 32px',
                  'width': '100%',
                  'text-align': 'center',
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

  const loadShopifyWidget10 = () => {
    console.log('Loading Shopify widget for product 10...');
    
    const script = document.createElement('script');
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.async = true;
    script.onload = () => {
      console.log('Shopify script loaded for product 10');
      initShopifyWidget10();
    };
    document.head.appendChild(script);
  };

  const initShopifyWidget10 = () => {
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      console.log('Initializing Shopify widget for product 10...');
      
      const client = window.ShopifyBuy.buildClient({
        domain: '2jxw06-70.myshopify.com',
        storefrontAccessToken: 'e74939e8f38608461f2f49b8bc31f90f',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        console.log('Creating Shopify component for product 10...');
        
        ui.createComponent('product', {
          id: '9844250050846',
          node: document.getElementById('product-component-1756918892033'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                button: {
                  "font-family": "Arial, sans-serif",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#65b3cc"
                  },
                  "background-color": "#70c7e3",
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                }
              },
              contents: {
                img: false,
                title: false,
                price: false
              },
              text: {
                button: "Add to cart"
              }
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                button: {
                  "font-family": "Arial, sans-serif",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#65b3cc"
                  },
                  "background-color": "#70c7e3",
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                }
              },
              text: {
                button: "Add to cart"
              }
            },
            option: {},
            cart: {
              styles: {
                button: {
                  "font-family": "Arial, sans-serif",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#65b3cc"
                  },
                  "background-color": "#70c7e3",
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                }
              },
              text: {
                total: "Subtotal",
                button: "Checkout"
              },
              popup: false
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Arial, sans-serif",
                  "background-color": "#70c7e3",
                  ":hover": {
                    "background-color": "#65b3cc"
                  },
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                },
                count: {
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000"
                  }
                },
                iconPath: {
                  "fill": "#000000"
                }
              }
            }
          }
        });
      });
    }
  };

  const loadShopifyWidget11 = () => {
    console.log('Loading Shopify widget for product 11...');
    
    const script = document.createElement('script');
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.async = true;
    script.onload = () => {
      console.log('Shopify script loaded for product 11');
      initShopifyWidget11();
    };
    document.head.appendChild(script);
  };

  const initShopifyWidget11 = () => {
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      console.log('Initializing Shopify widget for product 11...');
      
      const client = window.ShopifyBuy.buildClient({
        domain: '2jxw06-70.myshopify.com',
        storefrontAccessToken: 'e74939e8f38608461f2f49b8bc31f90f',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        console.log('Creating Shopify component for product 11...');
        
        ui.createComponent('product', {
          id: '9845638856990',
          node: document.getElementById('product-component-1757042940439'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                button: {
                  "font-family": "Arial, sans-serif",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#65b3cc"
                  },
                  "background-color": "#70c7e3",
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                }
              },
              contents: {
                img: false,
                title: false,
                price: false
              },
              text: {
                button: "Add to cart"
              }
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                button: {
                  "font-family": "Arial, sans-serif",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#65b3cc"
                  },
                  "background-color": "#70c7e3",
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                }
              },
              text: {
                button: "Add to cart"
              }
            },
            option: {},
            cart: {
              styles: {
                button: {
                  "font-family": "Arial, sans-serif",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#65b3cc"
                  },
                  "background-color": "#70c7e3",
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                }
              },
              text: {
                total: "Subtotal",
                button: "Checkout"
              },
              popup: false
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Arial, sans-serif",
                  "background-color": "#70c7e3",
                  ":hover": {
                    "background-color": "#65b3cc"
                  },
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                },
                count: {
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000"
                  }
                },
                iconPath: {
                  "fill": "#000000"
                }
              }
            }
          }
        });
      });
    }
  };

  const loadShopifyWidget13 = () => {
    console.log('Loading Shopify widget for product 13...');
    
    const script = document.createElement('script');
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.async = true;
    script.onload = () => {
      console.log('Shopify script loaded for product 13');
      initShopifyWidget13();
    };
    document.head.appendChild(script);
  };

  const initShopifyWidget13 = () => {
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      console.log('Initializing Shopify widget for product 13...');
      
      const client = window.ShopifyBuy.buildClient({
        domain: '2jxw06-70.myshopify.com',
        storefrontAccessToken: 'e74939e8f38608461f2f49b8bc31f90f',
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        console.log('Creating Shopify component for product 13...');
        
        ui.createComponent('product', {
          id: '9845661892894',
          node: document.getElementById('product-component-1757045599932'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                button: {
                  "font-family": "Arial, sans-serif",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#65b3cc"
                  },
                  "background-color": "#70c7e3",
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                }
              },
              contents: {
                img: false,
                title: false,
                price: false
              },
              text: {
                button: "Add to cart"
              }
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                button: {
                  "font-family": "Arial, sans-serif",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#65b3cc"
                  },
                  "background-color": "#70c7e3",
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                }
              },
              text: {
                button: "Add to cart"
              }
            },
            option: {},
            cart: {
              styles: {
                button: {
                  "font-family": "Arial, sans-serif",
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000",
                    "background-color": "#65b3cc"
                  },
                  "background-color": "#70c7e3",
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                }
              },
              text: {
                total: "Subtotal",
                button: "Checkout"
              },
              popup: false
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Arial, sans-serif",
                  "background-color": "#70c7e3",
                  ":hover": {
                    "background-color": "#65b3cc"
                  },
                  ":focus": {
                    "background-color": "#65b3cc"
                  }
                },
                count: {
                  "color": "#000000",
                  ":hover": {
                    "color": "#000000"
                  }
                },
                iconPath: {
                  "fill": "#000000"
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
              {(product.id === 9 || product.id === 10 || product.id === 11 || product.id === 12 || product.id === 13) && product.images ? (
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
              <div className={`${(product.id === 9 || product.id === 10 || product.id === 11 || product.id === 12 || product.id === 13) ? 'hidden fallback-placeholder' : 'flex fallback-placeholder'} w-full h-full items-center justify-center`}>
                <span className="text-8xl font-bold text-primary/30">
                  {product.category.charAt(0)}
                </span>
              </div>
            </Card>
            
            {/* Thumbnail Images */}
            {(product.id === 9 || product.id === 10 || product.id === 11 || product.id === 12 || product.id === 13) && product.images && (
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
                <span className="text-3xl font-bold text-foreground">
                  {product.customizable && (product as any).pricingOptions 
                    ? (product as any).pricingOptions[selectedPricingOption].price 
                    : product.price}
                </span>
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

            {/* Custom Pendant Pricing Options */}
            {product.customizable && (product as any).pricingOptions && (
              <div>
                <h3 className="font-semibold text-foreground mb-3">
                  {product.id === 11 ? 'Select Number of Letters' : 'Select Size'}
                </h3>
                <Select 
                  value={selectedPricingOption.toString()} 
                  onValueChange={(value) => setSelectedPricingOption(parseInt(value))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={product.id === 11 ? 'Choose number of letters' : 'Choose size'} />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border z-50">
                    {(product as any).pricingOptions.map((option: any, index: number) => (
                      <SelectItem key={index} value={index.toString()}>
                        <div className="flex justify-between items-center w-full">
                          <span className="font-medium">
                            {product.id === 11 ? `${option.letters} Letter${option.letters > 1 ? 's' : ''}` : option.size}
                          </span>
                          <span className="text-primary font-bold ml-4">
                            {option.price}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

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

            {/* Quantity and Add to Cart for Shopify Products */}
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
                <div className="w-full">
                  <div id='product-component-1756914985987' className="w-full"></div>
                </div>
              </div>
            ) : product.id === 10 ? (
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
                <div className="w-full">
                  <div id='product-component-1756918892033' className="w-full"></div>
                </div>
              </div>
            ) : product.id === 11 ? (
              <div className="space-y-4">
                <div className="w-full">
                  <div id='product-component-1757042940439' className="w-full"></div>
                </div>
              </div>
            ) : product.id === 13 ? (
              <div className="space-y-4">
                <div className="w-full">
                  <div id='product-component-1757045599932' className="w-full"></div>
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

            {/* Action Buttons - Only for non-Shopify products */}
            {product.id !== 9 && product.id !== 10 && product.id !== 11 && product.id !== 13 && (
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

            {/* Wishlist and Share for Shopify Products */}
            {(product.id === 9 || product.id === 10 || product.id === 11 || product.id === 13) && (
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