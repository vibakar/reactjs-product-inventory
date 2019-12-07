import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case types.FETCH_ALL_USERS:
      return action.users;

    case types.FETCH_SINGLE_USER:
      return [action.user];
     
    case types.UPDATE_SINGLE_USER:
    	const user = action.user;
		  const {firstName, lastName, city, mobile} = user;
		  return state.map(u => (u.id === action.user.id ? {...u, firstName, lastName, city, mobile} : u));

    case types.UPDATE_PRODUCT_VIEWS:
      return [action.user];

  	case types.ADD_NEW_USER:
  		return [...state, action.user];

      default:
        return state;
    }
}
