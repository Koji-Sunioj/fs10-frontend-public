import { all } from 'redux-saga/effects'

import tabledata from './tabledata'

export default function* rootSaga() {
  yield all([...tabledata])
}
