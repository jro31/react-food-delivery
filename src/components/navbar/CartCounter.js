import { useContext } from 'react';
import styles from './CartCounter.module.css';
import Cart from '../../store/cart';

const CartCounter = () => {
  const ctx = useContext(Cart);

  const numberOfCartItems = () => ctx.cartItems.map(cartItem => cartItem.quantity).reduce((a, b) => a + b, 0);

  return (
    <div className={styles['cart-counter']}>{numberOfCartItems()}</div>
  )
};

export default CartCounter;
