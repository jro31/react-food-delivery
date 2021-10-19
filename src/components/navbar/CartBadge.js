import { useContext } from 'react';
import CartIcon from '../UI/CartIcon';
import CartCounter from './CartCounter';
import OrderModalState from '../../store/order-modal-state';
import styles from './CartBadge.module.css';

const CartBadge = () => {
  const ctx = useContext(OrderModalState);

  return (
    <div className={styles['cart-badge']} onClick={ctx.onChange}>
      <CartIcon />
      <div>Your Cart</div>
      <CartCounter />
    </div>
  )
};

export default CartBadge;
