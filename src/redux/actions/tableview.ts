import { UPDATE_SEARCH, UPDATE_SORT, UPDATE_PAGE } from '../../types/types'

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

export function updatePage(payload: number) {
  return {
    type: UPDATE_PAGE,
    payload,
  }
}
