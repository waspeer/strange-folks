import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/Hero/"
import HomeProductGrid from "../components/HomeProductGrid"
import Logo from "../components/Logo"
import Modal from "../components/Modal"
import { useWindowScrollPosition, useWindowSize } from "../lib"
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
