import { put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga/effects'

import {
  FETCH_ONE_PRODUCT_INIT,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_FAILED,
  FETCH_ONE_PRODUCT_LOADING,
  Product,
} from '../../types'

function* productSaga(action: { type: string; payload: Product }) {
  yield put({ type: FETCH_ONE_PRODUCT_LOADING })
  try {
    const fetched: Promise<Product> = yield fetch(
      `https://fakestoreapi.com/products/${action.payload}`
    )
      .then((res) => res.json())
      .then((json) => json)
    yield put({ type: FETCH_ONE_PRODUCT_SUCCESS, payload: fetched })
  } catch {
    yield put({ type: FETCH_ONE_PRODUCT_FAILED })
  }
}

export default [takeLatest(FETCH_ONE_PRODUCT_INIT, productSaga)]
