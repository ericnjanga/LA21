import React, { Component } from 'react'
import StyledViewSelection from './../styles/StyledViewSelection'
import ActivateSelection from './../containers/ActivateSelection'
import DisplayLanguages from './../containers/DisplayLanguages'

class ViewLanguageSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selection: ''
    }
  }

  /**
   * Save selected language in the state
   */
  handleLanguageSelection = (language) => {
    this.setState({ selection:language })
  }

  render() {

    // const radioGroup
    const { Container } = StyledViewSelection
    const { languages, onClick } = this.props
    const { selection } = this.state

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
            <ActivateSelection
              selection={selection}
              type="language"
            >
              Continuer
            </ActivateSelection>
          </footer>
        </div>
      </Container>
    )
  }
}
 
export default ViewLanguageSelector