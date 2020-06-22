const ansiRegex = require('ansi-regex')
require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'coway sustainability 2020',
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
           /*{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR' }*/
    ],
  },
  env: {
    backend_host: process.env.BACKEND_HOST || 'http://backend.dataflare.net/api'
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
  css: ['@/assets/css/custom.scss', '@/assets/css/master.scss', '@/assets/css/master_basic.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/start.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@/assets/css/variable.scss'
    ]
  },
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

    },
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: {
            grid: true
          }
        }
      }
    }
  },
  router: {
    // 기본 스크롤 행동을 아래와 같이 바꾼다. 댓글링크를 클릭시 게시글내의 댓글을 찾아갈 수 있도록 도와준다. (기본 브라우저 기능과 동일하게 동작하게 만든다.)
    scrollBehavior: async (to, from, savedPosition) => {
      
      if (savedPosition) {
        console.log('nuxt.config.js router: schrollBehavior(0): savedPosition', savedPosition)
        return savedPosition
      }   

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        let clientRect = el.getBoundingClientRect();
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({
            top: clientRect.top + window.pageYOffset - 150,
            behavior: 'smooth'
          })
        } else {
          return window.scrollTo(0, clientRect.top + window.pageYOffset - 150 )
        }
      }

      return {
        x: 0,
        y: 0
      }
    } // scrollBehavior
  }, // router
  transpileDependencies: [ansiRegex]
}
