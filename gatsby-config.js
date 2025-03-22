module.exports = {
  siteMetadata: {
    title: `Richik SC`,
    description: `Richik is a software engineer, familiar with Node, Java, JS, TypeScript, Python, and ML.`,
    author: `@richiksc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://richiksc.me`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Richik SC`,
        short_name: `Richik SC`,
        start_url: `/`,
        background_color: `#18281f`,
        theme_color: `#18281f`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
