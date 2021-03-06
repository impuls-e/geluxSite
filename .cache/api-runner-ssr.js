var plugins = [{
      plugin: require('/home/vinicius/projects/geluxSite/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/vinicius/projects/geluxSite/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-141117092-14","head":true},
    },{
      plugin: require('/home/vinicius/projects/geluxSite/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Gelux","short_name":"GX","description":"Soluções Completas","start_url":"/","background_color":"#000000","theme_color":"#000000","display":"standalone","icon":"src/img/icon.png"},
    },{
      plugin: require('/home/vinicius/projects/geluxSite/node_modules/gatsby-plugin-html-attributes/gatsby-ssr'),
      options: {"plugins":[],"lang":"pt-BR"},
    },{
      plugin: require('/home/vinicius/projects/geluxSite/node_modules/gatsby-plugin-advanced-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/vinicius/projects/geluxSite/node_modules/gatsby-plugin-next-seo/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
