import { CartItem } from '../../../types/cart-types';
import { CartItemDisplay } from './CartItemDisplay';

interface CartListProps {
  cartItems: CartItem[];
}

export const CartList = ({ cartItems }: CartListProps) => {
  return (
    <div>
      {cartItems.map((item) => (
        <CartItemDisplay key={item.productID} item={item} />
      ))}
    </div>
  );
};
