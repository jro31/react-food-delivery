import Button from '../UI/Button';
import styles from './MenuItemEnumerator.module.css';

const MenuItemEnumerator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.amount}>
        <label className={styles['amount-label']}>Amount</label>
        <input className={styles['amount-input']} type='number' />
      </div>
      <div className={styles['button-container']}>
        <Button filled={true}>+Add</Button>
      </div>
    </div>
  )
};

export default MenuItemEnumerator;
