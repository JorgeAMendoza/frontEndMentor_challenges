import { ImageCarousel } from './ImageCarousel/ImageCarousel';
import { Price } from './ProductInfo/Price';
import { Quantity } from './ProductInfo/Quantity';
import { Cart } from '../Icons/Cart';

export const Product = () => {
  return (
    <section>
      <ImageCarousel />
      <div>
        <span>Sneaker Company</span>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <Price />
        <Quantity />
        <button>
          <Cart />
          Add to Cart
        </button>
      </div>
    </section>
  );
};
