import { Link } from 'react-router-dom';

import './Product.css';

const Product = ({ product }) => {
  const { description, _id, imageUrl, name, price } = product;
  return (
    <div className='product'>
      <img src={imageUrl} alt={name} />
      <div className='product-info'>
        <p className='info-name'>{name}</p>
        <p className='info-description'>
          {description.length > 100 ? description.substring(0, 100) + '...' : description}
        </p>
        <p className='info-price'>${price}.00</p>

        <Link to={`/blessed-buy/product/${_id}`} className='info-button'>
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
