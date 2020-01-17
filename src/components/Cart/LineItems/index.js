import { Divider } from "antd"
import { useObservable } from "micro-observables"
import React from "react"
import { checkoutService } from "../../../services"
import LineItem from "./LineItem"
import { Wrapper } from "./styles"

const LineItems = () => {
  const checkout = useObservable(checkoutService.checkout)

  const { lineItems } = checkout
  const cartIsEmpty = !lineItems.length

  const LineItems = checkout.lineItems
    .flatMap(line_item => {
      return [
        <LineItem key={line_item.id.toString()} lineItem={line_item} />,
        <Divider />,
      ]
    })
    .slice(0, -1)

  return <Wrapper>{!cartIsEmpty ? LineItems : "The cart is empty 🤷‍♂️"}</Wrapper>
}

export default LineItems
