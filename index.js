const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./webpack.config.js')

/*
 Add additional entry point to the Webpack configuration.
 @see https://github.com/webpack-contrib/webpack-hot-middleware#installation--usage
*/
config.entry = [
  'webpack-hot-middleware/client?noInfo=true',
  config.entry
]

const compiler = webpack(config)

app.use(webpackHotMiddleware(compiler))
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }))

app.listen(3000, () => console.log('App listening on port 3000'))
