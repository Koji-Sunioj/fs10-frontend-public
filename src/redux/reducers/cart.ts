import { ADD_TO_CART, REMOVE_FROM_CART, Product, Cart } from '../../types'

const initialState: Cart = []
export default function productData(
  state = initialState,
  action: { type: string; payload: Product }
): Cart {
  switch (action.type) {
  case ADD_TO_CART: {
    const product = action.payload
    return [...state, product]
  }
  case REMOVE_FROM_CART: {
    return state
  }

  default:
    return state
  }
}
