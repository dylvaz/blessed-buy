import React from 'react';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import store from './redux/store';
import './index.css';

render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
