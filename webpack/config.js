const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const fs = require('fs');

const root = Path.join(__dirname, '..')
const config = Path.join(root, 'webpack')
const source = Path.join(root, 'src')
const destination = Path.join(root, 'dist');

module.exports = {
  target: 'web',
  mode: 'production',
  stats: 'errors-only',
  entry: {
    'index': [
      Path.resolve(config, 'polyfills.js'),
      Path.resolve(source, 'index.js')
    ],
    'index.min': [
      Path.resolve(config, 'polyfills.js'),
      Path.resolve(source, 'index.js')
    ],
    'test/index': Path.resolve(source, 'test/index.js')
  },
  output: {
    path: destination,
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '~': Path.resolve(source)
    }
  },
  plugins: [
    new CleanWebpackPlugin([destination], { root: root })
  ],
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /.min\.js$/
    })]
  },
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
