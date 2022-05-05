import { Product } from '../types'

type ArrayPointer = { [key: string]: string | number } | { [key: string]: {} }

function sort(direction: string, target: string[], array: Product[]) {
  function descending(a: ArrayPointer, b: ArrayPointer) {
    if (target.length === 1) {
      if (a[target[0]] < b[target[0]]) {
        return 1
      }
      if (a[target[0]] > b[target[0]]) {
        return -1
      }
    }

    return 0
  }

  function ascending(a: ArrayPointer, b: ArrayPointer) {
    if (target.length === 1) {
      if (a[target[0]] < b[target[0]]) {
        return -1
      }
      if (a[target[0]] > b[target[0]]) {
        return 1
      }
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
