import React from "react"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import { breakpoints, Img as StyledImg } from "../../../lib/styles"
import Tilt from "react-tilt"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  overflow: hidden;

  @media (max-width: ${breakpoints.m}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
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

export const Img = styled(StyledImg)`
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
