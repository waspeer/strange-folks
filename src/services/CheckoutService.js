import reduce from "lodash/reduce"
import { observable } from "micro-observables"

import { isBrowser } from "#lib/helpers"

export default class CheckoutService {
  _checkout = observable({})
  _loading = observable(false)

  get checkout() {
    return this._checkout.readOnly()
  }

  get isLoading() {
    return this._loading.readOnly()
  }

  get quantity() {
    return this._checkout.transform(it => {
      if (!it.lineItems) return 0
      return reduce(it.lineItems, (acc, item) => acc + item.quantity, 0)
    })
  }

  constructor(shopifyClient) {
    this.shopifyClient = shopifyClient
    if (isBrowser) this.init()
  }

  async init() {
    this._loading.set(true)

    const checkoutIdOrNull = localStorage.getItem("shopify_checkout_id")
    let persistedCheckout

    if (checkoutIdOrNull !== null) {
      const checkoutId = checkoutIdOrNull
      try {
        persistedCheckout = await this.shopifyClient.checkout.fetch(checkoutId)

        if (persistedCheckout.completedAt) {
          persistedCheckout = null
        }
      } catch (e) {
        localStorage.setItem("shopify_checkout_id", null)
        console.error(e)
      }
    }

    const checkout = persistedCheckout
      ? persistedCheckout
      : await this.shopifyClient.checkout.create()

    localStorage.setItem("shopify_checkout_id", checkout.id)

    this._checkout.set(checkout)
    this._loading.set(false)
  }

  addLineItem(variantId, quantity) {
    if (!(variantId || quantity)) {
      return console.error(
        "unable to add variant to cart: variantId and quantity are both required."
      )
    }

    this._loading.set(true)
    const lineItem = { variantId, quantity: parseInt(quantity, 10) }

    return this.shopifyClient.checkout
      .addLineItems(this._checkout.get().id, [lineItem])
      .then(checkout => {
        this._checkout.set(checkout)
        this._loading.set(false)
        return true
      })
      .catch(e => {
        console.error(e)
        return false
      })
  }

  removeLineItem(lineItemId) {
    this._loading.set(true)

    return this.shopifyClient.checkout
      .removeLineItems(this._checkout.get().id, [lineItemId])
      .then(checkout => {
        this._checkout.set(checkout)
        this._loading.set(false)
      })
  }
}
