import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, updateSort, updatePage } from '../redux/actions'
import { Button, Table, ButtonGroup } from 'react-bootstrap'

import Stars from './Stars'
import pageBack from '../utils/pageBack'
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
  let filtered = values.filter(
    (value: Product) =>
      value.title.toLowerCase().includes(filter.searchBy.toLowerCase()) ||
      value.category.toLowerCase().includes(filter.searchBy.toLowerCase())
  )

  sort(filter.direction, filter.sortBy.split('.'), filtered)

  function setPage(page: number) {
    dispatch(updatePage({ page: page }))
  }

  const pages = []
  for (let i = 0; i < Math.ceil(filtered.length / 5); i++) {
    pages.push(i + 1)
  }
  filtered = pageBack(filtered, filter.page, setPage)

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

  const sortButton = (th: string) => {
    let buttonFill
    filter.sortBy.includes(th)
      ? (buttonFill = React.createElement(
        'strong',
        {},
        `${th.split('.')[0] + pointers[filter.direction]}`
      ))
      : (buttonFill = th.split('.')[0])

    return (
      <th key={th}>
        <Button variant={isDark} onClick={sortColumns} value={th}>
          {buttonFill}
        </Button>
      </th>
    )
  }

  return (
    <>
      <Table hover variant={isDark} style={{ backgroundColor: 'black' }}>
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
                  Add
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <ButtonGroup aria-label="Basic example" id="paginator">
          {pages.map((subset) => (
            <Button
              key={subset}
              variant={isDark}
              onClick={() => {
                dispatch(updatePage({ page: subset }))
              }}
              disabled={subset === filter.page}
            >
              {subset}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </>
  )
}

export default TableView
