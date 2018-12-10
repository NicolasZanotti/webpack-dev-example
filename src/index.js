import hello from './hello'

hello();

// @see https://webpack.js.org/guides/hot-module-replacement/
if (module.hot) {
  module.hot.accept('./hello.js', () => hello())
}
