import {
  FETCH_PRODUCTPAGE_INIT,
  FETCH_PRODUCTPAGE_SUCCESS,
  FETCH_PRODUCTPAGE_FAILED,
  FETCH_PRODUCTPAGE_RESET,
  Product,
} from '../../types/types'

export const fetchOneInitiate = (payload: string) => ({
  type: FETCH_PRODUCTPAGE_INIT,
  payload,
})

export const fetchOneFailed = () => ({
  type: FETCH_PRODUCTPAGE_FAILED,
})

export const resetFetchOne = () => ({
  type: FETCH_PRODUCTPAGE_RESET,
})

export function addOneProduct(payload: Product) {
  return {
    type: FETCH_PRODUCTPAGE_SUCCESS,
    payload,
  }
}
