import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchInitiate,
  updateSearch,
  resetFetchOne,
  updatePage,
} from '../redux/actions'
import { Container, Row, InputGroup, FormControl, Alert } from 'react-bootstrap'

import TableView from '../components/TableView'
import filterProducts from '../utils/filterProducts'
import pageBack from '../utils/pageBack'
import { AppState, FetchedTableState, SearchTableState } from '../types/types'

const Home = () => {
  const { data, loading, error }: FetchedTableState = useSelector(
    (state: AppState) => state.products
  )

  const tableview: SearchTableState = useSelector(
    (state: AppState) => state.tableview
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (!data.length && !error && !loading) {
      dispatch(fetchInitiate())
      dispatch(resetFetchOne())
    }
  }, [data, loading, error, dispatch])

  const filterTable = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputString = event.currentTarget.value
    dispatch(updateSearch(inputString))
    const filtered = filterProducts(data, inputString)
    const rightpage = pageBack(filtered, tableview.page)
    if (rightpage !== tableview.page) {
      dispatch(updatePage(rightpage!))
    }
  }

  return (
    <>
      <Container>
        <Row
          id="search-bar"
          style={{ justifyContent: 'center', textAlign: 'center' }}
        >
          <h1>Welcome to my store</h1>
          <InputGroup className="mb-3">
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
