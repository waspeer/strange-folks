import reduce from "lodash/reduce"
import { observable } from "micro-observables"

import { isBrowser } from "../lib"
import shopifyClient from "./_shopifyClient"

export default class CheckoutService {
  _checkout = observable({ lineItems: [] })
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

  constructor() {
    this.init()
  }

  async init() {
    this._loading.set(true)

    const checkoutIdOrNull = isBrowser
      ? localStorage.getItem("shopify_checkout_id")
      : null
    let persistedCheckout

    if (checkoutIdOrNull !== null) {
      const checkoutId = checkoutIdOrNull
      try {
        persistedCheckout = await shopifyClient.checkout.fetch(checkoutId)

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
      : await shopifyClient.checkout.create()

    if (isBrowser) {
      localStorage.setItem("shopify_checkout_id", checkout.id)
    }

    this._checkout.set(checkout)
    this._loading.set(false)
  }

  addLineItem(variantId, quantity) {
    if (!(variantId || quantity)) {
      return console.error(
        "unable to add variant to cart: variantId and quantity are both required."
      )
    }

    const lineItem = { variantId, quantity: parseInt(quantity, 10) }

    return shopifyClient.checkout
      .addLineItems(this._checkout.get().id, [lineItem])
      .then(checkout => {
        this._checkout.set(checkout)
        this._loading.set(false)
      })
  }

  removeLineItem(lineItemId) {
    this._loading.set(true)

    return shopifyClient.checkout
      .removeLineItems(this._checkout.get().id, [lineItemId])
      .then(checkout => {
        this._checkout.set(checkout)
        this._loading.set(false)
      })
  }
}
