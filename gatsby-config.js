require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `K L A N G S T O F`,
    description: `Find all the Klangstof goodies here.`,
    author: `Klangstof`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#ff88d9",
        },
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "#components": path.join(__dirname, "src/components"),
        "#context": path.join(__dirname, "src/context"),
        "#lib": path.join(__dirname, "src/lib"),
        "#services": path.join(__dirname, "src/services"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `klangstof merchandise shop`,
        short_name: `klangstof shop`,
        start_url: `/`,
        background_color: `#ff88d9`,
        theme_color: `#ff88d9`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
