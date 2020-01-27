import { css } from "@emotion/core"
import { Radio } from "antd"
import React from "react"

import { Label } from "../styles"

const ProductOptionsPicker = ({
  options,
  handleOptionsChange,
  checkVariantAvailability,
  value,
}) => {
  return options.map(({ id, name, values }, index) => {
    const hasOptions = values.length > 1
    const selectedValue = value[index].value

    return (
      hasOptions && (
        <div key={"picker-option-" + id}>
          <Label htmlFor={name} key={"picker-label-" + id}>
            {name}
          </Label>
          <Radio.Group
            name={name}
            key={"picker-radiogrp-" + id}
            onChange={event =>
              handleOptionsChange({ [name]: event.target.value })
            }
            css={css`
              display: flex;
            `}
            value={selectedValue}
          >
            {values.map(value => (
              <Radio.Button
                value={value}
                key={`${name}-${value}`}
                css={css`
                  flex: 1;
                `}
                disabled={!checkVariantAvailability({ [name]: value })}
              >
                {value}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
      )
    )
  })
}

export default ProductOptionsPicker
