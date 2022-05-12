import { Product } from '../types/types'

function filterProducts(data: Product[], filter: string) {
  return data.filter(
    (value: Product) =>
      value.title.toLowerCase().includes(filter.toLowerCase()) ||
      value.category.toLowerCase().includes(filter.toLowerCase())
  )
}

export default filterProducts
