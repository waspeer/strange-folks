import { Spin } from "antd"
import { useObservable } from "micro-observables"
import React from "react"
import { checkoutService } from "../../services"
import CheckoutButton from "./CheckoutButton"
import LineItems from "./LineItems"
import OrderSummary from "./OrderSummary"
import { Wrapper } from "./styles"

const Cart = () => {
  const checkout = useObservable(checkoutService.checkout)
  const loading = useObservable(checkoutService.isLoading)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const cartIsEmpty = !checkout.lineItems.length

  return (
    <Spin spinning={loading}>
      <Wrapper>
        <h1>Cart</h1>
        <LineItems />
        <OrderSummary />
        <br />
        <CheckoutButton disabled={cartIsEmpty} onClick={handleCheckout} />
      </Wrapper>
    </Spin>
  )
}

export default Cart
