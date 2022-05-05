import { UPDATE_SEARCH, UPDATE_SORT } from '../../types'

export function updateSearch(payload: string) {
  return {
    type: UPDATE_SEARCH,
    payload,
  }
}

export function updateSort(payload: { searchBy: string; sortBy: string }) {
  return {
    type: UPDATE_SORT,
    payload,
  }
}
