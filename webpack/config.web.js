const Path = require('path')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const base = require('./config.base.js')
const paths = require('./paths.js')

module.exports = merge(base, {
  target: 'web',
  entry: {
    'shogi': [
      Path.resolve(paths.config, 'polyfills.js'),
      Path.resolve(paths.source, 'index.js')
    ],
    'shogi.min': [
      Path.resolve(paths.config, 'polyfills.js'),
      Path.resolve(paths.source, 'index.js')
    ]
  },
  output: {
    library: 'Shogi'
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  }
})