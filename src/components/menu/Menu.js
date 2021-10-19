import MenuItem from './MenuItem';
import styles from './Menu.module.css';
import DummyMeals from '../data/dummy-meals';

const Menu = () => {
  return (
    <div className={styles['menu-container']}>
      <div className={styles.menu}>
        {DummyMeals.map(meal => {
          return (
            <MenuItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              lastItem={meal === DummyMeals.at(-1)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu;
