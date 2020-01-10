import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

import { useParallax, useWindowSize } from "../../lib"
import {
  HeroContainer,
  HeroBg,
  TextBgWrapper,
  TextBg,
  HeroContent,
  HeroArrow,
} from "./styles"

const Hero = () => {
  const parallaxElement = useParallax()
  const { innerHeight } = useWindowSize()
  const {
    file: { childImageSharp: heroBgImg },
  } = useStaticQuery(graphql`
    query HeroBackgroundQuery {
      file(relativePath: { eq: "hero-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const parallaxFriction = -0.05
  const scrollToProducts = () =>
    window.scroll({
      top: innerHeight,
      behavior: "smooth",
    })

  return (
    <HeroContainer data-relative-input="true">
      <HeroBg ref={parallaxElement}>
        <Img
          fluid={heroBgImg.fluid}
          style={{ height: "100%" }}
          imgStyle={{ objectPosition: "top center" }}
        />
        <TextBgWrapper data-depth={parallaxFriction}>
          <TextBg />
        </TextBgWrapper>
      </HeroBg>
      <HeroContent>
        <HeroArrow>
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={faArrowDown}
            onClick={scrollToProducts}
          />
        </HeroArrow>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
