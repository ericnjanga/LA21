import React from 'react'
import AppBar from './AppBar'
import ProgressCircle from './ProgressCircle'
import style from './../styles/StyledApp'
import Module from './Module'
import LanguageSelector from './LanguageSelector'
// import AddTodo from './../containers/AddTodo'
// import VisibleTodoList from './../containers/VisibleTodoList'
import './../../node_modules/normalize.css/normalize.css'



const App = ({ store }) => {

  const { AppContainer } = style

  if(!store) {
    return (
      <AppContainer>
        <ProgressCircle
          title="Application en chargement!"
        />
      </AppContainer>
    )
  }

  return (
    <AppContainer>
      <LanguageSelector

      />
      {/* <AppBar />
      <Module /> */}
    </AppContainer>
  )
}

export default App
