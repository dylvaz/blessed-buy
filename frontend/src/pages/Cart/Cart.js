import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { GetCartCountHook } from '../../util/getCartCount';
import CartItem from '../../components/CartItem/CartItem';
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';

import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const history = useHistory();

  let { cartItems } = cart;
  const [cartCount] = GetCartCountHook();

  const quantityChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getSubtotal = () => {
    return cartItems.reduce(
      (price, item) => Number(item.qty) * item.price + price,
      0
    );
  };

  return (
    <div className='cart-page'>
      <div className='cart-page-left'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty
            <Link to='/'> Go Back</Link>
          </div>
        ) : (
          cartItems.map((item, index) => {
            return (
              <CartItem
                key={index}
                item={item}
                quantityChangeHandler={quantityChangeHandler}
                removeFromCartHandler={removeFromCartHandler}
              />
            );
          })
        )}
      </div>
      <div className='cart-page-right'>
        <div className='cart-page-info'>
          <p>
            Subtotal: ({cartCount}){cartCount > 1 ? ' items' : ' item'}
          </p>
          <p>${getSubtotal()}.00</p>
        </div>
        <div>
          <button
            onClick={() => {
              localStorage.removeItem('cart');
              history.push('/');
              window.location.reload();
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
