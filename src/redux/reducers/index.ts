import { combineReducers } from 'redux'

import products from './products'
import tableview from './tableview'
import cart from './cart'

const createRootReducer = () =>
  combineReducers({
    products,
    tableview,
    cart,
  })

export default createRootReducer
