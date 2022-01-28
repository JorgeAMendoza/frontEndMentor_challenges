import { CartItem } from '../../../types/cart-types';
import { CartItemDisplay } from './CartItemDisplay';

interface CartListProps {
  cartItems: CartItem[];
}

export const CartList = ({ cartItems }: CartListProps) => {
  return (
    <div>
      {cartItems.map((item, index) => (
        <CartItemDisplay key={index} item={item} />
      ))}
    </div>
  );
};
