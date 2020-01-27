import { graphql, Link } from "gatsby"
import React from "react"

import Logo from "#components/Logo"
import ProductForm from "#components/ProductForm"
import SEO from "#components/Seo"
import { Title } from "#lib/styles"

import {
  Container,
  GridLeft,
  GridRight,
  Img,
  TwoColumnGrid,
  ProductDescription,
} from "./styles"

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Link to="/#products">
        <Logo />
      </Link>
      <br />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            <Img
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt={product.title}
            />
          </GridLeft>
          <GridRight>
            <Title>{product.title}</Title>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </GridRight>
        </TwoColumnGrid>
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
