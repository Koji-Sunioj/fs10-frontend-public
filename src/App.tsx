import React from 'react'
import Routes from './Routes'
import { createContext, useState } from 'react'

import AppNav from './components/AppNav'
import SidePanel from './components/SidePanel'

type ThemeContextType = {
  isDark: 'light' | 'dark'
  changeTheme: (theme: 'light' | 'dark') => void
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: 'light',
  changeTheme: (theme): void => {},
})

const App = () => {
  const [isDark, setDark] = useState<'light' | 'dark'>('light')

  function changeTheme(theme: 'light' | 'dark'): void {
    setDark(theme)

    if (theme === 'dark') {
      document.documentElement.style.setProperty('--main-bg-color', 'black')
      document.documentElement.style.setProperty('--main-text-color', 'white')
    } else {
      document.documentElement.style.setProperty('--main-bg-color', '#FFEBCD')
      document.documentElement.style.setProperty('--main-text-color', 'black')
    }
  }

  return (
    <>
      <ThemeContext.Provider value={{ isDark, changeTheme }}>
        <AppNav />
        <SidePanel />
        <Routes />
      </ThemeContext.Provider>
    </>
  )
}

export default App
