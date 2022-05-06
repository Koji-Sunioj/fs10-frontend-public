import { UPDATE_SEARCH, UPDATE_SORT, SearchTableState } from '../../types'

const initialState: SearchTableState = {
  searchBy: '',
  sortBy: 'title',
  direction: 'descending',
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
  default:
    return state
  }
}
