import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.FETCH_ALL_PRODUCTS:
      return action.products;

    case types.FETCH_SINGLE_PRODUCT:
      return [action.product];

    case types.ADD_PRODUCT:
      return [
        ...state,
        Object.assign({}, action.product)
      ];

    case types.EDIT_PRODUCT:
      return [
        ...state,
        Object.assign({}, action.product)
      ];

    case types.DELETE_PRODUCT:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];

    default:
      return state;
  }
}
