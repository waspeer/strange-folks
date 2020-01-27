import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

import SEO from "#components/Seo"

const Wrapper = styled.div`
  text-align: center;
  padding-top: 2rem;
`

const NotFoundPage = () => (
  <Wrapper>
    <SEO title="404: not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>
      <Link to="/">Go back home...</Link>
    </p>
  </Wrapper>
)

export default NotFoundPage
