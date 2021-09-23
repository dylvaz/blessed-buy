import * as actionTypes from '../constants/productConstants';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCTS_REQUEST,
    });

    const data = await fetch('http://localhost:7654/api/products');

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload: err,
    });
  }
};

export const getProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
    });

    const data = await fetch(`http://localhost:7654/api/products/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: err,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
