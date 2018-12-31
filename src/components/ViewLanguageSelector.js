import React, { Component } from 'react'
import StyledViewLanguageSelector from './../styles/StyledViewLanguageSelector'
import SubmitLanguage from './../containers/SubmitLanguage'
import DisplayLanguages from './../containers/DisplayLanguages'

class ViewLanguageSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: ''
    }
  }

  /**
   * Save selected language in the state
   */
  handleLanguageSelection = (language) => {
    this.setState({ selectedLanguage:language })
  }

  render() {

    // const radioGroup
    const { Container } = StyledViewLanguageSelector
    const { languages, onClick } = this.props
    const { selectedLanguage } = this.state

    return (
      <Container>
        <h1 className="brand">T21</h1>
        <h2 className="title">Quelle langue veux-tu apprendre?</h2>
        
        <div>
          <DisplayLanguages
            className="lang-list"
            languages={languages}
            onChange={this.handleLanguageSelection}
          />
          <footer className="container-footer">
            <SubmitLanguage
              language={selectedLanguage}
            >
              Continuer
            </SubmitLanguage>
          </footer>
        </div>
      </Container>
    )
  }
}
 
export default ViewLanguageSelector