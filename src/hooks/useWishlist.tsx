import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export const useWishlist = () => {
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
    if (!user) {
      toast.error('Faça login para salvar na lista de desejos');
      return;
    }

    try {
      const { error } = await supabase
        .from('wishlist')
        .insert([{ user_id: user.id, product_id: productId }]);

      if (error) throw error;

      setWishlistItems(prev => [...prev, productId]);
      toast.success('Adicionado à lista de desejos!');
    } catch (error: any) {
      if (error.code === '23505') {
        toast.error('Item já está na lista de desejos');
      } else {
        toast.error('Erro ao adicionar à lista de desejos');
      }
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
      toast.success('Removido da lista de desejos!');
    } catch (error) {
      toast.error('Erro ao remover da lista de desejos');
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.includes(productId);
  };

  return {
    wishlistItems,
    loading,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };
};