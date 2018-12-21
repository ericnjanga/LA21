/**
 * Phrase test: User must translate a phrase from "language A" to "language B"
 * Contains the following components:
 * - Words and sound: A collection of words and their pronounciation (all from "language A")
 */
import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import WordsAndSound from './WordsAndSound'
import OptionsAndAnswers from './OptionsAndAnswers'
// import style from './../styles/StyledModule'


class PhraseTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      answer: 'mot 1 mot 2 mot 3',
      userAnswer: [],

      phrase: [
        {
          id: 0,
          value: 'Quel',
          translation: 'trans1 | trans2'
        },
        {
          id: 1,
          value: 'est',
          translation: 'trans1 | trans2 | trans3'
        },
        {
          id: 2,
          value: 'ton',
          translation: 'trans1 | trans2'
        },
        {
          id: 3,
          value: 'nom?',
          translation: 'trans1 | trans2 | trans3 | trans4'
        },
      ],
  
      answers: [
        {
          id: 0,
          value: 'mot 1'
        },
        {
          id: 1,
          value: 'mot 2'
        },
        {
          id: 2,
          value: 'mot 3'
        },
        {
          id: 3,
          value: 'mot 4'
        },
        {
          id: 4,
          value: 'mot 5'
        },
        {
          id: 5,
          value: 'mot 6'
        },
        {
          id: 6,
          value: 'mot 7'
        },
        {
          id: 7,
          value: 'mot 8'
        },
      ]
  
    }
  }


  handleWordSelection = ({ id, value }) => {
    const { userAnswer, answers } = this.state

    console.log({ id, value })

    console.log( userAnswer.indexOf({ id, value }) )

    const wordInArray = userAnswer.filter(word => word.id===id)

    console.log('>>>wordInArray=', wordInArray[0])



    if ( !wordInArray[0] ) {
      answers[id].selected = true
      userAnswer.push(answers[id])
      this.setState({ userAnswer, answers })
      // console.log(`>>>${userAnswer.indexOf(value)}`)
    }



    // if (userAnswer.indexOf(value)===-1) {
    //   console.log(`>>>${userAnswer.indexOf(value)}`)
    //   userAnswer.push({ id, value })
    //   this.setState({ userAnswer })
    // }
  }


  handleWordRemoval = (id) => {
    const { userAnswer, answers } = this.state

    const newArr = userAnswer.filter(currWord => currWord.id!==id)
    answers[id].selected = false
    this.setState({ userAnswer:newArr, answers })
  }


  // componentDidMount() {

  // }


  render() {

    // const { Container } = style

    const { 
      userAnswer,
      answers,
      phrase
    } = this.state

   
    return (
      <div>
        <h1 className="module-title">Traduit cette phrase</h1>
        <WordsAndSound
          phrase={phrase}
        />
  
        <OptionsAndAnswers
          answers={answers}
          userAnswer={userAnswer}
          pickWord={this.handleWordSelection}
          removeWord={this.handleWordRemoval}
        />
  
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
}
 
export default PhraseTest