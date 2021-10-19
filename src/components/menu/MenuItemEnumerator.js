import { useState, useContext } from 'react';
import Button from '../UI/Button';
import Cart from '../../store/cart';
import styles from './MenuItemEnumerator.module.css';

const MenuItemEnumerator = (props) => {
  const [quantity, setQuantity] = useState(0);
  const ctx = useContext(Cart);

  const quantityChangeHandler = (event) => {
    setQuantity(Number(event.target.value));
  }

  const buttonClickHandler = () => {
    if (quantity < 1) return

    ctx.onChange(props.mealId, quantity);
  }

  return (
    <div className={styles.container}>
      <div className={styles.amount}>
        <label className={styles['amount-label']}>Amount</label>
        <input className={styles['amount-input']} type='number' min={0} onChange={quantityChangeHandler} />
      </div>
      <div className={styles['button-container']}>
        <Button filled={true} onClick={buttonClickHandler}>+Add</Button>
      </div>
    </div>
  )
};

export default MenuItemEnumerator;
