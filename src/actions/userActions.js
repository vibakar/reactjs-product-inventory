import * as types from './actionTypes';
import UserApi from '../data/userApi';

function getAllUsersSuccess(users) {
  return { type: types.FETCH_ALL_USERS, users};
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