export default class ProductService {
  constructor(shopifyClient) {
    this.shopifyClient = shopifyClient
  }

  findFirstAvailableVariant(variants) {
    return variants.find((variant) => variant.availableForSale) || variants[0]
  }

  checkVariantAvailability(product, options) {
    const variant = this.variantForOptions(product, options)
    if (!variant) return false
    if (!variant.availableForSale) return false
    return true
  }

  variantForOptions(product, options) {
    return this.shopifyClient.product.helpers.variantForOptions(
      product,
      options
    )
  }

  async fetchCurrentProductDetails(productId) {
    const product = await this.shopifyClient.product.fetch(productId)
    return ProductMapper.toDTO(product)
  }
}

class ProductMapper {
  static toDTO(graphQLProduct) {
    return {
      options: graphQLProduct.options.map((o) => ({
        id: o.id,
        name: o.name,
        values: o.values.map((v) => v.value),
      })),
      variants: graphQLProduct.variants.map((v) => ({
        availableForSale: v.available,
        id: `Shopify__ProductVariant__${v.id}`,
        price: v.price,
        selectedOptions: v.selectedOptions.map((o) => ({
          name: o.name,
          value: o.value,
        })),
        shopifyId: v.id,
        title: v.title,
      })),
    }
  }
}
