import { SetStateAction } from 'react';

export interface CartItem {
  productImage: string;
  productName: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface Cart {
  cartItems: CartItem[];
  totalCost: number;
}

export interface CartContextType {
  cart: Cart;
  setCart: React.Dispatch<SetStateAction<Cart>>;
}
