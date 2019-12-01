import { combineReducers } from 'redux';
import products from './productReducer';
import users from './userReducer';

const reducers = combineReducers({
  products,
  users
});

export default reducers;