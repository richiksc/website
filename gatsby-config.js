module.exports = {
  siteMetadata: {
    title: `Richik SC`,
    description:
`I'm a student, full-stack developer, and graphic designer.\
 I work with modern tech, such as Node, Vue, and Git,\
 and I'm always looking to learn more.`,
    author: `@richiksc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://richiksc.me`
      }
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
        background_color: `#0D47A1`,
        theme_color: `#0D47A1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
