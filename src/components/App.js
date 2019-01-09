import React from 'react'
import AppBar from './AppBar'
// import ProgressCircle from './ProgressCircle'
import style from './../styles/StyledApp'
import Module from './Module'
import DisplayViewSettings from './../containers/DisplayViewSettings'
import './../../node_modules/normalize.css/normalize.css'



const App = () => {

  const { AppContainer } = style

  return (
    <AppContainer>
      <AppBar />
      <DisplayViewSettings />
      <Module />
    </AppContainer>
  )
}

export default App
