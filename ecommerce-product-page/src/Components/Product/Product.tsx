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
  type: 'INCREMENT' | 'DECREMENT' | 'RESET';
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
    case 'RESET':
      return { quantity: 0 };
    default:
      return state;
  }
};

export const Product = ({ productInfo }: ProductProps) => {
  const [state, dispatch] = useReducer(reducer, { quantity: 0 });
  const { cart, setCart } = useContext(CartContext);

  const insertItemToCart = () => {
    const existingItemIndex = cart.cartItems.findIndex(
      (item) => item.productID === productInfo.productID
    );

    const baseCartItem = {
      productID: productInfo.productID,
      productName: productInfo.productName,
      productImage: productInfo.thumbnailImages[0],
      price: productInfo.price.currentPrice,
    };

    if (existingItemIndex !== -1 && cart.cartItems.length > 0) {
      const newQuanity =
        cart.cartItems[existingItemIndex].quantity + state.quantity;
      const newTotalPrice =
        cart.cartItems[existingItemIndex].totalPrice +
        state.quantity * productInfo.price.currentPrice;

      const updatedCartItem: CartItem = Object.assign(
        baseCartItem,
        { quantity: newQuanity },
        { totalPrice: newTotalPrice }
      );

      const newCartItems = cart.cartItems
        .slice(0, existingItemIndex)
        .concat(updatedCartItem, cart.cartItems.slice(existingItemIndex + 1));

      const newTotalCost = cart.cartItems.reduce((sum, item) => {
        return (sum += item.totalPrice);
      }, 0);

      setCart(
        Object.assign({ totalCost: newTotalCost }, { cartItems: newCartItems })
      );
    } else {
      const newCartItem: CartItem = Object.assign(
        baseCartItem,
        { quantity: state.quantity },
        { totalPrice: productInfo.price.currentPrice * state.quantity }
      );

      setCart(
        Object.assign(
          {},
          {
            totalCost:
              cart.totalCost + newCartItem.price * newCartItem.quantity,
          },
          { cartItems: cart.cartItems.concat(newCartItem) }
        )
      );
    }

    dispatch({ type: 'RESET' });
  };
  return (
    <section className="mb-10">
      <ImageCarousel
        heroImages={productInfo.heroImages}
        thumbnailImages={productInfo.thumbnailImages}
      />
      <div className="container flex flex-col gap-4 pt-5">
        <span className="font-bold text-orange tracking-widest uppercase text-xs">
          {productInfo.brandName}
        </span>
        <h2 className="font-bold text-3xl">{productInfo.productName}</h2>
        <p className="text-light-gray leading-6">
          {productInfo.productDescription}
        </p>

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
        <button
          className="bg-orange text-white flex justify-center gap-4 font-bold px-10 py-5 rounded-lg btn-add-to-cart"
          onClick={() => insertItemToCart()}
          disabled={state.quantity > 0 ? false : true}
        >
          <Cart color="#fff" />
          Add to cart
        </button>
      </div>
    </section>
  );
};
