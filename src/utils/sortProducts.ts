import { Product } from '../types/types'

const sort = (direction: string, target: string[], array: Product[]) => {
  const checkBrackets = (target: string[], position: Product) => {
    let value = position[target[0] as keyof Product]
    if (
      typeof value === 'object' &&
      target[1] &&
      value.hasOwnProperty(target[1])
    ) {
      value = value[target[1] as keyof Product['rating']]
    }
    return value
  }

  const descending = (a: Product, b: Product) => {
    let prev = checkBrackets(target, a)
    let next = checkBrackets(target, b)
    if (prev < next) {
      return 1
    }
    if (prev > next) {
      return -1
    }
    return 0
  }

  const ascending = (a: Product, b: Product) => {
    let prev = checkBrackets(target, a)
    let next = checkBrackets(target, b)
    if (prev < next) {
      return -1
    }
    if (prev > next) {
      return 1
    }
    return 0
  }

  if (direction === 'ascending') {
    return array.sort(ascending)
  } else if (direction === 'descending') {
    return array.sort(descending)
  }
}

export default sort
