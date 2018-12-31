/**
 * Custom controller by @ericnjanga
 * Purpose: ...
 */
import { connect } from 'react-redux'
import ListOfLanguageThumb from './../components/ListOfLanguageThumb'

const mapStateToProps = (state, ownProps) => {
  // console.log('>>>>>>languages = ', state.languages)
  return {
    languages: state.languages
  }
}

const DisplayLanguages = connect(
  mapStateToProps
)(ListOfLanguageThumb)

export default DisplayLanguages
