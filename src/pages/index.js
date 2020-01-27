import React from "react"

import Hero from "#components/Hero/"
import HomeProductGrid from "#components/HomeProductGrid"
import Logo from "#components/Logo"
import SEO from "#components/Seo"
import { useWindowScrollPosition, useWindowSize } from "#lib/hooks"
import { heroOverflow } from "#lib/styles"

const IndexPage = () => {
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
      <SEO
        title="strange folks merchandise shop"
        description="get your favorite klangstof goodies right here in this digital safe space"
      />
      <Hero />
      <Logo style={logoStyle} />
      <HomeProductGrid />
    </>
  )
}

export default IndexPage
