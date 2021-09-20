import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// Pages
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';

// Components
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
