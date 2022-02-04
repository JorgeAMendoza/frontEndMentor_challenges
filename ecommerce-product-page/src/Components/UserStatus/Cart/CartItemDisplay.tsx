import { CartItem } from '../../../types/cart-types';
import { Trash } from '../../Icons/Trash';

interface CartItemDisplayProps {
  item: CartItem;
  deleteItem: () => void;
}

export const CartItemDisplay = ({ item, deleteItem }: CartItemDisplayProps) => {
  return (
    <div className="flex gap-3">
      <div className="w-[50px] rounded-md">
        <img
          className="rounded-md"
          src={item.productImage}
          alt={`${item.productName} Thumbnail`}
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-light-gray">{item.productName}</p>
        <p className="text-light-gray">
          {`$${item.price}.00 x ${item.quantity}`}
          <span className="font-bold text-black">
            {' '}
            {item.price * item.quantity}.00
          </span>
        </p>
      </div>
      <button
        onClick={deleteItem}
        className="ml-auto"
        aria-label={`Delete ${item.productName} from cart.`}
      >
        <Trash />
      </button>
    </div>
  );
};
