import React from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Stars from './Stars'
import { Button } from 'react-bootstrap'

const TableData = ({ values, filter }: any) => {
  const filtered = values.filter(
    (value: any) =>
      value.title.includes(filter) || value.category.includes(filter)
  )

  return (
    <>
      <Table hover variant="light" size="lg">
        <thead>
          <tr>
            <th></th>
            <th>title</th>
            <th>category Name</th>
            <th>price</th>
            <th>rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((value: any) => (
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
                <Button>Add to cart</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default TableData
