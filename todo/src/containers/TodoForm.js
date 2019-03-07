import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleSearch, clearTodos, updateInput } from '../actions';
import styled, { css } from 'styled-components';
import { Search } from 'styled-icons/fa-solid/Search';
import { TrashAlt } from 'styled-icons/fa-regular/TrashAlt';

const TodoForm = ({
  input,
  updateInput,
  searching,
  toggleSearch,
  clearTodos,
  addTodo
}) => {
  const placeholder = searching ? 'Filter...' : 'What needs to be done?';
  const handleInput = e => updateInput(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(input);
    updateInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder={placeholder}
        autocomplete="off"
        required
      />
      <SearchIcon
        right={40}
        onClick={toggleSearch}
        searching={searching}
        title="Filter Results"
      />
      <TrashIcon
        right={15}
        onClick={clearTodos}
        title="Clear Completed Tasks"
      />
    </Form>
  );
};

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  background-color: #17181c;
  color: #fff;
  border-radius: 5px;
  border: 1px solid #525252;
  padding: 1em 2em;
  width: 100%;
  outline: none;

  &::placeholder {
    color: #fff;
  }
`;

const Icon = type => styled(type)`
  height: 40%;
  color: #bbb;
  cursor: pointer;
  position: absolute;
  transition: 100ms;
  right: ${props => props.right}px;
  ${props =>
    props.searching &&
    css`
      color: #556b2f;
    `}
`;

const SearchIcon = Icon(Search);
const TrashIcon = Icon(TrashAlt);

const mapStateToProps = state => ({
  searching: state.searching,
  input: state.todoInput
});

export default connect(
  mapStateToProps,
  { addTodo, toggleSearch, clearTodos, updateInput }
)(TodoForm);
