import React, { Component } from 'react'
import StyledViewSelection from './../styles/StyledViewSelection'
import ActivateSelection from './../containers/ActivateSelection'
import ListOfModuleThumb from './../components/ListOfModuleThumb'

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
    const { className, list, itemSelected } = this.props
    const { selection } = this.state

    if (itemSelected) {
      return false
    }

    return (
      <Container className={className}>
        {/* <h1 className="brand">T21</h1> */}
        <h2 className="title">Choisissez un module</h2>
        
        <div>
          <ListOfModuleThumb
            className="module-list"
            modules={list}
            onChange={this.handleLanguageSelection}
          />
          <footer className="container-footer">
            <ActivateSelection
              selection={selection}
              type="module"
            >
              Continuer
            </ActivateSelection>
          </footer>
        </div>
      </Container>
    )
  }
}
 
export default ViewModuleSelector
