import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { sidePanelClose, sidePanelOpen } from '../redux/actions'
import { Nav, Navbar, Container, Button, Dropdown } from 'react-bootstrap'

import { ThemeContext } from '../App'
import { Cart, AppState, SidePanelState } from '../types/types'

const AppNav = () => {
  const cart: Cart = useSelector((state: AppState) => state.cart)
  const { collapsed }: SidePanelState = useSelector(
    (state: AppState) => state.sidepanel
  )

  const { isDark, changeTheme } = useContext(ThemeContext)

  const dispatch = useDispatch()

  const toggleSidePanel = () => {
    collapsed ? dispatch(sidePanelOpen()) : dispatch(sidePanelClose())
  }

  return (
    <Navbar sticky="top" bg={isDark} variant={isDark}>
      <Container fluid>
        <Link to={'/'} className="navbar-brand">
          Home
        </Link>
        <Nav style={{ width: '300px', justifyContent: 'space-around' }}>
          <Dropdown>
            <Dropdown.Toggle variant={isDark} id="dropdown-basic">
              Change Theme
            </Dropdown.Toggle>
            <Dropdown.Menu variant={isDark}>
              <Dropdown.Item
                as="button"
                onClick={() => {
                  changeTheme('dark')
                }}
              >
                {isDark === 'dark' ? <strong>Dark</strong> : 'Dark'}
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={() => {
                  changeTheme('light')
                }}
              >
                {isDark === 'light' ? <strong>Light</strong> : 'Light'}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant={isDark} onClick={toggleSidePanel}>
            <i className="bi bi-cart"></i>

            {cart.length > 0 && (
              <span className="cart-notification">{cart.length}</span>
            )}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AppNav
