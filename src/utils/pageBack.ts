import { Product } from '../types/types'

function pageBack(data: Product[], page: number) {
  let currentPage = data.slice(page * 5 - 5, page * 5)
  let rightPage = page
  if (currentPage.length === 0) {
    for (let i = page; i > 0; i--) {
      const prevPage = data.slice(i * 5 - 5, i * 5)
      if (prevPage.length > 0) {
        rightPage = i
        break
      }
    }
  }
  return rightPage
}

export default pageBack
