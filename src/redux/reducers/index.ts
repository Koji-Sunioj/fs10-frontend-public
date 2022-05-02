import { combineReducers } from 'redux'

import fetched from './products'

const createRootReducer = () =>
  combineReducers({
    fetched,
  })

export default createRootReducer
