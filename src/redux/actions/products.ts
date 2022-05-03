import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_FAILED,
  Product,
} from '../../types'

export const fetchInitiate = () => ({
  type: FETCH_PRODUCTS_INIT,
})

export const fetchLoading = () => ({
  type: FETCH_PRODUCTS_LOADING,
})

export const fetchFailed = () => ({
  type: FETCH_PRODUCTS_FAILED,
})

export function addProducts(payload: Product[]) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload,
  }
}
