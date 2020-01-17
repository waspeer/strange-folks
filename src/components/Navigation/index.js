import { Icon } from "antd"
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useObservable } from "micro-observables"
import React, { useEffect, useRef } from "react"
import { checkoutService } from "../../services"
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
        <Icon type="loading" />
      ) : (
        <>
          <Icon type="shopping-cart" />
          {!!quantity && <Quantity>{quantity}</Quantity>}
        </>
      )}
    </CartButton>
  )
}

export default Navigation
