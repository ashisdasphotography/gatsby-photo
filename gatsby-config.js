module.exports = {
  siteMetadata: {
      title: `Photo`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, "gatsby-plugin-postcss",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `frontpage`,
      path: `${__dirname}/src/data`,
    },
  },
  "gatsby-transformer-yaml",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/data/`,
    },
  }]
};