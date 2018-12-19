import React from 'react';
import PropTypes from 'prop-types';
// import style from './../styles/StyledTodoList';

const Link = ({ active, children, onClick }) => {

  // const { Li } = style;

  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href=""
      onClick={
        e => {
          e.preventDefault()
          onClick()
        }
      }
    >
      {children}
    </a>
  );
}

Link.prototypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};
 
export default Link;