import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Menu from './components/menu/Menu';
import OrderModal from './components/orderModal/OrderModal';

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

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Menu menuItems={DUMMY_MEALS} />
      {false && <OrderModal />}
    </Fragment>
  );
}

export default App;
