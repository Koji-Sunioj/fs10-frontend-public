import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  Product,
} from '../../types/types'

export const fetchInitiate = () => ({
  type: FETCH_PRODUCTS_INIT,
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
