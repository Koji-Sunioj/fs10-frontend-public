import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  updateSort,
  updatePage,
  removeFromCart,
} from '../redux/actions'
import { Button, Table, ButtonGroup } from 'react-bootstrap'

import Stars from './Stars'
import SortButton from './SortButton'
import { ThemeContext } from '../App'
import sort from '../utils/sortProducts'
import checkCart from '../utils/checkCart'
import filterProducts from '../utils/filterProducts'
import { Product, Cart, AppState, SearchTableState } from '../types/types'

type TablePropType = {
  values: Product[]
  filter: SearchTableState
}

const TableView = ({ values, filter }: TablePropType) => {
  const dispatch = useDispatch()
  const cart: Cart = useSelector((state: AppState) => state.cart)
  const { isDark } = useContext(ThemeContext)

  let filtered = filterProducts(values, filter.searchBy)
  sort(filter.direction, filter.sortBy.split('.'), filtered)
  const pages = []
  for (let i = 0; i < Math.ceil(filtered.length / 5); i++) {
    pages.push(i + 1)
  }
  filtered = filtered.slice(filter.page * 5 - 5, filter.page * 5)

  const sortColumns = (tableHeader: string) => {
    if (tableHeader === filter.sortBy) {
      let direction =
        filter.direction === 'descending' ? 'ascending' : 'descending'
      dispatch(updateSort({ sortBy: filter.sortBy, direction: direction }))
    } else {
      dispatch(updateSort({ sortBy: tableHeader, direction: 'descending' }))
    }
  }

  return (
    <>
      {filtered.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          <strong>no results found</strong>
        </p>
      ) : (
        <>
          <Table hover variant={isDark} hidden={filtered.length === 0}>
            <thead>
              <tr>
                <th></th>
                {['title', 'category', 'price', 'rating.rate'].map((th) => (
                  <SortButton
                    tableHeader={th}
                    filter={filter}
                    isDark={isDark}
                    sortColumns={sortColumns}
                  />
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((value) => (
                <tr key={value.id}>
                  <td>
                    <img
                      className="img"
                      src={value.image}
                      alt={value.title}
                    ></img>
                  </td>
                  <td className="title-column">
                    <Link to={'products/' + value.id}>{value.title}</Link>
                  </td>
                  <td>{value.category}</td>
                  <td>&euro;{value.price.toFixed(2)}</td>
                  <td>{Stars(Number(value.rating.rate), value.id)}</td>
                  <td className="button-column">
                    {checkCart(value.id, cart) ? (
                      <Button
                        variant="danger"
                        onClick={() => {
                          dispatch(removeFromCart(value))
                        }}
                      >
                        Remove
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          dispatch(addToCart(value))
                        }}
                      >
                        Add
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div id="paginator">
            <ButtonGroup>
              {pages.map((subset) => (
                <Button
                  key={subset}
                  variant={isDark}
                  onClick={() => {
                    dispatch(updatePage(subset))
                  }}
                  disabled={subset === filter.page}
                >
                  {subset}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </>
      )}
    </>
  )
}

export default TableView
