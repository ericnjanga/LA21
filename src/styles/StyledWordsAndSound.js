import styled from 'styled-components';

const size = 30
const style = {}
style.Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  .WordsAndSound__btn {
    margin-right: 5px;
    background-color: #9DC183;
    color: #3F704D;
    width: ${size}px!important;
    height: ${size}px!important;
    min-height: ${size}px!important;
  }
  .WordsAndSound__icon {
    font-size: 0.9rem;
  }
  .WordsAndSound__phrase {
    span {
      display: inline-block;
      margin-right: 4px;
      border-bottom: 1px dotted #999;
    }
  }
`

export default style
