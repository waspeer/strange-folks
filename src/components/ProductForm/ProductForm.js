import { Button } from "antd"
import PropTypes from "prop-types"
import React from "react"
import ProductOptionPicker from "./ProductOptionPicker"
import QuantityPicker from "./QuantityPicker"
import useProductFormController from "./_useProductForm"

const ProductForm = ({ product }) => {
  console.log(product)

  const {
    availableForSale,
    checkOptionIsUnavailable,
    handleAddToCart,
    handleOptionChange,
    handleQuantityChange,
    loading,
    price,
    productOptions,
    quantity,
    variant,
  } = useProductFormController(product)

  return (
    <>
      <h3>{price}</h3>
      <ProductOptionPicker
        checkOptionIsUnavailable={checkOptionIsUnavailable}
        handleOptionChange={handleOptionChange}
        options={productOptions}
        value={variant.selectedOptions}
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
