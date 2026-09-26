// src/components/cart/CartButton.jsx - CRÉER CE FICHIER
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../../context/useCart';

export const CartButton = () => {
  const { cart, setIsOpen } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="relative p-2 hover:bg-gray-100 rounded-full transition"
      aria-label="Voir le panier"
    >
      <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};