import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './App';
import store from './redux/store';
import './index.css';

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
