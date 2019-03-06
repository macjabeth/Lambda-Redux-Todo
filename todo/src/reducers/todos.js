import {
  ADD_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  CLEAR_TODOS
} from '../actions';

const initialState = [
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        task: action.task,
        id: Date.now(),
        completed: false
      };
    case TOGGLE_TODO:
      return state.id === action.id
        ? { ...state, completed: !state.completed }
        : state;
    case UPDATE_TODO:
      return state.id === action.id ? { ...state, task: action.task } : state;
    case DELETE_TODO:
      return state.id !== action.id;
    case CLEAR_TODOS:
      return !state.completed;
    default:
      return state;
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(todo(null, action));
    case TOGGLE_TODO:
    case UPDATE_TODO:
      return state.map(t => todo(t, action));
    case DELETE_TODO:
    case CLEAR_TODOS:
      return state.filter(t => todo(t, action));
    default:
      return state;
  }
};
