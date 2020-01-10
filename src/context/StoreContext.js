import React, { useState, useEffect, useContext } from "react"
import PropTypes from "prop-types"
import Client from "shopify-buy"

const StoreContext = React.createContext()
const useStore = () => useContext(StoreContext)

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
})

// addVariantToCart: (variantId, quantity) => {
//       if (variantId === "" || !quantity) {
//         return console.error("Both a size and quantity are required.")
//       }

//       setStore(prevState => {
//         return { ...prevState, adding: true }
//       })

//       const { checkout, client } = store
//       const lineItem = { variantId, quantity: parseInt(quantity, 10) }

//       return client.checkout
//         .addLineItems(checkout.id, [lineItem])
//         .then(checkout => {
//           setStore(prevState => {
//             return { ...prevState, checkout, adding: false }
//           })
//         })
//     },
//     removeLineItem: (client, checkoutID, lineItemID) => {
//       return client.checkout
//         .removeLineItems(checkoutID, [lineItemID])
//         .then(res => {
//           setStore(prevState => {
//             return { ...prevState, checkout: res }
//           })
//         })
//     },
//     updateLineItem: (client, checkoutID, lineItemID, quantity) => {
//       const lineItem = { id: lineItemID, quantity: parseInt(quantity, 10) }

//       return client.checkout
//         .updateLineItems(checkoutID, [lineItem])
//         .then(res => {
//           setStore(prevState => {
//             return { ...prevState, checkout: res }
//           })
//         })
//     },

const StoreProvider = ({ children }) => {
  const initialStoreState = {
    client,
    checkout: { lineItems: [] },
    adding: false,
    products: [],
    shop: {},
  }
  const [store, setStore] = useState(initialStoreState)

  useEffect(() => {
    const initializeCheckout = async () => {
      const isBrowser = typeof window !== "undefined"
      const setCheckout = checkout => {
        if (isBrowser) {
          localStorage.setItem("shopify_checkout_id", checkout.id)
        }

        setStore(prevState => ({ ...prevState, checkout }))
      }
      const checkoutIdOrNull = isBrowser
        ? localStorage.getItem("shopify_checkout_id")
        : null

      if (checkoutIdOrNull !== null) {
        const checkoutId = checkoutIdOrNull
        try {
          const checkout = await store.client.checkout.fetch(checkoutId)

          if (!checkout.completedAt) {
            return setCheckout(checkout)
          }
        } catch (e) {
          localStorage.setItem("shopify_checkout_id", null)
        }
      }

      const checkout = await store.client.checkout.create()
      setCheckout(checkout)
    }

    initializeCheckout()
  }, [store.client.checkout])

  const addVariantToCart = (variantId, quantity) => {
    if (!(variantId || quantity)) {
      return console.error(
        "unable to add variant to cart: variantId and quantity are both required."
      )
    }

    setStore(prevState => ({ ...prevState, adding: true }))

    const { checkout, client } = store
    const lineItem = { variantId, quantity: parseInt(quantity, 10) }

    return client.checkout
      .addLineItems(checkout.id, [lineItem])
      .then(checkout => {
        setStore(prevState => {
          return { ...prevState, checkout, adding: false }
        })
      })
  }

  const storeContext = {
    store,
    addVariantToCart,
  }

  return (
    <StoreContext.Provider value={storeContext}>
      {children}
    </StoreContext.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { StoreProvider, useStore }
