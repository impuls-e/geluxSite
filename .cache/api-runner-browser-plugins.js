module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-141117092-14","head":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gelux","short_name":"GX","description":"Soluções Completas","start_url":"/","background_color":"#000000","theme_color":"#000000","display":"standalone","icon":"src/img/icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-next-seo/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
