import { Link } from 'react-router-dom';

import { GetCartCountHook } from '../../util/getCartCount';

import './SideDrawer.css';

const SideDrawer = ({ setSideToggle, show }) => {
  const [cartCount] = GetCartCountHook();
  const sideDrawerClass = ['sidedrawer'];
  if (show) {
    sideDrawerClass.push('show');
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className='sidedrawer-links' onClick={setSideToggle}>
        <li>
          <Link to='/blessed-buy/cart'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart
              <span className='sidedrawer-cart-count'>{cartCount}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/blessed-buy'>Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
