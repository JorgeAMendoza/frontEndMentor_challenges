import { Price } from './Price';
import { Quantity } from './Quantity';
import { Cart } from '../../Icons/Cart';

export const ProductInfo = () => {
  return (
    <div>
      <span>Sneaker Company</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <Price />
      <Quantity />
      <button>
        <Cart />
        Add to Cart
      </button>
    </div>
  );
};
