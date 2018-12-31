import React from 'react'
import AppBar from './AppBar'
import ProgressCircle from './ProgressCircle'
import style from './../styles/StyledApp'
import Module from './Module'
import ViewLanguageSelector from './ViewLanguageSelector'
import ViewModuleSelector from './ViewModuleSelector'
import './../../node_modules/normalize.css/normalize.css'



const App = () => {

  const { AppContainer } = style

  // if(!store) {
  //   return (
  //     <AppContainer>
  //       <ProgressCircle
  //         title="Application en chargement!"
  //       />
  //     </AppContainer>
  //   )
  // }

  return (
    <AppContainer>
    {/* <ViewLanguageSelector /> */}
      <ViewModuleSelector />
      {/* <AppBar />
      <Module /> */}
    </AppContainer>
  )
}

export default App
