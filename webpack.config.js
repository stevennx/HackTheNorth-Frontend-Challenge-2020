const webpack = require('webpack')

module.exports = {
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ]
  },
  externals: {
  }
}