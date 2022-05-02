import { takeLatest } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'
import { FETCH_PRODUCTS } from '../../types'
import { addProducts } from '../actions'

function* productsSaga() {
  try {
    const fetched: any[] = yield fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => json)
    yield put(addProducts(fetched))
  } catch {
    yield console.log('error')
  }
}

export default [takeLatest(FETCH_PRODUCTS, productsSaga)]
