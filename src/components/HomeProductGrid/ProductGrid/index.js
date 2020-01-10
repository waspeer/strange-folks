import React from "react"
import { Link } from "gatsby"
import { Grid, Product, Title, Img } from "./styles"

const ProductGrid = React.forwardRef(({ products }, ref) => (
  <Grid ref={ref}>
    {products ? (
      products.map(({ id, handle, title, images: [firstImage] }) => (
        <Product key={id}>
          <Link to={`/product/${handle}/`}>
            {firstImage && firstImage.localFile && (
              <Img
                fluid={firstImage.localFile.childImageSharp.fluid}
                alt={handle}
              />
            )}
          </Link>
          <Title>{title}</Title>
        </Product>
      ))
    ) : (
      <p>No Products found!</p>
    )}
  </Grid>
))

export default ProductGrid
