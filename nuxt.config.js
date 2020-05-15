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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Noto+Sans+KR' }
    ],
  },
  generate: {
    routes: function () {
      const fs = require('fs')
      let blog_route = fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/blog/${file.slice(0, -5)}`,
          payload: require(`./assets/content/blog/${file}`)
        }
      })
      let page_route = fs.readdirSync('./assets/content/page').map(file => {
        return {
          route: `/page/${file.slice(0, -5)}`,
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
  css: ['@/assets/css/custom.scss', '@/assets/css/master.css', '@/assets/css/master_basic.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/start.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/markdownit', '@nuxtjs/google-gtag'],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  markdownit: {
    injected: true,
    html: true
  },
  'google-gtag': {
    id: 'UA-166797441-1',
    config: {
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['domain.com', 'domain.org']
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // add frontmatter-markdown-loader
      //config.module.rules.push({
      //  test: /\.md$/,
      //  loader: "frontmatter-markdown-loader",
      //  options: {
      //    mode: [FMMode.VUE_COMPONENT, FMMode.META]
      //  }
      //})
    }
  },
}
