import { Link } from 'react-router-dom';

import { GetCartCountHook } from '../../util/getCartCount';
import './Navbar.css';

const Navbar = ({ setSideToggle }) => {
  const [cartCount] = GetCartCountHook();
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to='/blessed-buy'>
          <h2>Blessed Buy</h2>
        </Link>
      </div>
      <ul className='navbar-links'>
        <li>
          <Link to='/blessed-buy/cart' className='cart-link'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart
              <span className='cart-count'>{cartCount}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/blessed-buy'>Shop</Link>
        </li>
      </ul>
      <div className='hamburger-menu' onClick={setSideToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};
export default Navbar;
