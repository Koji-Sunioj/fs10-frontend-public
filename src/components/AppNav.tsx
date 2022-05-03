import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container, Button, Dropdown } from 'react-bootstrap'

const AppNav = () => (
  <Navbar>
    <Container fluid>
      <Link to={'/'} className="navbar-brand">
        Home
      </Link>
      <Nav style={{ width: '200px', justifyContent: 'space-between' }}>
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
        </Button>
      </Nav>
    </Container>
  </Navbar>
)

export default AppNav
