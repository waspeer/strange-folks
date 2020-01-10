import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

export const ProductTitle = withTheme(styled.h1`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  text-shadow: ${({ theme }) => theme.secondary} 2px -2px;
`)

export const ProductDescription = styled.div`
  margin-top: 1.5rem;
  font-weight: 300;
`
