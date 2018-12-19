/**
 * Custom controller by @ericnjanga
 * Purpose: Count the number of todos by filters
 */
import { connect } from 'react-redux'
import CounterDisplay from './../components/CounterDisplay'
import getVisibleTodos from './../helpers/getVisibleTodos'

const mapStateToProps = (state, ownProps) => {
  console.log('>>>>>>', state.todos)
  return {
    counter: getVisibleTodos(state.todos, ownProps.filter).length
  }
}

const CountTodo = connect(
  mapStateToProps
)(CounterDisplay)

export default CountTodo
