import {
  FETCH_ONE_PRODUCT_INIT,
  FETCH_ONE_PRODUCT_SUCCESS,
  FETCH_ONE_PRODUCT_FAILED,
  FETCH_ONE_PRODUCT_LOADING,
  FetchedOneState,
  Product,
} from '../../types'

const initialState: FetchedOneState = {
  data: null,
  loading: false,
  error: false,
}

export default function product(
  state = initialState,
  action: { type: string; payload: Product }
): FetchedOneState {
  switch (action.type) {
  case FETCH_ONE_PRODUCT_INIT: {
    return state
  }
  case FETCH_ONE_PRODUCT_LOADING: {
    return { ...state, data: null, loading: true, error: false }
  }

  case FETCH_ONE_PRODUCT_FAILED: {
    return { ...state, data: null, loading: false, error: true }
  }

  case FETCH_ONE_PRODUCT_SUCCESS: {
    const newData = action.payload
    return { ...state, error: false, loading: false, data: newData }
  }
  default:
    return state
  }
}
