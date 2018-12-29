import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import StyledProgress from './../styles/StyledProgress'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
})

/**
 * 
 * @param {} props 
 */

function CircularIndeterminate(props) {
  const { classes, title } = props
  const { Container } = StyledProgress
  return (
    <Container>
      <h3 className="title">{ title }</h3>
      <CircularProgress className={classes.progress} />
      {/* <CircularProgress className={classes.progress} color="secondary" /> */}
    </Container>
  )
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CircularIndeterminate)

