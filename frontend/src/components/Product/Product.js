import { Link } from 'react-router-dom';

import './Product.css';

const Product = () => {
  return (
    <div className='product'>
      <img
        src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
        alt='PlayStation 5'
      />
      <div className='product-info'>
        <p className='info-name'>{'product.Name'}</p>
        <p className='info-description'>
          PlayStation 5 (PS5) is a home video game console developed by Sony
          Interactive Entertainment. Announced in 2019 as the successor to the
          PlayStation 4, the PS5 was released on November 12, 2020 in Australia,
          Japan, New Zealand, North America, Singapore, and South Korea, and
          November 19, 2020 onwards in other major markets except China and
          India.
        </p>
        <p className='info-price'>$499.00</p>

        <Link to={`/product/${'79c47ec'}`} className='info-button'>
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
