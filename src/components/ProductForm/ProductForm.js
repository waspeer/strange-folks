import { MehOutlined, SmileOutlined } from "@ant-design/icons"
import { Button, notification, Spin, Typography } from "antd"
import { Link } from "gatsby"
import { useObservable } from "micro-observables"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { isBrowser } from "#lib/helpers"
import { checkoutService, productService } from "#services"

import ProductOptionsPicker from "./ProductOptionsPicker"
import QuantityPicker from "./QuantityPicker"
import { Wrapper } from "./styles"

const formatPrice = (price, currencyCode) =>
  Intl.NumberFormat(undefined, {
    currency: currencyCode,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(price)

const ProductForm = props => {
  const loading = useObservable(checkoutService.isLoading)
  const [product, setProduct] = useState(props.product)
  const [variant, setVariant] = useState(
    productService.findFirstAvailableVariant(product.variants)
  )
  const [quantity, setQuantity] = useState(1)

  const availableForSale = variant.availableForSale
  const price = formatPrice(
    variant.price,
    product.priceRange.minVariantPrice.currencyCode
  )

  useEffect(() => {
    const updateProductData = async () => {
      const currentProductData = await productService.fetchCurrentProductDetails(
        product.shopifyId
      )
      setProduct(product => ({
        ...product,
        ...currentProductData,
      }))
    }

    if (isBrowser) updateProductData()
  }, [product.shopifyId])

  const handleAddToCart = async () => {
    const succeeded = await checkoutService.addLineItem(
      variant.shopifyId,
      quantity
    )
    let notificationMessage

    if (succeeded) {
      setQuantity(1)
      notificationMessage = {
        message: "Awesome!",
        description: (
          <span>
            Your order was added to <Link to="/cart">your cart</Link>
          </span>
        ),
        icon: <SmileOutlined />,
      }
    } else {
      notificationMessage = {
        message: "Woops...",
        description: "Something went wrong, please try again later.",
        icon: <MehOutlined />,
      }
    }

    notification.open(notificationMessage)
  }

  const handleOptionsChange = options => {
    const variant = productService.variantForOptions(product, options)
    setVariant(variant)
  }

  const checkVariantAvailability = options => {
    return productService.checkVariantAvailability(product, options)
  }

  return (
    <Spin spinning={loading}>
      <Wrapper>
        <Typography.Text
          type="primary"
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
            display: "block",
            margin: "1rem 0",
          }}
        >
          {price}
        </Typography.Text>
        <ProductOptionsPicker
          checkVariantAvailability={checkVariantAvailability}
          handleOptionsChange={handleOptionsChange}
          options={product.options}
          value={variant.selectedOptions}
        />
        <QuantityPicker
          quantity={quantity}
          handleQuantityChange={setQuantity}
        />
        <Button
          block
          ghost
          size="large"
          type="primary"
          htmlType="submit"
          disabled={!availableForSale || loading}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        {!availableForSale && <p>This product is out of stock! :(</p>}
      </Wrapper>
    </Spin>
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
