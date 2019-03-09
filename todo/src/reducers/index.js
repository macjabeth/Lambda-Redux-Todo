import { combineReducers } from 'redux';

import todos from './todos';
import searching from './searching';
import input from './input';

export default combineReducers({
  todos,
  searching,
  input
});
