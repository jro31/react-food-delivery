import MenuItem from './MenuItem';
import styles from './Menu.module.css';

const Menu = (props) => {
  return (
    <div className={styles['menu-container']}>
      <div className={styles.menu}>
        {props.menuItems.map(meal => {
          return (
            <MenuItem
              name={meal.name}
              description={meal.description}
              price={meal.price}
              lastItem={meal === props.menuItems.at(-1)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu;
