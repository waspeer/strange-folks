import { Spin, Skeleton } from "antd"
import { Link } from "gatsby"
import { useObservable } from "micro-observables"
import React from "react"

import Logo from "#components/Logo"
import { Title } from "#lib/styles"
import { checkoutService } from "#services"

import CheckoutButton from "./CheckoutButton"
import LineItems from "./LineItems"
import OrderSummary from "./OrderSummary"
import { Wrapper } from "./styles"

const Cart = () => {
  const checkout = useObservable(checkoutService.checkout)
  const loading = useObservable(checkoutService.isLoading)

  console.log(checkout)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  if (!checkout.lineItems) {
    return (
      <>
        <Spin>
          <Wrapper>
            <Title>Cart</Title>
            <Skeleton avatar paragraph={{ rows: 1 }} />
            <Skeleton avatar paragraph={{ rows: 1 }} />
            <Skeleton avatar paragraph={{ rows: 1 }} />
          </Wrapper>
        </Spin>
      </>
    )
  }

  const cartIsEmpty = !checkout.lineItems.length

  return (
    <>
      <Spin spinning={loading}>
        <Wrapper>
          <Title>Cart</Title>
          <LineItems lineItems={checkout.lineItems} />
          <OrderSummary
            totalTax={checkout.totalTax}
            totalPrice={checkout.totalPrice}
          />
          <br />
          <CheckoutButton disabled={cartIsEmpty} onClick={handleCheckout} />
        </Wrapper>
      </Spin>
    </>
  )
}

export default Cart
