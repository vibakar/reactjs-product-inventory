import * as types from './actionTypes';
import ProductApi from '../data/productApi';

function getAllProductsSuccess(products) {
  return { type: types.FETCH_ALL_PRODUCTS, products};
}

function getSingleProductSuccess(product) {
  return { type: types.FETCH_SINGLE_PRODUCT, product}
}

function addProductSuccess(product, history) {
  history.push('/');
  return { type: types.ADD_PRODUCT, product};
}

function editProductSuccess(product, history) {
  history.push('/');
  return { type: types.EDIT_PRODUCT, product};
}

export function getAllProducts() {
  return function(dispatch) {
    return ProductApi.getAllProducts().then(products => {
      dispatch(getAllProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getSingleProduct(id) {
  return function(dispatch) {
    return ProductApi.getSingleProduct(id).then(product => {
      dispatch(getSingleProductSuccess(product));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addProduct(product, history) {
  return function (dispatch, getState) {
    return ProductApi.addProduct(product).then(product => {
      dispatch(addProductSuccess(product, history));
    }).catch(error => {
      throw(error);
    });
  };
}

export function editProduct(product, history) {
  return function (dispatch, getState) {
    return ProductApi.editProduct(product).then(product => {
      dispatch(editProductSuccess(product, history));
    }).catch(error => {
      throw(error);
    });
  };
}
