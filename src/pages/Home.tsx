import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchInitiate, updateSearch } from '../redux/actions'
import { Container, Row, InputGroup, FormControl, Alert } from 'react-bootstrap'

import TableView from '../components/TableView'
import { AppState, FetchedTableState, SearchTableState } from '../types'

const Home = () => {
  const { data, loading, error }: FetchedTableState = useSelector(
    (state: AppState) => state.products
  )

  const tableview: SearchTableState = useSelector(
    (state: AppState) => state.tableview
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
              value={tableview.searchBy}
            />
          </InputGroup>
          {loading && (
            <p>
              <strong>...loading</strong>
            </p>
          )}
          {error && <Alert variant="danger">error fetching data :(</Alert>}
        </Row>
        <Row>
          {data.length > 0 && <TableView values={data!} filter={tableview} />}
        </Row>
      </Container>
    </>
  )
}

export default Home
