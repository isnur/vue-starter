'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"http://localhost:8080"',
  BASE_API_URL: '"https://5aa7865c7f6fcb0014ee24af.mockapi.io/api"',
  BASE_GR_API: '"https://staging.gramedia.com/api"',
  BASE_RECAPTCHA: '"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"'
})
