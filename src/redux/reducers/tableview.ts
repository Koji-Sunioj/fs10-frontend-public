import {
  UPDATE_SEARCH,
  UPDATE_SORT,
  UPDATE_PAGE,
  SearchTableState,
} from '../../types/types'

const initialState: SearchTableState = {
  searchBy: '',
  sortBy: 'rating.rate',
  direction: 'descending',
  page: 1,
}

export default function products(
  state = initialState,
  action: {
    type: string
    payload: SearchTableState
  }
): SearchTableState {
  switch (action.type) {
  case UPDATE_SEARCH: {
    if (typeof action.payload === 'string') {
      return { ...state, searchBy: action.payload }
    } else {
      return state
    }
  }
  case UPDATE_SORT: {
    return {
      ...state,
      sortBy: action.payload.sortBy,
      direction: action.payload.direction,
    }
  }
  case UPDATE_PAGE: {
    return { ...state, page: action.payload.page }
  }

  default:
    return state
  }
}
