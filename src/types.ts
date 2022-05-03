// Action types
export const FETCH_PRODUCTS_INIT = 'FETCH_PRODUCTS_INIT'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'
export const FETCH_PRODUCTS_LOADING = 'FETCH_PRODUCTS_LOADING'

export const FETCH_ONE_PRODUCT_INIT = 'FETCH_ONE_PRODUCT_INIT'
export const FETCH_ONE_PRODUCT_SUCCESS = 'FETCH_ONE_PRODUCT_SUCCESS'
export const FETCH_ONE_PRODUCT_FAILED = 'FETCH_ONE_PRODUCT_FAILED'
export const FETCH_ONE_PRODUCT_LOADING = 'FETCH_ONE_PRODUCT_LOADING'

export const UPDATE_SEARCH = 'UPDATE_SEARCH'

export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}
// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  products: any[]
}
