import styled from "@emotion/styled"
import { withTheme } from "@emotion/react"
import { keyframes } from "@emotion/react"

import { heroOverflow } from "#lib/styles"

export const HeroContainer = styled.div`
  position: relative;
`

export const HeroBg = withTheme(styled.div`
  position: relative;
  overflow: hidden;
  height: ${100 + heroOverflow}vh;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${heroOverflow * 2}vh;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), #fff);
  }
`)

export const TextBgWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const TextBg = styled.div`
  position: absolute;
  width: 400%;
  height: 400%;
  top: -100%;
  left: -150%;
  transform: rotate(-45deg);
  opacity: 0.9;
  background: url(${({ theme }) => theme.textBackgroundUrl});
`

export const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const bounce = keyframes`
  0%, 25%, 50%, 75%, 100% {
    transform: translateY(0)
  }
  40% {
    transform: translateY(-20px)
  }
  60% {
    transform: translateY(-12px)
  }
`

export const HeroArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  color: ${({ theme }) => theme.primary};
  width: 100%;
  font-size: 40px;
  animation: ${bounce} 2s infinite;
  text-align: center;
`
