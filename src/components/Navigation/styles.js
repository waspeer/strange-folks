import { withTheme } from "emotion-theming"
import { Link } from "gatsby"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { LightenDarkenColor } from "../../lib/helpers"

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

export const CartButton = withTheme(styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 15;
  right: 0.75rem;
  bottom: 0.75rem;
  width: 4rem;
  height: 4rem;
  font-size: 2rem;
  background: ${({ theme }) => LightenDarkenColor(theme.backgroundColor, -10)};
  color: white;
  border: 1px solid lightgray;
  border-radius: 2rem;
  opacity: 0.85;
  transition: all 0.2s;
  cursor: pointer;
  animation: ${bounce} 1s;

  :hover {
    opacity: 1;
  }
`)

export const Quantity = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  color: white;
  background: ${({ theme }) => theme.secondary};
  font-weight: bold;
  border-radius: 1rem;
  line-height: 1rem;
  text-align: center;
`
