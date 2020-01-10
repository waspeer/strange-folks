import styled from "@emotion/styled"

import { heroOverflow } from "../../lib/styles"

export const HomeGridWrapper = styled.div`
  min-height: ${100 - heroOverflow}vh;
  transition: all 0.5s;
`

export const HeightGuard = styled.div`
  height: 0;
  transition: height 0.5s;
  overflow: hidden;
`
