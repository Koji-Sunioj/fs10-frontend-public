// Action types
export const FETCH_PRODUCTS_INIT = 'FETCH_PRODUCTS_INIT'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'

export const FETCH_PRODUCTPAGE_INIT = 'FETCH_PRODUCTPAGE_INIT'
export const FETCH_PRODUCTPAGE_SUCCESS = 'FETCH_PRODUCTPAGE_SUCCESS'
export const FETCH_PRODUCTPAGE_FAILED = 'FETCH_PRODUCTPAGE_FAILED'
export const FETCH_PRODUCTPAGE_RESET = 'FETCH_PRODUCTPAGE_RESET'

export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const UPDATE_SORT = 'UPDATE_SORT'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const SIDEPANEL_CLOSE = 'SIDEPANEL_CLOSE'
export const SIDEPANEL_OPEN = 'SIDEPANEL_OPEN'

export type FetchedTableState = {
  data: Product[]
  loading: boolean
  error: boolean
}

export type FetchedOneState = {
  product: Product | null
  loading: boolean
  error: boolean
}

export type gen = { rate: number; count: number }

export type Product = {
  id: number
  title: string
  description: string
  image: string
  category: string
  price: number
  rating: { rate: number; count: number }
}

export type SidePanelState = {
  collapsed: boolean
}

export type Cart = Product[] | []

export type SearchTableState = {
  searchBy: string
  sortBy: string
  direction: string
}

export type AppState = {
  products: FetchedTableState
  tableview: SearchTableState
  cart: Cart
  sidepanel: SidePanelState
  productpage: FetchedOneState
}

export type theme = 'light' | 'dark'

export type ThemeContextType = {
  isDark: theme
  changeTheme: (theme: 'light' | 'dark') => void
}

type color = '#212529' | 'white' | 'black' | '#FFEBCD' | '#E9ECEF'

export type ThemeObjectTypes = {
  dark: { [key: string]: color }
  light: { [key: string]: color }
}

export type PointerProps = {
  [key: string]: string
  ascending: string
  descending: string
}
