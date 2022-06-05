import React from 'react'
import Routes from './Routes'
import { createContext, useState } from 'react'

import AppNav from './components/AppNav'
import { themes } from './utils/cssObjects'
import SidePanel from './components/SidePanel'
import { ThemeContextType, theme } from './types/types'

export const ThemeContext = createContext<ThemeContextType>({
  isDark: 'light',
  changeTheme: (): void => {},
})
//const hello= 'hello'
const App = () => {
  const [isDark, setDark] = useState<theme>('light')

  const changeTheme = (theme: theme): void => {
    setDark(theme)
    Object.entries(themes[theme]).forEach((keyPair) => {
      document.documentElement.style.setProperty(keyPair[0], keyPair[1])
    })
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
