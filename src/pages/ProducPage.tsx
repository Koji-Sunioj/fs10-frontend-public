import React from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/actions'
import { fetchOneInitiate } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Col, Button, Alert, Row } from 'react-bootstrap'

import Stars from '../components/Stars'
import checkCart from '../utils/checkCart'
import { AppState, FetchedTableState, Cart } from '../types/types'

/*

please note that this is not finished yet.

*/

const ProductPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data }: FetchedTableState = useSelector(
    (state: AppState) => state.products
  )
  let alt = useSelector((state: AppState) => state.productpage.product)
  const cart: Cart = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()

  let productInState: any

  if (data.length === 0 && !alt) {
    dispatch(fetchOneInitiate(id))
  }

  if (alt && data.length === 0) {
    productInState = alt
  } else if (data.length > 0) {
    productInState = data.find((item) => item.id === Number(id))!
  }

  //= data.find((item) => item.id === Number(id))
  return (
    <Container>
      {productInState && (
        <div className="row product">
          <Col style={{ textAlign: 'center', verticalAlign: 'middle' }} lg={6}>
            <img
              src={productInState.image}
              className="card-image"
              alt={productInState.title}
            ></img>
          </Col>
          <Col lg={6}>
            <h3>{productInState.title}</h3>
            <p>{productInState.description}</p>
            <p>
              <strong>category: </strong>
              {productInState.category}
            </p>
            <p>
              <strong>price: </strong>&euro;{productInState.price.toFixed(2)}
            </p>
            <p>
              {Stars(Number(productInState.rating.rate), productInState.id)} -
              from {productInState.rating.count} reviews{' '}
            </p>
            <Button
              onClick={() => {
                dispatch(addToCart(productInState))
              }}
              disabled={checkCart(productInState.id, cart)}
            >
              Add to Cart
            </Button>
          </Col>
        </div>
      )}
      {!productInState && (
        <Row>
          <Alert variant="danger">error fetching data :(</Alert>{' '}
        </Row>
      )}
    </Container>
  )
}

export default ProductPage
