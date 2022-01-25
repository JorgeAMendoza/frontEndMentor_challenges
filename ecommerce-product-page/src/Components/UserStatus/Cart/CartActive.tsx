import { useContext } from 'react';
import thumbnailOne from '../../../assets/images/image-product-1-thumbnail.jpg';
import { Trash } from '../../Icons/Trash';
import { CartContext } from '../../../utils/Context/cart-context';
import { CartContextType } from '../../../types/cart-types';
export const CartActive = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      <div>
        <p>Cart</p>
        <p>Cart is empty</p>
      </div>

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
      </div>
    </>
  );
};
