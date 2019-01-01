/**
 * Manage modules in the application
 * (Modules are groups of test questions of a specific nature)
 */
import actionTypes from './../../actions/_actionTypes'
import img1 from './../../media/img-la1.jpg'
import img2 from './../../media/img-la2.jpg'
import img3 from './../../media/img-la3.jpg'

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
  },
  {
    id: 2,
    name: 'Salutations 2',
    img: img3,
  },
  {
    id: 3,
    name: 'Les gens',
    img: img1,
  },
  {
    id: 4,
    name: 'Le present',
    img: img2,
  },
]

const modules = (stateModules = defaultModules, action) => {
  switch(action.type) {
    default:
      return stateModules
  }
}

export default modules
