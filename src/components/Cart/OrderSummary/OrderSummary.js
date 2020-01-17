import { Typography } from "antd"
import { useObservable } from "micro-observables"
import React from "react"
import { checkoutService } from "../../../services"
import { Wrapper } from "./styles"

const OrderSummary = () => {
  const checkout = useObservable(checkoutService.checkout)

  return (
    <Wrapper>
      <div>
        <Typography.Text strong>Total</Typography.Text>
        <br />
        <Typography.Text type="secondary">
          Including €{checkout.totalTax} in taxes
        </Typography.Text>
      </div>
      <Typography.Text style={{ fontSize: "1.5rem" }}>
        € {checkout.totalPrice}
      </Typography.Text>
    </Wrapper>
  )
}

export default OrderSummary
