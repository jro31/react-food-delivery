import { createContext } from 'react';

const OrderModalState = createContext({
  showModal: false,
  onChange: () => {},
});

export default OrderModalState;
