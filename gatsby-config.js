const config = require('./data/config');

module.exports = {
  siteMetadata: {
    title: 'Gelux',
    titleTemplate: '%s · Soluções Completas em Elétrica',
    description:
      'Empresa especializada em soluções elétricas, com atendimento diferencial e grande experiência, desde pequenas até grandes obras.',
    url: 'https://www.geluxeletrica.com.br',
    siteUrl: 'https://www.geluxeletrica.com.br', // No trailing slash allowed!
    image: `${__dirname}/src/img/icon.png`, // Path to your image you placed in the 'static' folder
    twitterUsername: '@gelux',
    author: `@impulse`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-141117092-14',
        // this option places the tracking script into the head of the DOM
        head: true
        // other options
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/img/icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pt-BR'
      }
    },

    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-extract-schema`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.geluxeletrica.com.br',
        sitemap: 'https://www.geluxeletrica.com.br/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
