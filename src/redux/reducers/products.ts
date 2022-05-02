import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_FAILED,
} from '../../types'

const initialState: any = { data: [], loading: false, error: false }

export default function products(state: any = initialState, action: any): any {
  switch (action.type) {
  case FETCH_PRODUCTS_INIT: {
    return state
  }
  case FETCH_PRODUCTS_LOADING: {
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
