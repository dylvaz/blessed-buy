import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

// Pages
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import ProductPage from './pages/ProductPage/ProductPage';

// Components
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const setSideToggleCallback = () => {
    setSideToggle((prevState) => !prevState);
  };

  return (
    <Router>
      <Navbar setSideToggle={setSideToggleCallback} />
      <SideDrawer setSideToggle={setSideToggleCallback} show={sideToggle} />
      <Backdrop setSideToggle={setSideToggleCallback} show={sideToggle} />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id' component={ProductPage} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
