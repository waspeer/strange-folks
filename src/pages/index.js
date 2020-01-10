import React from "react"
import { graphql } from "gatsby"
import { useWindowScrollPosition, useWindowSize } from "../lib"
import Layout from "../components/Layout"
import Logo from "../components/Logo"
import Hero from "../components/Hero/"
import HomeProductGrid from "../components/HomeProductGrid"
import { heroOverflow } from "../lib/styles"

const IndexPage = ({ data }) => {
  const { y: scrollY } = useWindowScrollPosition()
  const { innerHeight } = useWindowSize()

  const scrollThreshold = innerHeight * 0.7
  const scrolledDown = scrollY > scrollThreshold
  const logoStyle = {
    position: "sticky",
    top: 0,
    transform: `translateY(${
      scrolledDown ? 0 : `calc(${-(50 + heroOverflow)}vh - 40px)`
    })`,
  }

  return (
    <>
      <Hero />
      <Logo style={logoStyle} />
      <HomeProductGrid />
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    shopifyCollection {
      products {
        id
        images {
          originalSrc
        }
        title
        productType
      }
    }
  }
`

export default IndexPage
