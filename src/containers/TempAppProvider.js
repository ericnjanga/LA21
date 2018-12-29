import React, { Component } from 'react'
import temporaryStore from './../store/_store-plan'

class TempAppProvider extends Component {
  state = { 
    ...temporaryStore
  }

  handleLanguageSelect = () => {
    
  }


  render() { 
    return ( 
      <div>
        {this.props.children(this.state)}
      </div>
    )
  }
}
 
export default TempAppProvider

