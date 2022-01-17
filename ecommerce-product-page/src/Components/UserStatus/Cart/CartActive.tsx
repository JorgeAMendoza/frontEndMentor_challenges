import thumbnailOne from '../../../assets/images/image-product-1-thumbnail.jpg';
import { Trash } from '../../Icons/Trash';
export const CartActive = () => {
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
        <div>
          <Trash />
        </div>
        <button>Checkout</button>
      </div>
    </>
  );
};
