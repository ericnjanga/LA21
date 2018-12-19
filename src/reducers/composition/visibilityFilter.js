

import actionTypes from './../../actions/_actionTypes'
import {
  VisibilityFilters
} from './../../actions'

const {
  SET_VISIBILITY_FILTER,
} = actionTypes
const { SHOW_ALL } = VisibilityFilters

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
