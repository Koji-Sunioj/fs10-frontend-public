import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchInitiate, updateSearch } from '../redux/actions'
import { Container, Row, InputGroup, FormControl, Alert } from 'react-bootstrap'

import TableData from '../components/TableData'
import { AppState, FetchedTableState, SearchTableState } from '../types'

const Home = () => {
  const { data, loading, error }: FetchedTableState = useSelector(
    (state: AppState) => state.fetchedTable
  )
  const { stringFilter }: SearchTableState = useSelector(
    (state: AppState) => state.searchTable
  )

  const dispatch = useDispatch()
  if (!data.length && !error && !loading) {
    dispatch(fetchInitiate())
  }

  const filterTable = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearch(event.currentTarget.value))
  }

  return (
    <>
      <Container>
        <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
          <h1>Welcome to my store</h1>
          <InputGroup className="mb-3" style={{ width: '70%' }}>
            <InputGroup.Text>Search: </InputGroup.Text>
            <FormControl
              onChange={filterTable}
              placeholder="product name, category...."
              value={stringFilter}
            />
          </InputGroup>
          <div style={{ width: '50%' }}>
            {loading && (
              <p>
                <strong>...loading</strong>
              </p>
            )}
            {error && <Alert variant="danger">error fetching data :(</Alert>}
          </div>
        </Row>
        <Row>
          {data.length > 0 && (
            <TableData values={data!} filter={stringFilter} />
          )}
        </Row>
      </Container>
    </>
  )
}

export default Home
