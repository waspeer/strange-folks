import { Alert } from "antd"
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
    <Alert
      type="warning"
      showIcon
      style={{ maxWidth: 500, margin: "0 auto" }}
      message=" Due to the current circumstances surrounding Covid-19 delivery can take
      longer than expected so please bear with us. Thanks for your continued
      support."
    />
  </>
)

export default CartPage
