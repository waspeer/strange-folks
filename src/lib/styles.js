import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Image from "gatsby-image"
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

export const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export const TwoColumnGrid = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 2rem 1fr;
  grid-template-rows: auto;
  grid-template-areas: "left . right"; */
  display: flex;

  /* @media (max-width: ${breakpoints.l}px) {
    display: block;
  } */
`

export const GridLeft = styled.div`
  /* grid-area: left; */
  flex: 1;
  overflow: hidden;
`

export const GridRight = styled.div`
  /* grid-area: right; */
  flex: 1;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`
