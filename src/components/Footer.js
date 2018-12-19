import React from 'react';
import FilterLink from './../containers/FilterLink'
import CountTodo from './../containers/CountTodo'
import { VisibilityFilters } from './../actions'
// import style from './../styles/StyledTodoList';

const Footer = () => {

  // const { Li } = style;

  return (
    <p>
      Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All <small>
          <CountTodo filter={VisibilityFilters.SHOW_ALL} />
        </small>
      </FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Active <small>
          <CountTodo filter={VisibilityFilters.SHOW_ACTIVE} />
        </small>
      </FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Completed <small>
          <CountTodo filter={VisibilityFilters.SHOW_COMPLETED} />
        </small>
      </FilterLink>
    </p>
  );
}
 
export default Footer;