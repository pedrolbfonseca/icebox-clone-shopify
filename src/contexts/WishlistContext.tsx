import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';

interface WishlistContextType {
  wishlistItems: string[];
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  isInWishlist: (productId: string) => boolean;
  loading: boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchWishlist();
    } else {
      setWishlistItems([]);
    }
  }, [user]);

  const fetchWishlist = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('wishlist')
        .select('product_id')
        .eq('user_id', user.id);

      if (error) throw error;

      setWishlistItems(data?.map(item => item.product_id) || []);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (productId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('wishlist')
        .insert({ user_id: user.id, product_id: productId });

      if (error) throw error;

      setWishlistItems(prev => [...prev, productId]);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const removeFromWishlist = async (productId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('wishlist')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) throw error;

      setWishlistItems(prev => prev.filter(id => id !== productId));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.includes(productId);
  };

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    loading
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};