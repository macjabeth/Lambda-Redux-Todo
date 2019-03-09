import { UPDATE_INPUT } from '../actions';

export default (state = '', action) => {
  return action.type === UPDATE_INPUT ? action.value : state;
};
