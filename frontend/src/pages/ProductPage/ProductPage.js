import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { getProductDetails } from '../../redux/actions/productActions';
import { addToCart } from '../../redux/actions/cartAction';

import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  let history = useHistory();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push('/cart');
  };

  // conditional rendering for the three states of error, loading, and success
  let productPageUI;

  if (loading) {
    productPageUI = <h2>Loading...</h2>;
  } else if (error) {
    productPageUI = <h2>{error}</h2>;
  } else {
    // destructure the values when we know we have a product
    const { countInStock, description, imageUrl, name, price } = product;

    productPageUI = (
      <>
        <div className='product-page-left'>
          <div className='left-image'>
            <img src={imageUrl} alt={name} />
          </div>
          <div className='left-info'>
            <p className='left-name'>{name}</p>
            <p>Price: ${price}.00</p>
            <p>{description}</p>
          </div>
        </div>
        <div className='product-page-right'>
          <div className='right-info'>
            <p>
              Price: <span> ${price}.00</span>
            </p>
            <p>
              Status:
              <span>{countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span>
            </p>
            <p>
              Qty:
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {/* convert the number of countInStock into an array containing the numbers from 1 -> countInStock then render an option for each number*/}
                {[...Array(countInStock).keys()].map((x) => {
                  return (
                    <option key={x} value={x + 1}>
                      {x + 1}
                    </option>
                  );
                })}
              </select>
            </p>
            <p>
              <button
                type='button'
                disabled={countInStock <= 0}
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            </p>
          </div>
        </div>
      </>
    );
  }
  return <div className='product-page'>{productPageUI}</div>;
};

export default ProductPage;
