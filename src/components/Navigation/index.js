import React from "react"
import PropTypes from "prop-types"
import { useObservable } from "micro-observables"
import { CartCounter, Container, MenuLink, Wrapper } from "./styles"
import { checkoutService } from "../../services"

const Navigation = ({ siteTitle }) => {
  const quantity = useObservable(checkoutService.quantity)

  return (
    <Wrapper>
      <Container>
        <MenuLink to="/">{siteTitle}</MenuLink>
        <MenuLink to="/cart">
          {quantity !== 0 && <CartCounter>{quantity}</CartCounter>}
          Cart 🛍
        </MenuLink>
      </Container>
    </Wrapper>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
