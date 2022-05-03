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

  if (
    (data !== null && data.id !== Number(id)) ||
    (!data && !error && !loading)
  ) {
    dispatch(fetchOneInitiate(id))
  }
  console.log(data)
  return (
    <Container>
      <Row>
        {error && (
          <p className="error-loading">
            <strong>error parsing data :(</strong>
          </p>
        )}
        {loading && (
          <p className="error-loading">
            <strong>...loading</strong>
          </p>
        )}
        {data && (
          <>
            <Col
              style={{ textAlign: 'center', verticalAlign: 'middle' }}
              lg={6}
            >
              <img
                src={data.image}
                className="card-image"
                alt={data.title}
              ></img>
            </Col>
            <Col lg={6}>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <p>
                <strong>category: </strong>
                {data.category}
              </p>
              <p>
                <strong>price: </strong>&euro;{data.price.toFixed(2)}
              </p>
              <p>
                {Stars(Number(data.rating.rate), data.id)} - from{' '}
                {data.rating.count} reviews{' '}
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