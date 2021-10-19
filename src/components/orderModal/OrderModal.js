import { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../UI/Backdrop';
import Button from '../UI/Button';
import Cart from '../../store/cart';
import OrderModalState from '../../store/order-modal-state';
import styles from './OrderModal.module.css';

const OrderModal = () => {
  const cartContext = useContext(Cart);
  const modalContext = useContext(OrderModalState);

  const orderChangeHandler = (e, id) => cartContext.onChange(id, e.target.textContent === '-' ? -1 : 1);

  const totalPrice = () => cartContext.cartItems.map(cartItem => (cartItem.price * cartItem.quantity)).reduce((a, b) => a + b, 0);

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <div className={styles['order-modal-container']}>
          <div className={styles['order-modal']}>
            {cartContext.cartItems.map(cartItem => (
              <div className={styles['order-item']}>
                <div className={styles['order-item-info']}>
                  <div className={styles['item-name']}>
                    {cartItem.name}
                  </div>
                  <div className={styles['item-amounts']}>
                    <div className={styles['item-price']}>
                      {`£${cartItem.price}`}
                    </div>
                    <div className={styles['item-quantity']}>
                      {`x ${cartItem.quantity}`}
                    </div>
                  </div>
                </div>
                <div className={styles['order-item-buttons']}>
                  <Button squared={true} onClick={(e) => orderChangeHandler(e, cartItem.id)}>-</Button>
                  <Button squared={true} onClick={(e) => orderChangeHandler(e, cartItem.id)}>+</Button>
                </div>
              </div>
            ))}
            <div className={styles.footer}>
              <div className={styles['footer-amount-container']}>
                <div>Total Amount</div>
                <div>{`£${totalPrice()}`}</div>
              </div>
              <div className={styles['footer-buttons-container']}>
                <Button thick={true} onClick={modalContext.onChange}>Close</Button>
                <Button filled={true} thick={true}>Order</Button>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById('modal-root'))
      }
    </Fragment>
  )
}

export default OrderModal;
