import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { 
  setActiveLanguage,
  setActiveModule
} from './../actions'

/**
 * Dispaches selected selection selection action to the store
 * @param {*} selection
 * @param {*} children
 * @param {*} dispatch 
 */

let ActivationButton = ({ selection, type, children, dispatch }) => {

  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      disabled={selection==''}
      onClick={() => {
        switch(type){
          case 'language':
            dispatch(setActiveLanguage(selection))
            break
          case 'module':
            dispatch(setActiveModule(selection))
            break
        }
        
      }}
    >
      { children }
    </Button>
  )
}

ActivationButton = connect()(ActivationButton)

export default ActivationButton
