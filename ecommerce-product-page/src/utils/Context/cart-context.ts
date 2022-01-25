import { createContext } from 'react';
import { CartContextType } from '../../types/cart-types';

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);
