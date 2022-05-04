// Action types
export const FETCH_PRODUCTS_INIT = 'FETCH_PRODUCTS_INIT'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'

export const UPDATE_SEARCH = 'UPDATE_SEARCH'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export type FetchedTableState = {
  data: Product[]
  loading: boolean
  error: boolean
}

export type Product = {
  id: number
  title: string
  description: string
  image: string
  category: string
  price: number
  rating: { rate: number; count: number }
}

export type Cart = Product[] | []

export type SearchTableState = { searchBy: string }

export type AppState = {
  products: FetchedTableState
  tableview: SearchTableState
  cart: Cart
}
