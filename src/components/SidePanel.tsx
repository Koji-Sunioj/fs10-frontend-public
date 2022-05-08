import React from 'react'
import { removeFromCart } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { useState, useEffect } from 'react'
import { SidePanelState, AppState, Product } from '../types/types'

const SidePanel = () => {
  const dispatch = useDispatch()

  const { collapsed }: SidePanelState = useSelector(
    (state: AppState) => state.sidepanel
  )
  const cart: Product[] = useSelector((state: AppState) => state.cart)
  const sum: number = cart.reduce((start, item) => {
    return start + item.price
  }, 0)

  const [windowDimensions, setWindowDimensions] = useState(
    window.innerWidth < 600 ? '-100%' : '-50%'
  )

  const handleResize = () => {
    setWindowDimensions(window.innerWidth < 600 ? '-100%' : '-50%')
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="side-bar"
      style={{ right: collapsed ? windowDimensions : '0%' }}
    >
      <Container>
        {cart &&
          cart.map((item) => (
            <Row key={item.id}>
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
        <Row>
          <p>
            {sum > 0 ? (
              <strong>Total: &euro;{sum.toFixed(2)}</strong>
            ) : (
              <strong>Cart is empty &#129300;</strong>
            )}
          </p>
        </Row>
      </Container>
    </div>
  )
}

export default SidePanel
