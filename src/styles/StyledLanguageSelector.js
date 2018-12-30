import styled from 'styled-components'
// import theme from './../settings/theme'


const style = {}
const padding = 20
style.Container = styled.div`

  padding: ${padding}px;
  text-align: center;

  .brand {
    color: green;
    font-weight: normal;
    margin-top: 0;
  }

  .lang-list {
    display: flex;
    padding: 0;
    margin-top: 100px;
    .thumbnail {
      margin: 0;
      padding: 5px;
      img {
        max-width: 100%;
        border-radius: 4px;
      }
    }
    .thumbnail-caption {
      margin-top: 5px;
    }
  }
  .lang-list__li {
    display: inline-block;
  }
  .lang-list__input {
    // Hidde Native input radio
    position: absolute;
    visibility: hidden;
    //
    &:checked + .lang-list__label {
      color: #fff;
      background-color: #3f51b5;
    }
  }
  .lang-list__label {
    display: block;
    border-radius: 4px;
  }

  .container-footer {
    position: absolute;
    bottom: 30px;
    width: calc(100% - ${2 * padding}px);
  }
  
`

export default style
