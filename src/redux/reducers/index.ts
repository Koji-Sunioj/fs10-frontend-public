import { combineReducers } from 'redux'

import fetchedTable from './products'
import fetchedOne from './product'

const createRootReducer = () =>
  combineReducers({
    fetchedTable,
    fetchedOne,
  })

export default createRootReducer
