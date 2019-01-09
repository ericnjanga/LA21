


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

export const getActiveSelection = (state) => {
  // console.log(state)
  return state.filter((item) => item.active===true)[0]
}

export default getVisibleTodos
