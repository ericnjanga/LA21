import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { setActiveLanguage } from './../actions'

/**
 * Dispaches selected language selection action to the store
 * @param {*} language
 * @param {*} children
 * @param {*} dispatch 
 */

let ActivationButton = ({ language, children, dispatch }) => {

  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      disabled={language==''}
      onClick={() => {
        dispatch(setActiveLanguage(language))
      }}
    >
      { children }
    </Button>
  )
}

ActivationButton = connect()(ActivationButton)

export default ActivationButton
