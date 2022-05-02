import {
  FETCH_PRODUCTS,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_FAILED,
} from '../../types'

export const fetchInitiate = () => ({
  type: FETCH_PRODUCTS,
})

export const fetchLoading = () => ({
  type: FETCH_LOADING,
})

export const fetchFailed = () => ({
  type: FETCH_FAILED,
})

export function addProducts(payload: any): any {
  return {
    type: FETCH_SUCCESS,
    payload,
  }
}
