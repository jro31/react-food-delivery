import MenuItem from './MenuItem';
import styles from './Menu.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const Menu = () => {
  return (
    <div className={styles['menu-container']}>
      <div className={styles.menu}>
        {DUMMY_MEALS.map(meal => {
          return (
            <MenuItem
              name={meal.name}
              description={meal.description}
              price={meal.price}
              lastItem={meal === DUMMY_MEALS.at(-1)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu;
