import { useState, useEffect } from "react"
import find from "lodash/find"
import isEqual from "lodash/isEqual"
import { useObservable } from "micro-observables"
import { checkoutService, ProductService } from "../../services"

const useProductFormProductController = productDTO => {
  const productService = new ProductService(productDTO)
  const availableForSale = useObservable(productService.availableForSale)
  const product = useObservable(productService.product)
  const variant = useObservable(productService.variant)
  const price = Intl.NumberFormat(undefined, {
    currency: product.priceRange.minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(variant.price)
  const checkOptionAvailability = (name, value) => {
    const match = find(product.variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }
  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(product.variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    productService.setVariant({ ...selectedVariant })
  }

  useEffect(() => {
    productService.fetchCurrentProductDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    availableForSale,
    checkOptionAvailability,
    handleOptionChange,
    productOptions: product.options,
    price,
    variant,
  }
}

const useProductFormController = productDTO => {
  const productController = useProductFormProductController(productDTO)

  const loading = useObservable(checkoutService.isLoading)
  const handleAddToCart = () => {
    checkoutService.addLineItem(productController.variant.shopifyId, quantity)
  }

  const [quantity, setQuantity] = useState(1)
  const handleQuantityChange = value => setQuantity(value)

  return {
    ...productController,
    handleAddToCart,
    handleQuantityChange,
    loading,
    quantity,
  }
}

export default useProductFormController
