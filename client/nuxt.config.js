// nuxt.config.js
export default {
  ssr: false,
    // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate.js',
    '~/plugins/vuex-persist.js'
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

  auth: {
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: 'http://127.0.0.1:8000/api/auth',
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'access_token' },
          user: { url: '/user', method: 'get', propertyName: 'data.attributes' },
          logout: { url: '/logout', method: 'post' },
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      },
    }
  }
 
}