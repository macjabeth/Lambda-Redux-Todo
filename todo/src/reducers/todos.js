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

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        task: action.task,
        id: Date.now(),
        completed: false
      });
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.task } : todo
      );
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case CLEAR_TODOS:
      return [];
    default:
      return state;
  }
};
