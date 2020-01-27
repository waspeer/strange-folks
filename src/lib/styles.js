import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"
import React from "react"

// TODO: REFACTOR INTO COMPONENTS move all components etc to the component folder

export const colors = {
  bgDay: "#fff2d3",
  bgNight: "#559cd6",
  primary: "#ffe000",
  secondary: "#00feff",
  pink: "#ff88d9",
}

export const heroOverflow = 10

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

      html {
        font-family: "Source Sans Pro", sans-serif;
      }

      body {
        overflow-x: hidden;
      }

      h1,
      h2,
      h3 {
        font-family: Arial, Helvetica, sans-serif;
      }
    `}
  />
)

export const Title = withTheme(styled.h1`
  text-align: center;
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-weight: 
  margin: 0 0 0.5rem;
  line-height: 1.4;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-shadow: ${({ theme }) => theme.secondary} 2px -2px;
`)
