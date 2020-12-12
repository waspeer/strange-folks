import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

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
  <>
    <Helmet>
      <meta
        name="facebook-domain-verification"
        content="99g0bvxttw6z7n2j66et4qe70iyx3l"
      />
    </Helmet>
    <Wrapper>
      <Navigation />
      <Content>{children}</Content>
      <Footer>
        Contact us at{" "}
        <a href="mailto:klangstof@gmail.com">klangstof@gmail.com</a>{" "}
        <em>(Erik Buschmann)</em>
      </Footer>
    </Wrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
