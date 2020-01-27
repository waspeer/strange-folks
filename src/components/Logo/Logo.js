import React from "react"
import PropTypes from "prop-types"

import { useParallax } from "#lib/hooks"

import { LogoWrapper, TextLayer, LogoText } from "./styles"

const Logo = ({ style }) => {
  const friction = 14
  const parallaxElement = useParallax()

  const text = []
  for (let i = 0; i < 3; i++) {
    text.push(
      <TextLayer key={i} data-depth={(i + 1) / friction}>
        <LogoText>KLANGSTOF</LogoText>
      </TextLayer>
    )
  }

  return (
    <LogoWrapper style={style}>
      <div ref={parallaxElement}>{text}</div>
    </LogoWrapper>
  )
}

Logo.defaultProps = {
  style: {},
}

Logo.propTypes = {
  style: PropTypes.object,
}

export default Logo
