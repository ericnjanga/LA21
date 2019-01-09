/**
 * Custom controller by @ericnjanga
 * Purpose: ...
 */
import { connect } from 'react-redux'
import ViewSettings from './../components/ViewSettings'
import {
  getActiveSelection
} from './../helpers/helpers1'


const mapStateToProps = (state) => {
  // console.log('>>>>>>languages = ', state.languages)
  return {
    languageList: state.languages,
    moduleList: state.modules,
    languageSelected: getActiveSelection(state.languages),
    moduleSelected: getActiveSelection(state.modules),
  }
}

const DisplayViewSettings = connect(
  mapStateToProps
)(ViewSettings)

export default DisplayViewSettings
