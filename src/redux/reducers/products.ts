import {
  FETCH_PRODUCTS,
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_FAILED,
} from '../../types'

const initialState: any = { data: [], loading: false }

export default function products(state: any = initialState, action: any): any {
  switch (action.type) {
  case FETCH_PRODUCTS: {
    return state
  }
  case FETCH_LOADING: {
    return { ...state, loading: true, error: false }
  }

  case FETCH_FAILED: {
    return { ...state, error: true, loading: false }
  }

  case FETCH_SUCCESS: {
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
