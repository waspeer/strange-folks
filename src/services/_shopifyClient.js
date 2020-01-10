import Client from "shopify-buy"

const shopifyClient = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
})

export default shopifyClient
