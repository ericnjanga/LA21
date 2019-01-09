import styled from 'styled-components'
// import theme from './../settings/theme'


const style = {}
const padding = 20
style.Container = styled.div`

  position: absolute;
  z-index: 10;
  background: #fff;
  padding: ${padding}px;
  padding-top: 60px;
  height: calc(100% - ${padding + 60}px);
  text-align: center;

  .h2 {
    font-size: 1.2rem;
  }

  &.active {
    z-index: 11;
  }

  .brand {
    color: green;
    font-weight: normal;
    margin-top: 0;
  }

  .list {
    padding: 0;
  }
  .list__li {
    display: inline-block;
  }
  .list__input {
    // Hidde Native input radio
    position: absolute;
    visibility: hidden;
    //
    &:checked + .list__label {
      color: #fff;
      background-color: #3f51b5;
    }
  }
  .list__label {
    display: block;
    border-radius: 4px;
  }


  .lang-list,
  .module-list { 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
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

    .lowOpacity {
      opacity: 0.4;
    }
  } 


  .lang-list {
    margin-top: 50px; 
    // center item with image having the
    // same width as the rest and centered
    .list__li:nth-of-type(3) {
      display: flex; 
      justify-content: center; 
      grid-column: 1 / 3;
      grid-row: 2;
      .list__label {
        width: 50%;
      }
    }
  }

  
 

  .module-list { 
    grid-auto-rows: minmax(100px, auto);

    .list__li:nth-of-type(1),
    .list__li:nth-of-type(2),
    .list__li:nth-of-type(5) { 
      grid-column: 1 / 3;
      grid-row: 1;
      // center item with image having the
      // same width as the rest and centered
      display: flex; 
      justify-content: center; 
      grid-column: 1 / 3; 
      .list__label {
        width: 35%;
      }
    } 
    .list__li:nth-of-type(2) { 
      // grid-column: 1 / 2;
      grid-row: 2;
    }
    .list__li:nth-of-type(3) { 
      .list__label {
        margin-left: auto;
      }
    }
    .list__li:nth-of-type(3),
    .list__li:nth-of-type(4) { 
      grid-row: 3;
      .list__label {
        width: 70%;
      }
    }
    .list__li:nth-of-type(5) {
      // border: 2px solid lime;
      grid-row: 4;
    }
  }
 

  .container-footer {
    position: absolute;
    bottom: 30px;
    width: calc(100% - ${2 * padding}px);
  }
  
`

export default style
