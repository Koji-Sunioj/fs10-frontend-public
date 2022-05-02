import { takeLatest, select } from 'redux-saga/effects'

import { ADD_PRODUCT, AddProductAction } from '../../types'

function* doSomethingWhenAddingProduct(action: AddProductAction) {
  const state = select()
  console.log(state)
  yield console.log(action)
}

export default [takeLatest(ADD_PRODUCT, doSomethingWhenAddingProduct)]
