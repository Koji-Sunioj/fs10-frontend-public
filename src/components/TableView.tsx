import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, updateSort } from '../redux/actions'

import Stars from './Stars'
import { ThemeContext } from '../App'
import sort from '../utils/sortProducts'
import checkCart from '../utils/checkCart'
import { pointers } from '../utils/cssObjects'
import { Product, Cart, AppState, SearchTableState } from '../types/types'

type TablePropType = {
  values: Product[]
  filter: SearchTableState
}

const TableView = ({ values, filter }: TablePropType) => {
  const dispatch = useDispatch()
  const cart: Cart = useSelector((state: AppState) => state.cart)
  const { isDark } = useContext(ThemeContext)
  const filtered = values.filter(
    (value: Product) =>
      value.title.toLowerCase().includes(filter.searchBy) ||
      value.category.includes(filter.searchBy)
  )

  sort(filter.direction, filter.sortBy.split('.'), filtered)

  const sortColumns = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targeted = event.currentTarget.value
    if (targeted === filter.sortBy) {
      let direction =
        filter.direction === 'descending' ? 'ascending' : 'descending'

      dispatch(updateSort({ sortBy: filter.sortBy, direction: direction }))
    } else {
      dispatch(
        updateSort({
          sortBy: event.currentTarget.value,
          direction: 'descending',
        })
      )
    }
  }

  function sortButton(th: string) {
    if (filter.sortBy.includes(th)) {
      let symbol: string = pointers[filter.direction]
      return (
        <th key={th}>
          <Button variant={isDark} onClick={sortColumns} value={th}>
            {th.split('.')[0]}
            {symbol}
          </Button>
        </th>
      )
    } else {
      return (
        <th key={th}>
          <Button variant={isDark} onClick={sortColumns} value={th}>
            {th.split('.')[0]}
          </Button>
        </th>
      )
    }
  }

  return (
    <Table responsive hover variant={isDark} size="sm">
      <thead>
        <tr>
          <th></th>
          {['title', 'category', 'price', 'rating.rate'].map((th) =>
            sortButton(th)
          )}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filtered.map((value) => (
          <tr key={value.id}>
            <td>
              <img className="img" src={value.image} alt={value.title}></img>
            </td>
            <td className="title-column">
              <Link to={'products/' + value.id}>{value.title}</Link>
            </td>
            <td>{value.category}</td>
            <td>&euro;{value.price.toFixed(2)}</td>
            <td>{Stars(Number(value.rating.rate), value.id)}</td>
            <td>
              <Button
                onClick={() => {
                  dispatch(addToCart(value))
                }}
                disabled={checkCart(value.id, cart)}
              >
                Add to cart
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default TableView
