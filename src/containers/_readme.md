
# Container Components:
Logic-based components which:
- Describes the specific business logic related to that component
- Connects to the redux store (if necessary)
- Are aware of presentational components to which they pass "redux-state data" and "redux dispatch" functions


## How Redux store state is "transformed" and "passed down" to presentational components!
- Use of mapStateToProps: It describes how to transform the current Redux store state into the props you want to pass to a presentational component you are wrapping. 


## How actions are dispatched to the Redux store state!
- Use of mapDispatchToProps: That receives the dispatch() method and returns callback props that you want to inject into the presentational component. 