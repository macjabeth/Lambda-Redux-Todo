import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, updateTodo, deleteTodo } from '../actions';
import styled from 'styled-components';
import Todo from '../components/Todo';

const TodoList = ({ todos, searching, filter, ...props }) => (
  <TodosContainer>
    {todos.map(todo =>
      (searching && todo.task.includes(filter)) || !searching ? (
        <Todo key={todo.id} {...todo} {...props} />
      ) : null
    )}
  </TodosContainer>
);

const TodosContainer = styled.ul`
  margin: 10px 0;
`;

const mapStateToProps = state => ({
  todos: state.todos,
  searching: state.searching,
  filter: state.todoInput
});

export default connect(
  mapStateToProps,
  { toggleTodo, updateTodo, deleteTodo }
)(TodoList);
