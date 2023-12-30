import * as styles from './Cart.css'

import { useCart } from '../../../contexts/CartContext';

import {Button, Modal} from 'react-bootstrap';

function Cart(props) {

  const { cart } = useCart()

  return (
    <Modal
      className={styles.modalMain}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.modalHeader}>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - Quantity: {product.quantity}
              </li>
            ))}
          </ul>
        )}
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button onClick={props.onHide}>Checkout</Button>
        <Button variant='secondary' onClick={props.onHide}>Continue Shopping</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Cart