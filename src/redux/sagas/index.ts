import { all } from 'redux-saga/effects'

import products from './products'
import productpage from './productpage'

export default function* rootSaga() {
  yield all([...products, ...productpage])
}
