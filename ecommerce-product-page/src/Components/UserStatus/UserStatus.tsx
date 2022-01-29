import { Cart } from '../Icons/Cart';
import { AccountMenu } from './AccountMenu';
import { CartActive } from './Cart/CartActive';

export const UserStatus = () => {
  return (
    <div className="flex items-center gap-5 ml-auto">
      <Cart />
      <CartActive />
      <AccountMenu />
    </div>
  );
};
