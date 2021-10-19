import MenuItemEnumerator from './MenuItemEnumerator';
import styles from './MenuItem.module.css';

const MenuItem = (props) => {
  return (
    <div className={`${styles['menu-item']} ${props.lastItem ? styles['last-menu-item'] : ''}`}>
      <div className={styles['details-container']}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>£{props.price}</div>
      </div>
      <MenuItemEnumerator mealId={props.id} />
    </div>
  )
};

export default MenuItem;
