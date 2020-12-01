import { css } from "@emotion/react"
import { InputNumber } from "antd"
import React from "react"

import { Label } from "../styles"

const QuantityPicker = ({ quantity, handleQuantityChange }) => (
  <>
    <Label htmlFor="quantity">Quantity </Label>
    <InputNumber
      id="quantity"
      name="quantity"
      min={1}
      step={1}
      onChange={handleQuantityChange}
      value={quantity}
      css={css`
        margin-bottom: 0.75rem;
        width: 100%;
      `}
    />
  </>
)

export default QuantityPicker
