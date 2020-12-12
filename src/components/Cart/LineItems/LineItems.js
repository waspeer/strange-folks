import { Divider } from "antd"
import React from "react"

import LineItem from "./LineItem"
import { Wrapper } from "./styles"

const LineItems = ({ lineItems }) => {
  const cartIsEmpty = !lineItems.length

  const LineItems = lineItems
    .flatMap((lineItem) => {
      return [
        <LineItem key={lineItem.id.toString()} lineItem={lineItem} />,
        <Divider />,
      ]
    })
    .slice(0, -1)

  return <Wrapper>{!cartIsEmpty ? LineItems : "The cart is empty 🤷‍♂️"}</Wrapper>
}

export default LineItems
