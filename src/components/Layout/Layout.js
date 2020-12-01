import styled from "@emotion/styled"
import { withTheme } from "@emotion/react"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "#components/Navigation"

const Wrapper = withTheme(styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`)

const Content = withTheme(styled.main`
  flex: 1;
`)

const Footer = withTheme(styled.div`
  text-align: center;
  opacity: 0.8;
`)

const Layout = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Content>{children}</Content>
    <Footer>
      Contact us at <a href="mailto:klangstof@gmail.com">klangstof@gmail.com</a>{" "}
      <em>(Erik Buschmann)</em>
    </Footer>
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
