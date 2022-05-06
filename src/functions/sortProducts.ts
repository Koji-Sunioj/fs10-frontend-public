import { Product } from '../types'

function sort(direction: string, target: string[], array: Product[]) {
  function checkBrackets(target: string[], position: Record<string, any>) {
    let value
    if (target.length === 1) {
      value = position[target[0]]
    } else if (target.length === 2) {
      value = position[target[0]][target[1]]
    }
    return value
  }

  function descending(a: Product, b: Product) {
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

  function ascending(a: Product, b: Product) {
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
