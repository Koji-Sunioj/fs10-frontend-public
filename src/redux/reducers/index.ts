import { combineReducers } from 'redux'

import products from './products'
import product from './product'
import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    products,
  })

export default createRootReducer
