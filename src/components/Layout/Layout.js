import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "#components/Navigation"
import { ThemeProvider } from "#context"

const Wrapper = withTheme(styled.main`
  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 100vh;
`)

const Layout = ({ children }) => (
  <ThemeProvider>
    <Navigation />
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
