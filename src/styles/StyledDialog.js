import styled from 'styled-components'
import theme from './../settings/theme'


const style = {}
style.Container = styled.div`

  &.hasDanger {
    ${theme.cssClasses.hasDanger}
  }

  &.hasSuccess {
    ${theme.cssClasses.hasSuccess}
  }
  
`

export default style
