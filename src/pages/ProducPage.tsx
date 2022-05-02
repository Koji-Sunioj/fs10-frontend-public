import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOneInitiate } from '../redux/actions'
import Stars from '../components/Stars'

const ProductPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading, error }: any = useSelector(
    (state: any) => state.fetchedOne
  )
  const dispatch = useDispatch()
  if (!data && !error && !loading) {
    dispatch(fetchOneInitiate(id))
  }
  console.log(data)
  return (
    <Container>
      <Row>
        {data && (
          <>
            <Col style={{ textAlign: 'center' }} lg={6}>
              <img
                src={data.image}
                className="card-image"
                alt={data.title}
              ></img>
            </Col>
            <Col lg={6}>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <p>{data.category}</p>
              <p>{data.price}</p>
              <p>
                {Stars(data.rating.rate)} - from {data.rating.count} reviews{' '}
              </p>
              <Button>Add to Cart</Button>
            </Col>
          </>
        )}
      </Row>
    </Container>
  )
}

export default ProductPage
