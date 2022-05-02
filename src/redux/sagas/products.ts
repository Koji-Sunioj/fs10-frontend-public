import { takeLatest } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'
import {
  FETCH_SUCCESS,
  FETCH_PRODUCTS,
  FETCH_LOADING,
  FETCH_FAILED,
} from '../../types'

function* productsSaga() {
  yield put({ type: FETCH_LOADING })
  try {
    const fetched: any[] = yield fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => json)
    yield put({ type: FETCH_SUCCESS, payload: fetched })
  } catch {
    yield put({ type: FETCH_FAILED })
  }
}

export default [takeLatest(FETCH_PRODUCTS, productsSaga)]
