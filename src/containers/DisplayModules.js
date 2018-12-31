/**
 * Custom controller by @ericnjanga
 * Purpose: ...
 */
import { connect } from 'react-redux'
import ListOfModuleThumb from './../components/ListOfModuleThumb'

const mapStateToProps = (state, ownProps) => {
  console.log('>>>>>>modules.modules = ', state.modules )
  return {
    modules: state.modules
  }
}

const DisplayModules = connect(
  mapStateToProps
)(ListOfModuleThumb)

export default DisplayModules
