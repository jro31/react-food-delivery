import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Menu from './components/menu/Menu';
import OrderModal from './components/orderModal/OrderModal';
import DummyMeals from './components/data/dummy-meals';
import Cart from './store/cart';
import OrderModalState from './store/order-modal-state';

const initialCart = () => DummyMeals.map((meal) => ({id: meal.id, name: meal.name, price: meal.price, quantity: 0}));

const App = () => {
  const [cartItems, setCartItems] = useState(initialCart());
  const [displayModal, setDisplayModal] = useState(false);

  const editCartHandler = (mealId, change) => {
    setCartItems((prevState) => prevState.map(cartItem => (cartItem.id === mealId ? {...cartItem, quantity: Math.max(cartItem.quantity += change, 0)} : cartItem)));
  };

  const toggleModalHandler = () => setDisplayModal(!displayModal);

  return (
    <Cart.Provider value={{ cartItems: cartItems, onChange: editCartHandler }}>
      <OrderModalState.Provider value={{ showModal: displayModal, onChange: toggleModalHandler }}>
        <Navbar />
        {displayModal && <OrderModal />}
      </OrderModalState.Provider>
      <Banner />
      <Menu />
    </Cart.Provider>
  );
}

export default App;
