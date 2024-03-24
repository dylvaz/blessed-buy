import * as actionTypes from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const data = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/products/${id}`
  ).then((res) => res.json());
  const { _id, name, imageUrl, price, countInStock } = data;

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      _id,
      name,
      imageUrl,
      price,
      countInStock,
      qty,
    },
  });

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  // once the dispatch is complete the item will be removed so just reassign th value of cart to the new cart
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};
