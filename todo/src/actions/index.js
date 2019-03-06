export const UPDATE_INPUT = 'UPDATE_INPUT';
export const updateInput = value => ({ type: UPDATE_INPUT, value });

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (task, id) => ({ type: ADD_TODO, task, id });

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = (id, task) => ({ type: UPDATE_TODO, id, task });

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = id => ({ type: DELETE_TODO, id });

export const CLEAR_TODOS = 'CLEAR_TODOS';
export const clearTodos = () => ({ type: CLEAR_TODOS });

export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const toggleSearch = () => ({ type: TOGGLE_SEARCH });
