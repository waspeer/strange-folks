import { Avatar, Button, Typography } from "antd"
import PropTypes from "prop-types"
import React from "react"
import { checkoutService } from "../../../../services"
import { ProductDetails } from "./styles"

const LineItem = ({ lineItem }) => {
  const hasOptions = lineItem.variant.title !== "Default Title"

  const handleRemove = () => {
    checkoutService.removeLineItem(lineItem.id)
  }

  const variantImage = lineItem.variant.image ? (
    <Avatar
      src={lineItem.variant.image.src}
      alt={`${lineItem.title} product shot`}
      shape="square"
      size="large"
      style={{ float: "left" }}
    />
  ) : null

  const selectedOptions = lineItem.variant.selectedOptions
    ? lineItem.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  return (
    <div>
      {variantImage}
      <ProductDetails>
        <Typography.Text strong>{lineItem.title}</Typography.Text>
        <br />
        <Typography.Text>
          {hasOptions && <i>{selectedOptions}</i>} x {lineItem.quantity}
        </Typography.Text>
      </ProductDetails>
      <Button
        icon="delete"
        onClick={handleRemove}
        shape="circle"
        style={{ float: "right" }}
      />
    </div>
  )
}

LineItem.propTypes = {
  lineItem: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    variant: PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string,
      }),
      selectedOptions: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
      }),
      quantity: PropTypes.number,
      title: PropTypes.string,
    }),
  }),
}

export default LineItem
