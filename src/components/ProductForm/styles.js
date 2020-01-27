import styled from "@emotion/styled"

export const Wrapper = styled.div`
  max-width: 300px;
  margin-bottom: 1rem;
`

export const Label = styled.label`
  display: block;
  font-weight: bold;

  :not(:first-of-type) {
    margin-top: 0.75rem;
  }
`

export const ProductPrice = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`
