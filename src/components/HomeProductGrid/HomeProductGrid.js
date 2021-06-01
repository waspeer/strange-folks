import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useRef, useEffect } from "react"

import { useWindowSize } from "#lib/hooks"

import FilterLinkList from "./FilterLinkList"
import ProductGrid from "./ProductGrid"
import { HomeGridWrapper, HeightGuard } from "./styles"

const HomeProductGrid = () => {
  const data = useStaticQuery(
    graphql`
      query HomeProductGrid {
        shopifyCollection(title: { regex: "/^home.*/i" }) {
          products {
            id
            title
            handle
            createdAt
            productType
            images {
              id
              originalSrc
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 910
                    placeholder: TRACED_SVG
                    layout: CONSTRAINED
                  )
                }
              }
            }
          }
        }
      }
    `
  )
  const productGrid = useRef()
  const [typeFilter, setTypeFilter] = useState("all")
  const visibleProducts = getVisibleProducts(
    data.shopifyCollection.products,
    typeFilter
  )
  const windowSize = useWindowSize()
  const [guardHeight, setGuardHeight] = useState(0)
  useEffect(() => {
    setGuardHeight(productGrid.current.clientHeight)
  }, [typeFilter, windowSize])
  const filters = new Set(
    data.shopifyCollection.products.map((p) => p.productType).sort()
  )
  return (
    <HomeGridWrapper id="products">
      <FilterLinkList
        filters={filters}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
      <HeightGuard style={{ height: guardHeight }}>
        <ProductGrid products={visibleProducts} ref={productGrid} />
      </HeightGuard>
    </HomeGridWrapper>
  )
}

export default HomeProductGrid

function getVisibleProducts(products, typeFilter) {
  if (typeFilter === "all") return products
  else return products.filter((p) => p.productType === typeFilter)
}
