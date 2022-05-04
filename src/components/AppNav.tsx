import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Button, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Cart, AppState } from '../types'

const AppNav = () => {
  const cart: Cart = useSelector((state: AppState) => state.cart)

  return (
    <Navbar>
      <Container fluid>
        <Link to={'/'} className="navbar-brand">
          Home
        </Link>
        <Nav style={{ width: '300px', justifyContent: 'space-between' }}>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Change Theme
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Dark</Dropdown.Item>
              <Dropdown.Item>Light</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="light">
            <i className="bi bi-cart"></i>
            <span className="cart-notification">
              {cart.length > 0 && cart.length}
            </span>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppNav
