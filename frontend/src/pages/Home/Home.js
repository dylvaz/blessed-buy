import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Product from '../../components/Product/Product';
import './Home.css';

import { getProducts as listProducts } from '../../redux/actions/productActions';

const Home = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  let homeUI;
  if (loading) {
    homeUI = <h2>Loading...</h2>;
  } else if (error) {
    homeUI = <h2>{error}</h2>;
  } else {
    homeUI = products.map((product, index) => {
      return <Product key={index} product={product} />;
    });
  }

  return (
    <div className='home-page'>
      <h2 className='homepage-title'>Latest Products</h2>
      <div className='homepage-products'>{homeUI}</div>
    </div>
  );
};

export default Home;
