import { Product } from '../types/types'

function pageBack(
  filtered: Product[],
  page: number,
  setPage: (page: number) => void
) {
  let currentPage = filtered.slice(page * 5 - 5, page * 5)
  if (currentPage.length === 0) {
    for (let i = page; i > 0; i--) {
      const prevPage = filtered.slice(i * 5 - 5, i * 5)
      if (prevPage.length > 0) {
        filtered = prevPage
        setPage(i)
        break
      }
    }
  } else {
    filtered = currentPage
  }
  return filtered
}

export default pageBack
