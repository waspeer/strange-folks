import { ArrowDownOutlined } from "@ant-design/icons"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

import { useParallax, useWindowSize } from "#lib/hooks"

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
          gatsbyImageData(layout: FULL_WIDTH)
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
        {/* <GatsbyImage
          alt=""
          image={heroBgImg.gatsbyImageData}
          style={{ height: "100%" }}
          imgStyle={{ objectPosition: "top center" }}
        /> */}
        <TextBgWrapper data-depth={parallaxFriction}>
          <TextBg />
        </TextBgWrapper>
      </HeroBg>
      <HeroContent>
        <HeroArrow>
          <ArrowDownOutlined
            style={{ cursor: "pointer" }}
            onClick={scrollToProducts}
          />
        </HeroArrow>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
