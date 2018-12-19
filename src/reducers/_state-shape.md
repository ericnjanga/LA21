

# How the state will look like:
For our todo app, we want to store two different things:
* The currently selected visibility filter.
* The actual list of todos.

{
  todos: [
    {
      text: 'Consider using Redux',
      completed: true
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_ALL'
}