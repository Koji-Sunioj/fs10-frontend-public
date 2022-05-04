import { UPDATE_SEARCH } from '../../types'

export function updateSearch(payload: string) {
  return {
    type: UPDATE_SEARCH,
    payload,
  }
}
