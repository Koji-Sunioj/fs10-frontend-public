import { all } from 'redux-saga/effects'

import products from './products'
import product from './product'

export default function* rootSaga() {
  yield all([...products, ...product])
}
