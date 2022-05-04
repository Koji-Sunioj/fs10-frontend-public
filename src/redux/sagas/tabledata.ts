import { put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga/effects'

import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  Product,
} from '../../types'

function* productsSaga() {
  try {
    const fetched: Promise<Product[]> = yield fetch(
      'https://fakestoreapi.com/products/'
    )
      .then((res) => res.json())
      .then((json) => json)
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: fetched })
  } catch {
    yield put({ type: FETCH_PRODUCTS_FAILED })
  }
}

export default [takeLatest(FETCH_PRODUCTS_INIT, productsSaga)]
