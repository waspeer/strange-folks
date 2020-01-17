import { Radio } from "antd"
import PropTypes from "prop-types"
import React from "react"
import { Label } from "../styles"

const ProductOptionPicker = ({
  options,
  handleOptionChange,
  checkOptionIsUnavailable,
  value,
}) => (
  <>
    {options.map(({ id, name, values }, index) => {
      const hasOptions = values.length > 1
      const optionValue = value[index].value

      return (
        hasOptions && (
          <div key={"picker-option-" + id}>
            <Label htmlFor={name} key={"picker-label-" + id}>
              {name}{" "}
            </Label>
            <Radio.Group
              name={name}
              key={"picker-radiogrp-" + id}
              onChange={event => handleOptionChange(index, event.target.value)}
              value={optionValue}
            >
              {values.map(value => (
                <Radio.Button
                  value={value}
                  key={`${name}-${value}`}
                  disabled={checkOptionIsUnavailable(name, value)}
                >
                  {value}
                </Radio.Button>
              ))}
            </Radio.Group>
          </div>
        )
      )
    })}
  </>
)

ProductOptionPicker.propType = {
  handleOptionChange: PropTypes.func,
  checkOptionIsUnavailable: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      values: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string,
        })
      ),
    })
  ),
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
    })
  ),
}

export default ProductOptionPicker
