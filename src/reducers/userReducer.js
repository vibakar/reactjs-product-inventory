import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.FETCH_ALL_USERS:
      return action.users;

    default:
      return state;
  }
}
