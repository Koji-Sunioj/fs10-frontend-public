import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga/effects'

import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  Product,
} from '../../types'

async function productsFetch(url: string): Promise<Product[]> {
  return await fetch(url)
    .then((res) => res.json())
    .then((json) => json)
}

function* productsSaga() {
  try {
    const fetched: Product[] = yield call(
      productsFetch,
      'https://fakestoreapi.com/products/'
    )
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: fetched })
  } catch {
    yield put({ type: FETCH_PRODUCTS_FAILED })
  }
}

export default [takeLatest(FETCH_PRODUCTS_INIT, productsSaga)]
