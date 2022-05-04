import { combineReducers } from 'redux'

import tableData from './tabledata'
import searchTable from './searchtable'
import cart from './cart'

const createRootReducer = () =>
  combineReducers({
    tableData,
    searchTable,
    cart,
  })

export default createRootReducer
