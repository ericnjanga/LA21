import styled from 'styled-components';

const size = 30
const style = {}
style.Container = styled.div`
  // display: flex;
  // align-items: center;
  // margin-bottom: 20px;


  .title {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .chip {
    margin: 5px;
  }
  

  .answer,
  .options {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    background: #ccc;
  }

  .options {
    margin-top: 40px;
    
    button {
      margin: 5px;
    }
  }
`

export default style
