// nuxt.config.js
export default {
  ssr: false,
  // target: 'static',
    // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate.js',
    '~/plugins/vuex-persist.js',
    // '~/plugins/vuetify.js'
    // '~plugins/mixins/user.js'
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
  router: {
    middleware: ['auth']
  },
  axios: {
    // baseURL:'http://127.0.0.1:8000/api/auth',
    credentials: true
  },
  // to serve localhost
  // server: {
  //   port: 3000, // default: 3000,
  //   host: '{ip address}'
  // },

  auth: {
    strategies: {
      'laravelJWT': {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          maxAge: 1800,
          global: true,
          type: 'Bearer'
        },
        refreshToken: {
          property: 'access_token',
          data: 'access_token',
          maxAge: 60 * 60 * 24 * 30
        },
        provider: 'laravel/jwt',
        //url: 'http://{ip address of host}:8000/api', 
        url: 'http://localhost:8000/api',
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'access_token' },
          user: { url: '/auth/user', method: 'get', propertyName: 'data.attributes' },
          logout: { url: '/auth/logout', method: 'post' },
          refresh: { url: '/auth/refresh', method: 'post' },
        },
        // token: {
        //   property: 'access_token',
        //   maxAge: 60 * 60
        // },
        // refreshToken: {
        //   maxAge: 20160 * 60
        // },
      },
    }
  }
 
}
