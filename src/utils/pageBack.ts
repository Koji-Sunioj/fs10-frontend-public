import { Product } from '../types/types'

function pageBack(
  filtered: Product[],
  page: number,
  setPage: (page: number) => void
) {
  if (filtered.slice(page * 5 - 5, page * 5).length === 0) {
    for (let i = page; i > 0; i--) {
      if (filtered.slice(i * 5 - 5, i * 5).length > 0) {
        filtered = filtered.slice(i * 5 - 5, i * 5)
        setPage(i)
        break
      }
    }
  } else {
    filtered = filtered.slice(page * 5 - 5, page * 5)
  }
  return filtered
}

export default pageBack
