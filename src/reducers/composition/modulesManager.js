/**
 * Manage modules in the application
 * (Modules are groups of test questions of a specific nature)
 */
import actionTypes from './../../actions/_actionTypes'
import img1 from './../../media/img-la1.jpg'
import img2 from './../../media/img-la2.jpg'
import img3 from './../../media/img-la3.jpg'
const {
  ACTIVATE_MODULE,
} = actionTypes

const defaultModules = [
  {
    id: 0,
    name: 'Introduction',
    img: img1,
  },
  {
    id: 1,
    name: 'Salutations 1',
    img: img2,
    disabled: true,
  },
  {
    id: 2,
    name: 'Salutations 2',
    img: img3,
    disabled: true,
  },
  {
    id: 3,
    name: 'Les gens',
    img: img1,
    disabled: true,
  },
  // {
  //   id: 4,
  //   name: 'Le present',
  //   img: img2,
  //   disabled: true,
  // },
]

const modulesManager = (stateModules = defaultModules, action) => {
  switch(action.type) {
    case ACTIVATE_MODULE:
      return stateModules.map(
        mod => {
          const { module: { id:selectionId } } = action
          return mod.id === selectionId ? { ...mod, active:true } : { ...mod, active:false }
        }
      )
    default:
      return stateModules
  }
}

export default modulesManager
