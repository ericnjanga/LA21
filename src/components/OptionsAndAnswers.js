/**
 * OptionsAndAnswers: ....
 */
import React from 'react'
// import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import Fab from '@material-ui/core/Fab'
import IconVoice from '@material-ui/icons/RecordVoiceOver' 
import Button from '@material-ui/core/Button' 
import style from './../styles/StyledOptionsAndAnswers'


class OptionsAndAnswers extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.audioPlayer = React.createRef()
  //   this.state = {
  //     audioPlayer: { active: false, url: 'https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/going_outside.mp3' }
  //   }
  // }


  render () {
    const { Container } = style
    const { 
      wordSelection,
      pickWord,
      removeWord,
      userAnswer
    } = this.props
    
    return (
      <Container>

        <section className="answer">
          <h2 className="title">Ta réponse</h2>
          {
            userAnswer.map(({ id, value }) => 
              <Chip
                key={id}
                label={ value }
                color="primary"
                className="chip"
                onDelete={() => removeWord(id) }
              />
            )
          }
        </section>


        <section className="options">
          <h2 className="title">Choisi ta réponse</h2>
          {
            wordSelection.map(({ id, value, selected }) =>
              <Button
                key={id}
                variant="contained"
                color={ selected ? 'secondary' : 'default' }
                onClick={()=>pickWord({ id, value })}
              >
                {value}
              </Button>
            )
          }
        </section>

      </Container>
    )

  }
}
 
export default OptionsAndAnswers