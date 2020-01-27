import CheckoutService from "./CheckoutService"
import ProductService from "./ProductService"
import shopifyClient from "./_shopifyClient"

export const checkoutService = new CheckoutService(shopifyClient)
export const productService = new ProductService(shopifyClient)
