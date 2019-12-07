import * as types from './actionTypes';
import ProductApi from '../data/productApi';
import UserApi from '../data/userApi';

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

function deleteProductSuccess(index) {
  return { type: types.DELETE_PRODUCT, index};
}

function getUserSuccess(user) {
  return { type: types.FETCH_SINGLE_USER, user};
}

function updateViewsSuccess(user) {
  return { type: types.UPDATE_PRODUCT_VIEWS, user};
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

export function deleteProduct(id, index) {
  return function (dispatch, getState) {
    return ProductApi.deleteProduct(id).then(product => {
      dispatch(deleteProductSuccess(index));
    }).catch(error => {
      throw(error);
    });
  }
}

export function getUserDetails(id) {
  return function(dispatch) {
    return UserApi.getSingleUser(id).then(user => {
      dispatch(getUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateViews(userId, productId) {
  return function(dispatch) {
    return UserApi.updateViews(userId, productId).then(user => {
      dispatch(updateViewsSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}
