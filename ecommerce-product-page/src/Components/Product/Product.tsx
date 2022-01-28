import { useReducer, useContext } from 'react';
import { ImageCarousel } from './ImageCarousel/ImageCarousel';
import { Price } from './ProductInfo/Price';
import { Quantity } from './ProductInfo/Quantity';
import { Cart } from '../Icons/Cart';
import { fetchedProductData } from '../../types/fetched-data';
import { CartContext } from '../../utils/Context/cart-context';
import { CartItem } from '../../types/cart-types';

interface ProductState {
  quantity: number;
}

interface QuantiyActions {
  type: 'INCREMENT' | 'DECREMENT';
}

interface ProductProps {
  productInfo: fetchedProductData;
}

const reducer = (state: ProductState, action: QuantiyActions) => {
  switch (action.type) {
    case 'INCREMENT':
      return { quantity: state.quantity + 1 };
    case 'DECREMENT':
      if (state.quantity === 0) return state;
      else return { quantity: state.quantity - 1 };
    default:
      return state;
  }
};

export const Product = ({ productInfo }: ProductProps) => {
  const [state, dispatch] = useReducer(reducer, { quantity: 0 });
  const { cart, setCart } = useContext(CartContext);

  const insertItemToCart = () => {
    if (state.quantity === 0) {
      console.log('Not inserting into cart');
      return;
    }
    console.log('Inserting new item into the cart');
    const newCartItem: CartItem = {
      productName: productInfo.productName,
      productImage: productInfo.thumbnailImages[0],
      price: productInfo.price.currentPrice,
      quantity: state.quantity,
      totalPrice: Math.floor(state.quantity * productInfo.price.currentPrice),
    };

    setCart(
      Object.assign(
        {},
        {
          totalCost: cart.totalCost + newCartItem.price * newCartItem.quantity,
        },
        { cartItems: cart.cartItems.concat(newCartItem) }
      )
    );
  };
  return (
    <section>
      <ImageCarousel
        heroImages={productInfo.heroImages}
        thumbnailImages={productInfo.thumbnailImages}
      />
      <div>
        <span>{productInfo.brandName}</span>
        <h2>{productInfo.productName}</h2>
        <p>{productInfo.productDescription}</p>

        <Price
          price={productInfo.price.currentPrice}
          discountPercent={productInfo.price.currentDiscount}
          msrp={productInfo.price.suggestedPrice}
        />
        <Quantity
          numOfProduct={state.quantity}
          increaseNumOfProduct={() => dispatch({ type: 'INCREMENT' })}
          decreaseNumOfProduct={() => dispatch({ type: 'DECREMENT' })}
        />
        <button onClick={() => insertItemToCart()}>
          <Cart />
          Add to Cart
        </button>
      </div>
    </section>
  );
};
