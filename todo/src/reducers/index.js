import { combineReducers } from 'redux';

import todos from './todos';
import searching from './searching';
import todoInput from './todoInput';

export default combineReducers({
  todos,
  searching,
  todoInput
});
