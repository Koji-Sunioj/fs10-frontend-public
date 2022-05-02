import React from 'react'
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersRequest } from '../redux/actions'

const Home = () => {
  const products: any[] = useSelector((state: any) => state.products)
  const dispatch = useDispatch()
  dispatch(getUsersRequest())

  console.log(products)

  return (
    <>
      <Container style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Welcome to my store</h1>
        <Row style={{ justifyContent: 'center' }}>
          <InputGroup className="mb-3" style={{ width: '70%' }}>
            <InputGroup.Text>Search: </InputGroup.Text>
            <FormControl placeholder="product name, category...." />
          </InputGroup>
        </Row>
      </Container>
    </>
  )
}

export default Home
