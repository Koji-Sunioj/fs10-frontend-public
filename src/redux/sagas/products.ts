import { takeLatest } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'
import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_FAILED,
} from '../../types'

function* productsSaga() {
  yield put({ type: FETCH_PRODUCTS_LOADING })
  try {
    const fetched: any[] = yield fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => json)
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: fetched })
  } catch {
    yield put({ type: FETCH_PRODUCTS_FAILED })
  }
}

export default [takeLatest(FETCH_PRODUCTS_INIT, productsSaga)]
