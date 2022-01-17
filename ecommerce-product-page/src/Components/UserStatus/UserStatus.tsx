import { Cart } from '../Icons/Cart';
import { AccountMenu } from './AccountMenu';
import { CartActive } from './Cart/CartActive';

export const UserStatus = () => {
  return (
    <div>
      <Cart />
      <CartActive />
      <AccountMenu />
    </div>
  );
};
