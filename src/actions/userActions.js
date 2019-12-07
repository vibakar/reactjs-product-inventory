import * as types from './actionTypes';
import UserApi from '../data/userApi';
import ProductApi from '../data/productApi';

function getAllUsersSuccess(users) {
  return { type: types.FETCH_ALL_USERS, users};
}

function getUserSuccess(user) {
	return { type: types.FETCH_SINGLE_USER, user};
}

function updateUserSuccess(user) {
  return { type: types.UPDATE_SINGLE_USER, user};
}

function getAllProductsSuccess(products) {
  return { type: types.FETCH_ALL_PRODUCTS, products};
}

function addUserSuccess(user) {
  sessionStorage.setItem('userId', user.id);
  window.location.reload();
  return { type: types.ADD_NEW_USER, user};
}

export function getAllUsers() {
  return function(dispatch) {
    return UserApi.getAllUsers().then(users => {
      dispatch(getAllUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
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

export function updateUser(user) {
  return function(dispatch) {
    return UserApi.updateUser(user).then(user => {
      dispatch(updateUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addUser(user) {
  return function(dispatch) {
    return UserApi.addUser(user).then(user => {
      dispatch(addUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
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