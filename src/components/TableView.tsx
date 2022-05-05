import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import checkCart from '../functions/checkCart'
import { addToCart } from '../redux/actions'
import Stars from './Stars'
import { Product, Cart, AppState } from '../types'

type TablePropType = {
  values: Product[]
  filter: string
}

const TableView = ({ values, filter }: TablePropType) => {
  const dispatch = useDispatch()

  const cart: Cart = useSelector((state: AppState) => state.cart)

  const filtered = values.filter(
    (value: Product) =>
      value.title.toLowerCase().includes(filter) ||
      value.category.includes(filter)
  )

  return (
    <>
      <Table hover variant="light" size="sm">
        <thead>
          <tr>
            <th></th>
            <th>title</th>
            <th>category name</th>
            <th>price</th>
            <th>rating</th>
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
    </>
  )
}

export default TableView
