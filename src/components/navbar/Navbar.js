import CartBadge from './CartBadge';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>ReactMeals</h1>
      <CartBadge></CartBadge>
    </div>
  )
}

export default Navbar;
