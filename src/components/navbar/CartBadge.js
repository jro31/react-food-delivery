import CartIcon from '../UI/CartIcon';
import CartCounter from './CartCounter';
import styles from './CartBadge.module.css';

const CartBadge = () => {
  return (
    <div className={styles['cart-badge']}>
      <CartIcon />
      <div>Your Cart</div>
      <CartCounter />
    </div>
  )
};

export default CartBadge;
