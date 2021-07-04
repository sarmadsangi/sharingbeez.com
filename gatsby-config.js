// require("dotenv").config({
//   path: `./.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    title: `Eat My Garden | A Community for Sharing`,
    description: `Creating a supportive community by sharing skills, ideas and fresh produce to encourage self-sustaining behaviours using edible garden on an open space.`,
    author: `@Sarmad Sangi`,
    siteUrl: `http://eatmygarden.org.au`,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "3408273hsd",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-sass",
      options: { 
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
        sassOptions: 
          { 
            includePaths: ["/src/scss/styles.scss"] 
          }
        },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
  ],
};
