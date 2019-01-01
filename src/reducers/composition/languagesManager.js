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
  //   img: img1,
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
] // defaultLanguages


/**
 * Manages the language portio of the state
 * - Return languages in the state.
 * - Activate a specific language (while deactivating the rest)
 */
const languagesManager = (stateLanguages = [...defaultLanguages], action) => {
  switch(action.type) {
    case ACTIVATE_LANGUAGE:
      return stateLanguages.map(
        lang => {
          const { language: { id:selectionId } } = action
          return lang.id === selectionId ? { ...lang, active:true } : { ...lang, active:false }
        }
      )
    default:
      return stateLanguages
  }
}


export default languagesManager
