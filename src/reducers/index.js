
import { combineReducers } from 'redux' // Learn more about combineReducers in this directory _readme.md
// All reducers
import todos from './composition/todos'
import visibilityFilter from './composition/visibilityFilter'


/**
 * Returns (depending on the @action):
 * - An updated version of the @state
 * - Or the @state itself by default
 * NOTE: This is the main reducer that calls the reducers managing parts of the state, and combines them into a single object. 
 * It doesn't need to know the complete initial state. The child reducers return their initial state when given undefined at first.
 * uses "Reducer Composition" pattern with todos()
 * @param {*} state 
 * @param {*} action 
 */

const todoApp = combineReducers({
  todos,
  visibilityFilter
})


export default todoApp
