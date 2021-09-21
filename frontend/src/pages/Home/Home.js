import Product from '../Product/Product';
import './Home.css';

const Home = () => {
  return (
    <div className='home-page'>
      <h2 className='homepage-title'>Latest Products</h2>
      <div className='homepage-products'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
