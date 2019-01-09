import React, { Component } from 'react'
import ViewLanguageSelector from './ViewLanguageSelector'
import ViewModuleSelector from './ViewModuleSelector'

/**
   * FOR NOW:
   * - "DisplayViewModuleSelector" and "DisplayViewSettings" are displayed as long as their "itemSelected" properties isn't enabled
   * - "itemSelected" will later will used to populate "Module"
   */
/** Is displayed first because of CSS "position absolute" */

class ViewSettings extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selection: ''
    }
  }

   

  render() {
    
    const {
      languageList,
      moduleList,
      languageSelected,
      moduleSelected,
    } = this.props

    return (
      <div>
        {
          !languageSelected && !moduleSelected && <ViewLanguageSelector
            className={`${(!languageSelected && !moduleSelected)?'active':''}`}
            list={languageList}
          />
        }
        { // Language must first be selected before this module can appear
          languageSelected && !moduleSelected && <ViewModuleSelector
          className={`${(languageSelected && !moduleSelected)?'active':''}`}
            list={moduleList}
          />
        }
      </div>
    )
  }
}
 
export default ViewSettings