import type { GatsbyConfig } from "gatsby"

module.exports = {
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/Notes`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        "path": `${__dirname}/Images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
} as GatsbyConfig;
