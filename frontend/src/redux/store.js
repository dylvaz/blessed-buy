import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import {
  getProductsDetailReducer,
  getProductsReducer,
} from './reducers/productReducers';

const reducer = combineReducers({
  cart: cartReducer,
  getProductDetails: getProductsDetailReducer,
  getProducts: getProductsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
