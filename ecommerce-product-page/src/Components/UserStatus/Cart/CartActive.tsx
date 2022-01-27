import { useContext } from 'react';
import thumbnailOne from '../../../assets/images/image-product-1-thumbnail.jpg';
import { Trash } from '../../Icons/Trash';
import { CartContext } from '../../../utils/Context/cart-context';
import { CartEmpty } from './CartEmpty';
export const CartActive = () => {
  const { cart } = useContext(CartContext);

  const renderCart = cart.cartItems.length ? true : false;
  return (
    <>
      {/* 

      <div>
        <div>
          <img src={thumbnailOne} alt="Product Thumbnail" />
          <p>Fall Limited Edition Sneakers</p>
        </div>
        <p>{}</p>
        <div>
          <Trash />
        </div>
        <button>Checkout</button>
      </div> */}

      {renderCart ? <p>Items in cart</p> : <CartEmpty />}
    </>
  );
};
