import {
  FETCH_PRODUCTPAGE_INIT,
  FETCH_PRODUCTPAGE_SUCCESS,
  FETCH_PRODUCTPAGE_FAILED,
  FetchedOneState,
  Product,
} from '../../types/types'

const initialState: FetchedOneState = {
  product: null,
  loading: false,
  error: false,
}

export default function productpage(
  state = initialState,
  action: { type: string; payload: Product }
): FetchedOneState {
  switch (action.type) {
  case FETCH_PRODUCTPAGE_INIT: {
    console.log('init reducer', action.payload)
    return { ...state, loading: true, error: false }
  }

  case FETCH_PRODUCTPAGE_FAILED: {
    return { ...state, error: true, loading: false }
  }

  case FETCH_PRODUCTPAGE_SUCCESS: {
    const newData = action.payload
    return {
      ...state,
      product: newData,
      loading: false,
      error: false,
    }
  }
  default:
    return state
  }
}
