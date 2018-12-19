import React from 'react';
import PropTypes from 'prop-types';
import style from './../styles/StyledTodo';

const Todo = ({ onClick, completed, text }) => {

  const { Li } = style;

  return (
    <Li
      onClick={onClick}
      className={`${completed?`completed`:``}`}
    >
      {text}
    </Li>
  );
}

Todo.prototypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
 
export default Todo;