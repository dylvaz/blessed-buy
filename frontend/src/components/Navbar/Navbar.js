import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setSideToggle }) => {
  return (
    <nav className='navbar'>
      {/* logo */}
      <div className='navbar-logo'>
        <Link to='/'>
          <h2>Blessed Buy</h2>
        </Link>
      </div>
      <ul className='navbar-links'>
        <li>
          <Link to='/cart' className='cart-link'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart
              <span className='cart-count'>0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/'>Shop</Link>
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
