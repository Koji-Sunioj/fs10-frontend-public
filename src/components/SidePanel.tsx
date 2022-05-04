import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { SidePanelState, AppState, Product } from '../types'
import { removeFromCart } from '../redux/actions'

const SidePanel = () => {
  const dispatch = useDispatch()

  const { collapsed }: SidePanelState = useSelector(
    (state: AppState) => state.sidepanel
  )
  const cart: Product[] = useSelector((state: AppState) => state.cart)
  const sum: number = cart.reduce((start, item) => {
    return start + item.price
  }, 0)

  return (
    <div className="side-bar" style={{ right: collapsed ? '-50%' : '0%' }}>
      <Container>
        {cart &&
          cart.map((item) => (
            <Row>
              <Col sm={8}>
                <p>{item.title}</p>
              </Col>
              <Col sm={2}>
                <p>&euro;{item.price.toFixed(2)}</p>
              </Col>
              <Col sm={2}>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(removeFromCart(item))
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        {sum > 0 && (
          <Row>
            <p>
              <strong>Total: &euro;{sum.toFixed(2)}</strong>
            </p>
          </Row>
        )}
      </Container>
    </div>
  )
}

export default SidePanel
