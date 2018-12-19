/**
 * Phrase test: User must translate a phrase from "language A" to "language B"
 * Contains the following components:
 * - Words and sound: A collection of words and their pronounciation (all from "language A")
 */
import React from 'react'
// import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import IconVoice from '@material-ui/icons/RecordVoiceOver'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import style from './../styles/StyledWordsAndSound'
import sound from './../media/sound1.mp3'


// function arrowGenerator(color) {
//   return {
//     '&[x-placement*="bottom"] $arrow': {
//       top: 0,
//       left: 0,
//       marginTop: '-0.9em',
//       width: '3em',
//       height: '1em',
//       '&::before': {
//         borderWidth: '0 1em 1em 1em',
//         borderColor: `transparent transparent ${color} transparent`,
//       },
//     },
//     '&[x-placement*="top"] $arrow': {
//       bottom: 0,
//       left: 0,
//       marginBottom: '-0.9em',
//       width: '3em',
//       height: '1em',
//       '&::before': {
//         borderWidth: '1em 1em 0 1em',
//         borderColor: `${color} transparent transparent transparent`,
//       },
//     },
//     '&[x-placement*="right"] $arrow': {
//       left: 0,
//       marginLeft: '-0.9em',
//       height: '3em',
//       width: '1em',
//       '&::before': {
//         borderWidth: '1em 1em 1em 0',
//         borderColor: `transparent ${color} transparent transparent`,
//       },
//     },
//     '&[x-placement*="left"] $arrow': {
//       right: 0,
//       marginRight: '-0.9em',
//       height: '3em',
//       width: '1em',
//       '&::before': {
//         borderWidth: '1em 0 1em 1em',
//         borderColor: `transparent transparent transparent ${color}`,
//       },
//     },
//   };
// }



// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   lightTooltip: {
//     backgroundColor: theme.palette.common.white,
//     color: theme.palette.text.primary,
//     boxShadow: theme.shadows[1],
//     fontSize: 11,
//   },
//   arrowPopper: arrowGenerator(theme.palette.grey[700]),
//   arrow: {
//     position: 'absolute',
//     fontSize: 7,
//     width: '3em',
//     height: '3em',
//     '&::before': {
//       content: '""',
//       margin: 'auto',
//       display: 'block',
//       width: 0,
//       height: 0,
//       borderStyle: 'solid',
//     },
//   },
//   bootstrapPopper: arrowGenerator(theme.palette.common.black),
//   bootstrapTooltip: {
//     backgroundColor: theme.palette.common.black,
//   },
//   bootstrapPlacementLeft: {
//     margin: '0 8px',
//   },
//   bootstrapPlacementRight: {
//     margin: '0 8px',
//   },
//   bootstrapPlacementTop: {
//     margin: '8px 0',
//   },
//   bootstrapPlacementBottom: {
//     margin: '8px 0',
//   },
// });


class WordsAndSound extends React.Component {

  constructor(props) {
    super(props)
    this.audioPlayer = React.createRef()
    this.state = {
      audioPlayer: { active: false, url: 'https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/going_outside.mp3' }
    }
  }


  render () {
    const { Container } = style
    
    return (
      <Container>
        <Fab
          aria-label="Delete"
          className="WordsAndSound__btn"
          onClick={
            () => {
              this.audioPlayer.current.play()
            }
          }
        >
          <IconVoice
            fontSize="small"
            className="WordsAndSound__icon"
          />
        </Fab> 
        
        <audio ref={this.audioPlayer} src={sound} autoPlay={false} />

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