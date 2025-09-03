import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './contexts/CartContext.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { WishlistProvider } from './contexts/WishlistContext.tsx'

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </AuthProvider>
);
