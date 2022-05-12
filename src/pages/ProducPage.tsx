import React from 'react'
import { useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../redux/actions'
import { fetchOneInitiate } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Col, Button, Alert } from 'react-bootstrap'

import Stars from '../components/Stars'
import checkCart from '../utils/checkCart'
import { AppState, FetchedTableState, Cart, Product } from '../types/types'

const ProductPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data }: FetchedTableState = useSelector(
    (state: AppState) => state.products
  )
  let { product, loading, error } = useSelector(
    (state: AppState) => state.productpage
  )
  const cart: Cart = useSelector((state: AppState) => state.cart)
  const dispatch = useDispatch()

  let productInState: Product | null = null

  if ([!data.length, !product, !loading, !error].every(Boolean)) {
    dispatch(fetchOneInitiate(id))
  }

  if (product && data.length === 0) {
    productInState = product
  } else if (data.length > 0) {
    productInState = data.find((item) => item.id === Number(id))!
  }

  return (
    <Container>
      {productInState && (
        <div className="row product">
          <Col style={{ textAlign: 'center', verticalAlign: 'middle' }} md={6}>
            <img
              src={productInState.image}
              className="card-image"
              alt={productInState.title}
            ></img>
          </Col>
          <Col md={6}>
            <h3>{productInState.title}</h3>
            <p>{productInState.description}</p>{' '}
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
            {checkCart(productInState.id, cart) ? (
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(removeFromCart(productInState!))
                }}
              >
                Remove
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch(addToCart(productInState!))
                }}
              >
                Add
              </Button>
            )}
          </Col>
        </div>
      )}
      <div className="row" style={{ textAlign: 'center', top: '50%' }}>
        {loading && (
          <p>
            <strong>...loading</strong>
          </p>
        )}
        {error && <Alert variant="danger">error fetching data :(</Alert>}
      </div>
    </Container>
  )
}

export default ProductPage
