import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { RefreshScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/login",
    "logout": "/",
    "home": "/",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": "auth."
  },
  "defaultStrategy": "laravelJWT"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // laravelJWT
  $auth.registerStrategy('laravelJWT', new RefreshScheme($auth, {
  "token": {
    "property": "access_token",
    "maxAge": 1800,
    "global": true,
    "type": "Bearer"
  },
  "refreshToken": {
    "property": "access_token",
    "data": "access_token",
    "maxAge": 2592000,
    "required": false,
    "tokenRequired": true
  },
  "url": "http://localhost:8000/api",
  "endpoints": {
    "login": {
      "url": "http://localhost:8000/api/login",
      "method": "post",
      "propertyName": "access_token"
    },
    "refresh": {
      "url": "http://localhost:8000/api/auth/refresh",
      "method": "post"
    },
    "logout": {
      "url": "http://localhost:8000/api/auth/logout",
      "method": "post"
    },
    "user": {
      "url": "http://localhost:8000/api/auth/user",
      "method": "get",
      "propertyName": "data.attributes"
    }
  },
  "name": "laravelJWT",
  "user": {
    "property": false
  },
  "clientId": false,
  "grantType": false
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
