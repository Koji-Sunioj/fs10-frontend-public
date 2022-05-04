import { combineReducers } from 'redux'

import tableData from './tabledata'
import productData from './productdata'
import searchTable from './searchtable'

const createRootReducer = () =>
  combineReducers({
    tableData,
    productData,
    searchTable,
  })

export default createRootReducer
