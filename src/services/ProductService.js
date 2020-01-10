import shopifyClient from "./_shopifyClient"
import { observable } from "micro-observables"

export default class ProductService {
  _product = observable({
    variants: [],
  })
  _variantId = observable()

  get product() {
    return this._product.readOnly()
  }

  get variant() {
    return this._variantId.transform(it =>
      this._product.get().variants.find(v => v.id === it)
    )
  }

  setVariant(options) {
    const variant =
      shopifyClient.product.helpers.variantForOptions(
        this._product.get(),
        options
      ) || options
    this._variantId.set(variant.id)
  }

  get availableForSale() {
    return this.variant.transform(it => it.availableForSale)
  }

  constructor(product) {
    const initialVariant = product.variants ? product.variants[0] || {} : {}

    this._product.set(product)
    this.setVariant(initialVariant)
  }

  async fetchCurrentProductDetails() {
    const productId = this._product.get().shopifyId
    const product = await shopifyClient.product.fetch(productId)
    this._product.update(staleProduct => ({
      ...staleProduct,
      ...ProductMapper.toDTO(product),
    }))
  }
}

class ProductMapper {
  static toDTO(graphQLProduct) {
    return {
      options: graphQLProduct.options.map(o => ({
        id: o.id,
        name: o.name,
        values: o.values.map(v => v.value),
      })),
      variants: graphQLProduct.variants.map(v => ({
        availableForSale: v.available,
        id: `Shopify__ProductVariant__${v.id}`,
        price: v.price,
        selectedOptions: v.selectedOptions.map(o => ({
          name: o.name,
          value: o.value,
        })),
        shopifyId: v.id,
        title: v.title,
      })),
    }
  }
}
