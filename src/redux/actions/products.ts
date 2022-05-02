import { FETCH_PRODUCTS, ADD_PRODUCTS } from '../../types'

export const getUsersRequest = () => ({
  type: FETCH_PRODUCTS,
})

export function addProducts(payload: any): any {
  return {
    type: ADD_PRODUCTS,
    payload,
  }
}
