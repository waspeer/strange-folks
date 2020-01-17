import { Button, Icon } from "antd"
import React from "react"

const CheckoutButton = props => {
  return (
    <Button block ghost size="large" type="primary" {...props}>
      Check out
      <Icon type="right" />
    </Button>
  )
}

export default CheckoutButton
