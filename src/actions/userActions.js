import * as types from './actionTypes';
import UserApi from '../data/userApi';

function getAllUsersSuccess(users) {
  return { type: types.FETCH_ALL_USERS, users};
}

function getUserSuccess(user) {
	return { type: types.FETCH_SINGLE_USER, user};
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