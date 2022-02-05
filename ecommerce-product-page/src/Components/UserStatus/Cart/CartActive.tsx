import { useContext } from 'react';
import { CartContext } from '../../../utils/Context/cart-context';
import { CartEmpty } from './CartEmpty';
import { CartList } from './CartList';
export const CartActive = () => {
  const { cart } = useContext(CartContext);

  const renderCart = cart.cartItems.length ? true : false;
  return (
    <div className="absolute top-20 left-0 z-10 w-screen px-2 md:w-[25rem] md:top-16 md:-left-[19rem] xl:border-2">
      <div className="bg-white rounded-md py-4 min-h-[65vw] md:min-h-[15rem]">
        <p className="font-bold px-5 pb-5 border-b-2">Cart</p>
        <div className="">
          {renderCart ? (
            <div>
              <CartList cartItems={cart.cartItems} />
            </div>
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
    </div>
  );
};
