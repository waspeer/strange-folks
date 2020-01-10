import React, { useEffect, useState } from "react"
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import PropTypes from "prop-types"
import { useDayNight, createTheme, GlobalStyle } from "../lib"

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
