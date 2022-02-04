import { useState } from 'react';
import { Cart } from '../Icons/Cart';
import { AccountMenu } from './AccountMenu';
import { CartActive } from './Cart/CartActive';

export const UserStatus = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="flex items-center gap-5 ml-auto">
      <button aria-label="display cart" onClick={() => setShowCart(!showCart)}>
        <Cart />
      </button>
      {showCart ? <CartActive /> : null}
      <AccountMenu />
    </div>
  );
};
