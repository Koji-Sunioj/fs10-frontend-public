import { ADD_TO_CART, REMOVE_FROM_CART, Product } from '../../types'

export function addToCart(payload: Product) {
  return {
    type: ADD_TO_CART,
    payload,
  }
}

export const removeFromCart = (productId: string) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
})
