import React from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Col, Button, Alert, Row } from 'react-bootstrap'

import Stars from '../components/Stars'
import checkCart from '../utils/checkCart'
import { AppState, FetchedTableState, Cart } from '../types'

const ProductPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data }: FetchedTableState = useSelector(
    (state: AppState) => state.products
  )

  const cart: Cart = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()

  const product = data.find((item) => item.id === Number(id))

  return (
    <Container>
      {product && (
        <div className="row product">
          <Col style={{ textAlign: 'center', verticalAlign: 'middle' }} lg={6}>
            <img
              src={product.image}
              className="card-image"
              alt={product.title}
            ></img>
          </Col>
          <Col lg={6}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>
              <strong>category: </strong>
              {product.category}
            </p>
            <p>
              <strong>price: </strong>&euro;{product.price.toFixed(2)}
            </p>
            <p>
              {Stars(Number(product.rating.rate), product.id)} - from{' '}
              {product.rating.count} reviews{' '}
            </p>
            <Button
              onClick={() => {
                dispatch(addToCart(product))
              }}
              disabled={checkCart(product.id, cart)}
            >
              Add to Cart
            </Button>
          </Col>
        </div>
      )}
      {!product && (
        <Row>
          <Alert variant="danger">error fetching data :(</Alert>{' '}
        </Row>
      )}
    </Container>
  )
}

export default ProductPage
