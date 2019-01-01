/**
 * Action types
 */
import actionTypes from './_actionTypes'
const {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,


  ADMIN_ADD_LANGUAGE,
  ADMIN_EDIT_LANGUAGE,
  ACTIVATE_LANGUAGE,
  ACTIVATE_MODULE
} = actionTypes


/**
 * Visibility filters 
 */
export const VisibilityFilters = {
  SHOW_ALL: SHOW_ALL,
  SHOW_COMPLETED: SHOW_COMPLETED,
  SHOW_ACTIVE: SHOW_ACTIVE
}

/**
 * Action creators
 */
let nextTodoId = 0
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++, // In a real app, it is wiser to generate a unique ID every time something new is created.
  text
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})




export const setActiveLanguage = language => ({
  type: ACTIVATE_LANGUAGE,
  language
})

export const setActiveModule = module => ({
  type: ACTIVATE_MODULE,
  module
})