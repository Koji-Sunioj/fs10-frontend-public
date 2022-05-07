import { UPDATE_SEARCH, UPDATE_SORT } from '../../types/types'

export function updateSearch(payload: string) {
  return {
    type: UPDATE_SEARCH,
    payload,
  }
}

export function updateSort(payload: { direction: string; sortBy: string }) {
  return {
    type: UPDATE_SORT,
    payload,
  }
}
