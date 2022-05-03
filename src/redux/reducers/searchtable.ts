import { UPDATE_SEARCH, SearchTableState } from '../../types'

const initialState: SearchTableState = { stringFilter: '' }

export default function products(
  state = initialState,
  action: { type: string; payload: string }
) {
  switch (action.type) {
  case UPDATE_SEARCH: {
    return { ...state, stringFilter: action.payload }
  }
  default:
    return state
  }
}
