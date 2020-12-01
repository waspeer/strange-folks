import { Button } from "antd"
import { RightOutlined } from "@ant-design/icons"
import React from "react"

const CheckoutButton = (props) => {
  return (
    <Button block ghost size="large" type="primary" {...props}>
      Check out
      <RightOutlined />
    </Button>
  )
}

export default CheckoutButton
