import { FETCH_PRODUCTS, ADD_PRODUCTS } from '../../types'

export default function products(state: any = [], action: any): any {
  switch (action.type) {
  case FETCH_PRODUCTS: {
    return state
  }
  case ADD_PRODUCTS: {
    const data = action.payload
    console.log(data)
    console.log(state.products)
    return { ...state, products: state.products.concat(data) }
  }
  default:
    return state
  }
}
