import {
  FETCH_ONE_PRODUCT_INIT,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_FAILED,
  FETCH_ONE_PRODUCT_LOADING,
  Product,
} from '../../types'

export const fetchOneInitiate = (productId: string) => ({
  type: FETCH_ONE_PRODUCT_INIT,
  payload: productId,
})

export const fetchOneLoading = () => ({
  type: FETCH_ONE_PRODUCT_LOADING,
})

export const fetchOneFailed = () => ({
  type: FETCH_ONE_PRODUCT_FAILED,
})

export function fetchOneProduct(payload: Product) {
  return {
    type: FETCH_ONE_PRODUCT_SUCCESS,
    payload,
  }
}
