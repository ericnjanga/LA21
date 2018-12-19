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


class WordsAndSound extends React.Component {

  constructor(props) {
    super(props)
    this.audio = React.createRef()
    this.state = {
      audio: { active: false, url: 'https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/going_outside.mp3' }
    }
  }


  render () {
    const { Container } = style
    const { audio } = this.state
    
    return (
      <Container>
        <Fab
          aria-label="Delete"
          className="WordsAndSound__btn"
          onClick={
            () => {
              this.audio.current.play()
            }
          }
        >
          <IconVoice
            fontSize="small"
            className="WordsAndSound__icon"
          />
        </Fab> 
        
        <audio ref={this.audio} src={audio.url} autoPlay={false} />

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
}
 
export default WordsAndSound