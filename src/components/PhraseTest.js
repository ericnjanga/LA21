/**
 * Phrase test: User must translate a phrase from "language A" to "language B"
 * Contains the following components:
 * - Words and sound: A collection of words and their pronounciation (all from "language A")
 */
import React from 'react'
import Button from '@material-ui/core/Button'
import WordsAndSound from './WordsAndSound'
// import style from './../styles/StyledModule'

const PhraseTest = () => {

  // const { Container } = style

  return (
    <div>
      <h1 className="module-title">Traduit cette phrase</h1>
      <WordsAndSound />

      <Button
        variant="contained"
        color="primary"
        fullWidth
      >
        Vérifier
      </Button>
    </div>
  )
}
 
export default PhraseTest