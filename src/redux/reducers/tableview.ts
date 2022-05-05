import { UPDATE_SEARCH, UPDATE_SORT, SearchTableState } from '../../types'

const initialState: SearchTableState = {
  searchBy: '',
  sortBy: 'title',
  direction: 'ascending',
}

export default function products(
  state = initialState,
  action: {
    type: string
    payload: { searchBy: string; sortBy: string; direction: string } | string
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
    console.log(state)
    console.log(action)
    return state
  }
  default:
    return state
  }
}
