import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Menu from './components/menu/Menu';
import OrderModal from './components/orderModal/OrderModal';
import DummyMeals from './components/data/dummy-meals';
import Cart from './store/cart';

const initialCart = () => DummyMeals.map((meal) => ({id: meal.id, quantity: 0}));

const App = () => {
  const [cartItems, setCartItems] = useState(initialCart());

  const editCartHandler = (mealId, change) => {
    setCartItems((prevState) => prevState.map(cartItem => (cartItem.id === mealId ? {...cartItem, quantity: cartItem.quantity += change} : cartItem)));
  };

  return (
    <Cart.Provider value={{ cartItems: cartItems, onChange: editCartHandler }}>
      <Navbar />
      <Banner />
      <Menu />
      {false && <OrderModal />}
    </Cart.Provider>
  );
}

export default App;
