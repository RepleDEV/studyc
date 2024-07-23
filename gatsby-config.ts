import type { GatsbyConfig } from "gatsby"

const config = {
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svg/,
          omitKeys: ["width", "height"]
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/Notes`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
} as GatsbyConfig;

if (process.env.NODE_ENV === "development") {
  config.plugins?.push({
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      "path": `${__dirname}/Images`
    }
  });
}

module.exports = config;