import React from 'react'
import Routes from './Routes'
import { createContext, useState } from 'react'

import AppNav from './components/AppNav'
import SidePanel from './components/SidePanel'

export const ThemeContext = createContext({
  isDark: false,
  test: (bool: boolean): void => {},
})

const App = () => {
  const [isDark, setDark] = useState(false)

  function test(bool: boolean): void {
    setDark(bool)
    if (bool) {
      document.documentElement.style.setProperty('--main-bg-color', 'black')
    } else {
      document.documentElement.style.setProperty('--main-bg-color', '#FFEBCD')
    }
  }

  return (
    <>
      <ThemeContext.Provider value={{ isDark, test }}>
        <AppNav />
        <SidePanel />
        <Routes />
      </ThemeContext.Provider>
    </>
  )
}

export default App
