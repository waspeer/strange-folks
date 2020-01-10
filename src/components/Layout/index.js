import React from "react"
import PropTypes from "prop-types"
import { withTheme } from "emotion-theming"
import styled from "@emotion/styled"
import { ThemeProvider, StoreProvider } from "../../context"
import Navigation from "../Navigation"

const Wrapper = withTheme(styled.main`
  background-color: ${({ theme }) => theme.backgroundColor};
`)

const Layout = ({ children }) => (
  <StoreProvider>
    <ThemeProvider>
      <Navigation siteTitle="klangstof" />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  </StoreProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
