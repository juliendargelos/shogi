const Path = require('path');
const merge = require('webpack-merge');
const base = require('./config.base.js')
const paths = require('./paths')

module.exports = merge(base, {
  target: 'node',
  entry: {
    'index': [
      Path.resolve(paths.config, 'polyfills.js'),
      Path.resolve(paths.source, 'index.js')
    ],
    'test/index': Path.resolve(paths.source, 'test/index.js')
  },
  output: {
    libraryTarget: 'commonjs'
  },
  optimization: {
    minimize: false
  }
});
