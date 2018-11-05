const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths.js')

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  output: {
    path: paths.output,
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '~': Path.resolve(paths.source)
    }
  },
  plugins: [
    new CleanWebpackPlugin([paths.output], { root: paths.root })
  ],
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  }
};
