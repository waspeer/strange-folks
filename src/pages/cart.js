import { Link } from "gatsby"
import React from "react"

import Cart from "#components/Cart"
import Logo from "#components/Logo"
import SEO from "#components/Seo"

const CartPage = () => (
  <>
    <SEO title="checkout" description="this is where it all checks out" />
    <Link to="/#products">
      <Logo />
    </Link>
    <Cart />
  </>
)

export default CartPage
