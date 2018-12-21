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

  .answer {
    .chip {
      background-color: rgb(59, 162, 244);
    }
  }
  

  .answer,
  .options {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 50px;
    // background: #ccc;
  }

  .options { 
    .chip-picked {
      background-color: #999;
      color: #fff;
    }
  }
`

export default style
