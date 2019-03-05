import React from 'react';
import TodoForm from '../containers/TodoForm';
import TodoList from '../containers/TodoList';
import styled, { createGlobalStyle } from 'styled-components';

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <AppContainer>
      <TodoTitle>todos</TodoTitle>
      <TodoForm />
      <TodoList />
    </AppContainer>
  </React.Fragment>
);

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: #1a1b1f;
    color: #e8e7e3;
    line-height: 1.5;
  }
`;

const AppContainer = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const TodoTitle = styled.h1`
  text-transform: uppercase;
  font-size: 5rem;
`;

export default App;
