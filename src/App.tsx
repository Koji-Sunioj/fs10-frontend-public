import React from 'react'
import Routes from './Routes'
import { useEffect } from 'react'

import AppNav from './components/AppNav'
import SidePanel from './components/SidePanel'

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = 'blanchedalmond'
  }, [])

  return (
    <>
      <AppNav />
      <SidePanel />
      <Routes />
    </>
  )
}

export default App
