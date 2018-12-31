import React, { Component } from 'react'
import StyledViewSelection from './../styles/StyledViewSelection'
import SubmitLanguage from './../containers/SubmitLanguage'
import DisplayModules from './../containers/DisplayModules'

class ViewModuleSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selection: ''
    }
  }

  /**
   * Save selected module in the state
   */
  handleLanguageSelection = (module) => {
    this.setState({ selection:module })
  }

  render() {

    // const radioGroup
    const { Container } = StyledViewSelection
    const { modules, onClick } = this.props
    const { selection } = this.state

    return (
      <Container>
        {/* <h1 className="brand">T21</h1> */}
        <h2 className="title">Que voulez-vous apprendre?</h2>
        
        <div>
          <DisplayModules
            className="module-list"
            modules={modules}
            onChange={this.handleLanguageSelection}
          />
          {/* <footer className="container-footer">
            <SubmitLanguage
              module={selection}
            >
              Continuer
            </SubmitLanguage>
          </footer> */}
        </div>
      </Container>
    )
  }
}
 
export default ViewModuleSelector
