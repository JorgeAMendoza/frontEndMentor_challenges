import { CartItem } from '../../../types/cart-types';
import { CartItemDisplay } from './CartItemDisplay';

interface CartListProps {
  cartItems: CartItem[];
}

export const CartList = ({ cartItems }: CartListProps) => {
  return (
    <div className='px-6 pt-6 flex flex-col gap-6'>
      {cartItems.map((item) => (
        <CartItemDisplay key={item.productID} item={item} />
      ))}
      <button className='bg-orange font-bold text-white w-full p-4 mt-4 rounded-lg'>Checkout</button>
    </div>
  );
};
