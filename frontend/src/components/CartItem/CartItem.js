import { Link } from 'react-router-dom';

import './CartItem.css';

const CartItem = ({ item, quantityChangeHandler, removeFromCartHandler }) => {
  const { countInStock, _id, imageUrl, name, price, qty } = item;
  return (
    <div className='cart-item'>
      <div className='cart-item-image'>
        <img src={imageUrl} alt={name} />
      </div>
      <Link to={`/blessed-buy/product/${_id}`} className='cart-item-name'>
        <p>{name}</p>
      </Link>
      <p className='cart-item-price'>${price * qty}.00</p>
      <select className='cart-item-select' value={qty} onChange={(e) => quantityChangeHandler(_id, e.target.value)}>
        {[...Array(countInStock).keys()].map((x) => {
          return (
            <option key={x} value={x + 1}>
              {x + 1}
            </option>
          );
        })}
      </select>
      <button className='cart-item-delete-button' onClick={() => removeFromCartHandler(_id)}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default CartItem;
