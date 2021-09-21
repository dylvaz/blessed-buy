import { Link } from 'react-router-dom';

import './SideDrawer.css';

const SideDrawer = ({ setSideToggle, show }) => {
  const sideDrawerClass = ['sidedrawer'];
  if (show) {
    sideDrawerClass.push('show');
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className='sidedrawer-links' onClick={setSideToggle}>
        <li>
          <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart
              <span className='sidedrawer-cart-count'>0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to='/'>Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
