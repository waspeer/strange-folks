import React from "react"
import { graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SEO from "../../components/seo"
import ProductForm from "../../components/ProductForm"
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from "../../lib/styles"
import { ProductTitle, ProductDescription } from "./styles"

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const images = product.images.map(image => (
    <Img
      fluid={image.localFile.childImageSharp.fluid}
      key={image.id}
      alt={product.title}
    />
  ))

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            <Slider autoplay>{images}</Slider>
          </GridLeft>
          <GridRight>
            <ProductTitle>{product.title}</ProductTitle>
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
