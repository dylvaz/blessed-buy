import CartItem from '../../components/CartItem/CartItem';

import './Cart.css';

const Cart = () => {
  return (
    <div className='cart-page'>
      <div className='cart-page-left'>
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className='cart-page-right'>
        <div className='cart-page-info'>
          <p>Subtotal: (0) items</p>
          <p>$499.00</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
