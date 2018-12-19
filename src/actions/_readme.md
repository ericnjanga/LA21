https://redux.js.org/basics/actions

* Actions are payloads of information that send data from your application to your store. 
They are the only source of information for the store. They merely describe what happened.

* You send actions to the store using store.dispatch(). Alternatively, you can create a bound action creator that automatically dispatches.

* Action creators are functions that create (return) actions.