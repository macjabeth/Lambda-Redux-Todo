import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Edit } from 'styled-icons/fa-regular/Edit';
import { Ban } from 'styled-icons/fa-solid/Ban';

const Todo = props => {
  const [input, setInput] = useState(props.task);
  const [editing, setEditing] = useState(false);
  const [hovering, setHover] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  });

  const handleClick = () => props.toggleTodo(props.id);
  const handleDelete = e => {
    e.stopPropagation();
    props.deleteTodo(props.id);
  };
  const toggleEdit = e => {
    e.stopPropagation();
    setEditing(!editing);
  };
  const handleEdit = e => {
    e.preventDefault();
    props.updateTodo(props.id, input);
    setEditing(false);
  };
  const handleInput = e => setInput(e.target.value);
  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  return (
    <TodoItem
      completed={props.completed}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {editing ? (
        <form onSubmit={handleEdit}>
          <Input
            type="text"
            value={input}
            onChange={handleInput}
            ref={inputRef}
          />
        </form>
      ) : (
        <span>{props.task}</span>
      )}
      <EditIcon right={30} onClick={toggleEdit} hovering={hovering} />
      <BanIcon right={10} onClick={handleDelete} hovering={hovering} />
    </TodoItem>
  );
};

const TodoItem = styled.li`
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  border: 1px solid #525252;
  border-radius: 5px;
  padding: 5px;
  background-color: #1b1d22;
  transition: 250ms;
  text-decoration: line-through;
  text-decoration-color: ${({ completed }) =>
    !completed ? 'transparent' : 'initial'};

  &:nth-child(even) {
    background-color: #1f2228;
  }
`;

const Icon = type => styled(type)`
  height: 40%;
  color: #bbb;
  position: absolute;
  right: ${props => props.right}px;
  visibility: ${props => (!props.hovering ? 'hidden' : 'visible')};

  &:hover {
    color: #fff;
  }
`;

const EditIcon = Icon(Edit);
const BanIcon = Icon(Ban);

const Input = styled.input`
  border: none;
  background-color: inherit;
  color: inherit;
  font-family: inherit;
  text-align: center;
  font-size: inherit;
`;

export default Todo;
