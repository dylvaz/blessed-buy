import * as actionTypes from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const data = await fetch(`http://localhost:7654/api/products/${id}`);
  const { product, name, imageUrl, price, countInStock } = data;

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product,
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
