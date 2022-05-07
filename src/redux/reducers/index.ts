import { combineReducers } from 'redux'

import products from './products'
import tableview from './tableview'
import cart from './cart'
import sidepanel from './sidepanel'
import productpage from './productpage'

const createRootReducer = () =>
  combineReducers({
    products,
    tableview,
    cart,
    sidepanel,
    productpage,
  })

export default createRootReducer
