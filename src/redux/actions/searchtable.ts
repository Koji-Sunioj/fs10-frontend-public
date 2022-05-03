import { UPDATE_SEARCH } from '../../types'

export function updateSearch(payload: any): any {
  return {
    type: UPDATE_SEARCH,
    payload,
  }
}
