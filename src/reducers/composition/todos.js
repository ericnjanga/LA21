
import actionTypes from './../../actions/_actionTypes'
const {
  ADD_TODO,
  TOGGLE_TODO,
} = actionTypes


/**
 * Only returns (depending on the @action):
 * - An updated copy of the state's "todos" array (@stateTodosArray)
 * - Or the @stateTodosArray itself by default
 * @param {*} stateTodosArray todos array from the state
 * @param {*} action 
 */
const todos = (stateTodosArray = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...stateTodosArray,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case TOGGLE_TODO:
      return stateTodosArray.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )

    default:
      return stateTodosArray
  }
}

export default todos
