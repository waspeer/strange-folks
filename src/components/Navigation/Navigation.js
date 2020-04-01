import { ShoppingCartOutlined, LoadingOutlined } from "@ant-design/icons"
import { useObservable } from "micro-observables"
import React, { useEffect, useRef } from "react"

import { checkoutService } from "#services"

import { CartButton, Quantity } from "./styles"

const Navigation = () => {
  const quantity = useObservable(checkoutService.quantity)
  const loading = useObservable(checkoutService.isLoading)
  const buttonRef = useRef()

  useEffect(() => {
    // retrigger bounce animation
    buttonRef.current.style.animation = "none"
    void buttonRef.current.offsetHeight
    buttonRef.current.style.animation = null
  }, [quantity])

  return (
    <CartButton ref={buttonRef} to="/cart">
      {loading ? (
        <LoadingOutlined />
      ) : (
        <>
          <ShoppingCartOutlined />
          {!!quantity && <Quantity>{quantity}</Quantity>}
        </>
      )}
    </CartButton>
  )
}

export default Navigation
