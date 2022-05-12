import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, InputGroup, Alert } from 'react-bootstrap'
import {
  fetchInitiate,
  updateSearch,
  resetFetchOne,
  updatePage,
} from '../redux/actions'

import pageBack from '../utils/pageBack'
import TableView from '../components/TableView'
import filterProducts from '../utils/filterProducts'
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
    if ([!data.length, !error, !loading].every(Boolean)) {
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
        <Row id="search-bar">
          <h1>Welcome to my store</h1>
          <InputGroup className="mb-3">
            <InputGroup.Text>Search: </InputGroup.Text>
            <input
              placeholder="product name, category...."
              type="search"
              className="form-control"
              value={tableview.searchBy}
              onChange={filterTable}
            ></input>
          </InputGroup>
        </Row>
        <Row>
          {loading && (
            <p style={{ textAlign: 'center' }}>
              <strong>...loading</strong>
            </p>
          )}
          {error && <Alert variant="danger">error fetching data :(</Alert>}
          {data.length > 0 && <TableView values={data!} filter={tableview} />}
        </Row>
      </Container>
    </>
  )
}

export default Home
