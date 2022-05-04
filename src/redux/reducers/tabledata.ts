import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
  FetchedTableState,
  Product,
} from '../../types'

const initialState: FetchedTableState = {
  data: [],
  loading: false,
  error: false,
}

export default function products(
  state = initialState,
  action: { type: string; payload: Product[] }
): FetchedTableState {
  switch (action.type) {
  case FETCH_PRODUCTS_INIT: {
    return { ...state, loading: true, error: false }
  }

  case FETCH_PRODUCTS_FAILED: {
    return { ...state, error: true, loading: false }
  }

  case FETCH_PRODUCTS_SUCCESS: {
    const newData = action.payload
    return {
      ...state,
      data: [...state.data, ...newData],
      loading: false,
      error: false,
    }
  }
  default:
    return state
  }
}
