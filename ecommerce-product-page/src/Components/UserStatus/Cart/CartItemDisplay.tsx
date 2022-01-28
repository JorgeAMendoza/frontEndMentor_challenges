import { CartItem } from '../../../types/cart-types';
import { Trash } from '../../Icons/Trash';

interface CartItemDisplayProps {
  item: CartItem;
}

export const CartItemDisplay = ({ item }: CartItemDisplayProps) => {
  return (
    <div>
      <div>
        <img src={item.productImage} alt={`${item.productName} Thumbnail`} />
      </div>
      <div>
        <p>{item.productName}</p>
        <p>{`$${item.price} x ${item.quantity} ${
          item.price * item.quantity
        }`}</p>
      </div>
      <button aria-label={`Delete ${item.productName} from cart.`}>
        <Trash />
      </button>
    </div>
  );
};
