import styled from "@emotion/styled"
import { withTheme } from "@emotion/react"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
} from "@ant-design/icons"

import Navigation from "#components/Navigation"

const SOCIALS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/klngstf/",
    icon: <FacebookFilled />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/klangstof/",
    icon: <InstagramFilled />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/klangstof",
    icon: <TwitterSquareFilled />,
  },
]

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

const Socials = withTheme(styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  gap: 0.25rem;
`)

const SocialLink = withTheme(styled.li`
  list-style: none;
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
        <a href="mailto:merch@klangstof.com">merch@klangstof.com</a>
        <Socials>
          {SOCIALS.map(({ name, url, icon }) => (
            <SocialLink>
              <a href={url} target="_blank" rel="noreferrer" title={name}>
                {icon}
              </a>
            </SocialLink>
          ))}
        </Socials>
      </Footer>
    </Wrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
