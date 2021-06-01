import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { withTheme } from "@emotion/react"
import React from "react"
import Tilt from "react-tilt"

import { breakpoints } from "#lib/styles"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, max-content));
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${breakpoints.m}px) {
    grid-template-columns: repeat(auto-fit, minmax(50%, max-content));
  }

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(auto-fit, 100%);
  }
`

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

const TitleText = withTheme(styled.div`
  font-weight: 300;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  text-shadow: black 1px -1px;
`)

export const Title = ({ children }) => (
  <TitleWrapper>
    <TitleText>{children}</TitleText>
  </TitleWrapper>
)

export const Img = styled(GatsbyImage)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  transition: all 0.2s;
`

export const Product = styled(Tilt)`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transform-style: preserve-3d;
  padding: 1.25rem;

  ${TitleWrapper} {
    opacity: 0;
    transform: scale(0.8) translateZ(0);
    transition: all 0.2s;
  }

  :hover {
    ${TitleWrapper} {
      opacity: 1;
      transform: scale(1) translateZ(20px);
    }

    ${Img} {
      filter: blur(2px);
      transform: scale(0.85);
    }
  }
`
