import React from 'react'
import { Container, Row, InputGroup, FormControl, Alert } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchInitiate } from '../redux/actions'
import TableData from '../components/TableData'

const Home = () => {
  const { data, loading, error }: any = useSelector(
    (state: any) => state.fetchedTable
  )
  const dispatch = useDispatch()
  if (!data.length && !error && !loading) {
    dispatch(fetchInitiate())
  }
  return (
    <>
      <Container>
        <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
          <h1>Welcome to my store</h1>
          <InputGroup className="mb-3" style={{ width: '70%' }}>
            <InputGroup.Text>Search: </InputGroup.Text>
            <FormControl placeholder="product name, category...." />
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
        <Row>{data.length > 0 && <TableData values={data!} />}</Row>
      </Container>
    </>
  )
}

export default Home
