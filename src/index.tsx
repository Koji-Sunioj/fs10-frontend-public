import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import makeStore from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import App from './App'

const store = makeStore()

const element = document.getElementById('root')
const root = ReactDOM.createRoot(element!)

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
