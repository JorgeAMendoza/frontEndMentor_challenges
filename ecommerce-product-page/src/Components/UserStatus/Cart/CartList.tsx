import { useContext } from 'react';
import { CartItem } from '../../../types/cart-types';
import { CartContext } from '../../../utils/Context/cart-context';
import { CartItemDisplay } from './CartItemDisplay';

interface CartListProps {
  cartItems: CartItem[];
}

export const CartList = ({ cartItems }: CartListProps) => {
  const { cart, setCart } = useContext(CartContext);

  const deleteFromCart = (itemID: string) => {
    const targetItemID = cart.cartItems.findIndex(
      (item) => item.productID === itemID
    );

    const updatedCart = cart.cartItems
      .slice(0, targetItemID)
      .concat(cart.cartItems.slice(targetItemID + 1));

    setCart(
      Object.assign(
        { totalCost: cart.totalCost - cart.cartItems[targetItemID].totalPrice },
        { cartItems: updatedCart }
      )
    );
  };

  return (
    <div className="px-6 pt-6 flex flex-col gap-6">
      {cartItems.map((item) => (
        <CartItemDisplay
          key={item.productID}
          item={item}
          deleteItem={() => deleteFromCart(item.productID)}
        />
      ))}
      <button className="bg-orange font-bold text-white w-full p-4 mt-4 rounded-lg">
        Checkout
      </button>
    </div>
  );
};
