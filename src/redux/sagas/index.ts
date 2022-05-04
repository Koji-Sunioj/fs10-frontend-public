import { all } from 'redux-saga/effects'

import tabledata from './tabledata'
import productdata from './productdata'

export default function* rootSaga() {
  yield all([...tabledata, ...productdata])
}
