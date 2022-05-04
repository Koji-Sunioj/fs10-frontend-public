import { Product } from '../types'

const checkCart = (id: number, cart: Product[]): boolean => {
  const checkCart = cart.find((cart) => cart.id === id)
  let inCart
  checkCart ? (inCart = true) : (inCart = false)
  return inCart
}
export default checkCart
