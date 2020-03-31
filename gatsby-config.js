const config = require('./data/config');

module.exports = {
  siteMetadata: {
    title: 'Gelux',
    titleTemplate: '%s · Soluções Completas em Elétrica',
    description: 'Instalação e Manutenção Elétrica em Geral',
    url: 'https://www.geluxeletrica.com.br',
    siteUrl: 'https://www.geluxeletrica.com.br', // No trailing slash allowed!
    image: `${__dirname}/src/images/icon.png`, // Path to your image you placed in the 'static' folder
    twitterUsername: '@gelux',
    author: `@impulse`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
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
        icon: 'src/images/icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pt-BR'
      }
    },
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
