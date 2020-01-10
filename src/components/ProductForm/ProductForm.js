import React from "react"
import PropTypes from "prop-types"
import { Radio, InputNumber, Button } from "antd"
import useProductFormController from "./useProductForm"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

export const Label = styled.label`
  display: block;
  font-weight: bold;

  :not(:first-of-type) {
    margin-top: 0.75rem;
  }
`

const ProductOptionPicker = ({
  options,
  handleOptionChange,
  checkOptionAvailability,
}) => (
  <>
    {options.map(({ id, name, values }, index) => (
      <>
        <Label htmlFor={name}>{name} </Label>
        <Radio.Group
          name={name}
          key={id}
          onChange={event => handleOptionChange(index, event)}
          defaultValue={values[0]}
        >
          {values.map(value => (
            <Radio.Button
              value={value}
              key={`${name}-${value}`}
              disabled={checkOptionAvailability(name, value)}
            >
              {value}
            </Radio.Button>
          ))}
        </Radio.Group>
      </>
    ))}
  </>
)

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

const ProductForm = ({ product }) => {
  const {
    availableForSale,
    checkOptionAvailability,
    handleAddToCart,
    handleOptionChange,
    handleQuantityChange,
    loading,
    productOptions,
    price,
    quantity,
  } = useProductFormController(product)

  return (
    <>
      <h3>{price}</h3>
      <ProductOptionPicker
        checkOptionAvailability={checkOptionAvailability}
        handleOptionChange={handleOptionChange}
        options={productOptions}
      />
      <QuantityPicker
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
      />
      <Button
        htmlType="submit"
        disabled={!availableForSale || loading}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
      {!availableForSale && <p>This product is out of stock! :(</p>}
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
}

export default ProductForm
