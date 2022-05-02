import React from 'react'
import Table from 'react-bootstrap/Table'

const TableData = ({ values }: any) => {
  return (
    <>
      <Table variant="light" size="lg">
        <tr>
          <th></th>
          <th>title</th>
          <th>category Name</th>
          <th>price</th>
          <th>rating</th>
        </tr>
        <tbody>
          {values.map((value: any) => (
            <tr>
              <td>
                <img className="img" src={value.image} alt={value.title}></img>
              </td>
              <td className="title-column">{value.title}</td>
              <td>{value.category}</td>
              <td>&euro;{value.price.toFixed(2)}</td>
              <td>{value.rating.rate.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default TableData
