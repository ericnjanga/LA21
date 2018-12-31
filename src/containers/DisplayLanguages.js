/**
 * Custom controller by @ericnjanga
 * Purpose: ...
 */
import { connect } from 'react-redux'
import LanguageListThumb from './../components/LanguageListThumb'

const mapStateToProps = (state, ownProps) => {
  // console.log('>>>>>>languages = ', state.languages)
  return {
    languages: state.languages
  }
}

const DisplayLanguages = connect(
  mapStateToProps
)(LanguageListThumb)

export default DisplayLanguages
