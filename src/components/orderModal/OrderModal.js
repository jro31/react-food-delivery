import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../UI/Backdrop';
import Button from '../UI/Button';
import styles from './OrderModal.module.css';

const OrderModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <div className={styles['order-modal-container']}>
          <div className={styles['order-modal']}>
            {/* LOOP HERE */}
            <div className={styles['order-item']}>
              <div className={styles['order-item-info']}>
                <div className={styles['item-name']}>
                  Sushi
                </div>
                <div className={styles['item-amounts']}>
                  <div className={styles['item-price']}>
                    £22.99
                  </div>
                  <div className={styles['item-quantity']}>
                    x 3
                  </div>
                </div>
              </div>
              <div className={styles['order-item-buttons']}>
                <Button squared={true}>-</Button>
                <Button squared={true}>+</Button>
              </div>
            </div>
            {/* END LOOP HERE */}
            <div className={styles.footer}>
              <div className={styles['footer-amount-container']}>
                <div>Total Amount</div>
                <div>£72.49</div>
              </div>
              <div className={styles['footer-buttons-container']}>
                <Button thick={true}>Close</Button>
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
