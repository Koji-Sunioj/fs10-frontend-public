import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Button, Dropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useContext } from 'react'

import { ThemeContext } from '../App'
import { sidePanelClose, sidePanelOpen } from '../redux/actions'
import { Cart, AppState, SidePanelState } from '../types'

const AppNav = () => {
  const cart: Cart = useSelector((state: AppState) => state.cart)
  const { collapsed }: SidePanelState = useSelector(
    (state: AppState) => state.sidepanel
  )

  const { isDark, test } = useContext(ThemeContext)

  const dispatch = useDispatch()

  function toggleSidePanel() {
    collapsed ? dispatch(sidePanelOpen()) : dispatch(sidePanelClose())
  }

  return (
    <Navbar sticky="top">
      <Container fluid>
        <Link to={'/'} className="navbar-brand">
          Home
        </Link>
        <Nav style={{ width: '300px', justifyContent: 'space-around' }}>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Change Theme
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as="button"
                onClick={() => {
                  test(true)
                }}
              >
                {isDark ? <strong>Dark</strong> : 'Dark'}
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => {
                  test(false)
                }}
              >
                {!isDark ? <strong>Light</strong> : 'Light'}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="light" onClick={toggleSidePanel}>
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
