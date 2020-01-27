import GatsbyImg from "gatsby-image"
import styled from "@emotion/styled"

import { breakpoints } from "#lib/styles"

export const ProductDescription = styled.div`
  font-weight: 300;
`

export const Img = styled(GatsbyImg)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  flex: 1;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export const TwoColumnGrid = styled.div`
  display: grid;

  @media (min-width: ${breakpoints.m}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const GridLeft = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (min-width: ${breakpoints.m}px) {
    margin-right: 0.5rem;
  }
`

export const GridRight = styled.div`
  display: flex;
  margin-left: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
    margin-left: 0;
  }
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;
`
