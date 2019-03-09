import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, updateTodo, deleteTodo } from '../actions';
import { getFilteredTodos } from '../reducers/todos';
import styled from 'styled-components';
import Todo from '../components/Todo';

const TodoList = ({ todos, searching, filter, ...props }) => (
  <TodosContainer>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} {...props} />
    ))}
  </TodosContainer>
);

const TodosContainer = styled.ul`
  margin: 10px 0;
`;

const mapStateToProps = ({ todos, searching, input }) => ({
  todos: getFilteredTodos(todos, searching, input)
});

export default connect(
  mapStateToProps,
  { toggleTodo, updateTodo, deleteTodo }
)(TodoList);
