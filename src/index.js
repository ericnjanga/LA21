// React library and it's render function (from its DOM package)
import React from 'react'
import { render } from 'react-dom'
// Redux          : Predictable state container for JavaScript apps (https://redux.js.org/)
// react-redux    : React bindings for Redux (https://react-redux.js.org)
// Provider       : 'react-redux' component (similar to "context") which make the store available to all container components in the application without passing it explicitly
import { Provider } from 'react-redux'
// Store          : brings 'actions' and 'reducers' together and holds the application's state
import reduxStore from './store'      
import App from './components/App'

render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('app-root')
);
