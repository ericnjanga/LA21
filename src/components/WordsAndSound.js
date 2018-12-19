/**
 * Phrase test: User must translate a phrase from "language A" to "language B"
 * Contains the following components:
 * - Words and sound: A collection of words and their pronounciation (all from "language A")
 */
import React from 'react'
// import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import IconVoice from '@material-ui/icons/RecordVoiceOver'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import style from './../styles/StyledWordsAndSound'

const WordsAndSound = () => {

  const { Container } = style
  // font-size: 0.5rem;
  return (
    <Container>
      <Fab aria-label="Delete" className="WordsAndSound__btn">
        <IconVoice
          fontSize="small"
          className="WordsAndSound__icon"
        />
      </Fab> 

      <div className="WordsAndSound__phrase">
        <Tooltip disableFocusListener disableTouchListener title="Quel">
          <span>Quel</span>
        </Tooltip>
        <Tooltip disableFocusListener disableTouchListener title="est">
          <span>est</span>
        </Tooltip>
        <Tooltip disableFocusListener disableTouchListener title="ton">
          <span>ton</span>
        </Tooltip>
        <Tooltip disableFocusListener disableTouchListener title="nom">
          <span>nom</span>
        </Tooltip>
        ?
      </div>
    </Container>
  )
}
 
export default WordsAndSound