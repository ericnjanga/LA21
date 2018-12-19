
https://redux.js.org/basics/store

The Store is the object that brings 'actions' and 'reducers' together. The store has the following responsibilities:

* Holds application state;
* Allows access to state via getState();
* Allows state to be updated via dispatch(action);
* Registers listeners via subscribe(listener);
* Handles unregistering of listeners via the function returned by subscribe(listener).

NOTE:
* There is only 1 store in a Redux app. When you want to split your data handling logic, you'll use reducer composition instead of many stores.

METHODS:
* createStore: Creates a Redux store that holds the complete state tree of your app.