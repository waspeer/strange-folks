import { Typography } from "antd"
import React from "react"

import { Wrapper } from "./styles"

const OrderSummary = ({ totalTax, totalPrice }) => (
  <Wrapper>
    <div>
      <Typography.Text strong>Total</Typography.Text>
      <br />
      <Typography.Text type="secondary">
        {/* Including €{totalTax} in taxes */}
        Shipping costs not included
      </Typography.Text>
    </div>
    <Typography.Text style={{ fontSize: "1.5rem" }}>
      € {totalPrice}
    </Typography.Text>
  </Wrapper>
)

export default OrderSummary
