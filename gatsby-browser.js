import React from "react"
import smoothscroll from "smoothscroll-polyfill"

import "./node_modules/normalize.css/normalize.css"
import { ThemeProvider } from "./src/context"

smoothscroll.polyfill()

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
