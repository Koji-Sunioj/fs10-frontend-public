import { UPDATE_SEARCH } from '../../types'

const initialState: any = { stringFilter: '' }

export default function products(state: any = initialState, action: any): any {
  switch (action.type) {
  case UPDATE_SEARCH: {
    return { ...state, stringFilter: action.payload }
  }
  default:
    return state
  }
}
