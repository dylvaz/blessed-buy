import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* logo */}
      <div className='navbar-logo'>
        <h2>Blessed Buy</h2>
      </div>
      <ul className='navbar-links'>
        <li>
          <Link to='/cart' className='cart-link'>
            <i className=' fas fa-shopping-cart'></i>
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
      <div className='hamburger-menu'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};
export default Navbar;
