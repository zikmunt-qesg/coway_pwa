export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  generate: {
    routes: function () {
      const fs = require('fs')
      let blog_route = fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/blog/${file.slice(2, -5)}`,
          payload: require(`./assets/content/blog/${file}`)
        }
      })
      let page_route = fs.readdirSync('./assets/content/page').map(file => {
        return {
          route: `/page/${file.slice(2, -5)}`,
          payload: require(`./assets/content/page/${file}`)
        }
      })
      return blog_route.concat(page_route)
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#0b3765' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/master.css', '@/assets/css/master_basic.css', '@/assets/css/custom.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/markdownit'],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}
