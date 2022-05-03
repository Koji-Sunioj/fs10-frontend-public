import { combineReducers } from 'redux'

import fetchedTable from './products'
import fetchedOne from './product'
import searchTable from './searchtable'

const createRootReducer = () =>
  combineReducers({
    fetchedTable,
    fetchedOne,
    searchTable,
  })

export default createRootReducer
