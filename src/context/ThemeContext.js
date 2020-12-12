import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

import { useDayNight } from "#lib/hooks"
import { GlobalStyle } from "#lib/styles"
import createTheme from "#lib/theme"

const ThemeToggleContext = React.createContext({
  setMode: () => {},
})

const ThemeProvider = ({ children }) => {
  const day = useDayNight()
  const [mode, setMode] = useState("light")
  const theme = createTheme({ mode })

  useEffect(() => {
    setMode(day ? "light" : "dark")
  }, [day])

  return (
    <ThemeToggleContext.Provider value={{ setMode }}>
      <EmotionThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        {children}
      </EmotionThemeProvider>
    </ThemeToggleContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider }
