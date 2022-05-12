import React from 'react'
import { Button } from 'react-bootstrap'
import { pointers } from '../utils/cssObjects'
import { SearchTableState } from '../types/types'

const sortButton = (
  tableHeader: string,
  filter: SearchTableState,
  isDark: string,
  sortColumns: (tableHeader: string) => void
) => {
  let buttonFill
  filter.sortBy.includes(tableHeader)
    ? (buttonFill = React.createElement(
      'strong',
      {},
      `${tableHeader.split('.')[0] + pointers[filter.direction]}`
    ))
    : (buttonFill = tableHeader.split('.')[0])

  return (
    <th key={tableHeader}>
      <Button
        variant={isDark}
        onClick={() => {
          sortColumns(tableHeader)
        }}
      >
        {buttonFill}
      </Button>
    </th>
  )
}

export default sortButton
