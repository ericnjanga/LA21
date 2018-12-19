/**
 * Use rootReducer to create and export the store
 */
import { createStore } from 'redux'
import rootReducer from './../reducers'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// *** TESTS ***
// *** TESTS ***
// log initial state
console.log(store.getState())
// ...
const unsubscribe = store.subscribe( () => console.log(store.getState()) )
// ...
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// ...
// unsubscribe()
// *** TESTS ***
// *** TESTS ***

export default store
