import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga/effects'

import {
  FETCH_PRODUCTPAGE_INIT,
  FETCH_PRODUCTPAGE_SUCCESS,
  FETCH_PRODUCTPAGE_FAILED,
  Product,
} from '../../types/types'

async function productsFetch(url: string): Promise<Product> {
  return await fetch(url)
    .then((res) => res.json())
    .then((json) => json)
}

function* productPageSaga(action: { type: string; payload: string }) {
  try {
    const fetched: Product = yield call(
      productsFetch,
      `https://fakestoreapi.com/products/${action.payload}`
    )
    yield put({ type: FETCH_PRODUCTPAGE_SUCCESS, payload: fetched })
  } catch {
    yield put({ type: FETCH_PRODUCTPAGE_FAILED })
  }
}

export default [takeLatest(FETCH_PRODUCTPAGE_INIT, productPageSaga)]
