import { Link } from 'react-router-dom';
import './CartItem.css';

const CartItem = () => {
  return (
    <div className='cart-item'>
      <div className='cart-item-image'>
        <img
          src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          alt='product name'
        />
      </div>
      <Link to={`/product/${213}`} className='cart-item-name'>
        <p>ProductName</p>
      </Link>
      <p className='cart-item-price'>$499.000</p>
      <select className='cart-item-select'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
      <button className='cart-item-delete-button'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default CartItem;
