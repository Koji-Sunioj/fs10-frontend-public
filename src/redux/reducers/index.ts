import { combineReducers } from 'redux'

import products from './products'
import tableview from './tableview'
import cart from './cart'
import sidepanel from './sidepanel'

const createRootReducer = () =>
  combineReducers({
    products,
    tableview,
    cart,
    sidepanel,
  })

export default createRootReducer
