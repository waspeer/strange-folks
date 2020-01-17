import { InputNumber } from "antd"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
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
        display: block;
        margin-bottom: 0.75rem;
      `}
    />
  </>
)

QuantityPicker.propTypes = {
  quantity: PropTypes.number,
  handleQuantityChange: PropTypes.func,
}

export default QuantityPicker
