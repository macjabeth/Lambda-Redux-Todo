import { TOGGLE_SEARCH } from '../actions';

export default (state = false, action) => {
  return action.type === TOGGLE_SEARCH ? !state : state;
};
