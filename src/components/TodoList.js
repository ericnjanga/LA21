import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
// import style from './../styles/StyledTodoList';

const TodoList = ({ todos, onTodoClick }) => {

  // const { Li } = style;
  console.group('TodoList')
  console.log(todos)
  console.groupEnd()

  return (
    <ul>
      {
        todos.map((todo, index) => (
          <Todo
            key={index}
            {...todo}
            onClick={() => onTodoClick(index)}
          />
        ))
      }
    </ul>
  );
}

TodoList.prototypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};
 
export default TodoList;