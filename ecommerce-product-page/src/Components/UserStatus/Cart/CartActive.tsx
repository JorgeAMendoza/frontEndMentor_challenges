import { useContext } from 'react';
import { CartContext } from '../../../utils/Context/cart-context';
import { CartEmpty } from './CartEmpty';
import { CartList } from './CartList';
export const CartActive = () => {
  const { cart } = useContext(CartContext);

  const renderCart = cart.cartItems.length ? true : false;
  return (
    <>{renderCart ? <CartList cartItems={cart.cartItems} /> : <CartEmpty />}</>
  );
};
