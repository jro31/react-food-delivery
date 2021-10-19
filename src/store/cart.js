import { createContext } from 'react';

const Cart = createContext({
  cartItems: {},
  onChange: () => {},
});

export default Cart;
