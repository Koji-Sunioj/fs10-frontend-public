import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProducPage'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:id" component={ProductPage} />
  </Switch>
)

export default Routes
