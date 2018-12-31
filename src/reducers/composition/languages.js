/**
 * Manage languages in the application
 */
import actionTypes from './../../actions/_actionTypes'
import img1 from './../../media/img-la1.jpg'
import img2 from './../../media/img-la2.jpg'
import img3 from './../../media/img-la3.jpg'
const {
  ACTIVATE_LANGUAGE,
} = actionTypes


const defaultLanguages = [
  // {
  //   id: 0,
  //   name: 'Bagangte',
  //   code: 'BG',
  // },
  {
    id: 1,
    name: 'Bulu',
    code: 'BU',
    img: img1,
  },
  {
    id: 2,
    name: 'Bassa',
    code: 'BA',
    img: img2,
  },
  // {
  //   id: 3,
  //   name: 'Douala',
  //   code: 'BL',
  // },
  {
    id: 4,
    name: 'Yemba',
    code: 'YB',
    img: img3,
  },
] // languages

const languages = (stateLanguages = [...defaultLanguages], action) => {
  switch(action.type) {
    case ACTIVATE_LANGUAGE:
      return stateLanguages.map(
        language =>
          language.id === action.id ? { ...language, active:true } : { ...language, active:false }
      )
    default:
      return stateLanguages
  }
}

export default languages
