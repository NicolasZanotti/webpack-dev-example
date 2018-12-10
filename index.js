const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-koa-middleware')
const webpackHotMiddleware = require('webpack-hot-koa-middleware')

const app = new (require('koa'))()
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
app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }).middleware)

app.listen(3000, () => console.log('App listening on port 3000'))
