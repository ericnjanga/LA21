/**
 * Phrase test: User must translate a phraseToTranslate from "language A" to "language B"
 * Contains the following components:
 * - Words and sound: A collection of words and their pronounciation (all from "language A")
 */
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import WordsAndSound from './WordsAndSound'
import OptionsAndAnswers from './OptionsAndAnswers'
import DialogOutput from './DialogOutput'
// import style from './../styles/StyledModule'


class PhraseTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogMessageOutput: {
        visible: false,
        title: '',
        content: '',
        status: '',
      },
      answer: 'mot 1 mot 2 mot 3',
      userAnswer: [],
      phraseToTranslate: 'Quel est ton nom?', 
      wordSelection: ['mot 1', 'mot 2', 'mot 3', 'mot 4', 'mot 5', 'mot 6'],
    }
  }


  /**
   * Add picked "word" into the "userAnswer"
   * - Avoid duplicate
   * - Highlight "picked" word
   */
  handleWordSelection = ({ id, value }) => {
    const { userAnswer, listOfWordsForSelection } = this.state
    const wordInArray = userAnswer.filter(word => word.id===id)

    // console.log({ id, value }) 
    // console.log( userAnswer.indexOf({ id, value }) )
    // console.log('>>>wordInArray=', wordInArray[0])


    if ( !wordInArray[0] ) {
      listOfWordsForSelection[id].selected = true // Highlight "picked" word
      userAnswer.push(listOfWordsForSelection[id])
      this.setState({ userAnswer, listOfWordsForSelection })
    }
  }


  /**
   * 
   */
  handleWordRemoval = (id) => {
    const { userAnswer, listOfWordsForSelection } = this.state

    const newArr = userAnswer.filter(currWord => currWord.id!==id)
    listOfWordsForSelection[id].selected = false
    this.setState({ userAnswer:newArr, listOfWordsForSelection })
  }


  handleAnswerCheck = () => {
    const { userAnswer, answer, dialogMessageOutput } = this.state
    const userPhrase = userAnswer.map(function(elem){
        return elem.value
    }).join(' ')

    if (userPhrase===answer) {
      dialogMessageOutput.title = 'Bravo!'
      dialogMessageOutput.status = 'hasSuccess' //Dialog will be styled accordingly
    } else {
      dialogMessageOutput.title = 'Non, c\'est pas correct!'
      dialogMessageOutput.status = 'hasDanger' //Dialog will be styled accordingly
    }
    dialogMessageOutput.content = answer
    dialogMessageOutput.visible = true
    this.setState({ dialogMessageOutput }, ()=>{ console.log(dialogMessageOutput)})
  }


  toggleDialog = () => {
    const { dialogMessageOutput } = this.state
    dialogMessageOutput.visible = true
    this.setState({ dialogMessageOutput });
  };

  handleDIalogClose = () => {
    const { dialogMessageOutput } = this.state
    dialogMessageOutput.visible = false
    this.setState({ dialogMessageOutput });
  };



  componentDidMount() {
    const { wordSelection } = this.state
    // Translate the current array of words to select into an indexable array (much more easy to manipulate)
    const listOfWordsForSelection = wordSelection.map((word, id) => {
      return { id, value:word, selected:false }
    })

    this.setState({ listOfWordsForSelection })

  }


  render() {

    // const { Container } = style

    const { 
      userAnswer,
      listOfWordsForSelection,
      phraseToTranslate,
      dialogMessageOutput,
    } = this.state

   
    return (
      <div>
        <h1 className="h2">Traduit cette phrase</h1>
        <WordsAndSound
          text={phraseToTranslate}
        />

        {
          listOfWordsForSelection && 
          <OptionsAndAnswers
            wordSelection={listOfWordsForSelection}
            userAnswer={userAnswer}
            pickWord={this.handleWordSelection}
            removeWord={this.handleWordRemoval}
          />
        }

        <DialogOutput
          {...dialogMessageOutput}
          onClose={this.handleDIalogClose}
        />
  
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={this.handleAnswerCheck}
        >
          Vérifier
        </Button>
      </div>
    )
  }
}
 
export default PhraseTest