import React from 'react';

import style from './../styles/StyledApp'
import Footer from './Footer'
import AddTodo from './../containers/AddTodo'
import VisibleTodoList from './../containers/VisibleTodoList'
import './../../node_modules/normalize.css/normalize.css'



const App = () => {

  const { AppContainer } = style;

  return (
    <AppContainer>
      <h1>Todo</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
  </AppContainer>
  );
};

export default App
